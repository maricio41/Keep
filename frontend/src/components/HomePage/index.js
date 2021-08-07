import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotes } from "../../store/notes";

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

  return <section id="homepage-container"></section>;
};

export default HomePage;
