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
  Image,
  PermissionsAndroid,
} from 'react-native';
import Slider from '@react-native-community/slider';
import FormRow from '../components/FormRow';
import SaveOk from '../components/SaveOk';
import {connect} from 'react-redux';
import {setField, saveSerie, setWholeSerie, resetForm} from '../actions';
import ImagePicker from 'react-native-image-picker';

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
            navigation.replace('Main');
          } catch (error) {
            Alert.alert('Erro!', error.message);
          } finally {
            this.setState({isLoading: false});
          }
        }}
      />
    );
  }

  async pickImage() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Permissão legal para câmera de aplicativo de foto',
          message:
            'O seriesApp precisa de acesso à sua câmera ' +
            'para que você possa tirar fotos incríveis.',
          buttonNeutral: 'Pergunte mais tarde',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Sim',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const options = {
          title: 'Selecione uma Imagem',
          cancelButtonTitle: 'Cancelar',
          takePhotoButtonTitle: 'Abrir câmera',
          chooseFromLibraryButtonTitle: 'Abrir galeria',
          storageOptions: {
            skipBackup: true,
            path: 'images',
            cameraRoll: true,
          },
        };
        ImagePicker.showImagePicker(options, response => {
          if (response.didCancel) {
            console.log('Usuario cancelou image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            // You can also display the image using data

            this.props.setField('img64', response.data);
          }
        });
      } else {
        console.log('Camera negado');
      }
    } catch (err) {
      console.warn(err);
    }
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
            {serieForm.img64 ? (
              <Image
                source={{uri: `data:image/jpeg;base64,${serieForm.img64}`}}
                style={styles.img}
              />
            ) : null}
            <Button
              title="Selecione uma imagem"
              onPress={() => {
                this.pickImage();
              }}
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
  img: {
    aspectRatio: 1,
    width: '100%',
  },
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
