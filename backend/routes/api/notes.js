const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
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
  requireAuth,
  asyncHandler(async (req, res) => {
    const { title, content, isPinned, userId } = req.body;

    const newNote = await Note.create({
      title,
      content,
      isPinned,
      userId,
    });
    // const userNotes = await Note.findAll({
    //   where: {
    //     userId,
    //   },
    //   order: [["createdAt", "asc"]],
    // });
    res.json(newNote);
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

router.patch(
  "/pin",
  asyncHandler(async (req, res) => {
    const noteId = req.body.noteId;
    const note = await Note.findByPk(noteId);
    note.isPinned = true;
    await note.save();
    res.json(note);
  })
);
router.patch(
  "/unpin",
  asyncHandler(async (req, res) => {
    const noteId = req.body.noteId;
    const note = await Note.findByPk(noteId);
    note.isPinned = false;
    await note.save();
    res.json(note);
  })
);

module.exports = router;
