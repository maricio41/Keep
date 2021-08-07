const express = require("express");
const asyncHandler = require("express-async-handler");
const { Note, User } = require("../../db/models");

const router = express.Router();

router.get(
  "/:id(\\d+)/usernotes",
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const notes = await Note.findAll({
      where: {
        userId,
      },
      order: [["createdAt", "asc"]],
      include: User,
    });
    res.json(notes);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { title, content, isPinned } = req.body;
    const { userId } = req.session.auth;
    await Note.create({
      title,
      content,
      isPinned,
      userId,
    });
    const userNotes = await Note.findAll({
      where: {
        userId,
      },
      order: [["createdAt", "asc"]],
    });
    res.json(userNotes);
  })
);

router.patch(
  "/:noteId(\\dt+)/edit",
  asyncHandler(async (req, res) => {
    const { title, content, noteId } = req.body;
    const note = await Note.findByPk(noteId);
    const updatedNote = note.update({
      title: title,
      content: content,
    });
    note.save();
    res.json(updatedNote);
  })
);

router.delete(
  "/:noteId(\\dt+)",
  asyncHandler(async (req, res) => {
    const noteId = parseInt(req.body.noteId);
    const note = await Note.findByPk(noteId);
    await note.destroy();
    res.json({ message: "Deletion Succesful" });
  })
);
module.exports = router;
