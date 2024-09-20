'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Albums', [
      {
        id: 1,
        name: 'Nightmare',
        artist: 'Avenged Sevenfold',
        launch_date: new Date('2010-07-27'),
        active: true,
      },
      {
        id: 2,
        name: 'The Fame',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19');
        active: true,
      },
      {
        id: 3,
        name: 'Álbum desativado',
        artist: 'Visual Studio Code',
        launch_date: new Date('2022-10-10'),
        active: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Albums', null, {});
  },
};
