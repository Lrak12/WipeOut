// utils/responsive.ts
import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

// Device type detection
export const isTablet = width >= 768;
export const isSmallDevice = width < 375;
export const isLargeDevice = width >= 414;

// Base dimensions (iPhone 11/XR as reference)
const baseWidth = 375;
const baseHeight = 812;

// Scaling functions
export const scale = (size: number): number => {
  const ratio = width / baseWidth;
  return Math.round(size * ratio);
};

export const verticalScale = (size: number): number => {
  const ratio = height / baseHeight;
  return Math.round(size * ratio);
};

export const moderateScale = (size: number, factor: number = 0.5): number => {
  return size + (scale(size) - size) * factor;
};

// Font scaling with limits
export const fontScale = (size: number): number => {
  const scaled = scale(size);
  
  if (isTablet) {
    return Math.min(scaled * 1.2, size * 1.5);
  }
  
  if (isSmallDevice) {
    return Math.max(scaled * 0.9, size * 0.8);
  }
  
  return scaled;
};

// Safe area calculations
export const safeArea = {
  top: Platform.OS === 'ios' ? (height >= 812 ? 44 : 20) : StatusBar.currentHeight || 0,
  bottom: Platform.OS === 'ios' ? (height >= 812 ? 34 : 0) : 0,
};

// Border radius scaling
export const borderRadius = {
  xs: scale(4),
  s: scale(8),
  m: scale(12),
  l: scale(16),
  xl: scale(20),
  xxl: scale(25),
};

// Common responsive values
export const spacing = {
  xs: scale(4),
  s: scale(8),
  m: scale(12),
  l: scale(16),
  xl: scale(20),
  xxl: scale(24),
  xxxl: scale(32),
};

// Responsive dimensions
export const dimensions = {
  width,
  height,
  headerHeight: verticalScale(60),
  tabBarHeight: verticalScale(80),
  buttonHeight: verticalScale(50),
  inputHeight: verticalScale(50),
};