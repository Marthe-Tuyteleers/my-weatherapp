import { View, SafeAreaView, Image, StyleSheet, Platform, Text } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import useMessages from '@/data/messages';
import useWeather from '@/data/weather';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const { data, isLoading, isError } = useMessages();
  const { data: weather, isLoading: loadingWeather } = useWeather() as { data: { current: { weather_code: keyof typeof weatherColors, temperature: number, humidity: number, wind_speed: number, precip: number }, location: { name: string } }, isLoading: boolean };

  if (isLoading || !data || loadingWeather || !weather) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ThemedText>Loading...</ThemedText>
        </View>
      </SafeAreaView>
    );
  }

  const getClothingAdviceByTemperature = (temperature: number): string => {
    if (temperature <= -10) {
      return "It's extremely cold! Wear a thermal jacket, insulated pants, heavy gloves, a scarf, a hat, and snow boots.";
    } else if (temperature > -10 && temperature <= 0) {
      return "It's freezing! Wear a heavy coat, gloves, scarf, a warm hat, and insulated boots.";
    } else if (temperature > 0 && temperature <= 5) {
      return "It's very cold. A winter jacket, a scarf, gloves, and warm boots are recommended.";
    } else if (temperature > 5 && temperature <= 10) {
      return "It's cold. A warm jacket, a light scarf, and sturdy shoes should suffice.";
    } else if (temperature > 10 && temperature <= 15) {
      return "It's cool. A medium-weight jacket or a thick sweater should be enough.";
    } else if (temperature > 15 && temperature <= 20) {
      return "It's mild. A light jacket or cardigan is a good choice.";
    } else if (temperature > 20 && temperature <= 25) {
      return "It's warm. Wear breathable, lightweight clothing like cotton shirts and shorts.";
    } else if (temperature > 25 && temperature <= 30) {
      return "It's hot! Opt for sleeveless tops, shorts, and sandals. Don't forget sunscreen.";
    } else if (temperature > 30 && temperature <= 35) {
      return "It's very hot! Stay cool with loose, light-colored clothing and stay hydrated.";
    } else {
      return "It's extremely hot! Avoid heavy activity outside, wear breathable fabrics, and drink plenty of water.";
    }
  };
  

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

  const clothingSuggestion = getClothingAdviceByTemperature(weather.current.temperature);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: weatherColors[weather.current.weather_code] }]}>
      <Image
        source={weatherImages[weather.current.weather_code]}
        style={styles.backgroundImage}
      />
      <View style={styles.container}>
        <ThemedText type="title" style={styles.locationText}>
          {weather.location.name}
        </ThemedText>
        <ThemedText type="title" style={styles.temperatureText}>
          {weather.current.temperature + '°'}
        </ThemedText>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <View style={styles.item}>
            <FontAwesome name="tint" size={24} color="white" style={styles.icon} />
            <ThemedText type="title" style={styles.text}>
              {weather.current.humidity + '%'}
            </ThemedText>
          </View>
          <View style={styles.item}>
            <MaterialCommunityIcons name="weather-windy" size={24} color="white" style={styles.icon} />
            <ThemedText type="title" style={styles.text}>
              {weather.current.wind_speed + 'km/h'}
            </ThemedText>
          </View>
          <View style={styles.item}>
            <FontAwesome name="umbrella" size={24} color="white" style={styles.icon} />
            <ThemedText type="title" style={styles.text}>
              {weather.current.precip + '%'}
            </ThemedText>
          </View>
        </View>
        <ThemedText type="subtitle" style={styles.clothingText}>
          {clothingSuggestion}
        </ThemedText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4C3C2",
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 60,
    left: 50,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  temperatureText: {
    fontSize: 120,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingTop: 300,
    paddingRight: 200,
  },
  horizontalLine: {
    width: '90%',
    height: 2,
    backgroundColor: '#FFFFFF',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: '#FFFFFF',
    marginTop: 5,
    fontSize: 16,
  },
  clothingText: {
    position: 'absolute',
    bottom: 80,
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});