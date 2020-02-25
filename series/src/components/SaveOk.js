import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import save from '../../resources/save.json';

const SaveOk = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={save}
        autoSize
        resizeMode="contain"
        autoPlay
        loop={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SaveOk;
