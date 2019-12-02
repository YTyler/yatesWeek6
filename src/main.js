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
    const docOutput = $('#docOutput');
    docOutput.html('');
    for (let i = 0; i < output.data.length; i++) {
      //display doctor first names and last names
      docOutput.append(`
        <u>Result ${i+1}</u>
        <br>
        First Name: ${output.data[i].profile.first_name} <br>
        Last Name: ${output.data[i].profile.last_name} <br>
        <br>
        `);
        for (let j = 0; j < output.data[i].practices.length; j++) {
          if (output.data[i].practices[j].within_search_area === true) {
            docOutput.append(`
              Practice Title: ${output.data[i].practices[j].name} <br>
              Address:
              ${output.data[i].practices[j].visit_address.street}
              ${output.data[i].practices[j].visit_address.city},
              ${output.data[i].practices[j].visit_address.state}
              ${output.data[i].practices[j].visit_address.zip} <br>
              Phone Number: ${output.data[i].practices[j].phones[0].number} <br>
              Website: ${output.data[i].practices[j].visit_address.website} <br>
              <br>
              `);
              if (output.data[i].practices[j].accepts_new_patients) {
                docOutput.append(`
                  Accepting New Patients <br>
                  <br>
                  `);
                } else {
                  docOutput.append(`
                    Not accepting New Patients <br>
                    <br>
                    `);
                  }
                }
              }
            }
          };

        });
