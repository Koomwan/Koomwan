import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css"

export default function App() {
  return (
    <View className='flex-1 content-center justify-center bg-gray-500'>
      <Text>Open up App.tsx to start working on your !</Text>
      <StatusBar style="auto" />
    </View>
  );
}
