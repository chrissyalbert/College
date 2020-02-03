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
      str += queryString.stringify(obj[key], {arrayFormat: 'comma'}, {skipNull: true});
      console.log(str);
      string += str;
    }
    //console.log(string);
  }
  querystring += string;
  //if (additional search parameters) {}
  /*
{encode: false},

  querystring += `&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year`;
  */
  //if (program&degree) {}
  return querystring;
};

export function moreInfoQueryString(obj) {
  let querystring = "?";
  querystring += queryString.stringify(apiObject);
  querystring += '&';
  querystring += queryString.stringify(obj);

  //TODO update the following string to include more possible info
  //querystring += `&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year,latest.programs.cip_4_digit`;
  return querystring;
}


/*
latest.cost.net_price.consumer.by_income_level.0-30000,latest.cost.net_price.consumer.by_income_level.30001-48000,latest.cost.net_price.consumer.by_income_level.48001-75000,latest.cost.net_price.consumer.by_income_level.75001-110000,latest.cost.net_price.consumer.by_income_level.110001-plus,latest.programs.cip_4_digit.credential.level

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

 
http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&id=110653&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year,latest.cost.net_price.consumer,latest.programs.cip_4_digit

latest.programs.cip_4_digit.credential.level

http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&id=166629

http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&id=483443

http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&id=166027

http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&school.name=Metro%20State%20College&_fields=id&_fields=school.name&_fields=school.school_url&_fields=school.city&_fields=school.state&_fields=school.price_calculator_url&_fields=latest.admissions.admission_rate.overall&_fields=latest.admissions.sat_scores.average.overall&_fields=latest.student.size&_fields=latest.cost.attendance.academic_year&_fields=latest.cost.attendance.program_year&per_page=24

http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&latest.academics.program.certificate_lt_2_yr.mechanic_repair_technology=2&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year


http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&school.state_fips=2,4&degrees_awarded.highest=3&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year

http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&school.region_id=0&school.state_fips=4&school.degree_urbanization=1&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year
*/