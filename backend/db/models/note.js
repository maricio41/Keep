"use strict";
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    "Note",
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      isPinned: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Note.associate = function (models) {
    Note.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Note;
};
