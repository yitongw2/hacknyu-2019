import { auth, provider } from '../../firebase'
import { push } from "connected-react-router"
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
    dispatch(push("/"));
  })
  .catch(err => {
    dispatch({
      type: LOGOUT_REJECTED,
      payload: err
    });
  });
};

// Directly add user for rehydrating from localStorage
export const addUser = user => ({
  type: LOGIN_FULFILLED,
  payload: user
});

export const loginWithPassword = ({ password, email }) => dispatch => {
  auth.signInWithEmailAndPassword(email, password)
  .then(result => {
    console.log("SUCCESS!");
    console.log(result);
  })
  .catch(err => {
    console.log("FAILURE!");
    console.error(err);
  })
}


export const loginWithGoogle = () => dispatch => {
  auth.signInWithPopup(provider)
  .then(result => {
    const user = result.user;
    dispatch({
      type: LOGIN_FULFILLED,
      payload: user
    })
    dispatch(push('/apply'));
  })
  .catch(err => {
    dispatch({
      type: LOGIN_REJECTED,
      payload: err
    })
  });
};

