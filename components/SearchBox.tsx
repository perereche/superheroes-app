import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SearchHero } from '../interfaces/types';
import { fetchHeroesByField } from '../services/heroesService';
import { filterHeroes, setHeroes } from '../context/slices/heroesSlice';
import { useAppDispatch } from '../context/context';


const SearchBox = () => {
    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState<SearchHero>({
        name: "",
        firstName: "",
        lastName: "",
        description: "",
        place: "",
    });

    const handleInputChange = (field: keyof SearchHero, value: string) => {
        setFormData(prevState => ({ ...prevState, [field]: value }));
    };

    const getByFilter = async () => {
        try {
            const response = await fetchHeroesByField(formData);
            dispatch(filterHeroes(response));
            return;
        } catch (e) {
            return;
        }
    }

    useEffect(() => {
        getByFilter();

    }, [formData.name])



    return (
        <View>
            <TextInput
                placeholder="Search by name"
                placeholderTextColor="#ffffff"
                onChangeText={(text: string) => handleInputChange("name", text)}
                style={styles.inputSearch}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputSearch: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        alignSelf: "center",
        borderColor: "#f0f0f0",
        borderRadius: 4,
        backgroundColor: "#8f1571",
        marginBottom: 5,
        shadowColor: '#dadada',
        shadowOffset: { width: 3, height: 2 },
        shadowOpacity: 0.55,
        shadowRadius: 3.84,
        elevation: 5,
        width: 250,
        color: "#f3f3f3"
    }
})

export default SearchBox