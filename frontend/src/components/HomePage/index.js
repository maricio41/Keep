import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotes } from "../../store/notes";
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
    dispatch(getUserNotes(user.id));
  }, [noteLength, dispatch]);

  return (
    <section id="homepage-section">
      <div className="hp-sidebar">
        <SideBar />
      </div>
      <div className="hp-">
        <NoteForm />
      </div>
      <div className="homepage-container">
        {notes?.map((notes) => (
          <div className="note-card">
            <div className="note-title">{notes.title}</div>
            <div className="note-content">{notes.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
