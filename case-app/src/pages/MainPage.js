import { StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeelingPage from './FeelingPage';
import EmojisPage from './EmojisPage';

const Stack = createNativeStackNavigator();

const title = "How are you feeling?";

function MainPage() {
  return (
    <NavigationContainer>
      <StatusBar style='light' ></StatusBar>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={EmojisPage}
          options={{
            title: title,
            headerStyle: {
              backgroundColor: '#ad7ae2',
            },

          }}
        />
        <Stack.Screen
          name='Feeling'
          component={FeelingPage}
          options={{
            headerStyle: {
              backgroundColor: '#FFF',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainPage;
