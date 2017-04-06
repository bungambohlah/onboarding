module.exports = (sequelize, DataTypes) => {
  const Phonebook = sequelize.define('Phonebook', {
    namaKontak: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    noTelp: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Phonebook.belongsTo(models.User, {
            foreignKey: 'userId',
        });
      }
    }
  });
  return Phonebook;
};
