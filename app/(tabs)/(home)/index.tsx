import { View, SafeAreaView, Image, StyleSheet, Platform, Text } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import useMessages from '@/data/messages';
import useWeather from '@/data/weather';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const { data, isLoading, isError } = useMessages();
  const { data: weather, isLoading: loadingWeather } = useWeather() as { data: { current: { weather_code: keyof typeof weatherColors, temperature: number, humidity: number, wind_speed: number, precip: number }, location: {name:string}}, isLoading: boolean };
  
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
          395: "Wear a heavy coat, insulated boots, and waterproof gloves. Don't forget a scarf and a hat for the snow-thunder conditions.",
          392: "A light jacket and sunglasses should suffice for sunny weather with possible thunder.",
          389: "Prepare for sunny weather with thunderstorms: wear light layers and bring a raincoat.",
          386: "Heavy rain with thunder calls for a waterproof jacket, rain boots, and an umbrella.",
          377: "Heavy snow requires a warm parka, snow boots, gloves, and a wool hat.",
          374: "Freezing weather needs layers: thermal base layers, a down jacket, and insulated boots.",
          371: "Heavy snow conditions demand a thick coat, snow pants, and sturdy boots.",
          368: "Regular snow: opt for a winter coat, scarf, and gloves.",
          365: "Heavy snow needs full winter gear, including waterproof outerwear and snow boots.",
          362: "Snowfall: layer up with a warm coat, hat, gloves, and snow boots.",
          359: "For heavy rain, a waterproof jacket and boots are essential.",
          356: "Heavy rain requires a full rain suit, or at least a waterproof jacket and pants.",
          353: "Light rain: a raincoat or a water-resistant jacket with an umbrella.",
          350: "Freezing rain: dress warmly with a thick coat and waterproof boots to handle the ice.",
          338: "Heavy snow: bundle up with thermal layers and snow-ready boots.",
          335: "Another heavy snow condition: full winter gear is necessary.",
          332: "Snow conditions suggest a warm jacket, gloves, and a woolen hat.",
          329: "Snowfall calls for a warm parka and snow boots.",
          326: "For lighter snow, a cozy jacket and gloves should do.",
          323: "Light snow means layering is key, plus a warm scarf and hat.",
          320: "Heavy snow: prioritize staying warm with thick clothing.",
          317: "Light snow: opt for layers with a water-resistant outer shell.",
          314: "Heavy rain demands waterproof outerwear and sturdy rain boots.",
          311: "Light rain needs a raincoat or windbreaker with a hood.",
          308: "Heavy rain means full rain gear, especially waterproof boots.",
          305: "Similar heavy rain advice: waterproof everything is the way to go.",
          302: "Light rain requires a simple rain jacket and sturdy shoes.",
          299: "Another light rain scenario: bring a small umbrella and light waterproof gear.",
          296: "Light rain: focus on a lightweight rain jacket.",
          293: "Light rain: keep a small umbrella handy.",
          284: "Heavy rain, so consider heavy-duty waterproof gear.",
          281: "Light rain conditions call for a light jacket and waterproof shoes.",
          266: "Light drizzle: dress lightly but ensure waterproof footwear.",
          263: "Light drizzle: a hooded jacket works well.",
          260: "Mist: wear light layers but add a scarf for damp conditions.",
          248: "Misty weather means layering up and keeping a light scarf ready.",
          230: "Blizzard conditions demand full winter gear: heavy coat, snow pants, and insulated boots.",
          227: "Snow again: dress warmly with gloves and boots.",
          200: "Thunder: wear light but comfortable layers and bring a waterproof jacket.",
          185: "Partly sunny: dress casually but bring a light jacket for wind.",
          182: "Similar sunny conditions: opt for breathable clothing and sunglasses.",
          179: "Snowfall requires a warm coat, gloves, and a scarf.",
          176: "Light rain suggests a hooded jacket or umbrella.",
          143: "Misty weather again: prioritize layering and a scarf.",
          122: "For misty conditions, wear comfortable layers and consider a hat.",
          119: "Cloudy: dress for cooler temperatures with a sweater or light jacket.",
          116: "Partly cloudy weather is ideal for casual wear with a light jacket.",
          113: "Sunny weather is perfect for lightweight, breathable clothing."
          // Voeg meer kledingadviezen toe
        };

        const weatherCode = weather.current.weather_code;
        const clothingSuggestion = weatherText[weatherCode] || 'No clothing advice available for this weather.';

      return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: weatherColors[weather.current.weather_code] }]}>
          {/* Achtergrondafbeelding */}
          <Image 
            source={weatherImages[weather.current.weather_code]} 
            style={styles.backgroundImage} 
          />
          
          {/* Voorkant-content */}
          <View style={styles.container}>
            {/* Locatienaam bovenaan */}
            <ThemedText type="title" style={styles.locationText}>
              {weather.location.name}
            </ThemedText>
      
            {/* Temperatuur */}
            <ThemedText type="title" style={styles.temperatureText}>
              {weather.current.temperature + '°'}
            </ThemedText>
      
            {/* Horizontale lijn */}
            <View style={styles.horizontalLine} />
      
            {/* Horizontale indeling van humidity, wind speed, en precip */}
            <View style={styles.row}>
     
            {/* Humidity */}
            <View style={styles.item}>
             <FontAwesome name="tint" size={24} color="white" style={styles.icon} />
              <ThemedText type="title" style={styles.text}>{weather.current.humidity + '%'}
              </ThemedText>
            </View>
      
            {/* Wind Speed */}
            <View style={styles.item}>
              <MaterialCommunityIcons name="weather-windy" size={24} color="white" style={styles.icon} />
              <ThemedText type="title" style={styles.text}>
              {weather.current.wind_speed + 'km/h'}
              </ThemedText>
            </View>
      
            {/* Precipitation */}
            <View style={styles.item}>
              <FontAwesome name="umbrella" size={24} color="white" style={styles.icon} />
              <ThemedText type="title" style={styles.text}>
                {weather.current.precip + '%'}
              </ThemedText>
            </View>
          </View>

           {/* Kledingadvies */}
            <ThemedText type="subtitle" style={styles.clothingText}>
             {clothingSuggestion}
            </ThemedText>
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
        bottom: 60,
        left: 50, // Laat de afbeelding de volledige hoogte innemen
        resizeMode: 'contain', // Zorgt ervoor dat de afbeelding proportioneel wordt geschaald
      },
      container: {
        flex: 1,
        justifyContent: 'center', // Plaats de tekst in het midden (verticaal)
        alignItems: 'center', // Plaats de tekst in het midden (horizontaal)
      },
      locationText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        position: 'absolute', // Plaats de tekst bovenop de achtergrondafbeelding
        top: 20,
        left: 20, // Laat de afbeelding de volledige hoogte innemen
      },
      temperatureText: {
        fontSize: 120, // Pas de grootte aan zoals gewenst
        fontWeight: 'bold', // Optioneel
        color: '#FFFFFF', // Optioneel
        paddingTop: 300, // Optioneel
        paddingRight: 200, // Optioneel
      },
      horizontalLine: {
        width: '90%', // Breedte van de lijn
        height: 2, // Hoogte van de lijn
        backgroundColor: '#FFFFFF', // Kleur van de lijn
        marginVertical: 20, // Ruimte boven en onder de lijn
      },
      row: {
        flexDirection: 'row', // Plaatst de items horizontaal naast elkaar
        justifyContent: 'space-around', // Verdeel ruimte gelijkmatig
        alignItems: 'center', // Lijn items verticaal uit
        width: '90%',
      },
      item: {
        alignItems: 'center', // Lijn iconen en tekst uit
        flexDirection: 'row'
      },
      icon: {
        marginRight: 10, // Ruimte tussen icoon en tekst
      },  
      text: {
        color: '#FFFFFF', // Tekstkleur
        marginTop: 5, // Ruimte tussen icoon en tekst
        fontSize: 16,
      },
      clothingText: {
        position: 'absolute', // Plaats de tekst bovenop de achtergrondafbeelding
        bottom: 80, // Plaats de tekst op de gewenste hoogte
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingHorizontal: 20, // Voor tekst niet te breed wordt
      },
    });

