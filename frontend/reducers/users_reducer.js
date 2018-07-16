import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_NEW_TEAM } from '../actions/team_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {

  case RECEIVE_CURRENT_USER:
    return merge({}, {[action.user.id]: action.user});

  case RECEIVE_USER:
    return merge({}, {[action.user.id]: action.user})

  case RECEIVE_NEW_TEAM:
    return merge({}, state, action.members);

  case LOGOUT_CURRENT_USER:
    return {};

    default:
      return state;
  }
  return state;
};

export default usersReducer;
