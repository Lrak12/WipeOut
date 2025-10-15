import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { getAuth, signOut } from 'firebase/auth';
import { collection, doc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { Image, Modal, RefreshControl, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/Profile';

const ProfileScreen = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [userReports, setUserReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [updatingProfile, setUpdatingProfile] = useState(false);
  const [tempProfileImage, setTempProfileImage] = useState<string | null>(null);
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
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchUserData();
        fetchUserReports();
      } else {
        setLoading(false);
        router.replace('/login');
      }
    });
    return () => unsubscribe(); 
  }, []);

  const fetchUserData = async () => {
    const user = auth.currentUser;
    if (user && user.email) {
      try{
        const adminQuery = query(collection(db, 'Admin'), where('email', '==', user.email));
        const adminSnapshot = await getDocs(adminQuery);
        
        if (!adminSnapshot.empty) {
          router.replace('/admin');
          return;
        }

        const q = query(collection(db, 'Users'), where('email', '==', user.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setUserData({ id: querySnapshot.docs[0].id, ...userData });
          if (userData.profileImageUrl) setProfileImage(userData.profileImageUrl);
        } else {
          showCustomAlert('Error', 'No user profile found. Please try registering again.');
        }
      } catch (error){
        console.error('Error fetching user data:', error);
        showCustomAlert('Error', 'Could not load user data.');
      }
    }
    setLoading(false);
  };

  const fetchUserReports = async () => {
    const user = auth.currentUser;
    if (user && user.email) {
      try {
        const q = query(collection(db, 'Reports'), where('user', '==', user.email));
        const querySnapshot = await getDocs(q);
        const reports = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserReports(reports);
      } catch (error) {
        console.error('Error fetching user reports:', error);
      }
    }
  };

  const openEditProfileModal = () => {
    setNewFirstName(userData?.firstName || '');
    setNewLastName(userData?.lastName || '');
    setTempProfileImage(profileImage);
    setEditProfileModal(true);
  };

  const pickImageForEdit = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        showCustomAlert('Permission Required', 'Please allow access to your photos.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.canceled && result.assets[0]) {
        setTempProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      showCustomAlert('Error', 'Could not select image.');
    }
  };

  const saveProfileChanges = async () => {
    if (!newFirstName.trim()) {
      showCustomAlert('Error', 'First name cannot be empty');
      return;
    }
    if (!newLastName.trim()) {
      showCustomAlert('Error', 'Last name cannot be empty');
      return;
    }

    setUpdatingProfile(true);

    try {
      const storage = getStorage();
      const userDocRef = doc(db, 'Users', userData.id);
      const updates: any = {
        firstName: newFirstName.trim(),
        lastName: newLastName.trim(),
        fullName: `${newFirstName.trim()} ${newLastName.trim()}`,
        nameUpdatedAt: new Date().toISOString(),
      };

      if (tempProfileImage && tempProfileImage !== profileImage) {
        if (!tempProfileImage.startsWith('http')) {
          if (userData.profileImageUrl) {
            try {
              const oldImagePath = `profiles/${userData.id}_profile.jpg`;
              const oldImageRef = ref(storage, oldImagePath);
              await deleteObject(oldImageRef);
            } catch (error) {
              console.log('No old image to delete:', error);
            }
          }
          const filename = `profiles/${userData.id}_profile.jpg`;
          const imageRef = ref(storage, filename);
          const response = await fetch(tempProfileImage);
          const blob = await response.blob();
          await uploadBytes(imageRef, blob);
          const downloadURL = await getDownloadURL(imageRef);
          updates.profileImageUrl = downloadURL;
          updates.profileImageUpdatedAt = new Date().toISOString();
          setProfileImage(downloadURL);
        }
      }

      await updateDoc(userDocRef, updates);
      setUserData({
        ...userData,
        firstName: newFirstName.trim(),
        lastName: newLastName.trim(),
        fullName: `${newFirstName.trim()} ${newLastName.trim()}`,
        profileImageUrl: updates.profileImageUrl || userData.profileImageUrl,
      });

      showCustomAlert('Success', 'Profile updated successfully!');
      setEditProfileModal(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      showCustomAlert('Error', 'Could not update profile. Please try again.');
    } finally {
      setUpdatingProfile(false);
    }
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
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  const refreshProfile = async () => {
    setRefreshing(true);
    await fetchUserData();
    await fetchUserReports();
    setRefreshing(false);
  };

  const getDisplayName = () => {
    if (userData?.fullName) return userData.fullName;
    if (userData?.firstName && userData?.lastName) return `${userData.firstName} ${userData.lastName}`;
    if (userData?.firstName) return userData.firstName;
    return 'User';
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshProfile} colors={['#00D9D9']} tintColor="#00D9D9" />}
      >
        {/* Profile card */}
        <View style={styles.profileCard}>
          <View style={styles.profileImageContainer}>
            <Image source={profileImage ? { uri: profileImage } : require('../assets/images/favicon.png')} style={styles.profileImage} />
            <TouchableOpacity style={styles.editImageButton} onPress={openEditProfileModal}>
              <Image source={require('../assets/images/edit.png')} style={styles.cameraIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>{getDisplayName()}</Text>
          <Text style={styles.userEmail}>{userData?.email || 'No email'}</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Your Activity</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{userReports.length}</Text>
              <Text style={styles.statLabel}>Reports Made</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{userData?.id || '0000'}</Text>
              <Text style={styles.statLabel}>User ID</Text>
            </View>
          </View>
        </View>

        {/* Reports */}
        <View style={styles.reportsCard}>
          <Text style={styles.reportsTitle}>Recent Reports</Text>
          {userReports.length > 0 ? (
            userReports.slice(0, 3).map((report) => (
              <View key={report.id} style={styles.reportItem}>
                <Text style={styles.reportTitle}>{report.title}</Text>
                <Text style={styles.reportDescription}>{report.description}</Text>
                <Text style={styles.reportDate}>{new Date(report.date_report).toLocaleDateString()}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noReportsText}>No reports yet. Make your first report!</Text>
          )}
          <TouchableOpacity style={styles.refreshButton} onPress={() => router.push('/reportChart')}>
            <Text style={styles.refreshButtonText}>View All Reports</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Edit Profile Modal */}
      <Modal visible={editProfileModal} animationType="slide" transparent={true}>
        <View style={styles.editModalOverlay}>
          <View style={styles.editModalContainer}>
            <Text style={styles.editModalTitle}>Edit Profile</Text>
            <View style={styles.editImageContainer}>
              <Image source={tempProfileImage ? { uri: tempProfileImage } : require('../assets/images/edit.png')} style={styles.editProfileImage} />
              <TouchableOpacity style={styles.editImagePickerButton} onPress={pickImageForEdit}>
                <Text style={styles.editImagePickerText}>Change Photo</Text>
              </TouchableOpacity>
            </View>
            <TextInput style={styles.editInput} placeholder="Enter your first name" placeholderTextColor="#999" value={newFirstName} onChangeText={setNewFirstName} autoCapitalize="words" maxLength={50} />
            <TextInput style={styles.editInput} placeholder="Enter your last name" placeholderTextColor="#999" value={newLastName} onChangeText={setNewLastName} autoCapitalize="words" maxLength={50} />
            <View style={styles.editModalButtons}>
              <TouchableOpacity style={styles.editCancelButton} onPress={() => setEditProfileModal(false)} disabled={updatingProfile}>
                <Text style={styles.editCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.editSaveButton, updatingProfile && styles.editSaveButtonDisabled]} onPress={saveProfileChanges} disabled={updatingProfile}>
                <Text style={styles.editSaveText}>{updatingProfile ? 'Saving...' : 'Save Changes'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Bottom Nav */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem} disabled={true}>
          <Image source={require('../assets/images/user.png')} style={styles.navIconImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/reportChart')}>
          <Image source={require('../assets/images/document.png')} style={styles.navIconImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/mapPage')}>
          <Image source={require('../assets/images/map.png')} style={styles.navIconImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={confirmLogout}>
          <Image source={require('../assets/images/logout.png')} style={styles.navIconImg} />
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

export default ProfileScreen;
