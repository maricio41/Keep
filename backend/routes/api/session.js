const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

//log in route
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });

    if (!user) {
      const err = new Error("Login Failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provide credential were invalid"];
      return next(err);
    }
    await setTokenCookie(res, user);
    return res.json({
      user,
    });
  })
);

//Log out Route
router.delete("/", (_req, res) => {
  res.clearCookie("token");
  return res.json({ message: "success" });
});

//Restore the user session
router.get("/", restoreUser, (req, res) => {
  const { user } = req;
  if (user) {
    return res.json({
      user: user.toSafeObject(),
    });
  } else {
    return res.json({});
  }
});

module.exports = router;
