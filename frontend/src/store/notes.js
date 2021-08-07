import { csrfFetch } from "./csrf";

const GET_NOTES = "notes/getNotes";

const setNotes = (notes) => {
  return {
    type: GET_NOTES,
    payload: notes,
  };
};

export const getUserNotes = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/notes/$userId`);
  if (!response.ok) {
    throw response;
  }
  const notes = await response.json();
  dispatch(getNotes(notes));
};

const initialState = { notes: null };

const notesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_NOTES:
      newState = Object.assign({}, state);
      newState.notes = action.payload;
    default:
      return state;
  }
};

export default notesReducer;
