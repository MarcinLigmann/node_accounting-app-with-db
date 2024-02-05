'use strict';

const { sequelize } = require('../db.js');
const { DataTypes } = require('sequelize');

const Expense = sequelize.define('Expenses', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  spentAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  note: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'expenses',
  createdAt: false,
  updatedAt: false,
});

module.exports = {
  Expense,
};
