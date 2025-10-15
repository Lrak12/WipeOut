import { useRouter } from "expo-router";
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/Welcome';

const WelcomeScreen = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/register'); // change later to register screen human debugging
  };

  return(
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <Image style={styles.logo} source={require('../assets/images/logo2.png')} />
      <Text style={styles.title}>Welcome to WIPEOUT</Text>
      <Text style={styles.subtitle}>
        Your app to connect with like minded individuals and help raise awareness about sanitation!
      </Text>
      <Text style={styles.subtitle}>
        Join now to make a difference.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

