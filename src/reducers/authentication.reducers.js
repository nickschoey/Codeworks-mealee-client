import { usersConstants } from '../constants/users.constants';
let user = JSON.parse(localStorage.getItem('user'));
const defaultState = user ? {
  logging_in: false,
  logged_in: true,
  user
} : {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case usersConstants.LOGIN_REQUEST:
      return {
        ...state,
        logging_in: true,
        logged_in: false
      };
    case usersConstants.LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.data));
      return {
        ...state,
        logging_in: false,
        logged_in: true,
        user: action.data
      };
    case usersConstants.LOGIN_FAILURE:
      return {
        ...state,
        logging_in: false,
        logged_in: false
      };
    
    case usersConstants.LOGOUT:
      localStorage.removeItem('user');
      return {
        ...state,
        logging_in: false,
        logged_in: false,
        user: {}
      };
    default:
      return state;
  }
};
