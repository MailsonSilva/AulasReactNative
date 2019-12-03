import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Line from '../components/Line'

export default class PeopleDetailPages extends React.Component{
    render() {
        const { people } = this.props.navigation.state.params;
        return(
            <View style={styles.container}>
                <Image 
                    source={{ uri: people.picture.large }}
                    style={styles.avatar}/>
                <View style={styles.detailContainner}>
                    <Line label="Emal:" content={people.email}/>
                    <Line label="Cidade:" content={people.location.city}/>                    
                    <Line label="Estado:" content={people.location.state}/>                    
                    <Line label="Tel:" content={people.phone}/>                    
                    <Line label="Cel:" content={people.cell}/>                    
                    <Line label="Nacionalidade:" content={people.nat}/>                    
                </View>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20, // afasta da margem
    },
    avatar: {
        aspectRatio: 1,
        borderRadius: 200 
    },
    detailContainner: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    }
});