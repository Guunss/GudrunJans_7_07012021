function applyExtraSetup(sequelize) {
  const { post, user, comment } = sequelize.models;

  user.hasMany(post, { onDelete: "cascade", hooks: true });
  post.belongsTo(user);

  user.hasMany(comment, { onDelete: "cascade", hooks: true });
  comment.belongsTo(user);

  post.hasMany(comment);
  comment.belongsTo(post);
}

module.exports = { applyExtraSetup };
