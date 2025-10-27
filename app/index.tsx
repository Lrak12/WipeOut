import { useRouter } from "expo-router";
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/Welcome';

const WelcomeScreen = () => {
  const router = useRouter();
  const { width, height } = Dimensions.get('window');

  const handleGetStarted = () => {
    router.push('/register');
  };

  return(
    <View style={styles.container}>
      <View style={[styles.circle1, {
        width: width * 0.8,
        height: width * 0.8,
        borderRadius: width * 0.4,
        top: -height * 0.1,
        left: -width * 0.1,
      }]} />
      <View style={[styles.circle2, {
        width: width * 0.9,
        height: width * 0.9,
        borderRadius: width * 0.45,
        bottom: -height * 0.05,
        right: -width * 0.1,
      }]} />
      <Image 
        style={[styles.logo, {
          width: width * 0.5,
          height: width * 0.5,
        }]} 
        source={require('../assets/images/logo2.png')} 
        resizeMode="contain"
      />
      <Text style={[styles.title, {
        fontSize: width * 0.06,
      }]}>Welcome to WIPEOUT</Text>
      <Text style={[styles.subtitle, {
        fontSize: width * 0.04,
        paddingHorizontal: width * 0.05,
      }]}>
        Your app to connect with like minded individuals and help raise awareness about sanitation!
      </Text>
      <Text style={[styles.subtitle, {
        fontSize: width * 0.04,
        paddingHorizontal: width * 0.05,
      }]}>
        Join now to make a difference.
      </Text>
      <TouchableOpacity style={[styles.button, {
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.1,
      }]} onPress={handleGetStarted}>
        <Text style={[styles.buttonText, {
          fontSize: width * 0.045,
        }]}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;