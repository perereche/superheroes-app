import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

type Props = {

}

const SearchBox = (props: Props) => {

    const [place, setPlace] = useState<string>("")

    return (
        <View>
            <TextInput
                placeholder="Enter the place to search"
                placeholderTextColor="#ffffff"
                onChangeText={(text: string) => setPlace(text)}
            />
        </View>
    )
}

export default SearchBox