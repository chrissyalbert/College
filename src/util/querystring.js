import { apiObject } from "./apiKey";
const queryString = require('query-string');

//expects an object for an argument
export function completeQueryString(obj) {
  let querystring = "?";
  querystring += queryString.stringify(apiObject);
  let string = "";
  for (const key in obj) {
    if (obj[key]) {
      let str = "&";
      str += queryString.stringify(obj[key], {arrayFormat: 'comma'}, {encode: false}, {skipNull: true});
      console.log(str);
      string += str;
    }
    
    console.log(string);
  }
  querystring += string;
  //if (program&degree) {}
  querystring += `&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year`;
  //if (program&degree) {}
  return querystring;
};


/*
function singleQueryString(params) {
  let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  console.log(queryString);
  return queryString;
}
*/
/*

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

http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&school.degrees_awarded.predominant=2,3&&fields=id,school.name,2013.student.size


http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&school.state_fips=2,4&degrees_awarded.highest=3&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year

http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&school.region_id=0&school.state_fips=4&school.degree_urbanization=1&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year
*/