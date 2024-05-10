import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import MySVGComponent from '../../assets/images/CineLogin'
import GoogleIcon from '../../assets/icons/googleIcon';


const screenHeight = Dimensions.get('window').height;

const HomeLogin = () => {
    return (
        <View style={styles.mainView}>

            <MySVGComponent width={350} height={400} />
            <Text style={styles.title}> Hello! 🦸‍♀️</Text>


            <View style={styles.containerButtons}>
                <TouchableOpacity style={[styles.mainButton, styles.buttonLogin]} >
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.mainButton, styles.buttonRegister]} >
                    <Text style={styles.textButton}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <GoogleIcon width={25} height={25} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeLogin

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    containerImage: {
    },
    title: {
        fontSize: 45,
        color: "#1a1a79",
        fontWeight: "bold",
        marginBottom: 20,
        alignSelf: "center"
    },
    containerButtons: {
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    mainButton: {
        paddingVertical: 10,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 4,
        shadowColor: '#313131',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#5e5ef8",
        width: 200

    },
    textButton: {
        color: "#f7f7f7",
        fontSize: 18,
        alignSelf: "center"
    },
    buttonLogin: {
        backgroundColor: "#5e5ef8"
    },
    buttonRegister: {
        backgroundColor: "#000092",
    },
    socialButton: {
        shadowColor: '#313131',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 20
    }
})