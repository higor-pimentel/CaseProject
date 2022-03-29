import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import BubblesComponent from '../components/Bubbles';

export default function EmojisPage({ navigation }) {

    return (
        <>
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    {
                        () => {
                            let emotions = [];
                            for (let i = 128512; i < 128567; i++) {

                                emotions.push(<BubblesComponent style={styles.bubble} navigation={navigation} emoticon={i} />)
                            };
                            return emotions;
                        }
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