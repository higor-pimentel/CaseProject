import React from 'react';
import { View, Text, Button } from 'react-native'


function FeelingPage({ navigation }) {
    return (
        <View >
            <Text>Teste</Text>
            <Button title="Next"
                onPress={navigation.goBack()}
            />
        </View>
    );
}

export default FeelingPage;