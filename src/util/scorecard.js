import { completeQueryString, moreInfoQueryString } from '../util/querystring';

const axios = require('axios');
const baseUrl = 'http://api.data.gov/ed/collegescorecard/v1/schools'; 



export const Scorecard = {
  search(obj) {
    let querystring = completeQueryString(obj);
      //console.log(`${baseUrl}${querystring}`);
      console.log(querystring);
      return axios.get(`${baseUrl}${querystring}`)
        .then(data => {
          //array of objects
          console.log(data.data.results);
          return data.data.results.map(university => ({
            id: university.id,
            name: university["school.name"],
            city: university["school.city"],
            state: university["school.state"],
            URL: university["school.school_url"],
            size: university["latest.student.size"],
            "Admission Rate": university["latest.admissions.admission_rate.overall"],
            costAcademic: university["latest.cost.attendance.academic_year"],
            costProgram: university["latest.cost.attendance.program_year"]
          }));
        })
        .catch(error => console.error(error));
  },
  moreInfoSearch(obj) {
    let querystring = moreInfoQueryString(obj);
    console.log(querystring);
      return axios.get(`${baseUrl}${querystring}`)
        .then(data => {
          //array of one object
          console.log(data.data.results);
          console.log(data.data.results[0].location);
          console.log(data.data.results[0].latest);
          return data.data.results.map(university => ({
            //update returned data to include more information
            id: university.id,
            name: university.school.name,
            city: university.school.city,
            state: university.school.state,
            URL: university.school.school_url,
            size: university.latest.student.size,
            ownership: university.school.ownership,
            locale: university.school.locale,
            "School Price Calculator": university.school.price_calculator_url,
            "Average SAT score": university.latest.admissions.sat_scores.average.overall,
            "Average ACT score": university.latest.admissions.act_scores.midpoint.cumulative,
            "Admission Rate": university.latest.admissions.admission_rate.overall,
            costAcademic: university.latest.cost.attendance.academic_year,
            costProgram: university.latest.cost.attendance.program_year,
            "Graduation Rate": university.latest.completion.rate_suppressed.overall,
            longitude: university.location.lon,
            latitude: university.location.lat
          }));
        })
        .catch(error => console.error(error));
  }
};


    /*
,

  moreInfoSearch(obj) {
    let querystring = completeQueryString(obj);
  }

    if obj
    */

// const scorecardUrbanInstitute = "https://educationdata.urban.org/api/v1/college-university/scorecard/institutional-characteristics/2000/";
// const ipedsUrbanInstitute = 'https://educationdata.urban.org/api/v1/college-university/ipeds/institutional-characteristics/1990/';
/*

*/
/*  
*/

