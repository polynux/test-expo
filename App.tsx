import { Text , View } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View>
      <Header />
      <Text className='text-red-600'>Open up App.tsx to start workinxzg on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
    </View>
  );
}