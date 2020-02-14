import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SerieCard from '../components/SerieCard';
import series from '../../series.json';

const isEven = number => number % 2 === 0;

const SeriesPage = props => (
  <View>
    <FlatList
      data={series}
      renderItem={({item, index}) => (
        <SerieCard
          serie={item}
          isFirstColumn={isEven(index)}
          onNavigate={() =>
            props.navigation.navigate('SerieDetail', {serie: item})
          }
        />
      )}
      keyExtractor={({id}) => id.toString()}
      numColumns={2}
      ListHeaderComponent={props => <View style={styles.marginHeader} />}
      ListFooterComponent={props => <View style={styles.marginFooter} />}
    />
  </View>
);

const styles = StyleSheet.create({
  marginHeader: {marginTop: 5},
  marginFooter: {marginBottom: 5},
});
export default SeriesPage;
