import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default function BubblesComponent({ navigation, emoticon }) {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Feeling')}>
            <View style={styles.bubble}>
                <>
                    <Text style={styles.emoji}>&#128512;</Text>
                    <Text>Feeling</Text>
                </>
            </View>
        </TouchableWithoutFeedback >
    );
};

const styles = StyleSheet.create({
    bubble: {
        flexBasis: 100,
        width: 100,
        height: 100,
        backgroundColor: '#d4b9f0',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    emoji: {
        fontSize: 40,
    }
});
