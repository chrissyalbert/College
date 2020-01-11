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
      //console.log(str);
      string += str;
    }
    //console.log(string);
  }
  querystring += string;
  //change results per page to 24
  querystring += "&"
  querystring += queryString.stringify({"per_page": 24});
  console.log(querystring);
  //if (additional search parameters) {}
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

let test = {"_fields": ["id", "school.name", "school.school_url", "school.city", "school.state", "school.price_calculator_url", "latest.admissions.admission_rate.overall", "latest.admissions.sat_scores.average.overall", "latest.student.size", "latest.cost.attendance.academic_year", "latest.cost.attendance.program_year"]};
    let result = queryString.stringify(test, {arrayFormat: 'comma'}, {encode: false}, {skipNull: true});
    console.log(result);

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

http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&school.region_id=0&per_page=24&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year

http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&latest.academics.program.bachelors.agriculture=1&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year 

http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&latest.academics.program.certificate_lt_2_yr.mechanic_repair_technology=2&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year


http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&school.state_fips=2,4&degrees_awarded.highest=3&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year

http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&school.region_id=0&school.state_fips=4&school.degree_urbanization=1&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year
*/