import $ from 'jquery';
import { BACKEND_URL } from '@/config/config';

export const getAlbumData = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${BACKEND_URL}/album/find/active`,
      type: 'GET',
      dataType: 'json',
      success: function (response) {
        console.log('data: ', response);
        resolve(response);
      },
      error: function (_jqXHR, textStatus, errorThrown) {
        console.error('error: ', textStatus, errorThrown);
        reject(new Error('failed to fetch album data'));
      },
    });
  });
};

export const getAlbumDataById = (id: string) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${BACKEND_URL}/album/find/id/${id}`,
      type: 'GET',
      dataType: 'json',
      success: function (response) {
        console.log('data: ', response);
        resolve(response);
      },
      error: function (_jqXHR, textStatus, errorThrown) {
        console.error('error: ', textStatus, errorThrown);
        reject(new Error('failed to fetch album data'));
      },
    });
  });
};

export const getAllMusics = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${BACKEND_URL}/music/find/all`,
      type: 'GET',
      dataType: 'json',
      success: function (response) {
        console.log('data: ', response);
        resolve(response);
      },
      error: function (_jqXHR, textStatus, errorThrown) {
        console.error('error: ', textStatus, errorThrown);
        reject(new Error('failed to fetch music data'));
      },
    });
  });
};

export const updateAlbum = ({ id, name, artist, launch_date, active }) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${BACKEND_URL}/album/update`,
      type: 'PUT',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({ id, name, artist, launch_date, active }),
      success: function (response) {
        console.log('data: ', response);
        resolve(response);
      },
      error: function (_jqXHR, textStatus, errorThrown) {
        console.error('error: ', textStatus, errorThrown);
        reject(new Error('failed to fetch album data'));
      },
    });
  });
};

export const getMusicById = (id: string) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${BACKEND_URL}/music/find/id/${id}`,
      type: 'GET',
      dataType: 'json',
      success: function (response) {
        console.log('data: ', response);
        resolve(response);
      },
      error: function (_jqXHR, textStatus, errorThrown) {
        console.error('error: ', textStatus, errorThrown);
        reject(new Error('failed to fetch album data'));
      },
    });
  });
};

export const updateMusic = ({
  id,
  name,
  artist,
  launch_date,
  album_id,
  active,
}) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${BACKEND_URL}/music/update`,
      type: 'PUT',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({ id, name, artist, launch_date, album_id, active }),
      success: function (response) {
        console.log('data: ', response);
        resolve(response);
      },
      error: function (_jqXHR, textStatus, errorThrown) {
        console.error('error: ', textStatus, errorThrown);
        reject(new Error('failed to fetch music data'));
      },
    });
  });
};

export const createMusic = ({
  id,
  name,
  artist,
  launch_date,
  album_id,
  active,
}) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${BACKEND_URL}/music/create`,
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({ id, name, artist, launch_date, album_id, active }),
      success: function (response) {
        console.log('data: ', response);
        resolve(response);
      },
      error: function (_jqXHR, textStatus, errorThrown) {
        console.error('error: ', textStatus, errorThrown);
        reject(new Error('failed to fetch music data'));
      },
    });
  });
};

export const createAlbum = ({
  id,
  name,
  artist,
  launch_date,
  active,
}) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${BACKEND_URL}/album/create`,
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({ name, artist, launch_date, active }),
      success: function (response) {
        console.log('data: ', response);
        resolve(response);
      },
      error: function (_jqXHR, textStatus, errorThrown) {
        console.error('error: ', textStatus, errorThrown);
        reject(new Error('failed to fetch music data'));
      },
    });
  });
};
