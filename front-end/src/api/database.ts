import $ from 'jquery';
import { BACKEND_URL } from '@/config/config';

export const getData = (endpoint: string) => {
  $.ajax({
    url: BACKEND_URL + endpoint,
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function (response) {
      console.log('data: ', response);
      return response;
    },
    error: function (_jqXHR, textStatus, errorThrown) {
      console.error('error: ', textStatus, errorThrown);
      return false;
    },
  });
};
