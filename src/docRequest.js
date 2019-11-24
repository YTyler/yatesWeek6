export class docRequest {
  constructor(name = '', symptom = '') {
    this.name = name;
    this.symptom = symptom;
  }
  async getBySymptom() {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${this.symptom}&location=45%2C-122.413%2C100&user_location=45%2C-122.413&skip=0&limit=10&user_key=346868505cdd12747ecbb4e03d6bea4c`); //insert api call and call parameters
      let jsonResponse = await response.json();
      return jsonResponse;
    } catch(error) {
      //Return error to UI
    }
  }

  async getByName() {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${this.name}&location=45%2C-122.413%2C100&user_location=45%2C-122.413&skip=0&limit=10&user_key=346868505cdd12747ecbb4e03d6bea4c
`); //insert response by doctor Name
      let jsonResponse = await response.json();
      return jsonResponse;
    } catch(error) {
      //Return Error to UI
    }
  }

}
