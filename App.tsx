
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Dimensions } from 'react-native';

import SearchBox from './components/SearchBox';
import HeroesList from './screens/HeroesList';
import Toast from 'react-native-toast-message';

const screenHeight = Dimensions.get('window').height + 100;

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>

      <HeroesList />
      <Toast />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#005",
    minHeight: screenHeight,
  }
});