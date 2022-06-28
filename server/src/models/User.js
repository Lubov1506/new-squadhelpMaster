'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    static associate (models) {}
  }
  Transactions.init(
    {
      transactionDate: {
        type: DataTypes.DATE
      },
      transactionType: {
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.INTEGER
      },
      transactionSum: {
        type: DataTypes.INTEGER
      },
      status: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Transactions',
      tableName: 'transactions'
    }
  )
  return Transactions
}
