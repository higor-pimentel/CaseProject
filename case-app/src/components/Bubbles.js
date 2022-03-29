import React from 'react';
import { Text, View } from 'react-native-web';

export default BubblesComponent = () => {
    return (
        <View style={styles.bubble}>
            <Text>Teste</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bubble: {
        backgroundColor: '#d4b9f0',
    },
});
