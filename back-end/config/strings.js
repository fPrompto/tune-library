const ROUTE = {
  MUSIC: '/music',
};

const MUSIC_ROUTE = {
  FIND: {
    ALL: '/find/all',
    ACTIVE: '/find/active',
    ID: '/find/id/:id',
  },
  CREATE: '/create',
  UPDATE: '/update',
};

const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  IM_A_TEAPOT: 418,
  SERVER_ERROR: 500,
};

module.exports = {
  ROUTE,
  MUSIC_ROUTE,
  STATUS_CODE,
};
