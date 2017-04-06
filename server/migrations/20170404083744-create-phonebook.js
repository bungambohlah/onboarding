module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Phonebooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaKontak: {
        type: Sequelize.STRING
      },
      noTelp: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
          type: Sequelize.INTEGER,
          references: {
              model: 'Users',
              key: 'id',
              as: 'userId',
          },
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Phonebooks'),
};
