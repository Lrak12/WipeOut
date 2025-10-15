import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F5F5',
  },
  
  // Loading
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
  
  // Header
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
  userName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00C8C8',
    marginTop: 4,
    textAlign: 'center',
  },
 
  
  // Stats
  statsContainer: {
    backgroundColor: '#fff',
    margin: 20,
    marginBottom: 10,
    borderRadius: 15,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  statsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00C8C8',
  },
  
  // Scroll and Section
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
    textAlign: 'center',
  },
  noDataText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginTop: 50,
  },
  
  // Report Cards
  reportCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00C8C8',
    flex: 1,
    marginRight: 10,
  },
  reportId: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#E6F5F5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
 
  // Reporter Info
  reporterInfo: {
    backgroundColor: '#E6F5F5',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4ECAC9',
  },
  reporterLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
    marginBottom: 4,
  },
  reporterName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00C8C8',
  },
  reporterEmail: {
    fontSize: 12,
    color: '#4ECAC9',
    marginTop: 2,
  },
  reportDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
  },
  
  // Small Map
  mapContainer: {
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 2,
    borderColor: '#4ECAC9',
  },
  smallMap: {
    width: '100%',
    height: '100%',
  },
  mapOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4ECAC9',
    padding: 8,
  },
  mapOverlayText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  
  // Admin Comment Styles
  adminCommentContainer: {
    backgroundColor: '#FFF3E0',
    borderRadius: 12,
    padding: 14,
    marginVertical: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FF9800',
  },
  adminCommentLabel: {
    fontSize: 12,
    color: '#E65100',
    fontWeight: 'bold',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  adminCommentText: {
    fontSize: 14,
    color: '#BF360C',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  
  // Comment Modal Styles
  commentModalOverlay: {
     flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  justifyContent: 'center',
  },
  commentModalContainer: {
    backgroundColor: '#FFFFFF',
  marginHorizontal: 20,
  borderRadius: 20,
  padding: 20,
  maxHeight: '85%',
  },
  commentModalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00C8C8',
    marginBottom: 8,
    textAlign: 'center',
  },
  commentModalSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  commentInput: {
    borderWidth: 2,
    borderColor: '#4ECAC9',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#222',
    backgroundColor: '#E6F5F5',
    textAlignVertical: 'top',
    minHeight: 120,
    marginBottom: 8,
  },
  characterCount: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
    marginBottom: 20,
  },
  commentModalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 10,
  },
  commentCancelButton: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  commentCancelText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  commentSubmitButton: {
    flex: 1.5,
    backgroundColor: '#00C8C8',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  commentSubmitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  // Status button styles (if not already added)
  statusButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
    gap: 8,
  },
  statusButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  reviewedButton: {
    backgroundColor: '#4ECAC9',
  },
  rejectedButton: {
    backgroundColor: '#FF6B6B',
  },
  resolvedButton: {
    backgroundColor: '#4CAF50',
  },
  statusButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  mapModalImageContainer: {
    marginTop: 15,
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
  proofPhotoSection: {
    alignItems: 'center',
    marginVertical: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  proofPhotoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00C8C8',
    marginBottom: 12,
  },
  takeProofPhotoButton: {
    backgroundColor: '#00C8C8',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
  },
  takeProofPhotoButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  proofImagePreview: {
    alignItems: 'center',
    width: '100%',
  },
  proofPreviewImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 12,
  },
  retakeProofButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  retakeProofButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  commentModalScrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
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