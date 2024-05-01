import { Hero, City } from '../interfaces/types'

const API_URL_LOCAL = "https://e505-77-21-245-244.ngrok-free.app/api/";



export const fetchHeroes = async (): Promise<Hero[]> => {
    try {
        const response = await fetch(`${API_URL_LOCAL}SuperHero`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching heroes:', error);
        return [];
    }
}