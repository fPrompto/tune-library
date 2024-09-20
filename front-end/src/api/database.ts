import $ from 'jquery';
import { BACKEND_URL } from '@/config/config';
import AlbumI from '@/interfaces/AlbumI';
import MusicI from '@/interfaces/MusicI';
import AlbumWithMusicsI from '@/interfaces/AlbumWithMusicsI';

export const getAlbumData = (): Promise<AlbumI[]> => {
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

export const getAlbumDataById = (id: string): Promise<AlbumWithMusicsI> => {
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

export const getAllMusics = (): Promise<MusicI[]> => {
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

export const updateAlbum = (albumData: AlbumI): Promise<AlbumI> => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${BACKEND_URL}/album/update`,
      type: 'PUT',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(albumData),
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

export const getMusicById = (id: string): Promise<MusicI> => {
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

export const updateMusic = (musicData: MusicI): Promise<MusicI> => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${BACKEND_URL}/music/update`,
      type: 'PUT',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(musicData),
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

export const createMusic = (musicData: MusicI): Promise<MusicI> => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${BACKEND_URL}/music/create`,
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(musicData),
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

export const createAlbum = (albumData: AlbumI): Promise<AlbumI> => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${BACKEND_URL}/album/create`,
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(albumData),
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
