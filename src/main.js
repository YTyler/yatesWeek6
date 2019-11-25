import $ from 'jquery';
import { DocRequest } from './docRequest.js';

$(document).ready(function() {

  $('.symptom').submit((e) => {
    e.preventDefault();
    let symptom = $('#symptom').val();
    (async () => {
      let call = new DocRequest();
      const response = await call.getBySymptom(symptom);
      displayElements(response);
    })();
  });

  $('.doctor').submit( (e) => {
    e.preventDefault();
    let doc = $('#name').val();
    (async () => {
      let call = new DocRequest();
      const response = await call.getByName(doc);
      displayElements(response);
    })();
  });

  function displayElements(response) {
    //display list of doctors
  }
});
