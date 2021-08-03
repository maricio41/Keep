const router = require("express").Router();
const sessionRouter = require("./seesion.js");
const userRouter = require("./users.js");

// const asyncHandler = require("express-async-handler");
// const { setTokenCookie } = require("../../utils/auth");
// const { User } = require("../../db/models");
// const { restoreUser } = require("../../utils/auth.js");
// const { requireAuth } = require("../../utils/auth.js");

router.use("./session", sessionRouter);

router.use("/users", usersRouter);

module.exports = router;
