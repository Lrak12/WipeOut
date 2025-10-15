import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { getAuth, signOut } from 'firebase/auth';
import { collection, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Keyboard, KeyboardAvoidingView, Modal, Platform, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from '../styles/Admin';


const AdminPage = () => {
  const router = useRouter();
  const [allReports, setAllReports] = useState<any[]>([]);
  const [users, setUsers] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);
  const [mapModalVisible, setMapModalVisible] = useState(false);
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [adminComment, setAdminComment] = useState('');
  const [resolvedProofImage, setResolvedProofImage] = useState<string | null>(null);
  const [pendingStatusUpdate, setPendingStatusUpdate] = useState<{reportId: string, status: string, title: string} | null>(null);
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
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const reportsSnapshot = await getDocs(collection(db, 'Reports'));
      const reports = reportsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      const usersSnapshot = await getDocs(collection(db, 'Users'));
      const usersData: { [key: string]: string } = {};
      usersSnapshot.docs.forEach(doc => {
        const userData = doc.data();
        if (userData.email && userData.fullName) {
          usersData[userData.email] = userData.fullName;
        }
      });

      setAllReports(reports);
      setUsers(usersData);
      console.log('Fetched', reports.length, 'reports and', Object.keys(usersData).length, 'users');
    } catch (error) {
      console.error('Error fetching data:', error);
      showCustomAlert('Error', 'Could not load admin data');
    } finally {
      setLoading(false);
    }
  };

  const takeProofPhoto = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        showCustomAlert('Camera Permission', 'Camera access is required to take proof photos.');
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setResolvedProofImage(result.assets[0].uri);
        console.log('Proof photo taken:', result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
      showCustomAlert('Error', 'Could not take photo. Please try again.');
    }
  };

  const updateReportStatus = async (reportId: string, newStatus: string, reportTitle: string, comment?: string, proofImageUri?: string) => {
    try {
      const reportRef = doc(db, 'Reports', reportId);
      const updateData: any = {
        status: newStatus,
        statusUpdatedAt: new Date().toISOString()
      };
      
      if (comment && comment.trim()) {
        updateData.adminComment = comment.trim();
      }

      if (proofImageUri && newStatus === 'Resolved') {
        console.log('Uploading proof image to Firebase Storage...');
        const storage = getStorage();
        const timestamp = new Date().getTime();
        const filename = `resolved_proofs/${reportId}_${timestamp}.jpg`;
        const imageRef = ref(storage, filename);

        const response = await fetch(proofImageUri);
        const blob = await response.blob();
        await uploadBytes(imageRef, blob);

        const proofImageUrl = await getDownloadURL(imageRef);
        updateData.resolvedProofImageUrl = proofImageUrl;
        updateData.resolvedAt = new Date().toISOString();
        console.log('Proof image uploaded successfully:', proofImageUrl);
      }
      
      await updateDoc(reportRef, updateData);
      
      showCustomAlert(
        'Status Updated', 
        `Report "${reportTitle}" has been marked as ${newStatus}${proofImageUri ? ' with proof photo' : ''}${comment ? ' and comment' : ''}`
      );
      
      fetchAllData();
      console.log('Updated report', reportId, 'to status:', newStatus);
    } catch (error) {
      console.error('Error updating status:', error);
      showCustomAlert('Error', 'Could not update report status');
    }
  };

  const handleStatusButtonPress = (reportId: string, newStatus: string, reportTitle: string) => {
    if (newStatus === 'Resolved' || newStatus === 'Rejected') {
      setPendingStatusUpdate({reportId, status: newStatus, title: reportTitle});
      setAdminComment('');
      setResolvedProofImage(null);
      setCommentModalVisible(true);
    } else {
      confirmStatusChange(reportId, newStatus, reportTitle);
    }
  };

  const confirmStatusChange = (reportId: string, newStatus: string, reportTitle: string) => {
    Alert.alert(
      'Update Status',
      `Mark "${reportTitle}" as ${newStatus}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Confirm', 
          onPress: () => updateReportStatus(reportId, newStatus, reportTitle)
        },
      ]
    );
  };

  const submitStatusWithComment = () => {
    if (!pendingStatusUpdate) return;
    
    const {reportId, status, title} = pendingStatusUpdate;

    if (status === 'Resolved' && !resolvedProofImage) {
      showCustomAlert('Proof Photo Required', 'Please take a photo as proof that the issue has been resolved.');
      return;
    }
    
    updateReportStatus(reportId, status, title, adminComment, resolvedProofImage || undefined);
    
    setCommentModalVisible(false);
    setPendingStatusUpdate(null);
    setAdminComment('');
    setResolvedProofImage(null);
  };

  const openMapModal = (report: any) => {
    setSelectedReport(report);
    setMapModalVisible(true);
  };

  const getReporterName = (email: any) => {
    return users[email] || 'Unknown User';
  };

  const formatDate = (dateString: any) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Reviewed': return '#4ECAC9';
      case 'Rejected': return '#FF6B6B';  
      case 'Resolved': return '#4CAF50';
      default: return '#FFA726';
    }
  };

  const getStatusMessage = (status: string | undefined) => {
    switch(status) {
      case 'Reviewed': return 'This report has been reviewed by an administrator.';
      case 'Rejected': return 'This report has been rejected with a comment.';
      case 'Resolved': return 'This report has been resolved successfully.';
      default: return 'This report is pending review by an administrator.';
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading admin data...</Text>
      </View>
    );
  }

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
            <Text style={styles.userName}>Admin Dashboard</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Total Reports: {allReports.length}</Text>
        <Text style={styles.statsText}>Total Users: {Object.keys(users).length}</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>All User Reports</Text>
        
        {allReports.length === 0 ? (
          <Text style={styles.noDataText}>No reports found</Text>
        ) : (
          allReports.map((report) => (
            <View key={report.id} style={styles.reportCard}>
              <View style={styles.reportHeader}>
                <Text style={styles.reportTitle}>{report.title}</Text>
                <Text style={styles.reportId}>ID: {report.id}</Text>
              </View>

              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(report.status) }]}>
                <Text style={styles.statusText}>
                  {report.status || 'Pending'}
                </Text>
              </View>
              
              {report.adminComment && (
                <View style={styles.adminCommentContainer}>
                  <Text style={styles.adminCommentLabel}>Admin Comment:</Text>
                  <Text style={styles.adminCommentText}>{report.adminComment}</Text>
                </View>
              )}
              
              <View style={styles.reporterInfo}>
                <Text style={styles.reporterLabel}>Reporter:</Text>
                <Text style={styles.reporterName}>{getReporterName(report.user)}</Text>
                <Text style={styles.reporterEmail}>({report.user})</Text>
              </View>
              
              <Text style={styles.reportDate}>
                Date: {formatDate(report.date_report)}
              </Text>

              <View style={styles.statusButtonContainer}>
                <TouchableOpacity 
                  style={[styles.statusButton, styles.reviewedButton]}
                  onPress={() => handleStatusButtonPress(report.id, 'Reviewed', report.title)}
                >
                  <Text style={styles.statusButtonText}>✓ Reviewed</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={[styles.statusButton, styles.rejectedButton]}
                  onPress={() => handleStatusButtonPress(report.id, 'Rejected', report.title)}
                >
                  <Text style={styles.statusButtonText}>✗ Rejected</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={[styles.statusButton, styles.resolvedButton]}
                  onPress={() => handleStatusButtonPress(report.id, 'Resolved', report.title)}
                >
                  <Text style={styles.statusButtonText}>✓ Resolved</Text>
                </TouchableOpacity>
              </View>

              {report.imageUrl && (
                <TouchableOpacity 
                  style={styles.mapContainer}
                  onPress={() => openMapModal(report)}
                >
                  <Image
                    source={{ uri: report.imageUrl }}
                    style={styles.smallMap}
                    resizeMode="cover"
                  />
                  <View style={styles.mapOverlay}>
                    <Text style={styles.mapOverlayText}>View Report Details</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          ))
        )}
      </ScrollView>

      {/* Comment & Proof Photo Modal */}
      <Modal visible={commentModalVisible} animationType="slide" transparent={true}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}style={styles.commentModalOverlay}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.commentModalOverlay}>
              <View style={styles.commentModalContainer}>

                <ScrollView contentContainerStyle={styles.commentModalScrollContent} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} bounces={false}>
                  <Text style={styles.commentModalTitle}>
                    {pendingStatusUpdate?.status === 'Resolved' ? 'Add comment for Resolved' : `Add Comment for ${pendingStatusUpdate?.status}`}
                  </Text>
                  <Text style={styles.commentModalSubtitle}>
                    "{pendingStatusUpdate?.title}"
                  </Text>

                  {pendingStatusUpdate?.status === 'Resolved' && (
                    <View style={styles.proofPhotoSection}>
                      <Text style={styles.proofPhotoLabel}>Proof Photo (Required)</Text>
                      {resolvedProofImage ? (
                        <View style={styles.proofImagePreview}>
                          <Image
                            source={{ uri: resolvedProofImage }}
                            style={styles.proofPreviewImage}
                            resizeMode="cover"
                          />
                          <TouchableOpacity style={styles.retakeProofButton} onPress={takeProofPhoto}>
                            <Text style={styles.retakeProofButtonText}>Retake Photo</Text>
                          </TouchableOpacity>
                        </View>
                      ) : (
                        <TouchableOpacity style={styles.takeProofPhotoButton} onPress={takeProofPhoto}>
                          <Text style={styles.takeProofPhotoButtonText}>Take Proof Photo</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  )}
                  
                  <TextInput style={styles.commentInput} placeholder={pendingStatusUpdate?.status === 'Resolved' ? 'Add optional comment' : 'Enter a Comment'} value={adminComment} onChangeText={setAdminComment} multiline maxLength={500}/>
                  
                  <Text style={styles.characterCount}>
                    {adminComment.length}/500 characters
                  </Text>
                </ScrollView>

                <View style={styles.commentModalButtons}>
                  <TouchableOpacity 
                    style={styles.commentCancelButton}
                    onPress={() => {
                      setCommentModalVisible(false);
                      setPendingStatusUpdate(null);
                      setAdminComment('');
                      setResolvedProofImage(null);
                    }}
                  >
                    <Text style={styles.commentCancelText}>Cancel</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={styles.commentSubmitButton}
                    onPress={submitStatusWithComment}
                  >
                    <Text style={styles.commentSubmitText}>
                      {pendingStatusUpdate?.status === 'Resolved' ? 'Mark as Resolved' : 'Mark as Rejected'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Modal>

      {/* Map Modal - keeping existing code */}
      <Modal visible={mapModalVisible} animationType="slide" transparent={false}>
        <View style={styles.mapModalContainer}>
          {/* Redesigned Header with Gradient Effect */}
          <View style={styles.mapModalHeader}>
            <View style={styles.mapModalHeaderContent}>
              <TouchableOpacity
                style={styles.mapModalBackButton}
                onPress={() => setMapModalVisible(false)}
              >
                <Text style={styles.mapModalBackIcon}>←</Text>
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

          <ScrollView style={styles.mapModalScrollView} showsVerticalScrollIndicator={false} bounces={true}>
            {/* Status Card */}
            <View style={styles.mapModalStatusCard}>
              <View style={styles.mapModalStatusHeader}>
                <View style={[styles.mapModalStatusIndicator, { backgroundColor: getStatusColor(selectedReport?.status || '') }]} />
                <View style={styles.mapModalStatusInfo}>
                  <Text style={styles.mapModalStatusLabel}>Current Status</Text>
                  <Text style={[styles.mapModalStatusValue, { color: getStatusColor(selectedReport?.status || '') }]}>
                    {selectedReport?.status || 'Pending Review'}
                  </Text>
                </View>
              </View>
              <Text style={styles.mapModalStatusMessage}>
                {getStatusMessage(selectedReport?.status)}
              </Text>
            </View>

            {/* Image Section with Overlay */}
            {selectedReport?.imageUrl && (
              <View style={styles.mapModalImageSection}>
                <Image source={{ uri: selectedReport.imageUrl }} style={{ width: '100%', height: 200, borderRadius: 20 }} resizeMode="cover"/>
                <View style={styles.mapModalImageOverlay}>
                  <View style={styles.mapModalImageBadge}>
                    <Text style={styles.mapModalImageBadgeText}>📷 Evidence Photo</Text>
                  </View>
                </View>
              </View>
            )}

            {/* Report Details Card */}
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

            {/* Map Section with Enhanced Controls */}
            <View style={styles.mapModalMapSection}>
              <View style={styles.mapModalMapHeader}>
                <Text style={styles.mapModalMapTitle}>📍 Location</Text>
              </View>
              
              {selectedReport?.location && (
                <View style={styles.mapModalMapContainer}>
                 <MapView style={styles.mapModalMap} region={{
                      latitude: selectedReport.location.latitude,
                      longitude: selectedReport.location.longitude,
                      latitudeDelta: 0.004,
                      longitudeDelta: 0.004,
                    }}
                    provider="google">
                    <Marker coordinate={selectedReport.location} title={selectedReport.title}>
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
         
            {/* Bottom Spacing */}
            <View style={styles.mapModalBottomSpace} />
          </ScrollView>
        </View>
      </Modal>

      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/mapPageAdmin')}>
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

export default AdminPage; 