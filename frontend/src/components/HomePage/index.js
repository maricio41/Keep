import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotes } from "../../store/notes";
import SideBar from "../SideBar";
import NoteForm from "../NoteForm";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
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
      <SideBar />
      <NoteForm />
      <div className="homepage-container">
        {notes?.map((notes) => (
          <div>{notes.title}</div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
