import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen';
import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage';
import SerieFormPage from './pages/SerieFormPage';
const Stack = createStackNavigator();

export default function Routes() {
  const titulo = route => {
    const {params} = route;
    if (params && params.serieToEdit) {
      return params.serieToEdit.title;
    }
    return 'Nova Série!';
  };

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
      <Stack.Screen
        name="SerieFormPage"
        component={SerieFormPage}
        options={({route}) => ({
          title: titulo(route),
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 20},
        })}
      />
      <Stack.Screen
        name="SerieDetailPage"
        component={SerieDetailPage}
        options={({route}) => ({
          title: route.params.serie.title,
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 20},
        })}
      />
    </Stack.Navigator>
  );
}
