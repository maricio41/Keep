import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserNote } from "../../store/notes";
import Button from "@material-ui/core/Button";
import ArchiveIcon from "@material-ui/icons/Archive";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
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
      <div className="note-form-container">
        <form className="note-form" onSubmit={handleSubmit}>
          <div className="top-strip">
            <input
              className="title-input"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <div className="pin-btn">
              {isPinned && (
                <button type="button" onClick={() => setIsPinned(false)}>
                  <i class="fa-solid fa-thumbtack"></i>
                </button>
              )}
              {!isPinned && (
                <button type="button" onClick={() => setIsPinned(true)}>
                  <i class="fa-solid fa-thumbtack"></i>
                </button>
              )}
            </div>
          </div>
          <div className="content-box">
            <input
              className="content-input"
              type="text"
              placeholder="Take a note....."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></input>
          </div>
          <div className="bottom-strip">
            <div className="icon-container">
              <div>x</div>
              <div>x</div>
              <div>
                <ArchiveOutlinedIcon></ArchiveOutlinedIcon>
              </div>
            </div>
            <Button type="submit">Close</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NoteForm;
