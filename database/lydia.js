/* Copyright (C) 2021 Aqua Snake 

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

CyberBot - Aqua Snake 


const config = require('../../config');
const { DataTypes } = require('sequelize');

const LydiaDB = config.DATABASE.define('Lydia', {
    session_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expires: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    users: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = { LydiaDB: LydiaDB };
*/
