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
        reject(new Error('Failed to fetch album data'));
      },
    });
  });
};
