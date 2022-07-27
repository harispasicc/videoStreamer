import {
  LOG_IN,
  LOG_OUT,
  FETCH_LIST_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  DELETE_STREAM,
} from "./types";
import streams from "../apis/streams";

export const signIn = userId => {
  return {
    type: LOG_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const fetchStreams = () => async dispatch => {
  try {
    const res = await streams.get("/streams");
    dispatch({
      type: FETCH_LIST_STREAMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createStream = formValues => async (dispatch, getState) => {
  try {
    const { userId } = getState().auth;
    const res = await streams.post("/streams", { ...formValues, userId });
    dispatch({
      type: CREATE_STREAM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editStream = (id, formValues) => {
  try {
    return async dispatch => {
      const res = await streams.patch(`/streams/${id}`, formValues);
      dispatch({
        type: EDIT_STREAM,
        payload: res.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const fetchStream = id => async dispatch => {
  try {
    const res = await streams.get(`/streams/${id}`);
    dispatch({
      type: FETCH_STREAM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteStream = id => {
  try {
    return async dispatch => {
      await streams.delete(`/streams/${id}`);
      dispatch({
        type: DELETE_STREAM,
        payload: id,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
