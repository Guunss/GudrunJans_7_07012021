const express = require("express");
const multer = require("../middleware/multer-config");

const authCtrl = require("../controllers/auth.controller");

const router = express.Router();

router.post("/signup", multer, authCtrl.createUser);
router.post("/login", authCtrl.login);

module.exports = router;
