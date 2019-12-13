import { completeQueryString } from '../util/querystring';

const axios = require('axios');
const baseUrl = 'http://api.data.gov/ed/collegescorecard/v1/schools'; 
const apiKey = 'fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr';
const apiObject = {api_key: apiKey}

//Scoredcard is a class
export const Scorecard = {
  search(...params) {
    let querystring = completeQueryString(...params);
    
  }
  
};
//const queryApiKey = 'api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr';
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

