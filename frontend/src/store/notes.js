import { csrfFetch } from "./csrf";

const GET_NOTES = "notes/GET_NOTES";
const ADD_NOTE = "notes/ADD_NOTE";
const PATCH_NOTE = "notes/PATCH_NOTE";

const setNotes = (notes) => {
  return {
    type: GET_NOTES,
    payload: notes,
  };
};

const setNote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};
const patchNote = (note) => {
  return {
    type: PATCH_NOTE,
    payload: note,
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

export const addUserNote =
  ({ title, content, isPinned, userId }) =>
  async (dispatch) => {
    const response = await csrfFetch(`/api/notes/`, {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
        isPinned,
        userId,
      }),
    });
    if (!response.ok) {
      throw response;
    } else {
      const note = await response.json();
      dispatch(setNote(note));
    }
  };

export const pinNote = (noteId) => async (dispatch) => {
  const response = await csrfFetch(`/api/notes/pin`, {
    method: "PATCH",
    body: JSON.stringify({ noteId }),
  });
  if (!response.ok) {
    throw response;
  } else {
    console.log("Dispatching pinNote");
    const note = await response.json();
    dispatch(patchNote(note));
  }
};

export const unPinNote = (noteId) => async (dispatch) => {
  const response = await csrfFetch(`/api/notes/unpin`, {
    method: "PATCH",
    body: JSON.stringify({ noteId }),
  });
  if (!response.ok) {
    throw response;
  } else {
    console.log("Dispatching unPinNote");
    const note = await response.json();
    dispatch(patchNote(note));
  }
};

const initialState = { notes: null, pinned: null };

const notesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_NOTES:
      // newState = Object.assign({}, state);
      newState = { ...state };

      newState.notes = action.payload;
      return newState;
    case ADD_NOTE:
      newState = Object.assign({}, state);
      if (!newState.notes) {
        newState.notes = [];
      }
      newState.notes.push(action.payload);
      return newState;
    case PATCH_NOTE:
      newState = Object.assign({}, state);
      newState.notes.forEach((note, index) => {
        if (note.id === action.payload.id) {
          newState.notes[index] = action.payload;
          console.log(action.payload);
        }
      });
      return newState;
    default:
      return state;
  }
};

export default notesReducer;
