import { StyleSheet } from 'react-native';
import {
  borderRadius,
  dimensions,
  fontScale,
  isTablet,
  safeArea,
  scale,
  verticalScale
} from '../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: scale(20),
    paddingTop: safeArea.top,
    paddingBottom: safeArea.bottom,
  },

  circle1: {
    position: 'absolute',
    width: scale(isTablet ? 400 : 300),
    height: scale(isTablet ? 400 : 300),
    borderRadius: scale(isTablet ? 200 : 150),
    backgroundColor: 'rgba(0, 200, 200, 0.3)',
    top: verticalScale(-100),
    left: scale(-50),
  },

  circle2: {
    position: 'absolute',
    width: scale(isTablet ? 320 : 250),
    height: scale(isTablet ? 320 : 250),
    borderRadius: scale(isTablet ? 160 : 125),
    backgroundColor: 'rgba(0, 200, 200, 0.2)',
    bottom: verticalScale(-50),
    right: scale(-50),
  },

  profileIcon: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    position: 'absolute',
    top: safeArea.top + verticalScale(20),
    right: scale(20),
  },
  
  title: {
    fontSize: fontScale(isTablet ? 28 : 24),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: verticalScale(10),
    color: '#333',
    lineHeight: fontScale(isTablet ? 32 : 28),
  }, 

  subtitle: {
    fontSize: fontScale(16),
    textAlign: 'center',
    color: '#666',
    marginBottom: verticalScale(20),
    lineHeight: fontScale(22),
    paddingHorizontal: scale(10),
    maxWidth: isTablet ? scale(500) : '100%',
  },

  input: {
    width: '100%',
    maxWidth: isTablet ? scale(400) : '100%',
    height: dimensions.inputHeight,
    borderWidth: scale(1),
    borderColor: '#ddd',
    borderRadius: borderRadius.xxl,
    paddingHorizontal: scale(15),
    marginBottom: verticalScale(15),
    backgroundColor: '#fff',
    color: '#333',
    fontSize: fontScale(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(1) },
    shadowOpacity: 0.1,
    shadowRadius: scale(2),
    elevation: 2,
  },

  button: {
    backgroundColor: '#00C8C8',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(40),
    borderRadius: borderRadius.xxl,
    marginTop: verticalScale(10),
    minWidth: isTablet ? scale(200) : scale(150),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.2,
    shadowRadius: scale(4),
    elevation: 4,
  },

  buttonText: {
    color: '#fff',
    fontSize: fontScale(18),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  signInText: {
    color: '#00C8C8',
    fontSize: fontScale(14),
    marginTop: verticalScale(15),
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

  // Alert modal styles
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
    marginHorizontal: scale(20),
  },

  message: {
    fontSize: fontScale(18),
    color: '#666',
    textAlign: 'center',
    marginBottom: verticalScale(20),
    lineHeight: fontScale(24),
    paddingHorizontal: scale(10),
  },

  // Login type toggle styles (for when used in login)
  loginTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: verticalScale(20),
    backgroundColor: '#E0E0E0',
    borderRadius: borderRadius.m,
    padding: scale(2),
    width: '100%',
    maxWidth: isTablet ? scale(400) : '100%',
  },

  loginTypeButton: {
    flex: 1,
    paddingVertical: verticalScale(12),
    borderRadius: borderRadius.m,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginTypeButtonActive: {
    backgroundColor: '#00D9D9',
  },

  loginTypeButtonInactive: {
    backgroundColor: 'transparent',
  },

  loginTypeText: {
    fontSize: fontScale(14),
    fontWeight: '600',
    textAlign: 'center',
  },

  loginTypeTextActive: {
    color: '#fff',
  },

  loginTypeTextInactive: {
    color: '#333',
  },

  // Responsive spacing for different screen sizes
  formContainer: {
    width: '100%',
    maxWidth: isTablet ? scale(500) : '100%',
    alignItems: 'center',
    paddingHorizontal: scale(isTablet ? 40 : 0),
  },

  // Additional responsive button styling
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },

  // Responsive text sizing for different contexts
  errorText: {
    fontSize: fontScale(14),
    color: '#FF6B6B',
    textAlign: 'center',
    marginBottom: verticalScale(10),
    lineHeight: fontScale(18),
  },

  loadingText: {
    fontSize: fontScale(16),
    color: '#666',
    textAlign: 'center',
    marginTop: verticalScale(10),
  },
  characterCount: {
  fontSize: fontScale(12),
  color: '#666',
  textAlign: 'right',
  marginBottom: verticalScale(15),
  marginTop: verticalScale(-10),
  },

  //bubbles styles
  inputWrapper: {
    position: 'relative',
    width: '100%',
    zIndex: 1,
  },

  bubble: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: 8,
    backgroundColor: '#E0F7F7',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#00D9D9',
    shadowColor: '#00D9D9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
  },

  bubbleArrow: {
    position: 'absolute',
    top: -9,
    left: 20,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#00D9D9',
  },

  bubbleContent: {
    gap: 10,
  },

  bubbleTitle: {
    color: '#00D9D9',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },

  requirementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CCC',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxChecked: {
    backgroundColor: '#00D9D9',
    borderColor: '#00D9D9',
  },

  checkmark: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  requirementText: {
    color: '#666',
    fontSize: 13,
    flex: 1,
  },

  requirementMet: {
    color: '#00D9D9',
    fontWeight: '600',
  }, 

  //show passowrd
    passwordContainer: {
    width: '100%',
    position: 'relative',
    marginBottom: 15,
  },
  
  passwordInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingRight: 50, // Make room for the eye icon
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  
  eyeButton: {
    position: 'absolute',
    right: 15,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 50,
  },
  
  eyeImage: {
    width: 24,
    height: 24,
    tintColor: '#666',
  },

});