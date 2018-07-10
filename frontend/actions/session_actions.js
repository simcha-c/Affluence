export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

import * as SessionAPIUtil from './../util/session_api_util';

export const receiveCurrentUser = (current_user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: current_user
  };
};

export const logoutCurrentUser = ()=> {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors= (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  };
};

export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveErrors(errors))
  );
};

export const logout = () => {
  return dispatch => {
    return SessionAPIUtil.logout().then(() => {
      return dispatch(logoutCurrentUser());
    });
  };
};

export const signup = (user) => {
  return dispatch => {
    return SessionAPIUtil.signup(user)
      .then((current_user) => {return dispatch(receiveCurrentUser(current_user));},
      (errors) => {return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};
