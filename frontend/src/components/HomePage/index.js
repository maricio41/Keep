import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotes } from "../../store/notes";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const user = useSelector((state) => state.session.user);

  console.log(notes);

  useEffect(() => {
    if (!user) {
      return;
    }
    dispatch(getUserNotes(user.id));
  }, [dispatch]);

  return (
    <section id="homepage-section">
      <div className="homepage-container">
        {notes?.notes.map((note) => (
          <div className="note-card">
            <div className="note-title">{note.title}</div>
            <div className="note-content">{note.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
