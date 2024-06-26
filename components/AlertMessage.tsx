import { Alert } from 'react-native';

export const AlertMessage = (title: string, message: string, actionToAlert: () => void) => {
    Alert.alert(title, message, [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        { text: 'OK', onPress: actionToAlert },
    ]);
};


