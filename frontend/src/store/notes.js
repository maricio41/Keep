import { csrfFetch } from "./csrf";

const GET_NOTES = "notes/GET_NOTES";

const setNotes = (notes) => {
  return {
    type: GET_NOTES,
    payload: notes,
  };
};

export const getUserNotes = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/notes/${userId}/usernotes`);
  if (!response.ok) {
    throw response;
  } else {
    const notes = await response.json();
    dispatch(setNotes(notes));
  }
};

const initialState = { notes: null };

const notesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_NOTES:
      newState = Object.assign({}, state);
      newState.notes = action.payload;
      return newState;
    default:
      return state;
  }
};

export default notesReducer;
