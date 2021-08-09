import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserNote } from "../../store/notes";
import Button from "@material-ui/core/Button";
import "./NoteForm.css";

const NoteForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPinned, setIsPinned] = useState(false);

  const reset = () => {
    setTitle("");
    setContent("");
    setIsPinned(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserNote({ title, content, isPinned, userId: user.id }));
    reset();
  };
  return (
    <section>
      <div>
        <form onSubmit={handleSubmit}>
          {isPinned && (
            <button type="button" onClick={() => setIsPinned(false)}>
              Unpin Note
            </button>
          )}
          {!isPinned && (
            <button type="button" onClick={() => setIsPinned(true)}>
              Pin Note
            </button>
          )}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Take a note"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
          <Button type="submit">Close</Button>
        </form>
      </div>
    </section>
  );
};

export default NoteForm;
