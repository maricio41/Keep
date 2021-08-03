const router = require("express").Router();
const sessionRouter = require("./session.js");
const userRouter = require("./users.js");

// const asyncHandler = require("express-async-handler");
// const { setTokenCookie } = require("../../utils/auth");
// const { User } = require("../../db/models");
// const { restoreUser } = require("../../utils/auth.js");
// const { requireAuth } = require("../../utils/auth.js");
router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});
router.use("/session", sessionRouter);

router.use("/users", userRouter);

module.exports = router;
