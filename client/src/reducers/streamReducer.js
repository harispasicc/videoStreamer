import _ from "lodash";
import {
  FETCH_STREAM,
  FETCH_LIST_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

function streamReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_LIST_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      const { [payload]: omit, ...newState } = state;
      return newState;

    default:
      return state;
  }
}
export default streamReducer;
