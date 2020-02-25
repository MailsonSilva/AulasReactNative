import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import add from '../../resources/add.json';

const AddSerieCard = ({serie, isFirstColumn, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.container,
      isFirstColumn ? styles.firstColumn : styles.lastColumn,
    ]}>
    <View style={styles.card}>
      <LottieView source={add} resizeMode="contain" autoPlay loop />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 5,
    height: Dimensions.get('window').width / 2,
  },
  card: {
    flex: 1,
  },
  firstColumn: {
    paddingLeft: 10,
  },
  lastColumn: {
    paddingRight: 10,
  },
});

export default AddSerieCard;
