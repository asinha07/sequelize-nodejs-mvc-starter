module.exports = (sequelize, DataTypes) => {
    var Users = sequelize.define('users', {
      id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true,},
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      picture_link: DataTypes.STRING,
      sex: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      age: DataTypes.INTEGER,
      isLogin : DataTypes.INTEGER
    },{
      timestamps: false
    });
  
    return Users;
  };