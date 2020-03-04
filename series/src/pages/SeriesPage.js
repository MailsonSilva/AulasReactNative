import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';
import {connect} from 'react-redux';
import {watchSeries} from '../actions';

const isEven = number => number % 2 === 0;

class SeriesPage extends React.Component {
  componentDidMount() {
    this.props.watchSeries();
  }

  render() {
    const {series, navigation} = this.props;

    if (series === null) {
      return (
        <View style={styles.container}>
          <AddSerieCard onPress={() => navigation.navigate('SerieFormPage')} />
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={[...series, {isLast: true}]}
          renderItem={({item, index}) =>
            item.isLast ? (
              <AddSerieCard
                isFirstColumn={isEven(index)}
                onPress={() =>
                  navigation.navigate('SerieFormPage', {serie: item})
                }
              />
            ) : (
              <SerieCard
                serie={item}
                isFirstColumn={isEven(index)}
                onPress={() =>
                  navigation.navigate('SerieDetailPage', {serie: item})
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
  }
}

const styles = StyleSheet.create({
  marginHeader: {marginTop: 5},
  marginFooter: {marginBottom: 5},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  const {series} = state;
  if (series === null) {
    return {series};
  }

  const keys = Object.keys(series);
  const seriesWithKeys = keys.map(id => {
    return {...series[id], id};
  });
  return {series: seriesWithKeys};
};

export default connect(
  mapStateToProps,
  {watchSeries},
)(SeriesPage);
