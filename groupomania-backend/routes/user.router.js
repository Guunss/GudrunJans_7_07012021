const express = require("express");

const userCtrl = require("../controllers/user.controller");

const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, userCtrl.getUser);
router.delete("/", auth, userCtrl.deleteUser);

module.exports = router;
