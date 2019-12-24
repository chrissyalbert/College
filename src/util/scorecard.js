import { completeQueryString } from '../util/querystring';

const axios = require('axios');
const baseUrl = 'http://api.data.gov/ed/collegescorecard/v1/schools'; 


export const Scorecard = {
  search(obj) {
    let querystring = completeQueryString(obj);
      //console.log(`${baseUrl}${querystring}`);
      console.log(querystring);
      return axios.get(`${baseUrl}${querystring}`)
        .then(data => {
          //console.log(data.data);
          
          return data.data.results.map(university => ({
            id: university.id,
            name: university["school.name"],
            city: university["school.city"],
            state: university["school.state"],
            URL: university["school.school_url"],
            size: university["latest.student.size"],
            "School Price Calculator": university["school.price_calculator_url"],
            "Average SAT score": university["latest.admissions.sat_scores.average.overall"],
            "Admission Rate": university["latest.admissions.admission_rate.overall"],
            costAcademic: university["latest.cost.attendance.academic_year"],
            costProgram: university["latest.cost.attendance.program_year"]
          }));
          
        })
        .catch(error => console.error(error));
  }
  
};

// const scorecardUrbanInstitute = "https://educationdata.urban.org/api/v1/college-university/scorecard/institutional-characteristics/2000/";
// const ipedsUrbanInstitute = 'https://educationdata.urban.org/api/v1/college-university/ipeds/institutional-characteristics/1990/';
/*

*/
/*  
*/

