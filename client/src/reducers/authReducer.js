import { LOG_IN, LOG_OUT } from "../actions/types";

const initialState = {
  loggedIn: null,
  userId: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...state, loggedIn: true, userId: action.payload };
    case LOG_OUT:
      return { ...state, loggedIn: false, userId: null };
    default:
      return state;
  }
}
export default authReducer;
