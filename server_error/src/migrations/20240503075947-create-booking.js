'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Bookings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
                // tạm thời id để default tăng theo thứ tự
                // sau này làm gần xong thì mình sẽ chuyển nó thành UUID

            },
            name: {
                type: Sequelize.STRING,
                // unique: true,
                allowNull: false
            },
            phone: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            date: {
                type: Sequelize.DATE,
                allowNullL: false
            },
            hour: {
                type: Sequelize.STRING
            },
            appointmentTime: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Bookings');
    }
};