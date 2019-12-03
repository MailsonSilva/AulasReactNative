import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePages from './src/pages/PeoplePages';
import PeopleDetailPages from './src/pages/PeopleDetailPages';
import {capitalizeFirsLetter} from './src/util';

const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePages
  },
  'PeopleDetail':{
    screen: PeopleDetailPages,
    navigationOptions: ({ navigation })=> {
      const peopleName = capitalizeFirsLetter(navigation.state.params.people.name.first);
      
      return ({
        title: peopleName,
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
          }
      });
    }
  }
  }, {
    defaultNavigationOptions: {
      title: 'Pessoas!',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
  
        // centralizar o header
        flexGrow: 1,
        textAlign: 'center'
        }
      }  
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;