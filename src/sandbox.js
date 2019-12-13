
let regionOptions = [
  "U.S. Service Schools",
  "New England (CT, ME, MA, NH, RI, VT)",
  "Mid East (DE, CD, MD, NJ, NY, PA)",
  "Great Lakes (IL, IN, MI, OH, WI)",
  "Plains (IA, IKS, MN, MO, NE, ND, SD)",
  "Southeast (AL, AR, FL, GA, KY, LA, MS, NC, SC, TN, VA, WV)",
  "Southwest (AZ, NM, OK, TX)",
  "Rocky Mountains (CO, ID, MT, UT, WY)",
  "Far West (AK, CA, HI, NV, OR, WA)",
  "Outlying Areas (AS, FM, GU, MH, MP, PR, PW, VI)"
];

let newArr = [];
for (let i=0; i < regionOptions.length; i++) {
  let obj = Object.assign({}, { [i]: regionOptions[i] });
  newArr.push(obj);
}
regionOptions = newArr;
console.log(regionOptions);

/*
const newObj = Object.assign({}, regionOptions);
const newArr = regionOptions.keys().map(function(key) {
  return { [key]: regionOptions[key] };
});
console.log(newArr);
*/

export default regionOptions;