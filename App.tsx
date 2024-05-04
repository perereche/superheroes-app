
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeroesList from './screens/Heroes/HeroesList';
import HeroAddForm from './screens/Heroes/HeroAddForm';
import Toast from 'react-native-toast-message';
import { RootStackParamList } from './interfaces/types';
import Ionicons from '@expo/vector-icons/Ionicons';
import HeroEditForm from './screens/Heroes/HeroEditForm';

const screenHeight = Dimensions.get('window').height + 100;


export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#005",
              // Cambia el color de fondo del encabezado
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff', // Cambia el color de los botones y del título en el encabezado
            headerTitleStyle: {
              fontWeight: 'bold', // Fuente en negrita para el título
              fontSize: 30, // Tamaño de la fuente para el título
            },
            animationTypeForReplace: "pop",
            animation: "slide_from_bottom"
          }}
        >
          <Stack.Screen
            name="HeroesList"
            component={HeroesList}
            options={({ navigation }) => ({
              title: 'Heroes List',
              headerRight: () => (
                <Ionicons
                  name='add-circle'
                  size={30}
                  color="white"
                  onPress={() => navigation.navigate('CreateHero')}
                  style={{ marginRight: 10 }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="CreateHero"
            component={HeroAddForm}
            options={({ navigation }) => ({
              title: 'Create a Hero',
              headerLeft: () => (
                <Ionicons
                  name="arrow-down"
                  size={24}
                  color="white"
                  onPress={() => navigation.navigate('HeroesList')}
                  style={{ marginRight: 10 }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="EditHero"
            component={HeroEditForm}
            options={({ navigation, route }) => ({
              title: 'Edit: ' + route.params.itemName,
              headerTitleStyle: {
                fontWeight: 'bold', // Fuente en negrita para el título
                fontSize: 26, // Tamaño de la fuente para el título
              },
              headerLeft: () => (
                <Ionicons
                  name="arrow-down"
                  size={24}
                  color="white"
                  onPress={() => navigation.navigate('HeroesList')}
                  style={{ marginRight: 10 }}
                />
              ),
            })}
          />
        </Stack.Navigator>
        <Toast />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#005",
    minHeight: screenHeight,
  }
});

const Stack = createNativeStackNavigator<RootStackParamList>();
