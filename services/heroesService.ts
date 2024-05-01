import { Alert } from 'react-native';
import { Hero, City } from '../interfaces/types'
import Toast from 'react-native-toast-message';

const API_URL_LOCAL = "https://e505-77-21-245-244.ngrok-free.app/api/";

const showToast = (message: string[], type?: string) => {
    Toast.show({
        type: type ?? "success",
        text1: message[0],
        text2: message[1] ?? "",
    });
}

export const fetchHeroes = async (): Promise<Hero[]> => {
    try {
        const response = await fetch(`${API_URL_LOCAL}SuperHero`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching heroes:', error);
        return [];
    }
}

export const deleteHero = async (id: Hero["id"]) => {
    try {
        const response = await fetch(`${API_URL_LOCAL}SuperHero?id=${id}`,
            {
                method: 'DELETE', // Especifica el método HTTP DELETE
                headers: {
                    'Content-Type': 'application/json',
                    // Agrega aquí otros headers necesarios, como tokens de autenticación
                },
            }
        );

        console.log(response.ok);
        showToast(["Succesfully deleted"]);
        return "Ok";
    } catch (error) {
        console.error(`Error deleting hero: ${id}`, error);
        return `Error deleting hero: ${id}`;
    }
}