import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const AddSerieCard = ({serie, isFirstColumn, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.container,
      isFirstColumn ? styles.firstColumn : styles.lastColumn,
    ]}>
    <View style={styles.card}>
      {/* <Image source={{uri: serie.img}} aspectRatio={1} resizeMode={'stretch'} /> */}
      <Text>oioioi</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    // solução se for divisivel por 2
    //flex: 0.5,

    width: '50%',
    padding: 5,
    height: Dimensions.get('window').width / 2,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    // margin: 5, //solução 2
  },
  firstColumn: {
    paddingLeft: 10,
  },
  lastColumn: {
    paddingRight: 10,
  },
});

export default AddSerieCard;
