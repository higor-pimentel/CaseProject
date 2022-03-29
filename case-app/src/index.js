import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text>Teste do app</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ad7ae2',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
