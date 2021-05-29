//user
const Sequelize = require('sequelize');
const sequelize = require('../DB connection/connection');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    google_id: {
        type: Sequelize.TEXT
    },
    date_of_birth: {
        type: Sequelize.DATEONLY,
    },
    gender: {
        type: Sequelize.STRING,
    },
    email_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    username: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.TEXT
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
    }
},{
    timestamps: false
})

module.exports = User;