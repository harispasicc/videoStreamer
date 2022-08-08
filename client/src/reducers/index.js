import authReducer from "./authReducer";
import streamReducer from "./streamReducer";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import getStreamReducer from "./getReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  streams: streamReducer,
  stream: getStreamReducer,
});
