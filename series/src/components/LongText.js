import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
  NativeModules,
  Platform,
} from 'react-native';

if (
  Platform.OS === 'android' &&
  NativeModules.UIManager.setLayoutAnimationEnabledExperimental
) {
  NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class LongText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };
  }

  toggleIsExpanded() {
    const {isExpanded} = this.state;
    this.setState({
      isExpanded: !isExpanded,
    });
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    LayoutAnimation.spring();
  }

  render() {
    const {label = '', content = '-'} = this.props;
    const {isExpanded} = this.state;
    return (
      <View style={styles.line}>
        <Text style={[styles.cell, styles.label]}>{label}</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            this.toggleIsExpanded();
          }}>
          <Text
            style={[
              styles.cell,
              styles.content,
              isExpanded ? styles.expanded : styles.colapsed,
            ]}>
            {content}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  line: {
    paddingTop: 3,
    paddingBottom: 3,
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
    textDecorationLine: 'underline',
    paddingBottom: 5,
  },
  content: {
    flex: 3,
    textAlign: 'justify',
  },
  colapsed: {
    maxHeight: 100,
  },
  expanded: {
    flex: 1,
  },
});
