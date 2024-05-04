import { AddHero, Hero, SearchHero } from '../interfaces/types'
import Toast from 'react-native-toast-message';

const API_URL_LOCAL = "https://c4ea-77-21-245-244.ngrok-free.app/api/";


export const showToast = (message: string[], type?: string) => {
    Toast.show({
        type: type ?? "success",
        text1: message[0],
        text2: message[1] ?? "",
        text1Style: {
            fontSize: 18, // Tamaño de letra más grande para el texto principal
        },
        text2Style: {
            fontSize: 16, // Tamaño de letra más grande para el texto secundario

        }
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

export const createHero = async (dataHero: AddHero) => {
    try {
        const response = await fetch(`${API_URL_LOCAL}SuperHero`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(dataHero)

            }
        );

        console.log(response);
        showToast(["Succesfully created 🦸🏾‍♀️"]);
        return response.ok;
    } catch (error) {
        console.error(`Error creating hero:`, error);
        showToast(["Error creating hero 🦹🏽", "error"]);
        return error;
    }
}

export const updateHero = async (dataHero: Hero) => {
    try {
        const response = await fetch(`${API_URL_LOCAL}SuperHero`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataHero)

            }
        );

        console.log(response);
        showToast(["Succesfully updated 🦸🏾‍♀️"]);
        return response.ok;
    } catch (error) {
        console.error(`Error updating hero:`, error);
        showToast(["Error updating hero 🦹🏽", "error"]);
        return error;
    }
}

export const deleteHero = async (id: Hero["id"]) => {
    try {
        const response = await fetch(`${API_URL_LOCAL}SuperHero?id=${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',

                },
            }
        );
        showToast(["Succesfully deleted 💀"]);
        return "Ok";
    } catch (error) {
        console.error(`Error deleting hero: ${id}`, error);
        return `Error deleting hero: ${id}`;
    }
}

export const fetchHeroesByField = async (searchData: SearchHero): Promise<Hero[]> => {

    const params = {
        name: searchData.name ?? "",
        firstName: searchData.firstName ?? "",
        lastName: searchData.lastName ?? "",
        description: searchData.description ?? "",
        place: searchData.place ?? ""
    }

    const queryString = new URLSearchParams(params).toString();

    try {
        const response = await fetch(`${API_URL_LOCAL}SuperHero/heroesbyfield?${queryString}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching heroes:', error);
        return [];
    }
}

