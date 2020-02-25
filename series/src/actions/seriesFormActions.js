import firebase from '@firebase/app';
import '@firebase/database';

export const SET_WHOLE_SERIE = 'SET_WHOLE_SERIE';
export const setWholeSerie = serie => ({
  type: SET_WHOLE_SERIE,
  serie,
});

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value,
  };
};

export const SERIE_SAVE_SUCCESS = 'SERIE_SAVE_SUCCESS';
const serieSaveSuccess = () => ({
  type: SERIE_SAVE_SUCCESS,
});

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
  type: RESET_FORM,
});

export const saveSerie = serie => {
  const {currentUser} = firebase.auth();
  return async dispatch => {
    await delay(400);
    const db = firebase.database();
    if (serie.id) {
      await db.ref(`/users/${currentUser.uid}/series/${serie.id}`).set(serie); //atualiza serie
    } else {
      await db.ref(`/users/${currentUser.uid}/series`).push(serie); //salva nova serie
    }
    dispatch(serieSaveSuccess());
  };
};
const delay = ms =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
