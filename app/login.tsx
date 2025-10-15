import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../FirebaseConfig';
import { styles } from '../styles/Register';

const LoginScreen = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [loginType, setLoginType] = useState<'user' | 'admin'>('user');

  const showCustomAlert = (title: string, message: string) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      showCustomAlert('Error', 'Please enter both email and password.');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const db = getFirestore();
      const collectionName = loginType === 'admin' ? 'Admin' : 'Users';
      const q = query(collection(db, collectionName), where('email', '==', user.email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        showCustomAlert('Login Error', `No ${loginType} account found for this email.`);
        await auth.signOut();
        return;
      }

      if (loginType === 'admin') {
        router.push('/admin');
      } else {
        router.push('/profile');
      }

    } catch (error) {
      console.error('Login error:', error);
      showCustomAlert('Login Error', 'Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <Image style={styles.profileIcon} />
      <Text style={styles.title}>Login to WIPEOUT</Text>
      <Text style={styles.subtitle}>Enter your credentials to continue</Text>

      {/* Switch Login Type */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
        <TouchableOpacity style={{flex: 1, backgroundColor: loginType === 'user' ? '#00D9D9' : '#E0E0E0', paddingVertical: 10, borderTopLeftRadius: 10, borderBottomLeftRadius: 10,}} onPress={() => setLoginType('user')}>
          <Text
            style={{color: loginType === 'user' ? '#fff' : '#333',textAlign: 'center',fontWeight: '600',}}>
            User Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1,backgroundColor: loginType === 'admin' ? '#00D9D9' : '#E0E0E0',paddingVertical: 10,borderTopRightRadius: 10,borderBottomRightRadius: 10,}} onPress={() => setLoginType('admin')}>
          <Text style={{color: loginType === 'admin' ? '#fff' : '#333',textAlign: 'center',fontWeight: '600',}}>
            Admin Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? 'Logging in...' : 'Login'}
        </Text>
      </TouchableOpacity>

      {/* Register Navigation */}
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.signInText}>Don't have an account? Register</Text>
      </TouchableOpacity>

      {/* Custom Alert Modal */}
      <Modal visible={alertVisible}transparent={true}animationType="fade"onRequestClose={() => setAlertVisible(false)}>
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

export default LoginScreen;
