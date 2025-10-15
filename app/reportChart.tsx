import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';
import { getAuth, signOut } from 'firebase/auth';
import { collection, doc, getDocs, getFirestore, limit, query, setDoc, where } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { Image, Modal, RefreshControl, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from '../styles/ReportChart';

const MAP_DELTA = 0.002;

const StylesScreen = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [myReports, setMyReports] = useState<any[]>([]);
  const [fullName, setFullName] = useState<string | null>(null);
  const [reportImage, setReportImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [mapModalVisible, setMapModalVisible] = useState(false);
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [instructionsVisible, setInstructionsVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');


  const auth = getAuth();
  const db = getFirestore();


  const showCustomAlert = (title: string, message: string) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertVisible(true);
  };


  useEffect(() => {
    if (modalVisible) {
      setUserLocation(null);
      setReportImage(null);
      (async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          showCustomAlert('Permission Denied', 'We need location access to create a report.');
          return;
        }
        const loc = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
        });
      })();
    }
  }, [modalVisible]);

  const openMapModal = (report: any) => {
    setSelectedReport(report);
    setMapModalVisible(true);
  };

  const takePhoto = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        showCustomAlert('Camera Permission', 'Camera access is required to take photos of the report.');
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setReportImage(result.assets[0].uri);
        console.log('Photo taken:', result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
      showCustomAlert('Error', 'Could not take photo. Please try again.');
    }
  };

  const fetchUserData = async () => {
    const user = auth.currentUser;
    if (user && user.email) {
      const q = query(
        collection(db, 'Users'),
        where('email', '==', user.email)
      );
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const userData = snapshot.docs[0].data();
        if (userData.firstName && userData.lastName) {
          setFullName(`${userData.firstName} ${userData.lastName}`);
        } else if (userData.fullName) {
          setFullName(userData.fullName);
        } else {
          setFullName('User');
        }
      } else {
        console.log('User document not found in Firestore.');
      }
    }

    if (user && user.email) {
      try {
        const q = query(
          collection(db, 'Reports'),
          where('user', '==', user.email),
          limit(10)
        );

        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMyReports(data);
      } catch (error) {
        console.error('Error fetching reports:', error);
        showCustomAlert('Error', 'Could not load your reports.');
      }
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchUserData();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmit = async () => {
    const user = auth.currentUser;

    if (!title || !description || !userLocation) {
      showCustomAlert('Error', 'Please fill in all fields and ensure location is captured.');
      return;
    }

    if (!reportImage) {
      showCustomAlert('Photo Required', 'Please take a photo of the report before submitting.');
      return;
    }

    setUploading(true);

    try {
      let userId = 'unknown';
      if (user && user.email) {
        const userQuery = query(
          collection(db, 'Users'),
          where('email', '==', user.email)
        );
        const userSnapshot = await getDocs(userQuery);
        if (!userSnapshot.empty) {
          userId = userSnapshot.docs[0].id;
        }
      }

      console.log('Uploading image to Firebase Storage...');
      const storage = getStorage();

      const timestamp = new Date().getTime();
      const random = Math.random().toString(36).substr(2, 5);
      const filename = `reports/${userId}_${timestamp}_${random}.jpg`;
      const imageRef = ref(storage, filename);

      const response = await fetch(reportImage);
      const blob = await response.blob();

      await uploadBytes(imageRef, blob);

      const imageDownloadURL = await getDownloadURL(imageRef);
      console.log('Image uploaded successfully:', imageDownloadURL);

      const snapshot = await getDocs(collection(db, 'Reports'));
      const ids = snapshot.docs
        .map(d => d.id)
        .filter(id => /^rp\d+$/.test(id))
        .map(id => parseInt(id.replace('rp', ''), 10));
      const maxId = ids.length > 0 ? Math.max(...ids) : -1;
      const newId = `rp${String(maxId + 1).padStart(3, '0')}`;

      await setDoc(doc(db, 'Reports', newId), {
        title: title.trim(),
        description: description.trim(),
        location: userLocation,
        date_report: new Date().toISOString(),
        user: user?.email || 'Unknown',
        userId: userId,
        imageUrl: imageDownloadURL,
        status: 'Pending',
        createdAt: new Date().toISOString()
      });

      console.log('Report saved successfully with ID:', newId);

      showCustomAlert('Success', 'Report submitted successfully with photo!');

      setModalVisible(false);
      setTitle('');
      setDescription('');
      setUserLocation(null);
      setReportImage(null);

      fetchUserData();

    } catch (error) {
      console.error('Error submitting report:', error);

      const errorString = String(error);
      let errorMessage = 'Could not submit report. Please try again.';

      if (errorString.includes('storage')) {
        errorMessage = 'Failed to upload image. Check your internet connection.';
      } else if (errorString.includes('firestore')) {
        errorMessage = 'Failed to save report data. Please try again.';
      } else if (errorString.includes('network')) {
        errorMessage = 'Network error. Check your internet connection.';
      }

      showCustomAlert('Error', errorMessage);

    } finally {
      setUploading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Reviewed': return '#4ECAC9';
      case 'Rejected': return '#FF6B6B';
      case 'Resolved': return '#4CAF50';
      default: return '#FFA726';
    }
  };

  const getStatusMessage = (status: string) => {
    switch (status) {
      case 'Reviewed': return 'Your report has been reviewed by our team';
      case 'Rejected': return 'Report was rejected. Please contact support for details';
      case 'Resolved': return 'Great news! This issue has been resolved';
      default: return 'Your report is being reviewed by our team';
    }
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    return `${diffDays}d`;
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace('/login');
    } catch (error) {
      console.error('Error signing out:', error);
      showCustomAlert('Error', 'Could not sign out. Please try again.');
    }
  };

  const confirmLogout = () => {
    showCustomAlert('Sign Out', 'Are you sure you want to sign out?');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>Hello,</Text>
            <Text style={styles.userName}>{fullName ?? 'User'}</Text>
          </View>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollFeed} 
        contentContainerStyle={styles.feedContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#00D9D9']}
            tintColor="#00D9D9"
          />
        }
      >
        {myReports.length === 0 ? (
          <View style={styles.noReportsContainer}>
            <Text style={styles.noReportsText}>No reports yet. Make your first report!</Text>
            
            {/* Instructions Toggle Button */}
            <TouchableOpacity 
              style={styles.instructionsToggleButton}
              onPress={() => setInstructionsVisible(true)}
            >
              <Text style={styles.instructionsToggleText}>📋 How to Submit a Report</Text>
            </TouchableOpacity>
          </View>
        ) : (
          myReports.map((report) => (
            <View key={report.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.userInfo}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                      {fullName?.charAt(0) || 'U'}
                    </Text>
                  </View>
                  <View style={styles.userDetails}>
                    <Text style={styles.cardUserName}>{fullName}</Text>
                    <Text style={styles.cardTime}>{getTimeAgo(report.date_report)}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.cardContent}>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(report.status) }]}>
                  <Text style={styles.statusText}>
                    {report.status || 'Pending Review'}
                  </Text>
                </View>
                <Text style={styles.feedTitle}>{report.title}</Text>
                <Text style={styles.feedDescription}>{report.description}</Text>
              </View>

              {report.imageUrl && (
                <TouchableOpacity
                  style={styles.mapContainer}
                  onPress={() => openMapModal(report)}
                >
                  <Image
                    source={{ uri: report.imageUrl }}
                    style={styles.feedMap}
                    resizeMode="cover"
                  />
                  <View style={styles.mapOverlay}>
                    <Text style={styles.mapOverlayText}>Tap to see Details</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          ))
        )}
      </ScrollView>

      {/* Instructions Button - Always visible on left side */}
      <TouchableOpacity 
        style={styles.instructionsToggleButton}
        onPress={() => setInstructionsVisible(true)}
      >
        <Image source={require('../assets/images/instructions.png')} style={styles.navbuttonInstruction} />
      </TouchableOpacity>

      {/* FLOATING ACTION BUTTON - Make a report */}
      <TouchableOpacity 
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.floatingButtonText}>Make a report +</Text>
      </TouchableOpacity>

      {/* New Report Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <View style={styles.modalHeaderContent}>
                <View style={styles.modalHeaderSpacer} />
                <Text style={styles.modalTitle}>New Report</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (!uploading) {
                      setModalVisible(false);
                      setReportImage(null);
                    }
                  }}
                  disabled={uploading}
                  style={styles.modalCloseButton}
                >
                  <Text style={styles.modalClose}>✕</Text>
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView style={styles.modalScroll}>
              <TextInput
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
                style={styles.input}
                placeholderTextColor="#999"
              />
              <TextInput
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                style={[styles.input, styles.textArea]}
                multiline
                numberOfLines={4}
                placeholderTextColor="#999"
              />

              {userLocation ? (
                <MapView
                  style={styles.mapPreview}
                  region={{
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude,
                    latitudeDelta: MAP_DELTA,
                    longitudeDelta: MAP_DELTA,
                  }}
                  scrollEnabled={false}
                  zoomEnabled={false}
                  rotateEnabled={false}
                  pitchEnabled={false}
                >
                  <Marker coordinate={userLocation} title="Your Location" />
                </MapView>
              ) : (
                <View style={styles.loadingMap}>
                  <Text>Loading map...</Text>
                </View>
              )}

              <View style={styles.cameraSection}>
                <Text style={styles.cameraLabel}>Photo Required</Text>

                {reportImage ? (
                  <View style={styles.imagePreview}>
                    <Image
                      source={{ uri: reportImage }}
                      style={styles.previewImage}
                      resizeMode="cover"
                    />
                    <TouchableOpacity
                      style={styles.retakeButton}
                      onPress={takePhoto}
                      disabled={uploading}
                    >
                      <Text style={styles.retakeButtonText}>Retake Photo</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={styles.cameraButton}
                    onPress={takePhoto}
                    disabled={uploading}
                  >
                    <Text style={styles.cameraButtonText}>Take Photo</Text>
                  </TouchableOpacity>
                )}
              </View>

              <TouchableOpacity
                style={[styles.submitButton, uploading && styles.submitButtonDisabled]}
                onPress={handleSubmit}
                disabled={uploading}
              >
                <Text style={styles.submitButtonText}>
                  {uploading ? 'Uploading...' : 'Submit Report'}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Report Details Modal */}
      <Modal visible={mapModalVisible} animationType="slide" transparent={false}>
        <View style={styles.mapModalContainer}>
          <View style={styles.mapModalHeader}>
            <View style={styles.mapModalHeaderContent}>
              <TouchableOpacity
                style={styles.mapModalBackButton}
                onPress={() => setMapModalVisible(false)}
              >
                <Text style={styles.mapModalBackIcon}>✕</Text>
              </TouchableOpacity>
              <View style={styles.mapModalTitleContainer}>
                <Text style={styles.mapModalTitle} numberOfLines={1}>
                  {selectedReport?.title}
                </Text>
                <Text style={styles.mapModalSubtitle}>
                  Report Details & Location
                </Text>
              </View>
              <View style={styles.mapModalHeaderSpacer} />
            </View>
          </View>

          <ScrollView 
            style={styles.mapModalScrollView}
            showsVerticalScrollIndicator={false}
            bounces={true}
          >
            <View style={styles.mapModalStatusCard}>
              <View style={styles.mapModalStatusHeader}>
                <View style={[styles.mapModalStatusIndicator, { backgroundColor: getStatusColor(selectedReport?.status) }]} />
                <View style={styles.mapModalStatusInfo}>
                  <Text style={styles.mapModalStatusLabel}>Current Status</Text>
                  <Text style={[styles.mapModalStatusValue, { color: getStatusColor(selectedReport?.status) }]}>
                    {selectedReport?.status || 'Pending Review'}
                  </Text>
                </View>
              </View>
              <Text style={styles.mapModalStatusMessage}>
                {getStatusMessage(selectedReport?.status)}
              </Text>
            </View>

            {selectedReport?.imageUrl && (
              <View style={styles.mapModalImageSection}>
                <Image
                  source={{ uri: selectedReport.imageUrl }}
                  style={styles.mapModalImage}
                  resizeMode="cover"
                />
                <View style={styles.mapModalImageOverlay}>
                  <View style={styles.mapModalImageBadge}>
                    <Text style={styles.mapModalImageBadgeText}>📷 Evidence Photo</Text>
                  </View>
                </View>
              </View>
            )}

            {selectedReport?.status === 'Resolved' && selectedReport?.resolvedProofImageUrl && (
              <View style={styles.mapModalImageSection}>
                <Image
                  source={{ uri: selectedReport.resolvedProofImageUrl }}
                  style={styles.mapModalImage}
                  resizeMode="cover"
                />
                <View style={styles.mapModalImageOverlay}>
                  <View style={[styles.mapModalImageBadge, { backgroundColor: 'rgba(76, 175, 80, 0.9)' }]}>
                    <Text style={styles.mapModalImageBadgeText}>✓ Proof of Resolution</Text>
                  </View>
                </View>
              </View>
            )}

            {selectedReport?.adminComment && (
              <View style={styles.mapModalDetailsCard}>
                <View style={styles.mapModalDetailSection}>
                  <Text style={styles.mapModalDetailIcon}>💬</Text>
                  <View style={styles.mapModalDetailContent}>
                    <Text style={styles.mapModalDetailLabel}>Admin Comment</Text>
                    <Text style={styles.mapModalDetailDescription}>
                      {selectedReport.adminComment}
                    </Text>
                  </View>
                </View>
              </View>
            )}

            <View style={styles.mapModalDetailsCard}>
              <View style={styles.mapModalDetailSection}>
                <Text style={styles.mapModalDetailIcon}>📋</Text>
                <View style={styles.mapModalDetailContent}>
                  <Text style={styles.mapModalDetailLabel}>Report Title</Text>
                  <Text style={styles.mapModalDetailValue}>{selectedReport?.title}</Text>
                </View>
              </View>

              <View style={styles.mapModalDetailDivider} />

              <View style={styles.mapModalDetailSection}>
                <Text style={styles.mapModalDetailIcon}>📄</Text>
                <View style={styles.mapModalDetailContent}>
                  <Text style={styles.mapModalDetailLabel}>Description</Text>
                  <Text style={styles.mapModalDetailDescription}>
                    {selectedReport?.description}
                  </Text>
                </View>
              </View>

              <View style={styles.mapModalDetailDivider} />

              <View style={styles.mapModalDetailSection}>
                <Text style={styles.mapModalDetailIcon}>📅</Text>
                <View style={styles.mapModalDetailContent}>
                  <Text style={styles.mapModalDetailLabel}>Reported On</Text>
                  <Text style={styles.mapModalDetailValue}>
                    {selectedReport ? new Date(selectedReport.date_report).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : ''}
                  </Text>
                  <Text style={styles.mapModalDetailTime}>
                    {selectedReport ? new Date(selectedReport.date_report).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit'
                    }) : ''}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.mapModalMapSection}>
              <View style={styles.mapModalMapHeader}>
                <Text style={styles.mapModalMapTitle}>📍 Location</Text>
              </View>
              
              {selectedReport?.location && (
                <View style={styles.mapModalMapContainer}>
                  <MapView 
                    style={styles.mapModalMap}
                    region={{
                      latitude: selectedReport.location.latitude,
                      longitude: selectedReport.location.longitude,
                      latitudeDelta: 0.004,
                      longitudeDelta: 0.004,
                    }}
                    provider="google"
                  >
                    <Marker
                      coordinate={selectedReport.location}
                      title={selectedReport.title}
                    >
                      <View style={styles.mapModalCustomMarker}>
                        <View>
                          <Text style={styles.mapModalMarkerEmoji}>📍</Text>
                        </View>
                        <View style={styles.mapModalMarkerTail} />
                      </View>
                    </Marker>
                  </MapView>
                </View>
              )}
            </View>

            <View style={styles.mapModalBottomSpace} />
          </ScrollView>
        </View>
      </Modal>

      {/* Instructions Modal */}
      <Modal visible={instructionsVisible} animationType="slide" transparent={true}>
        <View style={styles.instructionsModalOverlay}>
          <View style={styles.instructionsModalContainer}>
            <View style={styles.instructionsModalHeader}>
              <View style={styles.modalHeaderContent}>
                <View style={styles.modalHeaderSpacer} />
                <Text style={styles.instructionsModalTitle}>How to Submit a Report</Text>
                <TouchableOpacity
                  onPress={() => setInstructionsVisible(false)}
                  style={styles.modalCloseButton}
                >
                  <Text style={styles.modalClose}>✕</Text>
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView style={styles.instructionsModalScroll}contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={true}>
              <Text style={styles.instructionsSubtitle}>
                Fill in the boxes that are labelled Title and Description.
              </Text>

              <View style={styles.instructionsDivider} />

              <Text style={styles.instructionsSectionTitle}>Title</Text>
              <Text style={styles.instructionsBulletPoint}>
                Write the main issue you are reporting.
              </Text>
              <Text style={styles.instructionsExample}>Examples:</Text>
              <Text style={styles.instructionsExample}>• "Clogged Toilet"</Text>
              <Text style={styles.instructionsExample}>• "No Water Supply"</Text>
              <Text style={styles.instructionsExample}>• "Broken Door Lock"</Text>
              <Text style={styles.instructionsExample}>• "Flooded Floor"</Text>
              <Text style={styles.instructionsExample}>• "No Tissue Paper"</Text>
              <Text style={styles.instructionsExample}>• "Foul Odor"</Text>
              <Text style={styles.instructionsExample}>• "Leaking Faucet"</Text>
              <Text style={styles.instructionsExample}>• "Broken Flush Handle"</Text>

              <View style={styles.instructionsDivider} />

              <Text style={styles.instructionsSectionTitle}>Description</Text>
              <Text style={styles.instructionsBulletPoint}>
                • Include the exact floor, stall, or area where the issue is found.
              </Text>
              <Text style={styles.instructionsBulletPoint}>
                • Provide clear details about the problem and what needs fixing.
              </Text>
              <Text style={styles.instructionsExample}>
                Example: "2nd floor, stall 3 – toilet is clogged and overflowing"
              </Text>
              <Text style={styles.instructionsExample}>
                Example: "Ground floor, near main entrance – faucet is leaking continuously"
              </Text>
              <Text style={styles.instructionsBulletPoint}>
                • Don't forget to add whether it's from the Men's, Women's, or PWD Restroom.
              </Text>

              <View style={styles.instructionsDivider} />

              <Text style={styles.instructionsSectionTitle}>Photo Requirement</Text>
              <Text style={styles.instructionsHighlight}>
                📸 Please take a clear, real-time picture of the issue to validate your report.
              </Text>
              <Text style={styles.instructionsBulletPoint}>
                • Ensure the photo is recent (taken at the time of reporting).
              </Text>
              <Text style={styles.instructionsBulletPoint}>
                • Avoid using old or unrelated photos, as these will not be accepted.
              </Text>

              <View style={styles.instructionsDivider} />

              <Text style={styles.instructionsSectionTitle}>Reminder</Text>
              <View style={styles.instructionsWarning}>
                <Text style={styles.instructionsWarningText}>
                  🚫 Prank or false reports are highly discouraged and will not be tolerated.
                </Text>
              </View>
              <View style={styles.instructionsSuccess}>
                <Text style={styles.instructionsSuccessText}>
                  ✅ Let us do our best in creating a safe and clean environment for our community.
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/profile')}>
          <Image source={require('../assets/images/user.png')} style={styles.navIconImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/reportChart')} disabled={true}>
          <Image source={require('../assets/images/document.png')} style={styles.navIconImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/mapPage')}>
          <Image source={require('../assets/images/map.png')} style={styles.navIconImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={confirmLogout}>
          <Image source={require('../assets/images/logout.png')} style={styles.navIconImg} />
        </TouchableOpacity>
      </View>

      <Modal visible={alertVisible} transparent={true} animationType="fade" onRequestClose={() => setAlertVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.alertContainer}>
            <Text style={styles.title}>{alertTitle}</Text>
            <Text style={styles.message}>{alertMessage}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                if (alertTitle === 'Sign Out') {
                  setAlertVisible(false);
                  handleLogout();
                } else {
                  setAlertVisible(false);
                }
              }}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


    </View>
  );
};

export default StylesScreen;