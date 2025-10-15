import { useFocusEffect } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { getAuth, signOut } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { styles } from '../styles/mapPage';

const MAP_DELTA = 0.002;

interface ReportLocation {
  latitude: number;
  longitude: number;
}

interface Report {
  id: string;
  title: string;
  description: string;
  location?: ReportLocation;
  status?: string;
  user: string;
  date_report: string;
  imageUrl?: string;
}

const MapPageAdmin = () => {
  const router = useRouter();
  const [userReports, setUserReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [mapModalVisible, setMapModalVisible] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 9.311792720709333,
    longitude: 123.30726076131907,
    latitudeDelta: MAP_DELTA,
    longitudeDelta: MAP_DELTA,
  });

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

  // ✅ Fetch ALL reports (admin view)
  const fetchAllReports = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'Reports'));
      const reports = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Report[];

      setUserReports(reports);

      if (reports.length > 0 && reports[0].location) {
        setMapRegion({
          latitude: reports[0].location.latitude,
          longitude: reports[0].location.longitude,
          latitudeDelta: MAP_DELTA,
          longitudeDelta: MAP_DELTA,
        });
      }
    } catch (error) {
      console.error('Error fetching reports:', error);
      showCustomAlert('Error', 'Could not load reports.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllReports();
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log('Admin map focused - refreshing data...');
      fetchAllReports();
    }, [])
  );

  const getMarkerColor = (status: string) => {
    switch (status) {
      case 'Reviewed':
        return '#4ECAC9';
      case 'Rejected':
        return '#FF6B6B';
      case 'Resolved':
        return '#4CAF50';
      default:
        return '#FFA726';
    }
  };

  const getStatusMessage = (status: string) => {
    switch (status) {
      case 'Reviewed':
        return 'This report has been reviewed by the admin team.';
      case 'Rejected':
        return 'This report was rejected. Contact support for more details.';
      case 'Resolved':
        return 'This issue has been marked as resolved.';
      default:
        return 'This report is still pending review.';
    }
  };

  const openReportModal = (report: Report) => {
    setSelectedReport(report);
    setMapModalVisible(true);
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

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading map...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>All User Reports</Text>
        </View>
      </View>

      <View style={styles.statsBar}>
        <Text style={styles.statsText}>Total Reports: {userReports.length}</Text>
      </View>

      {/* Map View */}
      <MapView
        style={styles.map}
        region={mapRegion}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {userReports.map((report) => {
          if (!report.location) return null;

          return (
            <Marker
              key={report.id}
              coordinate={{
                latitude: report.location.latitude,
                longitude: report.location.longitude,
              }}
              title={report.title}
              description={`By: ${report.user}\nStatus: ${report.status || 'Pending'}`}
              onPress={() => openReportModal(report)}
            >
              <View style={styles.customMarker}>
                <View
                  style={[
                    styles.markerDot,
                    { backgroundColor: getMarkerColor(report.status || '') },
                  ]}
                />
                <View
                  style={[
                    styles.markerTail,
                    { borderTopColor: getMarkerColor(report.status || '') },
                  ]}
                />
              </View>
            </Marker>
          );
        })}
      </MapView>

      {/* Status Legend */}
      <View style={styles.legend}>
        <Text style={styles.legendTitle}>Status Legend:</Text>
        <View style={styles.legendRow}>
          <View style={[styles.legendDot, { backgroundColor: '#FFA726' }]} />
          <Text style={styles.legendText}>Pending</Text>
        </View>
        <View style={styles.legendRow}>
          <View style={[styles.legendDot, { backgroundColor: '#4ECAC9' }]} />
          <Text style={styles.legendText}>Reviewed</Text>
        </View>
        <View style={styles.legendRow}>
          <View style={[styles.legendDot, { backgroundColor: '#FF6B6B' }]} />
          <Text style={styles.legendText}>Rejected</Text>
        </View>
        <View style={styles.legendRow}>
          <View style={[styles.legendDot, { backgroundColor: '#4CAF50' }]} />
          <Text style={styles.legendText}>Resolved</Text>
        </View>
      </View>

      {userReports.length === 0 && (
        <View style={styles.noReportsOverlay}>
          <Text style={styles.noReportsText}>No reports found.</Text>
        </View>
      )}

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
                <Text style={styles.mapModalSubtitle}>Report Details</Text>
              </View>
              <View style={styles.mapModalHeaderSpacer} />
            </View>
          </View>

          <ScrollView
            style={styles.mapModalScrollView}
            showsVerticalScrollIndicator={false}
          >
            {/* Status Card */}
            <View style={styles.mapModalStatusCard}>
              <View style={styles.mapModalStatusHeader}>
                <View
                  style={[
                    styles.mapModalStatusIndicator,
                    { backgroundColor: getMarkerColor(selectedReport?.status || '') },
                  ]}
                />
                <View style={styles.mapModalStatusInfo}>
                  <Text style={styles.mapModalStatusLabel}>Current Status</Text>
                  <Text
                    style={[
                      styles.mapModalStatusValue,
                      { color: getMarkerColor(selectedReport?.status || '') },
                    ]}
                  >
                    {selectedReport?.status || 'Pending'}
                  </Text>
                </View>
              </View>
              <Text style={styles.mapModalStatusMessage}>
                {getStatusMessage(selectedReport?.status || '')}
              </Text>
            </View>

            {/* Image Section */}
            {selectedReport?.imageUrl && (
              <View style={styles.mapModalImageSection}>
                <Image
                  source={{ uri: selectedReport.imageUrl }}
                  style={styles.mapModalImage}
                  resizeMode="cover"
                />
                <View style={styles.mapModalImageOverlay}>
                  <View style={styles.mapModalImageBadge}>
                    <Text style={styles.mapModalImageBadgeText}>
                      📷 Evidence Photo
                    </Text>
                  </View>
                </View>
              </View>
            )}

            {/* Report Details */}
            <View style={styles.mapModalDetailsCard}>
              <View style={styles.mapModalDetailSection}>
                <Text style={styles.mapModalDetailIcon}>📋</Text>
                <View style={styles.mapModalDetailContent}>
                  <Text style={styles.mapModalDetailLabel}>Report Title</Text>
                  <Text style={styles.mapModalDetailValue}>
                    {selectedReport?.title}
                  </Text>
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
                <Text style={styles.mapModalDetailIcon}>👤</Text>
                <View style={styles.mapModalDetailContent}>
                  <Text style={styles.mapModalDetailLabel}>Reported By</Text>
                  <Text style={styles.mapModalDetailValue}>
                    {selectedReport?.user || 'Unknown'}
                  </Text>
                </View>
              </View>

              <View style={styles.mapModalDetailDivider} />

              <View style={styles.mapModalDetailSection}>
                <Text style={styles.mapModalDetailIcon}>📅</Text>
                <View style={styles.mapModalDetailContent}>
                  <Text style={styles.mapModalDetailLabel}>Reported On</Text>
                  <Text style={styles.mapModalDetailValue}>
                    {selectedReport
                      ? new Date(selectedReport.date_report).toLocaleDateString(
                          'en-US',
                          {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )
                      : ''}
                  </Text>
                </View>
              </View>
            </View>

            {/* Map Preview */}
            {selectedReport?.location && (
              <View style={styles.mapModalMapSection}>
                <Text style={styles.mapModalMapTitle}>📍 Location</Text>
                <View style={styles.mapModalMapContainer}>
                  <MapView
                    style={styles.mapModalMap}
                    region={{
                      latitude: selectedReport.location.latitude,
                      longitude: selectedReport.location.longitude,
                      latitudeDelta: 0.004,
                      longitudeDelta: 0.004,
                    }}
                    provider={PROVIDER_GOOGLE}
                  >
                    <Marker coordinate={selectedReport.location}>
                      <View style={styles.mapModalCustomMarker}>
                        <View
                          style={[
                            styles.markerDot,
                            {
                              backgroundColor: getMarkerColor(
                                selectedReport.status || ''
                              ),
                            },
                          ]}
                        />
                        <View
                          style={[
                            styles.markerTail,
                            {
                              borderTopColor: getMarkerColor(
                                selectedReport.status || ''
                              ),
                            },
                          ]}
                        />
                      </View>
                    </Marker>
                  </MapView>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </Modal>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/mapPageAdmin')}
        >
          <Image
            source={require('../assets/images/map.png')}
            style={styles.navIconImg}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={confirmLogout}>
          <Image
            source={require('../assets/images/logout.png')}
            style={styles.navIconImg}
          />
        </TouchableOpacity>
      </View>

      {/* Custom Alert Modal */}
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

export default MapPageAdmin;
