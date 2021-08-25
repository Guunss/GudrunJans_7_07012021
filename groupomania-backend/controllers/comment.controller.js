const { models } = require("../models");

exports.createComment = (req, res, next) => {
  models.comment
    .create({
      comment: req.body.commentaire,
      userId: req.body.userId,
      postId: req.body.postId,
    })
    .then((comment) => {
      res.status(201).json({ message: "Comment créé !" });
    })
    .catch((error) => res.status(500).json({ error }));
};
exports.deleteComment = (req, res, next) => {
  models.comment
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(() => {
      res.status(202).json({ message: "Comment supprimé !" });
    })
    .catch((error) => res.status(500).json({ error }));
};
