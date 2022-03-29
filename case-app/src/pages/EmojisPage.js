import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import BubblesComponent from '../components/Bubbles';

export default function EmojisPage({ navigation }) {

    const emoticons = ['128512', '128513', '128516', '128518'];

    return (
        <>
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    {
                        emoticons.map(emoji => <BubblesComponent key={emoji} style={styles.bubble} navigation={navigation} emoticon={emoji} />)
                    }


                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#ad7ae2',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 10
    },
    bubble: {
        flex: 1,
        flexBasis: 100
    }
});