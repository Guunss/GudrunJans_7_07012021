const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { models } = require("../models");

exports.createUser = (req, res, next) => {
  var strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (!strongRegex.test(req.body.password)) {
    console.log(req.body.password);
    res.status(400).json({ message: "Mot de passe pas assez sécurisé" });
  } else {
    bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        let user = {
          email: req.body.email,
          password: hash,
          pseudo: req.body.pseudo,
        };
        if (req.file) {
          user.image = `${req.protocol}://${req.get("host")}/images/${
            req.file.filename
          }`;
        }
        models.user
          .create(user)
          .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
          .catch((error) => res.status(400).json({ error }));
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error });
      });
  }
};

exports.login = (req, res, next) => {
  models.user
    .findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user.id,
            moderator: user.moderator,
            token: jwt.sign({ userId: user.id }, "pqierhfdkmqzieyhgqsmdwkh", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
