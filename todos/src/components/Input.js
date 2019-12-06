import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({onChangeText, value}) => (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
    />
);

const styles = StyleSheet.create({
    input: {
        elevation: 1,
        fontSize: 25
    }
});

export default Input;