import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainPage from './pages/MainPage';


export default function App() {
  return (
    <>
      <MainPage />

    </>
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
