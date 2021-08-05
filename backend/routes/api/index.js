const router = require("express").Router();
const sessionRouter = require("./session");
const userRouter = require("./users");
const noteRouter = require("./notes");

// const asyncHandler = require("express-async-handler");
// const { setTokenCookie } = require("../../utils/auth");
// const { User } = require("../../db/models");
// const { restoreUser } = require("../../utils/auth.js");
// const { requireAuth } = require("../../utils/auth.js");

router.use("/session", sessionRouter);

router.use("/users", userRouter);

router.use("/notes", noteRouter);

module.exports = router;
