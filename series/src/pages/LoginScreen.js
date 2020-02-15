import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import firebase from 'firebase';
import '@firebase/firestore/dist/index.cjs.min';
import FormRow from '../components/FormRow';
import {connect} from 'react-redux';
import {tryLogin} from '../actions';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: '',
      password: '',
      isLoading: false,
      message: '',
    };
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyC1rWSwoMTqKrKs4eK5e-vSS0L4dVCck3E',
      authDomain: 'series-rn-54a5c.firebaseapp.com',
      databaseURL: 'https://series-rn-54a5c.firebaseio.com',
      projectId: 'series-rn-54a5c',
      storageBucket: 'series-rn-54a5c.appspot.com',
      messagingSenderId: '190138244985',
      appId: '1:190138244985:web:f8d04674e31a5bacb659a8',
      measurementId: 'G-4W6WPB2WD8',
    };
    // Initialize Firebase
    !firebase.apps.length
      ? firebase.initializeApp(firebaseConfig)
      : firebase.app();
  }

  onChangeHandler(fiels, value) {
    this.setState({
      [fiels]: value,
    });
  }

  tryLogin() {
    this.setState({isLoading: true, message: ''});
    const {mail: email, password} = this.state;

    this.props
      .tryLogin({email, password})
      .then(user => {
        if (user) {
          return this.props.navigation.replace('Main'); //this.props.navigation.navigate('Main');
        } //Com o replace não aparece a opção de retornar.(apaga o historico)

        this.setState({
          isLoading: false,
          message: '',
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          message: this.getMessageByErroCode(error.code),
        });
      });
  }

  getMessageByErroCode(erroCode) {
    switch (erroCode) {
      case 'auth/wrong-password':
        return 'Senha incorreta';
      case 'auth/user-not-found':
        return 'Usuário não encontrado';
      default:
        return 'Erro desconhecido';
    }
  }

  renderMensage() {
    const {message} = this.state;
    if (!message) {
      return null;
    }

    return (
      <View>
        <Text>{message}</Text>
      </View>
    );
  }

  renderButon() {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color="#414bcc" />;
    }
    return <Button title="Entrar" onPress={() => this.tryLogin()} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <FormRow first>
          <TextInput
            style={styles.input}
            placeholder="e-mail"
            value={this.state.mail}
            onChangeText={value => this.onChangeHandler('mail', value)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </FormRow>
        <FormRow last>
          <TextInput
            style={styles.input}
            placeholder="******"
            secureTextEntry
            value={this.state.password}
            onChangeText={value => this.onChangeHandler('password', value)}
          />
        </FormRow>
        {this.renderButon()}
        {this.renderMensage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
  },
});

export default connect(
  null,
  {tryLogin},
)(LoginScreen);
