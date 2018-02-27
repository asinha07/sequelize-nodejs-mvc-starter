
module.exports = (sequelize, DataTypes) => {
  var Test = sequelize.define('tests', {
    body: DataTypes.STRING,
    createdAt: DataTypes.DATE
  },{
    timestamps: false
  });

  return Test;
};