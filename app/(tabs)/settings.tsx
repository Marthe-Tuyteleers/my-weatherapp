import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import useUserGet from '@/data/user-get';
import useUserPut from '@/data/user-put';
import { useLocalSearchParams, router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen() {
  const params = useLocalSearchParams();
  const { data, isLoading, isError } = useUserGet(params.userId);
  const { trigger, isMutating, isError: isErrorPut } = useUserPut(params.userId);
  const [username, setUsername] = useState('');
  const [genderPreference, setGenderPreference] = useState('male'); // Default to 'male'
  const [profilePicture, setProfilePicture] = useState(null); // Slaat de geselecteerde profielfoto op

  // Voorbeeld iconen (je kunt deze vervangen door echte afbeeldingen in je assets)
  const iconOptions = [
    require('@/assets/icon1.png'), // Voeg je iconen toe in de assets
    require('@/assets/icon2.png'),
    require('@/assets/icon3.png'),
    require('@/assets/icon4.png'),
  ];

  useEffect(() => {
    if (data) {
      setGenderPreference(data.genderPreference);
      setProfilePicture(data.profilePicture);
      setUsername(data.username);
    }
  }, [data]);

  if (isMutating) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ThemedText>Currently updating</ThemedText>
        </View>
      </SafeAreaView>
    );
  }

  if (isLoading || !data) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ThemedText>Loading user</ThemedText>
        </View>
      </SafeAreaView>
    );
  }

  //  if (isErrorPut) {
  //   return (
  //     <SafeAreaView style={styles.safeArea}>
  //       <View style={styles.container}>
  //         <ThemedText>Error loading data</ThemedText>
  //       </View>
  //     </SafeAreaView>
  //   );
  // }

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Header */}
      <Text style={styles.profileText}>User Profile</Text>
      
      {/* Toon de geselecteerde profielfoto */}
      <View style={styles.profilePictureContainer}>
        {profilePicture ? (
          <Image source={profilePicture} style={styles.profilePicture} />
        ) : (
          <Text style={styles.placeholderText}>No Profile Picture</Text>
        )}
      </View>

      {/* Toon iconen om uit te kiezen */}
      <Text style={styles.label}>Choose a profile picture:</Text>
      <View style={styles.iconContainer}>
        {iconOptions.map((icon, index) => (
          <TouchableOpacity key={index} onPress={() => setProfilePicture(icon)}>
            <Image source={icon} style={styles.icon} />
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Horizontale lijn */}
      <View style={styles.horizontalLine} />
      
      <Text style={styles.label}>Choose your clothing preference:</Text>

      <View style={styles.optionsContainer}>
     
        {/* Male Clothing Option */}
        <TouchableOpacity 
          style={[styles.option, genderPreference === 'male' && styles.selectedOption]}
          onPress={() => setGenderPreference('male')}
        >
          <Text 
            style={[styles.optionText, genderPreference === 'male' && styles.selectedOptionText]}
          >
            Male Clothing
          </Text>
        </TouchableOpacity>

        {/* Female Clothing Option */}
        <TouchableOpacity 
          style={[styles.option, genderPreference === 'female' && styles.selectedOption]}
          onPress={() => setGenderPreference('female')}
        >
          <Text 
            style={[styles.optionText, genderPreference === 'female' && styles.selectedOptionText]}
          >
            Female Clothing
          </Text>
        </TouchableOpacity>
      </View>

      {/* Horizontale lijn */}
      <View style={styles.horizontalLine} />
      
      {/* De knop als TouchableOpacity */}
      <TouchableOpacity
        style={styles.button} 
        onPress={() => trigger({ username:"", genderPreference, profilePicture })}
      >
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={async() => {await AsyncStorage.removeItem('userId');
          router.replace("/reset"); }}
      >
        <Text style={styles.buttonText}>Log out</Text>
    </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#E0F7FA",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF7F2",
  },
  profileText: {
    position: 'absolute',
    top: 40,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FEC763',
  },
  profilePictureContainer: {
    marginBottom: 20,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#FEC763',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50, // Maak de afbeelding rond
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#FEC763',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    flexWrap: 'wrap',
  },
  icon: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 25, // Maak de iconen rond
  },
  input: {
    height: 50,
    borderColor: '#FFE7D7',
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    width: '90%',
    borderRadius: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
  },
  option: {
    padding: 20,
    borderColor: "#FFE7D7",
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  selectedOption: {
    backgroundColor: "#FCCEB1",
    borderColor: "#FCCEB1",
  },
  optionText: {
    fontSize: 16,
    color: "#FEC763", // Kleur van de tekst van de opties
  },
  selectedOptionText: {
    color: "#FFFFFF", // Witte tekst voor geselecteerde optie
  },
  horizontalLine: {
    width: '90%',
    height: 2,
    backgroundColor: '#FFE7D7',
    marginVertical: 20,
  },
  button: {
    width: '90%', // Button met 90% van de breedte
    backgroundColor: '#F4C3C2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center', // Zorgt ervoor dat de tekst gecentreerd wordt
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
