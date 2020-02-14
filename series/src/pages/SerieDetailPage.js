import React from 'react';
import {View, Text} from 'react-native';

class SerieDetailPage extends React.Component {
  render() {
    const {route} = this.props;
    return (
      <View>
        <Text>{route.params.serie.title}</Text>
      </View>
    );
  }
}

export default SerieDetailPage;
