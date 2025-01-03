import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function TabLayout() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const getUserId = async () => {
      const user = await AsyncStorage.getItem('userId');
      if (user) {
        const parsedUser = JSON.parse(user);
        const userId = parsedUser.id;
        setUserId(userId);
      }
    }
    getUserId()  
  }, []);

  if (!userId) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFA900', // Kleur van actieve tab
        tabBarInactiveTintColor: '#FFD88B',
        tabBarStyle: { 
          backgroundColor: '#ffffff', // Achtergrondkleur van de tabbar
 },
      }}
    >
      <Tabs.Screen
        name="(home)"
        initialParams={{ userId }}
        options={{
          headerShown: false,
          title: 'HOME',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        initialParams={{ userId }}
        options={{
          title: 'USER',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
    );
  }