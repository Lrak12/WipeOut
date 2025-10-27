import { StyleSheet } from 'react-native';
import {
  borderRadius,
  fontScale,
  isTablet,
  safeArea,
  scale,
  verticalScale
} from '../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  
  loadingText: {
    fontSize: fontScale(16),
    color: '#666',
  },
  
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: safeArea.top + verticalScale(1),
    paddingBottom: verticalScale(1),
    paddingHorizontal: scale(20),
  },
  
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  headerTitle: {
    fontSize: fontScale(isTablet ? 36 : 32),
    fontWeight: 'bold',
    color: '#00C8C8',
    textAlign: 'center',
  },

  statsBar: {
    backgroundColor: '#FFFFFF',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(20),
    borderBottomWidth: scale(1),
    borderBottomColor: '#E0E0E0',
  },
  
  statsText: {
    fontSize: fontScale(14),
    color: '#666',
    fontWeight: '600',
  },
  
  map: {
    flex: 1,
  },
  
  legend: {
    position: 'absolute',
    top: verticalScale(120),
    right: scale(15),
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: scale(12),
    borderRadius: borderRadius.m,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.2,
    shadowRadius: scale(4),
    elevation: 5,
    maxWidth: scale(isTablet ? 200 : 150),
  },
  
  legendTitle: {
    fontSize: fontScale(12),
    fontWeight: 'bold',
    color: '#1A1A2E',
    marginBottom: verticalScale(8),
  },
  
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(4),
  },
  
  legendDot: {
    width: scale(12),
    height: scale(12),
    borderRadius: scale(6),
    marginRight: scale(8),
  },
  
  legendText: {
    fontSize: fontScale(11),
    color: '#666',
    flex: 1,
  },
  
  noReportsOverlay: {
    position: 'absolute',
    top: '40%',
    left: scale(20),
    right: scale(20),
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: scale(20),
    borderRadius: borderRadius.l,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.2,
    shadowRadius: scale(8),
    elevation: 5,
  },
  
  noReportsText: {
    fontSize: fontScale(16),
    color: '#666',
    marginBottom: verticalScale(15),
    textAlign: 'center',
    lineHeight: fontScale(22),
  },
  
  createReportButton: {
    backgroundColor: '#00C8C8',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(12),
    borderRadius: borderRadius.xxl,
  },
  
  createReportButtonText: {
    color: '#FFFFFF',
    fontSize: fontScale(14),
    fontWeight: '600',
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
    tintColor: '#4ECAC9',
  },
  
  customMarker: {
    alignItems: 'center',
  },
  
  markerDot: {
    width: scale(24),
    height: scale(24),
    borderRadius: scale(12),
    borderWidth: scale(2),
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.3,
    shadowRadius: scale(3),
    elevation: 5,
  },
  
  markerTail: {
    width: 0,
    height: 0,
    borderLeftWidth: scale(6),
    borderRightWidth: scale(6),
    borderTopWidth: scale(8),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginTop: verticalScale(-2),
  },
  
  mapModalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  mapModalHeader: {
    backgroundColor: '#00C8C8',
    paddingTop: safeArea.top + verticalScale(20),
    paddingBottom: verticalScale(20),
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
  
  mapModalTitle: {
    fontSize: fontScale(20),
    fontWeight: 'bold',
    color: '#FFFFFF',
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
  
  mapModalImage: {
    width: '100%',
    height: verticalScale(200),
    borderRadius: borderRadius.xl,
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
  
  mapModalBottomSpace: {
    height: verticalScale(30),
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