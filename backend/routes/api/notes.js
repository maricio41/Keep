const express = require("express");
const asyncHandler = require("express-async-handler");
const { Note, User } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const user = await User.findbyPk();
    const notes = await Note.findAll({
      //   where: {
      //     userId,
      //   },
      //   include: User,
    });
    res.json(notes);
  })
);

module.exports = router;
