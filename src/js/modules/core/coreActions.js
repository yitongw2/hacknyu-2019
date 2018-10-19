import { auth, provider } from '../../firebase'

export const REFRESH_WINDOW_DIMENSIONS = "core/REFRESH_WINDOW_DIMENSIONS";
export const LOGIN_FULFILLED = "core/LOGIN_FULFILLED";
export const LOGIN_REJECTED = "core/LOGIN_REJECTED";

export const LOGOUT_FULFILLED = "core/LOGOUT_FULFILLED";
export const LOGOUT_REJECTED = "core/LOGOUT_REJECTED";


export const refreshWindowDimensions = () => ({
  type: REFRESH_WINDOW_DIMENSIONS,
  payload: {}
});

export const logout = () => dispatch => {
  auth.signOut()
  .then(() => {
    dispatch({
      type: LOGOUT_FULFILLED
    })
  })
  .catch(err => {
    dispatch({
      type: LOGOUT_REJECTED,
      payload: err
    })
  });
};

// Directly add user for rehydrating from localStorage
export const addUser = user => ({
  type: LOGIN_FULFILLED,
  payload: user
});

export const login = () => dispatch => {
  auth.signInWithPopup(provider)
  .then(result => {
    const user = result.user;
    dispatch({
      type: LOGIN_FULFILLED,
      payload: user
    })
  })
  .catch(err => {
    dispatch({
      type: LOGIN_REJECTED,
      payload: err
    })
  });
};
