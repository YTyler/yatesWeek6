export class DocRequest {
  async getBySymptom(symptom) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=45%2C-122.413%2C100&user_location=45%2C-122.413&skip=0&limit=15&user_key=${process.env.API_KEY}`);
      let jsonResponse = await response.json();
      return jsonResponse;
    } catch(error) {
      //Return error to UI
    }
  }

  async getByName(name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45%2C-122.413%2C100&user_location=45%2C-122.413&skip=0&limit=15&user_key=${process.env.API_KEY}`);
      let jsonResponse = await response.json();
      return jsonResponse;
    } catch(error) {
      //Return Error to UI
    }
  }

}
