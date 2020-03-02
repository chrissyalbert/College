import { apiObject } from "./apiKey";
const queryString = require('query-string');

//takes in Searchbox state as parameter
export function completeQueryString(obj) {
  let querystring = "?";
  querystring += queryString.stringify(apiObject);
  let string = "";
  //builds api querystring based on each key/value pair in Searchbox object
  for (const key in obj) {
    if (obj[key]) {
      let str = "&";
      str += queryString.stringify(obj[key], {arrayFormat: 'comma'}, {skipNull: true});
      string += str;
    }
  }
  querystring += string;
  return querystring;
};

//takes in object with universityId: id
export function moreInfoQueryString(obj) {
  let querystring = "?";
  querystring += queryString.stringify(apiObject);
  querystring += '&';
  querystring += queryString.stringify(obj);
  return querystring;
}
