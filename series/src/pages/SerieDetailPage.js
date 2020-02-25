import React from 'react';
import {ScrollView, Image, StyleSheet, Button, View} from 'react-native';
import Line from '../components/Line';
import LongText from '../components/LongText';
import {connect} from 'react-redux';
import {deleteSerie} from '../actions';

class SerieDetailPage extends React.Component {
  render() {
    const {route, navigation} = this.props;
    const {serie} = route.params;
    return (
      <ScrollView>
        {serie.img ? (
          <Image
            style={styles.image}
            source={{uri: serie.img}}
            resizeMode={'contain'}
          />
        ) : (
          <Image
            style={styles.image2}
            source={require('../../icons/noImage.png')}
            resizeMode={'contain'}
          />
        )}
        <Line label="Titulo" content={serie.title} />
        <Line label="Gênero" content={serie.gender} />
        <Line label="Nota" content={serie.rate} />
        <LongText label="Descrição" content={serie.description} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Editar"
              onPress={() => {
                navigation.replace('SerieFormPage', {serieToEdit: serie});
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Deletar"
              color="#b51d1d"
              onPress={async () => {
                const hasdelete = await this.props.deleteSerie(serie);
                if (hasdelete) {
                  navigation.goBack();
                }
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },
  image2: {
    aspectRatio: 1,
    alignSelf: 'center',
  },
  buttonContainer: {
    padding: 5,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
  },
});

export default connect(
  null,
  {deleteSerie},
)(SerieDetailPage);
