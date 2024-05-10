
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeroesList from '../../screens/Heroes/HeroesList';
import HeroAddForm from '../../screens/Heroes/HeroAddForm';
import { RootStackParamListLogin } from '../../interfaces/types';
import Ionicons from '@expo/vector-icons/Ionicons';
import HeroEditForm from '../../screens/Heroes/HeroEditForm';
import HomeLogin from '../../screens/Login/HomeLogin';

const screenHeight = Dimensions.get('window').height + 100;


export default function LoggedNavigation() {
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
                        animation: "slide_from_right"
                    }}
                >
                    <Stack.Screen
                        name="HomeLogin"
                        component={HomeLogin}
                        options={({ navigation }) => ({
                            headerShown: false
                        })}
                    />
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#005",
        minHeight: screenHeight
    }
});

const Stack = createNativeStackNavigator<RootStackParamListLogin>();
