import firebase from 'firebase';
import {Alert} from 'react-native';
import '@firebase/firestore/dist/index.cjs.min';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user,
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
  type: USER_LOGOUT,
});

export const trylogin = ({email, password}) => dispatch => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      const action = userLoginSuccess(user);
      dispatch(action);
      return user;
    });
  // .catch(error => {
  //   if (error.code === 'auth/user-not-found') {
  //     Alert.alert(
  //       'Usuário não encontrado',
  //       'Deseja criar um cadastro com as informações inseridas?',
  //       [
  //         {
  //           text: 'Não',
  //           style: 'cancel',
  //         },
  //         {
  //           text: 'Sim',
  //           onPress: () => {
  //             firebase
  //               .auth()
  //               .createUserWithEmailAndPassword(mail, password)
  //               .then(loginUserSucess)
  //               .catch(loginUserFailed);
  //           },
  //         },
  //       ],
  //     );
  //     return;
  //   }
  //   loginUserFailed(error);
  // })
  // .then(() => this.setState({isLoading: false}));
};
