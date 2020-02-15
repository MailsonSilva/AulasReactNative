import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import Line from '../components/Line';
import LongText from '../components/LongText';

class SerieDetailPage extends React.Component {
  render() {
    const {route} = this.props;
    return (
      <ScrollView>
        <Image
          style={styles.image}
          source={{uri: route.params.serie.img}}
          resizeMode={'contain'}
        />
        <Line label="Titulo" content={route.params.serie.title} />
        <Line label="Gênero" content={route.params.serie.gender} />
        <Line label="Nota" content={route.params.serie.rate} />
        <LongText label="Descrição" content={route.params.serie.description} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },
});

export default SerieDetailPage;
