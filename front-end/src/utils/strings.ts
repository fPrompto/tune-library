const LOADING = 'Loading...';
const DATE = '2024-09-18T18:23:15.000Z';

export const DEFAULT_ALBUM_DATA = {
  id: 1,
  name: LOADING,
  artist: LOADING,
  launch_date: DATE,
  active: true,
  createdAt: DATE,
  updatedAt: DATE,
  musics: [
    {
      name: LOADING,
      artist: LOADING,
      launch_date: DATE,
      album_id: 1,
      active: true,
    },
    {
      name: LOADING,
      artist: LOADING,
      launch_date: DATE,
      album_id: 1,
      active: true,
    },
  ],
};

export const DEFAULT_MUSIC_DATA = [
  {
    id: 1,
    name: LOADING,
    artist: LOADING,
    launch_date: DATE,
    album_id: 1,
    active: true,
    createdAt: DATE,
    updatedAt: DATE,
    album: {
      id: 1,
      name: LOADING,
      artist: LOADING,
      launch_date: DATE,
      active: true,
    },
  },
  {
    id: 2,
    name: LOADING,
    artist: LOADING,
    launch_date: DATE,
    album_id: 1,
    active: true,
    createdAt: DATE,
    updatedAt: DATE,
    album: {
      id: 1,
      name: LOADING,
      artist: LOADING,
      launch_date: DATE,
      active: true,
    },
  },
  {
    id: 3,
    name: LOADING,
    artist: LOADING,
    launch_date: DATE,
    album_id: 1,
    active: true,
    createdAt: DATE,
    updatedAt: DATE,
    album: {
      id: 1,
      name: LOADING,
      artist: LOADING,
      launch_date: DATE,
      active: true,
    },
  },
];