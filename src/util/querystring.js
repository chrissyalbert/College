import { apiObject } from "./apiKey";
const queryString = require('query-string');
/*
function singleQueryString(params) {
  let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  console.log(queryString);
  return queryString;
}
*/
/*
const qs = require('qs');
function singleQueryString(...array) {
  let query = "";
  array.map(element => {
    let querystring = qs.stringify(element, {arrayFormat: 'comma'}, {encode: false});
    query += querystring;
    console.log(querystring);
  });
  console.log(query);
  return query;
}
*/
/*
function singleQueryString(arr) {
  let querystring = "";
  arr = arr[0];
  console.log(arr);
  arr.forEach(element => {
      let qs = queryString.stringify(element, {arrayFormat: 'comma'}, {encode: false}, {skipNull: true});
      //qs = decodeURIComponent(qs);
      querystring += qs;
  });
  console.log(querystring);
  return querystring;
  
}
*/

//expects an array for an argument
export function completeQueryString(array) {
  let querystring = "?";
  querystring += queryString.stringify(apiObject);
  array.forEach(element => {
    //substituting new function
    element.forEach(obj => {
      let str = queryString.stringify(obj);
      querystring += `&${str}`;
    });
    
    querystring += `&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year`;
  });
  
  return querystring;
};


