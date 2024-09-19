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
        reject(new Error('failed to fetch album data'));
      },
    });
  });
};
