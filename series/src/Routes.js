import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen';
import SeriesPage from './pages/SeriesPage';
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#414bcc',
          borderBottomWidth: 1,
          borderBottomColor: '#C5C5C5',
        },
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Bem Vindo!',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 30,
          },
        }}
      />
      <Stack.Screen
        name="Main"
        component={SeriesPage}
        options={{
          title: 'Séries',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 30,
          },
        }}
      />
    </Stack.Navigator>
  );
}
