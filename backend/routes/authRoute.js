const express = require("express");
const router = express.Router();
const {registerController, loginController, testController} = require("../controllers/authController");
const {requireSignIn, isAdmin} = require("../middlewares/authMiddleware");

router.post("/register", registerController);
router.post("/login", loginController)
router.get("/test", requireSignIn, isAdmin, testController)
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

//Admin Protected Route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });


module.exports = router