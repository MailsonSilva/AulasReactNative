import React from 'react';
import { Text, StyleSheet, View, TextInput, Button, ActivityIndicator, Alert } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';

import { tryLogin } from '../actions';

import FormRow from '../components/FormRow';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyC1rWSwoMTqKrKs4eK5e-vSS0L4dVCck3E",
            authDomain: "series-rn-54a5c.firebaseapp.com",
            databaseURL: "https://series-rn-54a5c.firebaseio.com",
            projectId: "series-rn-54a5c",
            storageBucket: "series-rn-54a5c.appspot.com",
            messagingSenderId: "190138244985",
            appId: "1:190138244985:web:f8d04674e31a5bacb659a8",
            measurementId: "G-4W6WPB2WD8"
          };
          // Initialize Firebase
          if ( ! firebase.apps.length ) {
            firebase.initializeApp(firebaseConfig);
          }            
    }

    onChangeHandler(field, value){
        this.setState({
            [field]: value
        }); 
    }

    tryLogin(){
        this.setState({ isLoading: true, message: '' });
        const {mail: email, password } = this.state;        

        this.props.tryLogin({ email, password });
    }

    getMessageByErrorCode(){
        switch(errorCode){
            case 'auth/wrong-password':
                return 'Senha incorreta!';
            case 'auth/user-not-found':
                return 'Usuário não encontrado!';
            default:
                return 'Erro desconhecido!';
        }
    }

    renderMessage(){
        const { message }  = this.state;
        if(!message)
            return;

        return (
            <View>
                <Text>{message}</Text>
            </View>
        );
    }

    renderButton(){
        if(this.state.isLoading)
            return <ActivityIndicator/>;            
        return (<Button                     
            title="Entrar"
            onPress={() => this.tryLogin()} />);
    }

    render(){
        return(
            <View style={styles.containner}>
                <FormRow first>
                    <TextInput
                        style={styles.input}
                        placeholder="Email" 
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput 
                        style={styles.input}
                        placeholder="******"
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormRow> 
                { this.renderButton() }   
                { this.renderMessage() }               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containner: {
        paddingLeft: 15,
        paddingRight: 15
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        fontSize: 20
    },
});

export default connect(null, { tryLogin })(LoginPage);