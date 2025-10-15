import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 200, 200, 0.2)',
  },

  // Header Styles - CENTERED
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  greeting: {
    fontSize: 18,
    color: '#666',
    fontWeight: '400',
    textAlign: 'center', 
  },
  userName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00C8C8',
    marginTop: 4,
    textAlign: 'center',  
  },


  floatingButton: {
  position: 'absolute',
  bottom: 95,
  left: 135,
  backgroundColor: '#00D9D9',
  paddingHorizontal: 30,
  paddingVertical: 14,
  borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 8,
  elevation: 8,
  zIndex: 999,
},
  floatingButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
 

  // Feed Styles
  scrollFeed: {
    flex: 1,
  },
  feedContent: {
    paddingBottom: 100,  
    paddingTop: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#00C8C8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userDetails: {
    justifyContent: 'center',
  },
  cardUserName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A2E',
  },
  cardTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },



  cardContent: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  feedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A2E',
    marginBottom: 8,
  },
  feedDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 10,
  },

  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginBottom: 10,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  mapContainer: {
    height: 150,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  feedMap: {
    flex: 1,
  },
  mapOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 200, 200, 0.9)',
    padding: 10,
  },
  mapOverlayText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },

  noReportsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  noReportsText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginBottom: 20,
  },

  // Instructions Box Styles
  instructionsSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    lineHeight: 20,
  },
  instructionsDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 15,
  },
  instructionsSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A2E',
    marginBottom: 8,
  },
  instructionsBulletPoint: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
    lineHeight: 20,
    paddingLeft: 10,
  },
  instructionsExample: {
    fontSize: 13,
    color: '#999',
    fontStyle: 'italic',
    marginLeft: 20,
    marginBottom: 4,
  },
  instructionsHighlight: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
    paddingLeft: 10,
  },
  instructionsWarning: {
    backgroundColor: '#FFF3E0',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#FF9800',
  },
  instructionsWarningText: {
    fontSize: 13,
    color: '#E65100',
    lineHeight: 18,
  },
  instructionsSuccess: {
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 10,
    marginTop: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  instructionsSuccessText: {
    fontSize: 13,
    color: '#2E7D32',
    lineHeight: 18,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    maxHeight: '90%',
  },
  modalHeader: {
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  modalHeaderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalHeaderSpacer: {
    width: 40,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00C8C8',
    textAlign: 'center',
    flex: 1,
  },
  modalCloseButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalClose: {
    fontSize: 28,
    color: '#999',
    fontWeight: '300',
  },
  modalScroll: {
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#1A1A2E',
    marginBottom: 15,
    backgroundColor: '#FAFAFA',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },

  mapPreview: {
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
  },
  loadingMap: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    marginBottom: 15,
  },

  cameraSection: {
    alignItems: 'center',
    marginVertical: 15,
  },
  cameraLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00C8C8',
    marginBottom: 15,
  },
  cameraButton: {
    backgroundColor: '#00C8C8',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
  },
  cameraButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  imagePreview: {
    alignItems: 'center',
    width: '100%',
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
  retakeButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  retakeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  submitButton: {
    backgroundColor: '#00C8C8',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButtonDisabled: {
    backgroundColor: '#B0B0B0',
    opacity: 0.7,
  },

  mapModalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mapModalHeader: {
    backgroundColor: '#00C8C8',
    paddingTop: 25,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mapModalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    marginRight: 10,
  },
 
  mapModalImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },

  mapModalHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  mapModalBackButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapModalBackIcon: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  mapModalTitleContainer: {
    flex: 1,
    marginLeft: 15,
  },
  mapModalSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  mapModalHeaderSpacer: {
    width: 40,
  },
  mapModalScrollView: {
    flex: 1,
  },
  mapModalStatusCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    marginBottom: 15,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  mapModalStatusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  mapModalStatusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  mapModalStatusInfo: {
    flex: 1,
  },
  mapModalStatusLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 2,
  },
  mapModalStatusValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  mapModalStatusMessage: {
    fontSize: 14,
    color: '#636366',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  mapModalImageSection: {
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  mapModalImageOverlay: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  mapModalImageBadge: {
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  mapModalImageBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  mapModalDetailsCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  mapModalDetailSection: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  mapModalDetailIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 30,
    textAlign: 'center',
  },
  mapModalDetailContent: {
    flex: 1,
  },
  mapModalDetailLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  mapModalDetailValue: {
    fontSize: 16,
    color: '#1A1A2E',
    fontWeight: '500',
  },
  mapModalDetailDescription: {
    fontSize: 15,
    color: '#3A3A3C',
    lineHeight: 22,
  },
  mapModalDetailTime: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 2,
  },
  mapModalDetailDivider: {
    height: 1,
    backgroundColor: '#F2F2F7',
    marginVertical: 8,
    marginLeft: 45,
  },
  mapModalMapSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  mapModalMapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 15,
  },
  mapModalMapTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00C8C8',
  },
 
  mapModalMapContainer: {
    height: 300,
    position: 'relative',
  },
  mapModalMap: {
    flex: 1,
  },
  mapModalCustomMarker: {
    alignItems: 'center',
  },
  mapModalMarkerEmoji: {
    fontSize: 20,
  },
  mapModalMarkerTail: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FF3B30',
    marginTop: -2,
  },
 

 
  mapModalBottomSpace: {
    height: 30,
  },

  bottomNavBar: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
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


instructionsToggleButton: {
  position: 'absolute',
  bottom: 95,  
  left: 20, 
  backgroundColor: '#00C8C8',
  paddingHorizontal: 20,
  paddingVertical: 14,
  borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 8,
  elevation: 8,
  zIndex: 999,
},
instructionsToggleText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},

// Instructions Modal Styles
instructionsModalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  justifyContent: 'flex-end',
},
instructionsModalContainer: {
  backgroundColor: '#FFFFFF',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  maxHeight: '85%',
},
instructionsModalHeader: {
  backgroundColor: '#FFFFFF',
  paddingTop: 20,
  paddingBottom: 20,
  paddingHorizontal: 20,
  borderBottomWidth: 1,
  borderBottomColor: '#F0F0F0',
},
instructionsModalTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#00C8C8',
  textAlign: 'center',
  flex: 1,
},
instructionsModalScroll: {
  padding: 20,
  flexGrow: 0,
},
  navbuttonInstruction: {
    width: 20,
    height: 20,
    tintColor: '#fff',
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