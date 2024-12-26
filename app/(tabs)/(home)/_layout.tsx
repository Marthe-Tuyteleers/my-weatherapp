import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        // background color header
        headerStyle: {
          backgroundColor: '#F4C3C2', 
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
      }}>
      <Stack.Screen name="index" options={{ title: 'Climoda' }} />
      <Stack.Screen name="details"  options={{ title: 'Details' }} />
    </Stack>
  );
}
