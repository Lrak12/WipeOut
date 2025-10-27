import { Dimensions, StyleSheet } from 'react-native';
import {
  borderRadius,
  fontScale,
  isTablet,
  safeArea,
  scale,
  verticalScale
} from '../utils/responsive';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 200, 200, 0.2)',
  },

  // Header Styles - CENTERED
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: safeArea.top + verticalScale(0.5),
    paddingBottom: verticalScale(25),
    paddingHorizontal: scale(20),
  },
  
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  
  greeting: {
    fontSize: fontScale(18),
    color: '#666',
    fontWeight: '400',
    textAlign: 'center', 
  },
  
  userName: {
    fontSize: fontScale(isTablet ? 36 : 32),
    fontWeight: 'bold',
    color: '#00C8C8',
    marginTop: verticalScale(4),
    textAlign: 'center',  
  },

  floatingButton: {
    position: 'absolute',
    bottom: verticalScale(95),
    left: '50%',
    transform: [{ translateX: -scale(isTablet ? 75 : 65) }], // Half of button width for perfect centering
    backgroundColor: '#00D9D9',
    paddingHorizontal: scale(isTablet ? 40 : 30),
    paddingVertical: verticalScale(14),
    borderRadius: borderRadius.xxl,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 0.3,
    shadowRadius: scale(8),
    elevation: 8,
    zIndex: 999,
  },
  
  floatingButtonText: {
    color: '#fff',
    fontSize: fontScale(16),
    fontWeight: '600',
  },

  // Instructions Button - Always visible on left side
  instructionsToggleButton: {
    position: 'absolute',
    bottom: verticalScale(95),  
    left: scale(20), 
    backgroundColor: '#00C8C8',
    paddingHorizontal: scale(isTablet ? 24 : 20),
    paddingVertical: verticalScale(14),
    borderRadius: borderRadius.xxl,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 0.3,
    shadowRadius: scale(8),
    elevation: 8,
    zIndex: 999,
  },
  
  instructionsToggleText: {
    color: '#fff',
    fontSize: fontScale(16),
    fontWeight: '600',
  },

  navbuttonInstruction: {
    width: scale(20),
    height: scale(20),
    tintColor: '#fff',
  },

  // Feed Styles
  scrollFeed: {
    flex: 1,
  },
  
  feedContent: {
    paddingBottom: verticalScale(120),  
    paddingTop: verticalScale(15),
  },
  
  card: {
    backgroundColor: '#FFFFFF',
    marginBottom: verticalScale(15),
    marginHorizontal: scale(15),
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(8),
    elevation: 3,
  },
  
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(15),
  },
  
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  avatar: {
    width: scale(isTablet ? 48 : 40),
    height: scale(isTablet ? 48 : 40),
    borderRadius: scale(isTablet ? 24 : 20),
    backgroundColor: '#00C8C8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(12),
  },
  
  avatarText: {
    fontSize: fontScale(16),
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  
  userDetails: {
    justifyContent: 'center',
  },
  
  cardUserName: {
    fontSize: fontScale(15),
    fontWeight: '600',
    color: '#1A1A2E',
  },
  
  cardTime: {
    fontSize: fontScale(12),
    color: '#999',
    marginTop: verticalScale(2),
  },

  cardContent: {
    paddingHorizontal: scale(15),
    paddingBottom: verticalScale(15),
  },
  
  feedTitle: {
    fontSize: fontScale(16),
    fontWeight: '600',
    color: '#1A1A2E',
    marginBottom: verticalScale(8),
    lineHeight: fontScale(22),
  },
  
  feedDescription: {
    fontSize: fontScale(14),
    color: '#666',
    lineHeight: fontScale(20),
    marginBottom: verticalScale(10),
  },

  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(6),
    borderRadius: borderRadius.l,
    marginBottom: verticalScale(10),
  },
  
  statusText: {
    color: '#FFFFFF',
    fontSize: fontScale(11),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  mapContainer: {
    height: verticalScale(150),
    marginHorizontal: scale(15),
    marginBottom: verticalScale(15),
    borderRadius: borderRadius.l,
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
    padding: scale(10),
  },
  
  mapOverlayText: {
    color: '#FFFFFF',
    fontSize: fontScale(13),
    fontWeight: '500',
    textAlign: 'center',
  },

  noReportsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(15),
  },
  
  noReportsText: {
    fontSize: fontScale(16),
    color: '#999',
    textAlign: 'center',
    marginBottom: verticalScale(20),
    lineHeight: fontScale(24),
  },

  // Instructions Box Styles
  instructionsSubtitle: {
    fontSize: fontScale(14),
    color: '#666',
    marginBottom: verticalScale(10),
    lineHeight: fontScale(20),
  },
  
  instructionsDivider: {
    height: scale(1),
    backgroundColor: '#E0E0E0',
    marginVertical: verticalScale(15),
  },
  
  instructionsSectionTitle: {
    fontSize: fontScale(16),
    fontWeight: '600',
    color: '#1A1A2E',
    marginBottom: verticalScale(8),
  },
  
  instructionsBulletPoint: {
    fontSize: fontScale(14),
    color: '#666',
    marginBottom: verticalScale(6),
    lineHeight: fontScale(20),
    paddingLeft: scale(10),
  },
  
  instructionsExample: {
    fontSize: fontScale(13),
    color: '#999',
    fontStyle: 'italic',
    marginLeft: scale(20),
    marginBottom: verticalScale(4),
    lineHeight: fontScale(18),
  },
  
  instructionsHighlight: {
    fontSize: fontScale(14),
    color: '#666',
    marginBottom: verticalScale(8),
    lineHeight: fontScale(20),
    paddingLeft: scale(10),
  },
  
  instructionsWarning: {
    backgroundColor: '#FFF3E0',
    padding: scale(12),
    borderRadius: borderRadius.m,
    marginTop: verticalScale(10),
    borderLeftWidth: scale(4),
    borderLeftColor: '#FF9800',
  },
  
  instructionsWarningText: {
    fontSize: fontScale(13),
    color: '#E65100',
    lineHeight: fontScale(18),
  },
  
  instructionsSuccess: {
    backgroundColor: '#E8F5E9',
    padding: scale(12),
    borderRadius: borderRadius.m,
    marginTop: verticalScale(8),
    borderLeftWidth: scale(4),
    borderLeftColor: '#4CAF50',
    marginBottom: verticalScale(20),
  },
  
  instructionsSuccessText: {
    fontSize: fontScale(13),
    color: '#2E7D32',
    lineHeight: fontScale(18),
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: borderRadius.xxl,
    borderTopRightRadius: borderRadius.xxl,
    maxHeight: '90%',
  },
  
  modalHeader: {
    backgroundColor: '#FFFFFF',
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(20),
    paddingHorizontal: scale(20),
    borderBottomWidth: scale(1),
    borderBottomColor: '#F0F0F0',
  },
  
  modalHeaderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  modalHeaderSpacer: {
    width: scale(40),
  },
  
  modalTitle: {
    fontSize: fontScale(24),
    fontWeight: 'bold',
    color: '#00C8C8',
    textAlign: 'center',
    flex: 1,
  },
  
  modalCloseButton: {
    width: scale(40),
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalClose: {
    fontSize: fontScale(28),
    color: '#999',
    fontWeight: '300',
  },
  
  modalScroll: {
    padding: scale(20),
  },

  input: {
    borderWidth: scale(1),
    borderColor: '#E0E0E0',
    borderRadius: borderRadius.m,
    padding: scale(15),
    fontSize: fontScale(16),
    color: '#1A1A2E',
    marginBottom: verticalScale(15),
    backgroundColor: '#FAFAFA',
    minHeight: verticalScale(50),
  },
  
  textArea: {
    height: verticalScale(100),
    textAlignVertical: 'top',
  },

  mapPreview: {
    height: verticalScale(200),
    borderRadius: borderRadius.l,
    overflow: 'hidden',
    marginBottom: verticalScale(15),
  },
  
  loadingMap: {
    height: verticalScale(200),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: borderRadius.l,
    marginBottom: verticalScale(15),
  },

  cameraSection: {
    alignItems: 'center',
    marginVertical: verticalScale(15),
  },
  
  cameraLabel: {
    fontSize: fontScale(16),
    fontWeight: '600',
    color: '#00C8C8',
    marginBottom: verticalScale(15),
  },
  
  cameraButton: {
    backgroundColor: '#00C8C8',
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(40),
    borderRadius: borderRadius.xxl,
    alignItems: 'center',
  },
  
  cameraButtonText: {
    color: '#FFFFFF',
    fontSize: fontScale(16),
    fontWeight: '600',
  },
  
  imagePreview: {
    alignItems: 'center',
    width: '100%',
  },
  
  previewImage: {
    width: '100%',
    height: verticalScale(200),
    borderRadius: borderRadius.l,
    marginBottom: verticalScale(15),
  },
  
  retakeButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(30),
    borderRadius: borderRadius.xl,
  },
  
  retakeButtonText: {
    color: '#FFFFFF',
    fontSize: fontScale(14),
    fontWeight: '600',
  },

  submitButton: {
    backgroundColor: '#00C8C8',
    paddingVertical: verticalScale(16),
    borderRadius: borderRadius.xxl,
    alignItems: 'center',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
  },
  
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: fontScale(16),
    fontWeight: 'bold',
  },
  
  submitButtonDisabled: {
    backgroundColor: '#B0B0B0',
    opacity: 0.7,
  },

  // Map Modal Styles
  mapModalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  mapModalHeader: {
    backgroundColor: '#00C8C8',
    paddingTop: safeArea.top + verticalScale(15),
    paddingBottom: verticalScale(20),
    paddingHorizontal: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  mapModalTitle: {
    fontSize: fontScale(20),
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    marginRight: scale(10),
  },
 
  mapModalImage: {
    width: '100%',
    height: verticalScale(200),
    borderRadius: borderRadius.l,
    marginBottom: verticalScale(15),
  },

  mapModalHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(20),
  },
  
  mapModalBackButton: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  mapModalBackIcon: {
    fontSize: fontScale(24),
    color: '#FFFFFF',
    fontWeight: '600',
  },
  
  mapModalTitleContainer: {
    flex: 1,
    marginLeft: scale(15),
  },
  
  mapModalSubtitle: {
    fontSize: fontScale(14),
    color: 'rgba(255, 255, 255, 0.7)',
  },
  
  mapModalHeaderSpacer: {
    width: scale(40),
  },
  
  mapModalScrollView: {
    flex: 1,
  },
  
  mapModalStatusCard: {
    backgroundColor: '#FFFFFF',
    margin: scale(20),
    marginBottom: verticalScale(15),
    padding: scale(20),
    borderRadius: borderRadius.xl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.08,
    shadowRadius: scale(10),
    elevation: 4,
  },
  
  mapModalStatusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(12),
  },
  
  mapModalStatusIndicator: {
    width: scale(12),
    height: scale(12),
    borderRadius: scale(6),
    marginRight: scale(12),
  },
  
  mapModalStatusInfo: {
    flex: 1,
  },
  
  mapModalStatusLabel: {
    fontSize: fontScale(12),
    color: '#8E8E93',
    marginBottom: verticalScale(2),
  },
  
  mapModalStatusValue: {
    fontSize: fontScale(18),
    fontWeight: '600',
  },
  
  mapModalStatusMessage: {
    fontSize: fontScale(14),
    color: '#636366',
    lineHeight: verticalScale(20),
    fontStyle: 'italic',
  },
  
  mapModalImageSection: {
    marginHorizontal: scale(20),
    marginBottom: verticalScale(15),
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    position: 'relative',
  },
  
  mapModalImageOverlay: {
    position: 'absolute',
    top: scale(15),
    left: scale(15),
  },
  
  mapModalImageBadge: {
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(6),
    borderRadius: borderRadius.xl,
  },
  
  mapModalImageBadgeText: {
    color: '#FFFFFF',
    fontSize: fontScale(12),
    fontWeight: '600',
  },
  
  mapModalDetailsCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: scale(20),
    marginBottom: verticalScale(15),
    padding: scale(20),
    borderRadius: borderRadius.xl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.08,
    shadowRadius: scale(10),
    elevation: 4,
  },
  
  mapModalDetailSection: {
    flexDirection: 'row',
    paddingVertical: verticalScale(12),
  },
  
  mapModalDetailIcon: {
    fontSize: fontScale(20),
    marginRight: scale(15),
    width: scale(30),
    textAlign: 'center',
  },
  
  mapModalDetailContent: {
    flex: 1,
  },
  
  mapModalDetailLabel: {
    fontSize: fontScale(12),
    color: '#8E8E93',
    marginBottom: verticalScale(4),
    textTransform: 'uppercase',
    letterSpacing: scale(0.5),
  },
  
  mapModalDetailValue: {
    fontSize: fontScale(16),
    color: '#1A1A2E',
    fontWeight: '500',
    lineHeight: fontScale(22),
  },
  
  mapModalDetailDescription: {
    fontSize: fontScale(15),
    color: '#3A3A3C',
    lineHeight: verticalScale(22),
  },
  
  mapModalDetailTime: {
    fontSize: fontScale(14),
    color: '#8E8E93',
    marginTop: verticalScale(2),
  },
  
  mapModalDetailDivider: {
    height: scale(1),
    backgroundColor: '#F2F2F7',
    marginVertical: verticalScale(8),
    marginLeft: scale(45),
  },
  
  mapModalMapSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: scale(20),
    marginBottom: verticalScale(15),
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.08,
    shadowRadius: scale(10),
    elevation: 4,
  },
  
  mapModalMapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(20),
    paddingBottom: verticalScale(15),
  },
  
  mapModalMapTitle: {
    fontSize: fontScale(18),
    fontWeight: '600',
    color: '#00C8C8',
  },
 
  mapModalMapContainer: {
    height: verticalScale(isTablet ? 400 : 300),
    position: 'relative',
  },
  
  mapModalMap: {
    flex: 1,
  },
  
  mapModalCustomMarker: {
    alignItems: 'center',
  },
  
  mapModalMarkerEmoji: {
    fontSize: fontScale(20),
  },
  
  mapModalMarkerTail: {
    width: 0,
    height: 0,
    borderLeftWidth: scale(8),
    borderRightWidth: scale(8),
    borderTopWidth: scale(10),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FF3B30',
    marginTop: verticalScale(-2),
  },
 
  mapModalBottomSpace: {
    height: verticalScale(30),
  },

  // Instructions Modal Styles
  instructionsModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  
  instructionsModalContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: borderRadius.xxl,
    borderTopRightRadius: borderRadius.xxl,
    maxHeight: '85%', 
  },
  
  instructionsModalHeader: {
    backgroundColor: '#FFFFFF',
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(20),
    paddingHorizontal: scale(20),
    borderBottomWidth: scale(1),
    borderBottomColor: '#F0F0F0',
  },
  
  instructionsModalTitle: {
    fontSize: fontScale(24),
    fontWeight: 'bold',
    color: '#00C8C8',
    textAlign: 'center',
    flex: 1,
  },
  
  instructionsModalScroll: {
    padding: scale(20),
    flexGrow: 0,
  },

  // Bottom Navigation
  bottomNavBar: {
    position: 'absolute',
    bottom: verticalScale(15),
    left: scale(15),
    right: scale(15),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: verticalScale(15),
    borderRadius: borderRadius.xxl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 0.15,
    shadowRadius: scale(12),
    elevation: 8,
  },
  
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: verticalScale(5),
  },
  
  navIconImg: {
    width: scale(24),
    height: scale(24),
    resizeMode: 'contain',
    marginBottom: verticalScale(4),
    tintColor: '#4ECAC9',
  },

  // Alert Modal
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  alertContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: borderRadius.xl,
    padding: scale(25),
    width: isTablet ? '60%' : '85%',
    maxWidth: scale(400),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.25,
    shadowRadius: scale(4),
    elevation: 5,
  },

  message: {
    fontSize: fontScale(18),
    color: '#666',
    textAlign: 'center',
    marginBottom: verticalScale(20),
    lineHeight: fontScale(24),
  },

  button: {
    backgroundColor: '#00C8C8',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(40),
    borderRadius: borderRadius.xxl,
    marginTop: verticalScale(10),
  },

  buttonText: {
    color: '#fff',
    fontSize: fontScale(16),
    fontWeight: 'bold',
  },

  title: {
    fontSize: fontScale(22),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: verticalScale(10),
    color: '#333',
  },
  characterCount: {
  fontSize: fontScale(12),
  color: '#666',
  textAlign: 'right',
  marginBottom: verticalScale(15),
  marginTop: verticalScale(-10),
},
});