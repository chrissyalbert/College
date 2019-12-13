const queryString = require('query-string');

function singleQueryString(params) {
  let cqs = queryString.stringify(params, {arrayFormat: 'comma'}, {skipNull: true});
  return cqs;
}

export function completeQueryString(...params) {
  let querystring = "";
  arguments.forEach(param => {
    let str = createQueryString(param);
    querystring += str;
  });
  return querystring;
};
