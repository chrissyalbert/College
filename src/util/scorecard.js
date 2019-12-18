import { completeQueryString } from '../util/querystring';

const axios = require('axios');
const baseUrl = 'http://api.data.gov/ed/collegescorecard/v1/schools'; 

//Scoredcard is a class
export const Scorecard = {
  search(...params) {
    let querystring = completeQueryString(params);
      //console.log(`${baseUrl}${querystring}`);
      console.log(querystring);
      return axios.get(`${baseUrl}${querystring}`)
        .then(data => {
          console.log(data.data.results);
          return data.data.results.map(university => ({
            id: university.id,
            name: university.name,
           // city: university.school.city,
            //state: university.school.state,
            //URL: university.school.school_url,
            //size: university.latest.student.size,
            //"School Price Calculator": university.school.price_calculator_url,
           // "Average SAT score": university.latest.admissions.sat_scores.average.overall 
          }));
          
        })
        .catch(error => console.error(error));
      //let cost = university.latest.cost.attendance.academic_year ? university.latest.cost.attendance.academic_year : university.latest.cost.attendance.program_year;
      //let admissions = Math.round(university.latest.admissions.admission_rate.overall * 100) + '%';
      //cost: cost,
      //"Admission Rate": admissions,
   
  }
  
};

/*
.then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));

          */
// const scorecardUrbanInstitute = "https://educationdata.urban.org/api/v1/college-university/scorecard/institutional-characteristics/2000/";
// const ipedsUrbanInstitute = 'https://educationdata.urban.org/api/v1/college-university/ipeds/institutional-characteristics/1990/';
/*
const instance = axios.create({
  baseURL: baseUrl,
});

export const schoolGetter = function(params = {}) {
  return instance({
    params:{
      api_key: apiKey,
      ...params
    }
  });
};
*/
/*  */


// return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);
// http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&school.degrees_awarded.predominant=2,3&fields=id,school.name,2013.student.size

