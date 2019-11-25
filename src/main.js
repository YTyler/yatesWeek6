import $ from 'jquery';
import { DocRequest } from './docRequest.js';

$(document).ready(function() {
  $('.doctor').submit( (e) => {
    e.preventDefault();
      
  });

  $('.symptom').submit( (e) => {
    e.preventDefault();

  });

});
