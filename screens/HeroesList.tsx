import React, { useState, useEffect } from "react"
import { Hero } from "../interfaces/types";
import { deleteHero, fetchHeroes } from "../services/heroesService";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button, Pressable, ScrollView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { AlertMessage } from "../components/AlertMessage";


const HeroesList: React.FC = () => {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [refresh, setRefresh] = useState(false);

    const getHeroes = async () => {
        setRefresh(true);
        const heroesData = await fetchHeroes();
        setHeroes(heroesData);
        setRefresh(false);
    };

    const deleteHeroAlert = async (id: Hero["id"]) => {
        await deleteHero(id);
        getHeroes();
    }

    useEffect(() => {
        getHeroes();
    }, []);




    const renderHero = ({ item }: { item: Hero }) => (
        <TouchableOpacity activeOpacity={0.6} style={styles.card}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>{item.name}</Text>
                <TouchableOpacity onPress={() => AlertMessage("Delete " + item.name, "Are you sure?", () => deleteHeroAlert(item.id))} >
                    <Ionicons name="trash-bin" size={22} color="red" />
                </TouchableOpacity>
            </View>
            <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.place}>{item.place}</Text>

        </TouchableOpacity>
    );

    return (
        <View>
            <Text style={styles.mainTitle}>Heroes List</Text>
            <FlatList data={heroes} renderItem={renderHero}
                keyExtractor={hero => hero.id.toString()}
                onRefresh={getHeroes}
                refreshing={refresh}
                onEndReachedThreshold={0.7}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 38,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10,
        paddingLeft: 16,
        alignSelf: "center",
        color: "#fff",
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
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5,
        flex: 2
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
    },
    titleBox: {
        alignContent: "space-between",
        flexDirection: "row",
        alignItems: "stretch",
    },

});
export default HeroesList;