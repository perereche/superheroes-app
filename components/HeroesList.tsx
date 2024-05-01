import React, { useState, useEffect } from "react"
import { Hero } from "../interfaces/types";
import { fetchHeroes } from "../services/heroesService";
import { View, Text, FlatList, StyleSheet } from "react-native";


const HeroesList: React.FC = () => {
    const [heroes, setHeroes] = useState<Hero[]>([]);

    useEffect(() => {
        const getHeroes = async () => {
            const heroesData = await fetchHeroes();
            console.log(heroesData);
            setHeroes(heroesData);
        };

        getHeroes();
    }, []);

    const renderHero = ({ item }: { item: Hero }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.place}>{item.place}</Text>
        </View>
    );

    return (
        <View>
            <Text style={styles.mainTitle}>Heroes List</Text>
            <FlatList data={heroes} renderItem={renderHero} keyExtractor={hero => hero.id.toString()} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10,
        paddingLeft: 16,
        alignSelf: "center",
        color: "#fffff"
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    name: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    place: {
        fontSize: 12,
        color: '#999',
    }
});
export default HeroesList;