import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>{ props.title }</Text>
    </View>
);

const style = StyleSheet.create( {
    container: {
        marginTop: 36,
        backgroundColor: '#1c97d9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        color : '#fff',
    }
});

export default Header;