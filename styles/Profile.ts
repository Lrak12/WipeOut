import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F5F5',
  },
  
  
  // Loading styles
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F5F5',
  },
  loadingText: {
    fontSize: 18,
    color: '#4ECAC9',
    fontWeight: '600',
  },
  
  // Scroll content
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  
  // Profile card styles
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
    textAlign: 'center',
  },
  userEmail: {
    fontSize: 16,
    color: '#4ECAC9',
    marginBottom: 8,
    textAlign: 'center',
  },
  
  
  // Stats card styles
  statsCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00C8C8',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 20,
  },
  
  // Reports card styles
  reportsCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  reportsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
  },
  reportItem: {
    backgroundColor: '#E6F5F5',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#4ECAC9',
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00C8C8',
    marginBottom: 4,
  },
  reportDescription: {
    fontSize: 14,
    color: '#222',
    marginBottom: 6,
  },
  reportDate: {
    fontSize: 12,
    color: '#666',
  },
  noReportsText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    fontStyle: 'italic',
    paddingVertical: 20,
  },
  
 
  refreshButton: {
    padding: 12,
    borderRadius: 10,
    marginTop: 8,
  },
  refreshButtonText: {
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

  profileImageContainer: {
  position: 'relative',
  marginBottom: 16,
},
profileImage: {
  width: 120,
  height: 120,
  borderRadius: 60,
  borderWidth: 4,
  borderColor: '#4ECAC9',
},
editImageButton: {
  position: 'absolute',
  bottom: 0,
  right: 0,
  backgroundColor: '#00C8C8',
  width: 36,
  height: 36,
  borderRadius: 18,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 3,
  borderColor: '#fff',
},

cameraIcon: {
  width: 20,
  height: 20,
  tintColor: '#fff', 
},


// Edit modal styles
editModalOverlay: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
editModalContainer: {
  backgroundColor: '#fff',
  borderRadius: 20,
  padding: 24,
  width: '85%',
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.3,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 5 },
},
editModalTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#00C8C8',
  marginBottom: 20,
  textAlign: 'center',
},
editInput: {
  borderWidth: 2,
  borderColor: '#4ECAC9',
  borderRadius: 12,
  padding: 16,
  fontSize: 16,
  color: '#222',
  backgroundColor: '#E6F5F5',
  marginBottom: 20,
},
editModalButtons: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 12,
},
editCancelButton: {
  flex: 1,
  backgroundColor: '#E0E0E0',
  paddingVertical: 14,
  borderRadius: 12,
},
editCancelText: {
  color: '#666',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
},
editSaveButton: {
  flex: 1,
  backgroundColor: '#00C8C8',
  paddingVertical: 14,
  borderRadius: 12,
},
editSaveButtonDisabled: {
  backgroundColor: '#B0B0B0',
  opacity: 0.7,
},
editSaveText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},



// Edit image container in modal
editImageContainer: {
  alignItems: 'center',
  marginBottom: 20,
},
editProfileImage: {
  width: 100,
  height: 100,
  borderRadius: 50,
  borderWidth: 3,
  borderColor: '#4ECAC9',
  marginBottom: 12,
},
editImagePickerButton: {
  backgroundColor: '#4ECAC9',
  paddingHorizontal: 20,
  paddingVertical: 8,
  borderRadius: 20,
},
editImagePickerText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
},


//bottom nav bar
bottomNavBar: {
  position: 'absolute',
  bottom: 15,
  left: 20,
  right: 20,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#fff',
  paddingVertical: 15,
  paddingBottom: 15,
  borderRadius: 25,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.15,
  shadowRadius: 12,
  elevation: 8,
},

navItem: {
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  paddingVertical: 5,
},

navIconImg: {
  width: 24,
  height: 24,
  resizeMode: 'contain',
  marginBottom: 4,
  tintColor: '#4ECAC9',
},

overlay:{
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  alertContainer:{
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    width: '85%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  message:{
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },

  button:{
    backgroundColor: '#00C8C8',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
  },

  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  }, 


});