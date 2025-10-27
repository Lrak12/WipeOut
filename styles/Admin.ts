import { Dimensions, StyleSheet } from 'react-native';
import {
  borderRadius,
  fontScale,
  isTablet,
  safeArea,
  scale,
  verticalScale
} from '../utils/responsive';

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
    fontSize: fontScale(18),
    color: '#4ECAC9',
    fontWeight: '600',
  },
  
  // Header
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
  userName: {
    fontSize: fontScale(isTablet ? 36 : 32),
    fontWeight: 'bold',
    color: '#00C8C8',
    marginTop: verticalScale(4),
    textAlign: 'center',
  },
 
  // Stats
  statsContainer: {
    backgroundColor: '#fff',
    margin: scale(10),
    marginBottom: verticalScale(10),
    borderRadius: borderRadius.l,
    padding: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: scale(4),
    shadowOffset: { width: 0, height: verticalScale(2) },
  },
  statsText: {
    fontSize: fontScale(16),
    fontWeight: 'bold',
    color: '#00C8C8',
  },
  
  // Scroll and Section
  scrollContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(85),
  },
  sectionTitle: {
    fontSize: fontScale(20),
    fontWeight: 'bold',
    color: '#222',
    marginBottom: verticalScale(16),
    textAlign: 'center',
  },
  noDataText: {
    textAlign: 'center',
    color: '#666',
    fontSize: fontScale(16),
    marginTop: verticalScale(50),
  },
  
  // Report Cards
  reportCard: {
    backgroundColor: '#fff',
    borderRadius: borderRadius.l,
    padding: scale(18),
    marginBottom: verticalScale(16),
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: scale(8),
    shadowOffset: { width: 0, height: verticalScale(2) },
  },
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: verticalScale(8),
  },
  reportTitle: {
    fontSize: fontScale(18),
    fontWeight: 'bold',
    color: '#00C8C8',
    flex: 1,
    marginRight: scale(10),
  },
  reportId: {
    fontSize: fontScale(12),
    color: '#666',
    backgroundColor: '#E6F5F5',
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(2),
    borderRadius: borderRadius.s,
  },
 
  // Reporter Info
  reporterInfo: {
    backgroundColor: '#E6F5F5',
    borderRadius: borderRadius.m,
    padding: scale(12),
    marginBottom: verticalScale(12),
    borderLeftWidth: scale(4),
    borderLeftColor: '#4ECAC9',
  },
  reporterLabel: {
    fontSize: fontScale(12),
    color: '#666',
    fontWeight: '600',
    marginBottom: verticalScale(4),
  },
  reporterName: {
    fontSize: fontScale(16),
    fontWeight: 'bold',
    color: '#00C8C8',
  },
  reporterEmail: {
    fontSize: fontScale(12),
    color: '#4ECAC9',
    marginTop: verticalScale(2),
  },
  reportDate: {
    fontSize: fontScale(12),
    color: '#666',
    marginBottom: verticalScale(12),
  },
  
  // Small Map
  mapContainer: {
    height: verticalScale(120),
    borderRadius: borderRadius.m,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: scale(2),
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
    padding: scale(8),
  },
  mapOverlayText: {
    color: '#fff',
    fontSize: fontScale(12),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  // Admin Comment Styles
  adminCommentContainer: {
    backgroundColor: '#FFF3E0',
    borderRadius: borderRadius.m,
    padding: scale(14),
    marginVertical: verticalScale(12),
    borderLeftWidth: scale(4),
    borderLeftColor: '#FF9800',
  },
  adminCommentLabel: {
    fontSize: fontScale(12),
    color: '#E65100',
    fontWeight: 'bold',
    marginBottom: verticalScale(4),
    textTransform: 'uppercase',
  },
  adminCommentText: {
    fontSize: fontScale(14),
    color: '#BF360C',
    lineHeight: verticalScale(20),
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
    marginHorizontal: scale(20),
    borderRadius: borderRadius.xl,
    padding: scale(20),
    maxHeight: '85%',
  },
  commentModalTitle: {
    fontSize: fontScale(20),
    fontWeight: 'bold',
    color: '#00C8C8',
    marginBottom: verticalScale(8),
    textAlign: 'center',
  },
  commentModalSubtitle: {
    fontSize: fontScale(14),
    color: '#666',
    marginBottom: verticalScale(20),
    textAlign: 'center',
    fontStyle: 'italic',
  },
  commentInput: {
    borderWidth: scale(2),
    borderColor: '#4ECAC9',
    borderRadius: borderRadius.m,
    padding: scale(16),
    fontSize: fontScale(16),
    color: '#222',
    backgroundColor: '#E6F5F5',
    textAlignVertical: 'top',
    minHeight: verticalScale(120),
    marginBottom: verticalScale(8),
  },
  characterCount: {
    fontSize: fontScale(12),
    color: '#666',
    textAlign: 'right',
    marginBottom: verticalScale(20),
  },
  commentModalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: scale(12),
    marginTop: verticalScale(10),
  },
  commentCancelButton: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    paddingVertical: verticalScale(14),
    paddingHorizontal: scale(20),
    borderRadius: borderRadius.m,
  },
  commentCancelText: {
    color: '#666',
    fontSize: fontScale(16),
    fontWeight: '600',
    textAlign: 'center',
  },
  commentSubmitButton: {
    flex: 1.5,
    backgroundColor: '#00C8C8',
    paddingVertical: verticalScale(14),
    paddingHorizontal: scale(20),
    borderRadius: borderRadius.m,
  },
  commentSubmitText: {
    color: '#fff',
    fontSize: fontScale(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  // Status button styles
  statusButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: verticalScale(12),
    gap: scale(8),
  },
  statusButton: {
    flex: 1,
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(12),
    borderRadius: borderRadius.s,
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
    fontSize: fontScale(12),
    fontWeight: 'bold',
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(6),
    borderRadius: borderRadius.xl,
    marginBottom: verticalScale(12),
  },
  statusText: {
    color: '#fff',
    fontSize: fontScale(12),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  mapModalImageContainer: {
    marginTop: verticalScale(15),
  },

  mapModalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mapModalHeader: {
    backgroundColor: '#00C8C8',
    paddingTop: safeArea.top + verticalScale(1),
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
    width: scale(24),
    height: scale(24),
    tintColor: '#FFFFFF',
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
    height: verticalScale(300),
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
  
  proofPhotoSection: {
    alignItems: 'center',
    marginVertical: verticalScale(15),
    paddingVertical: verticalScale(10),
    borderTopWidth: scale(1),
    borderBottomWidth: scale(1),
    borderColor: '#E0E0E0',
  },
  proofPhotoLabel: {
    fontSize: fontScale(14),
    fontWeight: '600',
    color: '#00C8C8',
    marginBottom: verticalScale(12),
  },
  takeProofPhotoButton: {
    backgroundColor: '#00C8C8',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(30),
    borderRadius: borderRadius.xl,
    alignItems: 'center',
  },
  takeProofPhotoButtonText: {
    color: '#FFFFFF',
    fontSize: fontScale(14),
    fontWeight: '600',
  },
  proofImagePreview: {
    alignItems: 'center',
    width: '100%',
  },
  proofPreviewImage: {
    width: '100%',
    height: verticalScale(150),
    borderRadius: borderRadius.m,
    marginBottom: verticalScale(12),
  },
  retakeProofButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(20),
    borderRadius: borderRadius.l,
  },
  retakeProofButtonText: {
    color: '#FFFFFF',
    fontSize: fontScale(12),
    fontWeight: '600',
  },
  commentModalScrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: verticalScale(20),
  },

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
});