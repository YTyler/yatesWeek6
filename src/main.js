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

  const displayElements = (output) => { //display doctors
    //check if limited to 10 outputs
    const docOutput = $('#docOutput');
    docOutput.html('');
    for (let i = 0; i < output.data.length; i++) {
      //display doctor first name and last name
      docOutput.append(`
        First Name: ${output.data[i].profile.first_name} <br>
        Last Name: ${output.data[i].profile.last_name} <br>
        <br>
        `);
      //for each practice i
        //if practice within search area === true
          //print "practice #i"
          //display address, phone number, website and whether or not the doctor is accepting new patients

    }

    console.log(output);
  };

});
