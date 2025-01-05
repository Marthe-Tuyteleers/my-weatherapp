import { View, Alert, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useEffect } from 'react';
import {API_URL} from '@/constants/Api'
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const userId = await AsyncStorage.getItem('userId');
      if (userId) {
        router.replace('/(tabs)');
      }
    };
  
    checkLogin();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const redirectUrl = AuthSession.makeRedirectUri();
      const authUrl = `${API_URL}/auth/google?redirectUri=${redirectUrl}`;
      console.log(redirectUrl);
      console.log(authUrl);
      const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl);

      if (result.type === 'success' && result.url) {
        const params = new URL(result.url).searchParams;
        const user = params.get('user');
        if (user) {
          await AsyncStorage.setItem('userId', user);
          router.replace('/(tabs)');
        }
      } else {
        Alert.alert('Authentication canceled or failed');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to authenticate with Google');
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('@/assets/images/Cloudy.png')} // Path to your image
          style={styles.image}
        />
        <TouchableOpacity onPress={() => handleGoogleLogin()}>
          <ThemedText style={styles.titleText}>Login with Google</ThemedText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor:"#F4C3C2",
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#F4C3C2', // Change color as needed
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: '#FFF7F2',
    borderRadius: 40,
  },
  image: {
    position: 'absolute',
    width: '90%',
    height: '90%',
    bottom: 60,
    left: 20,
    resizeMode: 'contain',
  },
});
