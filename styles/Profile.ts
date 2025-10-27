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
    backgroundColor: 'rgba(0, 200, 200, 0.2)',
  },
  
  // Loading styles
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
  
  // Scroll content
  scrollContent: {
    padding: scale(20),
    paddingBottom: verticalScale(120), // Account for bottom nav
    paddingTop: safeArea.top + verticalScale(20),
  },
  
  // Profile card styles
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: borderRadius.xl,
    padding: scale(isTablet ? 32 : 24),
    alignItems: 'center',
    marginBottom: verticalScale(20),
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: scale(8),
    shadowOffset: { width: 0, height: verticalScale(2) },
  },
  
  profileImageContainer: {
    position: 'relative',
    marginBottom: verticalScale(16),
  },
  
  profileImage: {
    width: scale(isTablet ? 140 : 120),
    height: scale(isTablet ? 140 : 120),
    borderRadius: scale(isTablet ? 70 : 60),
    borderWidth: scale(4),
    borderColor: '#4ECAC9',
  },
  
  editImageButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#00C8C8',
    width: scale(isTablet ? 42 : 36),
    height: scale(isTablet ? 42 : 36),
    borderRadius: scale(isTablet ? 21 : 18),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scale(3),
    borderColor: '#fff',
  },

  cameraIcon: {
    width: scale(isTablet ? 24 : 20),
    height: scale(isTablet ? 24 : 20),
    tintColor: '#fff', 
  },
  
  userName: {
    fontSize: fontScale(isTablet ? 28 : 24),
    fontWeight: 'bold',
    color: '#222',
    marginBottom: verticalScale(4),
    textAlign: 'center',
  },
  
  userEmail: {
    fontSize: fontScale(16),
    color: '#4ECAC9',
    marginBottom: verticalScale(8),
    textAlign: 'center',
  },
  
  // Stats card styles
  statsCard: {
    backgroundColor: '#fff',
    borderRadius: borderRadius.xl,
    padding: scale(20),
    marginBottom: verticalScale(20),
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: scale(8),
    shadowOffset: { width: 0, height: verticalScale(2) },
  },
  
  statsTitle: {
    fontSize: fontScale(18),
    fontWeight: 'bold',
    color: '#222',
    marginBottom: verticalScale(16),
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
    fontSize: fontScale(isTablet ? 32 : 28),
    fontWeight: 'bold',
    color: '#00C8C8',
    marginBottom: verticalScale(4),
  },
  
  statLabel: {
    fontSize: fontScale(14),
    color: '#666',
    textAlign: 'center',
  },
  
  statDivider: {
    width: scale(1),
    height: verticalScale(40),
    backgroundColor: '#E0E0E0',
    marginHorizontal: scale(20),
  },
  
  // Reports card styles
  reportsCard: {
    backgroundColor: '#fff',
    borderRadius: borderRadius.xl,
    padding: scale(20),
    marginBottom: verticalScale(20),
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: scale(8),
    shadowOffset: { width: 0, height: verticalScale(2) },
  },
  
  reportsTitle: {
    fontSize: fontScale(18),
    fontWeight: 'bold',
    color: '#222',
    marginBottom: verticalScale(16),
  },
  
  reportItem: {
    backgroundColor: '#E6F5F5',
    borderRadius: borderRadius.m,
    padding: scale(14),
    marginBottom: verticalScale(12),
    borderWidth: scale(1),
    borderColor: '#4ECAC9',
  },
  
  reportTitle: {
    fontSize: fontScale(16),
    fontWeight: 'bold',
    color: '#00C8C8',
    marginBottom: verticalScale(4),
  },
  
  reportDescription: {
    fontSize: fontScale(14),
    color: '#222',
    marginBottom: verticalScale(6),
    lineHeight: fontScale(20),
  },
  
  reportDate: {
    fontSize: fontScale(12),
    color: '#666',
  },
  
  noReportsText: {
    textAlign: 'center',
    color: '#666',
    fontSize: fontScale(16),
    fontStyle: 'italic',
    paddingVertical: verticalScale(20),
    lineHeight: fontScale(24),
  },
  
  refreshButton: {
    padding: scale(12),
    borderRadius: borderRadius.m,
    marginTop: verticalScale(8),
  },
  
  refreshButtonText: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: fontScale(14),
    color: '#00C8C8',
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
    borderRadius: borderRadius.xl,
    padding: scale(24),
    width: isTablet ? '70%' : '85%',
    maxWidth: scale(500),
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: scale(10),
    shadowOffset: { width: 0, height: verticalScale(5) },
  },
  
  editModalTitle: {
    fontSize: fontScale(22),
    fontWeight: 'bold',
    color: '#00C8C8',
    marginBottom: verticalScale(20),
    textAlign: 'center',
  },
  
  editImageContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  
  editProfileImage: {
    width: scale(isTablet ? 120 : 100),
    height: scale(isTablet ? 120 : 100),
    borderRadius: scale(isTablet ? 60 : 50),
    borderWidth: scale(3),
    borderColor: '#4ECAC9',
    marginBottom: verticalScale(12),
  },
  
  editImagePickerButton: {
    backgroundColor: '#4ECAC9',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(8),
    borderRadius: borderRadius.xl,
  },
  
  editImagePickerText: {
    color: '#fff',
    fontSize: fontScale(14),
    fontWeight: 'bold',
  },
  
  editInput: {
    borderWidth: scale(2),
    borderColor: '#4ECAC9',
    borderRadius: borderRadius.m,
    padding: scale(16),
    fontSize: fontScale(16),
    color: '#222',
    backgroundColor: '#E6F5F5',
    marginBottom: verticalScale(20),
    minHeight: verticalScale(50),
  },
  
  editModalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: scale(12),
  },
  
  editCancelButton: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    paddingVertical: verticalScale(14),
    borderRadius: borderRadius.m,
  },
  
  editCancelText: {
    color: '#666',
    fontSize: fontScale(16),
    fontWeight: '600',
    textAlign: 'center',
  },
  
  editSaveButton: {
    flex: 1,
    backgroundColor: '#00C8C8',
    paddingVertical: verticalScale(14),
    borderRadius: borderRadius.m,
  },
  
  editSaveButtonDisabled: {
    backgroundColor: '#B0B0B0',
    opacity: 0.7,
  },
  
  editSaveText: {
    color: '#fff',
    fontSize: fontScale(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Bottom nav bar
  bottomNavBar: {
    position: 'absolute',
    bottom: verticalScale(15),
    left: scale(20),
    right: scale(20),
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

  // Alert modal
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