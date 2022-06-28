module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('transactions', {
         userId: {
            field: 'user_id',
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
              model: 'users',
              key: 'id'
            }
          },
         id:    {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        date: {
          allowNull: false,
          type: Sequelize.DATE
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING
        },
        amount: {
          allowNull: false,
          type: Sequelize.FLOAT
        },
        status: {
          allowNull: false,
          type: Sequelize.BOOLEAN
        }
      })
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('transactions')
    }
  }
  