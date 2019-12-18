let str = `http://api.data.gov/ed/collegescorecard/v1/schools?api_key=fyVASqX6EDl4algr3QzzJLeTvjB1eN4ueTns4Lbr&school.region_id=1&_fields=id,school.name,school.school_url,school.city,school.state,school.price_calculator_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.attendance.program_year`


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

let options = [
  "Choose state(s) from the list below",
  "Alabama",
  "Alaska",
  "Arizona", 
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
  "American Samoa",
  "Federated States of Micronesia",
  "Guam",
  "Northern Mariana Islands",
  "Palau",
  "Puerto Rico",
  "Virgin Islands"
];

let newArr = [];
for (let i=0; i < options.length; i++) {
  let obj = Object.assign({}, { name: options[i] });
  newArr.push(obj);
}
options = newArr;
console.log(options);

let sOptions =  [
{name: "Choose state(s) from the list below"},
{name: "Alabama"},
{name: "Alaska"},
{name: "Arizona"},
{name: "Arkansas"},
​{name: "California"},
​{name: "Colorado"},
{name: "Connecticut"},
​{name: "Delaware"},
​{name: "District of Columbia"},
{name: "Florida"},
{name: "Georgia"},
{name: "Hawaii"},
{name: "Idaho"},
{name: "Illinois"},
{name: "Indiana"},
​{name: "Iowa"},
​{name: "Kansas"},
​{name: "Kentucky"},
​{name: "Louisiana"},
​{name: "Maine"},
​{name: "Maryland"},
​{name: "Massachusetts"},
​{name: "Michigan"},
​{name: "Minnesota"},
​{name: "Mississippi"},
​{name: "Missouri"},
​{name: "Montana"},
​{name: "Nebraska"},
​{name: "Nevada"},
​{name: "New Hampshire"},
​{name: "New Jersey"},
​{name: "New Mexico"},
​{name: "New York"},
​{name: "North Carolina"},
​{name: "North Dakota"},
​{name: "Ohio"},
​{name: "Oklahoma"},
​{name: "Oregon"},
​{name: "Pennsylvania"},
​{name: "Rhode Island"},
​{name: "South Carolina"},
​{name: "South Dakota"},
​{name: "Tennessee"},
​{name: "Texas"},
​{name: "Utah"},
{name: "Vermont"},
{name: "Virginia"},
{name: "Washington"},
{name: "WestVirginia"},
{name: "Wisconsin"},
{name: "Wyoming"},
{name: "American Samoa"},
{name: "Federated States of Micronesia"},
{name: "Guam"},
{name: "Northern Mariana Islands"},
{name: "Palau"},
{name: "Puerto Rico"},
{name: "Virgin Islands"}
];
let uOptions = [
{name:	"Large City (a central city of a CMSA or MSA, with the city having a population greater than or equal to 250,000)"},	
{name:	"Mid-Size City (a central city of a CMSA or MSA, with the city having a population less than 250,000)"},		
{name:	"Urban Fringe of a Large City (any territory within a CMSA or MSA of a Large City and defined as urban by the Census Bureau)"},		
{name:	"Urban Fringe of a Mid-Size City (any territory within a CMSA or MSA of a Mid-Size City and defined as urban by the Census Bureau)"},		
{name:	"Large Town (an incorporated place or Census-designated place with a population greater than or equal to 25,000 and located outside a CMSA or MSA)"},
{name:	"Small Town (an incorporated place or Census-designated place with a population less than 25,000 and greater than or equal to 2,500 and located outside a CMSA or MSA)"},	
{name:	"Rural, Outside MSA (any territory designated as rural by the Census Bureau that is outside a CMSA or MSA of a Large or Mid-Size City)"},		
{name:	"Rural, Inside MSA (any territory designated as rural by the Census Bureau that is within a CMSA or MSA of a Large or Mid-Size City)"}	
];


/*
const newObj = .assign({}, regionOptions);
const newArr = regionOptions.keys().map(function(key) {
  return { [key]: regionOptions[key] };
});
console.log(newArr);
*/

export default regionOptions;


setSelected(selected, property) {
  let searchObjects = selected.map(obj => Object.assign({}, {[property]: obj.value}));
  this.setState( { 
    selected,
    searchObjects
   });
  console.log(searchObjects);
}