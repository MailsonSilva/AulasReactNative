import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TodoForm from './components/TodoForm';

export default class TodoApp extends React.Component{
    render() {
        return(
            <View>
                <TodoForm/>
            </View>
        );
    }
}
