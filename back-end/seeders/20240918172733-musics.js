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
      {
        name: 'Just Dance',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: true,
      },
      {
        name: 'LoveGame',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: true,
      },
      {
        name: 'Paparazzi',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: true,
      },
      {
        name: 'Poker Face',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: true,
      },
      {
        name: 'Eh, Eh (Nothing Else I Can Say)',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: true,
      },
      {
        name: 'Beautiful, Dirty, Rich',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: true,
      },
      {
        name: 'The Fame',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: true,
      },
      {
        name: 'Money Honey',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: true,
      },
      {
        name: 'Starstruck (com Space Cowboy & Flo Rida)',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: true,
      },
      {
        name: 'Boys Boys Boys',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: true,
      },
      {
        name: 'Paper Gangsta',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: true,
      },
      {
        name: 'Summerboy',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: true,
      },
      {
        name: 'Disco Heaven',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: true,
      },
      {
        name: 'Retro, Dance, Freak',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: true,
      },
      {
        name: 'Certamente essa música não existe no álbum',
        artist: 'Lady Gaga',
        launch_date: new Date('2008-08-19'),
        album_id: 2,
        active: false,
      },
      {
        name: 'Música Inativa',
        artist: 'VS Code',
        launch_date: new Date('2008-08-19'),
        album_id: 3,
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
    await queryInterface.bulkDelete('Musics', null, {});
  },
};
