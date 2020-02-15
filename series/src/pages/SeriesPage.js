import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';
import series from '../../series.json';

const isEven = number => number % 2 === 0;

const SeriesPage = props => (
  <View>
    <FlatList
      data={[...series, {isLast: true}]}
      renderItem={({item, index}) =>
        item.isLast ? (
          <AddSerieCard
            isFirstColumn={isEven(index)}
            onPress={() =>
              props.navigation.navigate('SerieFormPage', {serie: item})
            }
          />
        ) : (
          <SerieCard
            serie={item}
            isFirstColumn={isEven(index)}
            onPress={() =>
              props.navigation.navigate('SerieDetailPage', {serie: item})
            }
          />
        )
      }
      keyExtractor={({id}) => id}
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
