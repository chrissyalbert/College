 const rOptions = [{name: "U.S. Service Schools"}, {name: "New England (CT, ME, MA, NH, RI, VT)"}, {name: "Mid East (DE, CD, MD, NJ, NY, PA)"}, {name: "Great Lakes (IL, IN, MI, OH, WI)"}, {name: "Plains (IA, IKS, MN, MO, NE, ND, SD)"}, {name: "Southeast (AL, AR, FL, GA, KY, LA, MS, NC, SC, TN, VA, WV)"}, {name: "Southwest (AZ, NM, OK, TX)"}, {name: "Rocky Mountains (CO, ID, MT, UT, WY)"}, {name: "Far West (AK, CA, HI, NV, OR, WA)"}, {name: "Outlying Areas (AS, FM, GU, MH, MP, PR, PW, VI)"}];
 const sOptions =  [
  {name: "Choose state(s) from the list below"},
  {name: "Alabama"},
  {name: "Alaska"},
  {name: ""},
  {name: "Arizona"},
  {name: "Arkansas"},
  {name: "California"},
  {name: ""},
  {name: "Colorado"},
  {name: "Connecticut"},
  {name: "Delaware"},
  {name: "District of Columbia"},
  {name: "Florida"},
  {name: "Georgia"},
  {name: ""},
  {name: "Hawaii"},
  {name: "Idaho"},
  {name: "Illinois"},
  {name: "Indiana"},
  {name: "Iowa"},
  {name: "Kansas"},
  {name: "Kentucky"},
  {name: "Louisiana"},
  {name: "Maine"},
  {name: "Maryland"},
  {name: "Massachusetts"},
  {name: "Michigan"},
  {name: "Minnesota"},
  {name: "Mississippi"},
  {name: "Missouri"},
  {name: "Montana"},
  {name: "Nebraska"},
  {name: "Nevada"},
  {name: "New Hampshire"},
  {name: "New Jersey"},
  {name: "New Mexico"},
  {name: "New York"},
  {name: "North Carolina"},
  {name: "North Dakota"},
  {name: "Ohio"},
  {name: "Oklahoma"},
  {name: "Oregon"},
  {name: "Pennsylvania"},
  {name: ""},
  {name: "Rhode Island"},
  {name: "South Carolina"},
  {name: "South Dakota"},
  {name: "Tennessee"},
  {name: "Texas"},
  {name: "Utah"},
  {name: "Vermont"},
  {name: "Virginia"},
  {name: ""},
  {name: "Washington"},
  {name: "WestVirginia"},
  {name: "Wisconsin"},
  {name: "Wyoming"},
  //{name: "American Samoa"},
  //{name: "Federated States of Micronesia"},
  //{name: "Guam"},
  //{name: "Northern Mariana Islands"},
  //{name: "Palau"},
  //{name: "Puerto Rico"},
  //{name: "Virgin Islands"}
  ];
const uOptions = [
  {name: "Select from the list below"},
  {name:	"Large City"},	
  {name:	"Mid-Size City"},		
  {name:	"Urban Fringe of a Large City"},		
  {name:	"Urban Fringe of a Mid-Size City"},		
  {name:	"Large Town"},
  {name:	"Small Town"},	
  {name:	"Rural, Outside Metropolitan Area "},		
  {name:	"Rural, Inside Metropolitan Area"}
];

const dOptions = [
  {name: "Non-degree-granting"},
  {name: "Certificate degree"},
  {name: "Associate degree"},
  {name: "Bachelor's degree"}
];

const pOptions = [
  {name: "Agriculture, Agriculture Operations, And Related Sciences"},
  {name: "Architecture And Related Services"},
  {name: "Area, Ethnic, Cultural, Gender, And Group Studies"},
  {name: "Biological And Biomedical Sciences"},
  {name: "Business, Management, Marketing, And Related Support Services"},
  {name: "Communication, Journalism, And Related Programs"},
  {name: "Communications Technologies/Technicians And Support Services"},
  {name: "Computer And Information Sciences And Support Services"},
  {name: "Construction Trades"},
  {name: "Education"},
  {name: "Engineering"},
  {name: "Engineering Technologies And Engineering-Related Fields"},
  {name: "English Language And Literature/Letters"},
  {name: "Family And Consumer Sciences/Human Sciences"},
  {name: "Foreign Languages, Literatures, And Linguistics"},
  {name: "Health Professions And Related Programs"},
  {name: "History"},
  {name: "Homeland Security, Law Enforcement, Firefighting And Related Protective Services"},
  {name: "Legal Professions And Studies"},
  {name: "Liberal Arts And Sciences, General Studies And Humanities"},
  {name: "Library Science"},
  {name: "Mathematics And Statistics"},
  {name: "Mechanic And Repair Technologies/Technicians"},
  {name: "Military Technologies And Applied Sciences"},
  {name: "Multi/Interdisciplinary Studies"},
  {name: "Natural Resources And Conservation"},
  {name: "Parks, Recreation, Leisure, And Fitness Studies"},
  {name: "Personal And Culinary Services"},
  {name: "Philosophy And Religious Studies"},
  {name: "Physical Sciences"},
  {name: "Precision Production"},
  {name: "Psychology"},
  {name: "Public Administration And Social Service Professions"},
  {name: "Science Technologies/Technicians"},
  {name: "Social Sciences"},
  {name: "Theology And Religious Vocations"},
  {name: "Transportation And Materials Moving"},
  {name: "Visual And Performing Arts"}
];



export const regionOptions = rOptions.map((option) => ({
  label: option.name,
  value: rOptions.indexOf(option)
}));

export const stateOptions = sOptions.map((option) => ({
  label: option.name,
  value: sOptions.indexOf(option)
}));

export const urbanOptions = uOptions.map((option) => ({
  label: option.name,
  value: uOptions.indexOf(option)
}));

export const degreeOptions = dOptions.map((option) => ({
  label: option.name,
  value: dOptions.indexOf(option)
}));

export const programOptions = pOptions.map((option) => ({
  label: option.name,
  value: pOptions.indexOf(option)
}));