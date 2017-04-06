module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        User.hasMany(models.Phonebook, {
            foreignKey: 'userId',
            as: 'phonebookItems',
        })
      }
    }
  });
  return User;
};
