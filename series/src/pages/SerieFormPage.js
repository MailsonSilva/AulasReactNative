import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Picker,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  Platform,
} from 'react-native';
import Slider from '@react-native-community/slider';
import FormRow from '../components/FormRow';
import SaveOk from '../components/SaveOk';
import {connect} from 'react-redux';
import {setField, saveSerie, setWholeSerie, resetForm} from '../actions';

class SerieFormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    const {route, setWholeSerie, resetForm} = this.props;
    const {params} = route;
    if (params && params.serieToEdit) {
      setWholeSerie(params.serieToEdit);
    } else {
      resetForm();
    }
  }

  renderButton() {
    if (this.state.isLoading) {
      return <SaveOk />;
    }
    return (
      <Button
        title="Salvar"
        onPress={async () => {
          this.setState({isLoading: true});
          try {
            const {serieForm, saveSerie, navigation} = this.props;
            await saveSerie(serieForm);
            navigation.goBack();
          } catch (error) {
            Alert.alert('Erro!', error.message);
          } finally {
            this.setState({isLoading: false});
          }
        }}
      />
    );
  }

  render() {
    const {serieForm, setField} = this.props;
    return (
      <KeyboardAvoidingView
        // behavior="padding"
        enabled
        behavior={Platform.select({
          ios: 'padding',
          android: null,
        })}>
        <ScrollView style={styles.container}>
          <FormRow first>
            <TextInput
              style={styles.input}
              placeholder="Título"
              value={serieForm.title}
              onChangeText={value => setField('title', value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              style={styles.input}
              placeholder="img"
              value={serieForm.img}
              onChangeText={value => setField('img', value)}
            />
          </FormRow>
          <FormRow>
            <Picker
              selectedValue={serieForm.gender}
              onValueChange={itemValue => setField('gender', itemValue)}>
              <Picker.Item label="Policial" value="Policial" />
              <Picker.Item label="Comédia" value="Comédia" />
              <Picker.Item label="Terror" value="Terror" />
              <Picker.Item label="Ação" value="Ação" />
              <Picker.Item label="Animação" value="Animação" />
              <Picker.Item label="Aventura" value="Aventura" />
              <Picker.Item label="Dança" value="Dança" />
              <Picker.Item label="Documentário" value="Documentário" />
              <Picker.Item label="Faroeste" value="Faroeste" />
              <Picker.Item
                label="Ficção científica"
                value="Ficção científica"
              />
              <Picker.Item label="guerra" value="guerra" />
              <Picker.Item label="Fantasia" value="Fantasia" />
              <Picker.Item label="Romance" value="Romance" />
            </Picker>
          </FormRow>
          <FormRow>
            <View style={styles.sameRow}>
              <Text>Nota:</Text>
              <Text>{serieForm.rate}</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              step={5}
              minimumTrackTintColor="#414bcc"
              maximumTrackTintColor="#2d37a8"
              onValueChange={value => setField('rate', value)}
              value={serieForm.rate}
            />
          </FormRow>
          <FormRow>
            <TextInput
              style={styles.input}
              numberOfLines={4}
              multiline={true}
              placeholder="Descrição"
              value={serieForm.description}
              onChangeText={value => setField('description', value)}
            />
          </FormRow>
          {this.renderButton()}
          <View style={styles.marginFooter} />
        </ScrollView>
      </KeyboardAvoidingView>
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
    fontSize: 16,
  },
  slider: {
    width: '100%',
    height: 30,
  },
  sameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  marginFooter: {marginBottom: 5},
});

function mapStateToProps(state) {
  return {
    serieForm: state.serieForm,
  };
}

const mapDispatchToProps = {
  setField,
  saveSerie,
  setWholeSerie,
  resetForm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SerieFormPage);
