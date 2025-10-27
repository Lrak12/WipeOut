import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const isSmallDevice = width < 375;
const isTablet = width >= 768;

const scale = (size: number) => {
  const baseWidth = 375;
  return Math.round(size * (width / baseWidth));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.05,
  },
  circle1: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 200, 200, 0.3)',
  },
  circle2: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 200, 200, 0.2)',
  },
  logo: {
    marginBottom: height * 0.02,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.015,
    lineHeight: isTablet ? scale(32) : scale(28),
    color: '#333',
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: height * 0.025,
    lineHeight: Platform.OS === 'ios' ? scale(22) : scale(20),
    maxWidth: isTablet ? width * 0.6 : width * 0.85,
  },
  button: {
    backgroundColor: '#00C8C8',
    borderRadius: height * 0.035,
    marginTop: height * 0.02,
    elevation: Platform.OS === 'android' ? 3 : 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    minWidth: isTablet ? width * 0.3 : width * 0.5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

// Export helper functions for use in components if needed
export const responsive = {
  scale,
  isSmallDevice,
  isTablet,
  screenWidth: width,
  screenHeight: height,
};

export default styles;



