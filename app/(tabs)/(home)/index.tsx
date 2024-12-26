import { View, SafeAreaView, Image, StyleSheet, Platform } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import useMessages from '@/data/messages';
import useWeather from '@/data/weather';

export default function HomeScreen() {
  const { data, isLoading, isError } = useMessages();
  const { data: weather, isLoading: loadingWeather, isError: errorWeather } = useWeather();

  if (isLoading || !data || loadingWeather || !weather) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ThemedText>Loading...</ThemedText>
        </View>
      </SafeAreaView>
    );
  }

  console.log(weather)

  const weatherImages = {
    395: require('@/assets/images/Snow-thunder.png'),
    392: require('@/assets/images/Sun.png'),
    389: require('@/assets/images/Sun.png'),
    386: require('@/assets/images/Heavy-rain-thunder.png'),
    377: require('@/assets/images/Heavy-snow.png'),
    374: require('@/assets/images/Freezing.png'),
    371: require('@/assets/images/Heavy-snow.png'),
    368: require('@/assets/images/Snow.png'),
    365: require('@/assets/images/Heavy-snow.png'),
    362: require('@/assets/images/Snow.png'),
    359: require('@/assets/images/Heavy-rain.png'),
    356: require('@/assets/images/Heavy-rain.png'),
    353: require('@/assets/images/Light-rain.png'),
    350: require('@/assets/images/Freezing.png'),
    338: require('@/assets/images/Heavy-snow.png'),
    335: require('@/assets/images/Heavy-snow.png'),
    332: require('@/assets/images/Snow.png'),
    329: require('@/assets/images/Snow.png'),
    326: require('@/assets/images/Snow.png'),
    323: require('@/assets/images/Snow.png'),
    320: require('@/assets/images/Heavy-snow.png'),
    317: require('@/assets/images/Snow.png'),
    314: require('@/assets/images/Heavy-rain.png'),
    311: require('@/assets/images/Light-rain.png'),
    308: require('@/assets/images/Heavy-rain.png'),
    305: require('@/assets/images/Heavy-rain.png'),
    302: require('@/assets/images/Light-rain.png'),
    299: require('@/assets/images/Light-rain.png'),
    296: require('@/assets/images/Light-rain.png'),
    293: require('@/assets/images/Light-rain.png'),
    284: require('@/assets/images/Heavy-rain.png'),
    281: require('@/assets/images/Light-rain.png'),
    266: require('@/assets/images/Light-rain.png'),
    263: require('@/assets/images/Light-rain.png'),
    260: require('@/assets/images/Mist.png'),
    248: require('@/assets/images/Mist.png'),
    230: require('@/assets/images/Blizzard.png'),
    227: require('@/assets/images/Snow.png'),
    200: require('@/assets/images/Thunder.png'),
    185: require('@/assets/images/Sun.png'),
    182: require('@/assets/images/Sun.png'),
    179: require('@/assets/images/Snow.png'),
    176: require('@/assets/images/Light-rain.png'),
    143: require('@/assets/images/Mist.png'),
    122: require('@/assets/images/Mist.png'),
    119: require('@/assets/images/Cloudy.png'),
    116: require('@/assets/images/Partly-cloudy.png'),
    113: require('@/assets/images/Sun.png')

    // Add more mappings as needed
  };

  const weatherColors = {
    395: '#1F224F',
    392: '#1F224F',
    389: '#1F224F',
    386: '#1F224F',
    377: '#4A4F87',
    374: '#D6E6FD',
    371: '#4A4F87',
    368: '#D6E6FD',
    365: '#4A4F87',
    362: '#D6E6FD',
    359: '#ABBBEF',
    356: '#4A4F87',
    353: '#ABBBEF',
    350: '#ABBBEF',
    338: '#4A4F87',
    335: '#ABBBEF',
    332: '#ABBBEF',
    329: '#D6E6FD',
    326: '#D6E6FD',
    323: '#D6E6FD',
    320: '#4A4F87',
    317: '#D6E6FD',
    314: '#4A4F87',
    311: '#D6E6FD',
    308: '#4A4F87',
    305: '#4A4F87',
    302: '#ABBBEF',
    299: '#ABBBEF',
    296: '#D6E6FD',
    293: '#D6E6FD',
    284: '#ABBBEF',
    281: '#ABBBEF',
    266: '#D6E6FD',
    263: '#D6E6FD',
    260: '#D6E6FD',
    248: '#D6E6FD',
    230: '#1F224F',
    227: '#ABBBEF',
    200: '#1F224F',
    185: '#ABBBEF',
    182: '#ABBBEF',
    179: '#ABBBEF',
    176: '#ABBBEF',
    143: '#D6E6FD',
    122: '#D6E6FD',
    119: '#D6E6FD',
    116: '#D6E6FD',
    113: '#F4C3C2'
    // Add here the backrground color based on the weather
  };

  const weatherText = {
    116: '#CCCCCC',
    // Add here the clothing text
  };



  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor: weatherColors[weather.current.weather_code] }]}>
      {/* Achtergrondafbeelding */}
      <Image 
        source={weatherImages[weather.current.weather_code]} 
        style={styles.backgroundImage} 
      />
      
      {/* Voorkant-content */}
      <View style={styles.container}>
      <ThemedText type="title">Home</ThemedText>
      <ThemedText type="title">{weather.current.temperature + '°C'}</ThemedText>
      <ThemedText type="title">{weather.current.humidity}</ThemedText>
  
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4C3C2", // Fallback achtergrondkleur
  },
  backgroundImage: {
    position: 'absolute', // Plaatst de afbeelding achter andere elementen
    width: '100%', // Laat de afbeelding de volledige breedte innemen
    height: '100%',
    top: 50,
    left: 50, // Laat de afbeelding de volledige hoogte innemen
    resizeMode: 'contain', // Zorgt ervoor dat de afbeelding proportioneel wordt geschaald
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Plaats de tekst in het midden (verticaal)
    alignItems: 'center', // Plaats de tekst in het midden (horizontaal)
  },
});