const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, restorUser } = require("../../utils/auth");
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

module.exports = router;
