const express = require("express");
const multer = require("../middleware/multer-config");

const postCtrl = require("../controllers/post.controller");

const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, postCtrl.getAllPosts);
router.post("/", auth, multer, postCtrl.createPost);
router.get("/:id", auth, postCtrl.getPost);

module.exports = router;
