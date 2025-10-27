import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../FirebaseConfig';
import { styles } from '../styles/Register';

const RegisterScreen = () => { 
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  
  const [showPasswordBubble, setShowPasswordBubble] = useState(false);

  const showCustomAlert = (title: string, message: string) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertVisible(true);
  };


  const getPasswordRequirements = (text: string) => {
    const hasMinLength = text.length >= 8;
    const hasNumbers = (text.match(/\d/g) || []).length >= 2;
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(text);
    
    return {
      hasMinLength,
      hasNumbers,
      hasSymbol,
      allMet: hasMinLength && hasNumbers && hasSymbol
    };
  };

  const generateIncrementalUserId = async () => {
    const db = getFirestore();
    const usersCollection = collection(db, 'Users');
    
    const snapshot = await getDocs(usersCollection);
    const existingIds = snapshot.docs
      .map(doc => doc.id)
      .filter(id => /^\d+$/.test(id))
      .map(id => parseInt(id, 10))   
      .filter(num => !isNaN(num));
    
    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : -1;
    const newId = maxId + 1;
    
    return String(newId).padStart(4, '0'); 
  };

  const validateInputs = () => {
    if(!firstName && !lastName && !email && !password && !confirmPassword) {
      showCustomAlert('Error', 'All fields are required.');
      return false;
    }
    if (!firstName.trim()) {
      showCustomAlert('Error', 'Please enter your first name.');
      return false;
    }
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(firstName.trim())) {
      showCustomAlert('Error', 'First name can only contain letters.');
      return false;
    }

    if (!lastName.trim()) {
      showCustomAlert('Error', 'Please enter your last name.');
      return false;
    }
    if (!nameRegex.test(lastName.trim())) {
      showCustomAlert('Error', 'Last name can only contain letters.');
      return false;
    }

    if (!email.trim()) {
      showCustomAlert('Error', 'Please enter your email.');
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      showCustomAlert('Error', 'Please enter a valid email address (e.g., example@domain.com).');
      return false;
    }

    if (!password) {
      showCustomAlert('Error', 'Please enter a password.');
      return false;
    }

    if (password.length < 8) {
      showCustomAlert('Error', 'Password must be at least 8 characters long.');
      return false;
    }

    const numberCount = (password.match(/\d/g) || []).length;
    if (numberCount < 2) {
     showCustomAlert('Error', 'Password must contain at least 2 numbers.');
      return false;
    }

    const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (!symbolRegex.test(password)) {
      showCustomAlert('Error', 'Password must contain at least 1 special character .');
      return false;
    }

    if (password !== confirmPassword) {
      showCustomAlert('Error', 'Passwords do not match.');
      return false;
    }
    
    return true;
  };

  const handleRegister = async () => {
    if (!validateInputs()) {
      return;
    }

    setLoading(true);
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
      const firebaseUser = userCredential.user;
      const db = getFirestore();
      const userId = await generateIncrementalUserId();
      
      const userDocRef = doc(db, 'Users', userId);
      
      console.log('Creating user document with ID:', userId);
      console.log('User data:', {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim()
      });
      
      await setDoc(userDocRef, {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        fullName: `${firstName.trim()} ${lastName.trim()}`,
        email: email.trim(),
        firebaseUid: firebaseUser.uid, 
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      });
      
      console.log('User document created successfully');
      showCustomAlert('Success', 'Account created successfully!');
      router.replace('/login'); 
      
    } catch (error) {
      console.error('Registration error:', error);
      
      if (error instanceof Error) {
        switch (error.message) {
          case 'Firebase: Error (auth/email-already-in-use).':
            showCustomAlert('Error', 'This email is already registered. Please use a different email or try logging in.');
            break;
          case 'Firebase: Error (auth/weak-password).':
            showCustomAlert('Error', 'Password is too weak. Please choose a stronger password.');
            break;
          case 'Firebase: Error (auth/invalid-email).':
            showCustomAlert('Error', 'Invalid email address. Please enter a valid email.');
            break;
          case 'Firebase: Error (auth/network-request-failed).':
            showCustomAlert('Error', 'Network error. Please check your internet connection and try again.');
            break;
          default:
            showCustomAlert('Error', 'An unexpected error occurred during registration.');
        }
      }
      
    } finally {
      setLoading(false);
    }
  };

  const requirements = getPasswordRequirements(password);
  
  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <Image style={styles.profileIcon} source={{ uri: 'path_to_profile_icon' }} />
      <Text style={styles.title}>Welcome to WipeOut</Text>
      <Text style={styles.subtitle}>
        Let's make a difference by being alert and active
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#999"
        value={firstName}
        onChangeText={setFirstName}
        autoCapitalize="words"
        autoCorrect={false}
        maxLength={50}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#999"
        value={lastName}
        onChangeText={setLastName}
        autoCapitalize="words"
        autoCorrect={false}
        maxLength={50}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="email"
        maxLength={100}
      />
      
      {/* 🆕 Password Input with Bubble Tooltip */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          onFocus={() => setShowPasswordBubble(true)}
          onBlur={() => setTimeout(() => setShowPasswordBubble(false), 200)}
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="password"
          maxLength={50}
        />

        {/* 🆕 Password Bubble Tooltip */}
        {showPasswordBubble && !requirements.allMet && (
          <View style={styles.bubble}>
            <View style={styles.bubbleArrow} />
            
            <View style={styles.bubbleContent}>
              <Text style={styles.bubbleTitle}>
                Password must have:
              </Text>
              
              {/* Requirement 1: Length */}
              <View style={styles.requirementRow}>
                <View style={[
                  styles.checkbox,
                  requirements.hasMinLength && styles.checkboxChecked
                ]}>
                  {requirements.hasMinLength && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </View>
                <Text style={[
                  styles.requirementText,
                  requirements.hasMinLength && styles.requirementMet
                ]}>
                  At least 8 characters
                </Text>
              </View>

              {/* Requirement 2: Numbers */}
              <View style={styles.requirementRow}>
                <View style={[
                  styles.checkbox,
                  requirements.hasNumbers && styles.checkboxChecked
                ]}>
                  {requirements.hasNumbers && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </View>
                <Text style={[
                  styles.requirementText,
                  requirements.hasNumbers && styles.requirementMet
                ]}>
                  At least 2 numbers
                </Text>
              </View>

              {/* Requirement 3: Special Character */}
              <View style={styles.requirementRow}>
                <View style={[
                  styles.checkbox,
                  requirements.hasSymbol && styles.checkboxChecked
                ]}>
                  {requirements.hasSymbol && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </View>
                <Text style={[
                  styles.requirementText,
                  requirements.hasSymbol && styles.requirementMet
                ]}>
                  At least 1 special character
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#999"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={50}
      />
      
      <TouchableOpacity 
        style={[styles.button, loading && {backgroundColor: '#80E6E6'}]} 
        onPress={handleRegister} 
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Creating Account...' : 'Register'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.push('/login')} disabled={loading}>
        <Text style={[styles.signInText, loading && {color: '#80E6E6'}]}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>

      {/* Alert Modal */}
      <Modal 
        visible={alertVisible} 
        transparent={true} 
        animationType="fade" 
        onRequestClose={() => setAlertVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.alertContainer}>
            <Text style={styles.title}>{alertTitle}</Text>
            <Text style={styles.message}>{alertMessage}</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => setAlertVisible(false)}
            >
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RegisterScreen;