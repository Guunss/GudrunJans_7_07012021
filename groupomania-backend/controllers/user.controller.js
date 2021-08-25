const jwt = require("jsonwebtoken");

const { models } = require("../models");

exports.getUser = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "pqierhfdkmqzieyhgqsmdwkh");
  const userId = decodedToken.userId;
  models.user
    .findByPk(userId)
    .then((user) =>
      res.status(200).json({
        email: user.email,
      })
    )
    .catch((error) => res.status(404).json({ error }));
};

exports.deleteUser = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "pqierhfdkmqzieyhgqsmdwkh");
  const userId = decodedToken.userId;
  models.user
    .destroy({
      where: {
        id: userId,
      },
    })
    .then(() => res.status(202).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(404).json({ error }));
};
