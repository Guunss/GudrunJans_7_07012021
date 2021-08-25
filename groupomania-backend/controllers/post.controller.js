const { models } = require("../models");

exports.getAllPosts = (req, res, next) => {
  models.post
    .findAll({ include: models.user })
    .then((posts) => {
      res.status(200).json(
        posts.map((post) => {
          return {
            id: post.id,
            titre: post.titre,
            imageUrl: post.image,
            pseudo: post.user.pseudo,
            photoProfile: post.user.image,
          };
        })
      );
    })
    .catch((error) => res.status(404).json({ error }));
};

exports.createPost = (req, res, next) => {
  const post = {
    titre: req.body.titre,
    image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    userId: req.body.userId,
  };
  models.post
    .create(post)
    .then((posts) => {
      res.status(201).json({ message: "Post créé !" });
    })
    .catch((error) => res.status(404).json({ error }));
};

exports.getPost = (req, res, next) => {
  models.post
    .findByPk(req.params.id, {
      include: [
        models.user,
        {
          model: models.comment,
          include: models.user,
        },
      ],
    })
    .then((post) => {
      res.status(200).json({
        id: post.id,
        titre: post.titre,
        imageUrl: post.image,
        pseudo: post.user.pseudo,
        photoProfile: post.user.image,
        comments: post.comments.map((comment) => {
          return {
            comment: comment.comment,
            id: comment.id,
            pseudo: comment.user.pseudo,
            photoProfile: comment.user.image,
            date: comment.createdAt,
          };
        }),
      });
    })
    .catch((error) => res.status(404).json({ error }));
};
