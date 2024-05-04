import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AddHero, RootStackParamList } from '../../interfaces/types';
import { Ionicons } from '@expo/vector-icons';
import { createHero, showToast } from '../../services/heroesService';

type CreateHeroProps = NativeStackScreenProps<RootStackParamList, "CreateHero">;

const HeroAddForm: React.FC<CreateHeroProps> = (props) => {
  const [formData, setFormData] = useState<AddHero>({
    name: '',
    firstName: '',
    lastName: '',
    description: '',
    place: '',
  });

  const handleInputChange = (field: keyof AddHero, value: string) => {
    setFormData(prevState => ({ ...prevState, [field]: value }));
  };

  const handleSubmit = async () => {
    // Here you would usually handle the form submission, e.g., sending data to an API.
    console.log(formData);
    if (!formData.name) {
      showToast(["Validation Error: ", "Name cannot be empty 🦹"], "error");
    } else {
      await createHero(formData).then((res => res ? props.navigation.goBack() : ""))
    }
  };


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="The Super Name Of Your Super Hero"
        style={styles.input}
        value={formData.name}
        onChangeText={text => handleInputChange('name', text)}

      />
      <TextInput
        placeholder="First Real Name"
        style={styles.input}
        value={formData.firstName}
        onChangeText={text => handleInputChange('firstName', text)}
      />
      <TextInput
        placeholder="Last Second Real Name"
        style={styles.input}
        value={formData.lastName}
        onChangeText={text => handleInputChange('lastName', text)}
      />
      <TextInput
        placeholder="How Is Your Super Hero?"
        style={[styles.input, styles.inputDescription]}
        value={formData.description}
        onChangeText={text => handleInputChange('description', text)}
        multiline
        numberOfLines={4}
      />
      <TextInput
        placeholder="Where Lives?"
        style={styles.input}
        value={formData.place}
        onChangeText={text => handleInputChange('place', text)}

      />
      <TouchableOpacity onPress={handleSubmit} style={styles.buttonSubmit}>
        <Text style={styles.buttonText}>Create Your Hero</Text>
        <Ionicons name="add-circle" size={21} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    fontSize: 18
  },
  inputDescription: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  buttonSubmit: {
    backgroundColor: "#1bc442",
    alignSelf: "center", // Center button in the container
    flexDirection: "row",
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 200, // Set a fixed width or use 'percentage' for responsiveness
  },
  buttonText: {
    marginRight: 10, // Give some space between text and icon
    color: 'white',
    fontSize: 16 // Optional: change text color
  }
});

export default HeroAddForm;