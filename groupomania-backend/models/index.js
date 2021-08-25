const { Sequelize } = require("sequelize");
const { applyExtraSetup } = require("./extra-setup");

const sequelize = new Sequelize("groupomania", "groupomania", "groupomania", {
  host: "localhost",
  dialect: "mysql",
  logQueryParameters: true,
  benchmark: true,
});

const modelDefiners = [
  require("./user.model"),
  require("./post.model"),
  require("./comment.model"),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
