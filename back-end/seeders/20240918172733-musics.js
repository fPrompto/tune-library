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

    await queryInterface.bulkInsert('Musics', [
      {
        name: 'Nightmare',
        artist: 'Avenged Sevenfold',
        launch_date: new Date('2010-07-27'),
        album_id: 1,
        active: true,
      },
      {
        name: 'Welcome to the Family',
        artist: 'Avenged Sevenfold',
        launch_date: new Date('2010-07-27'),
        album_id: 1,
        active: true,
      },
      {
        name: 'Danger Line',
        artist: 'Avenged Sevenfold',
        launch_date: new Date('2010-07-27'),
        album_id: 1,
        active: true,
      },
      {
        name: 'Buried Alive',
        artist: 'Avenged Sevenfold',
        launch_date: new Date('2010-07-27'),
        album_id: 1,
        active: true,
      },
      {
        name: 'Natural Born Killer',
        artist: 'Avenged Sevenfold',
        launch_date: new Date('2010-07-27'),
        album_id: 1,
        active: true,
      },
      {
        name: 'So Far Away',
        artist: 'Avenged Sevenfold',
        launch_date: new Date('2010-07-27'),
        album_id: 1,
        active: true,
      },
      {
        name: 'God Hates Us',
        artist: 'Avenged Sevenfold',
        launch_date: new Date('2010-07-27'),
        album_id: 1,
        active: true,
      },
      {
        name: 'Victim',
        artist: 'Avenged Sevenfold',
        launch_date: new Date('2010-07-27'),
        album_id: 1,
        active: true,
      },
      {
        name: 'Tonight the World Dies',
        artist: 'Avenged Sevenfold',
        launch_date: new Date('2010-07-27'),
        album_id: 1,
        active: true,
      },
      {
        name: 'Fiction',
        artist: 'Avenged Sevenfold',
        launch_date: new Date('2010-07-27'),
        album_id: 1,
        active: true,
      },
      {
        name: 'Save Me',
        artist: 'Avenged Sevenfold',
        launch_date: new Date('2010-07-27'),
        album_id: 1,
        active: true,
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
    await queryInterface.bulkDelete('Musics', null, {});
  },
};
