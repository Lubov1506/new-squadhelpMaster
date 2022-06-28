'use strict'
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate ({User}) {
      Transaction.belongsTo(User, {
        foreignKey: 'userId'
      })
    }
  }
  Transaction.init(
    {
      userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      amount: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      }
    },
    {
      sequelize,
      modelName: 'Transaction',
      tableName: 'transactions',
      underscored: true,
      timestamps: false
    }
  )
  return Transaction
}
