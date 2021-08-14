import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotes, pinNote, unPinNote } from "../../store/notes";
import SideBar from "../SideBar";
import NoteForm from "../NoteForm";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const noteLength = useSelector((state) => state.notes.notes?.length);
  const user = useSelector((state) => state.session.user);

  console.log(notes);

  useEffect(() => {
    if (!user) {
      return;
    }
    if (!notes) {
      dispatch(getUserNotes(user.id));
    }
  }, [notes]);

  const handlePin = (noteId) => {
    dispatch(pinNote(noteId));
    dispatch(getUserNotes(user.id));
  };

  const handleUnPin = (noteId) => {
    dispatch(unPinNote(noteId));
    dispatch(getUserNotes(user.id));
  };
  return (
    <section id="homepage-section">
      <div className="hp-noteform">
        <NoteForm />
      </div>
      <div className="homepage-container">
        {notes?.map((note) => (
          <div className="note-card">
            {note.isPinned && (
              <button type="button" onClick={() => handleUnPin(note.id)}>
                Unpin Note
              </button>
            )}
            {!note.isPinned && (
              <button type="button" onClick={() => handlePin(note.id)}>
                Pin Note
              </button>
            )}
            <div className="note-title">{note.title}</div>
            <div className="note-content">{note.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
