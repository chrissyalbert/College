 const rOptions = [
   {name: "U.S. Service Schools"}, 
   {name: "New England (CT, ME, MA, NH, RI, VT)"}, 
   {name: "Mid East (DE, CD, MD, NJ, NY, PA)"}, 
   {name: "Great Lakes (IL, IN, MI, OH, WI)"}, 
   {name: "Plains (IA, IKS, MN, MO, NE, ND, SD)"}, 
   {name: "Southeast (AL, AR, FL, GA, KY, LA, MS, NC, SC, TN, VA, WV)"}, 
   {name: "Southwest (AZ, NM, OK, TX)"}, 
   {name: "Rocky Mountains (CO, ID, MT, UT, WY)"}, 
   {name: "Far West (AK, CA, HI, NV, OR, WA)"}, 
   {name: "Outlying Areas (AS, FM, GU, MH, MP, PR, PW, VI)"}];
 const sOptions =  [
  {name: "Alabama", value: 1},
  {name: "Alaska", value: 2},
  {name: "Arizona", value: 4},
  {name: "Arkansas", value: 5},
  {name: "California", value: 6},
  {name: "Colorado", value: 8},
  {name: "Connecticut", value: 9},
  {name: "Delaware", value: 10},
  {name: "District of Columbia", value: 11},
  {name: "Florida", value: 12},
  {name: "Georgia", value: 13},
  {name: "Hawaii", value: 15},
  {name: "Idaho", value: 16},
  {name: "Illinois", value: 17},
  {name: "Indiana", value: 18},
  {name: "Iowa", value: 19},
  {name: "Kansas", value: 20},
  {name: "Kentucky", value: 21},
  {name: "Louisiana", value: 22},
  {name: "Maine", value: 23},
  {name: "Maryland", value: 24},
  {name: "Massachusetts", value: 25},
  {name: "Michigan", value: 26},
  {name: "Minnesota", value: 27},
  {name: "Mississippi", value: 28},
  {name: "Missouri", value: 29},
  {name: "Montana", value: 30},
  {name: "Nebraska", value: 31},
  {name: "Nevada", value: 32},
  {name: "New Hampshire", value: 33},
  {name: "New Jersey", value: 34},
  {name: "New Mexico", value: 35},
  {name: "New York", value: 36},
  {name: "North Carolina", value: 37},
  {name: "North Dakota", value: 38},
  {name: "Ohio", value: 39},
  {name: "Oklahoma", value: 40},
  {name: "Oregon", value: 41},
  {name: "Pennsylvania", value: 42},
  {name: "Rhode Island", value: 44},
  {name: "South Carolina", value: 45},
  {name: "South Dakota", value: 46},
  {name: "Tennessee", value: 47},
  {name: "Texas", value: 48},
  {name: "Utah", value: 49},
  {name: "Vermont", value: 50},
  {name: "Virginia", value: 51},
  {name: "Washington", value: 53},
  {name: "West Virginia", value: 54},
  {name: "Wisconsin", value: 55},
  {name: "Wyoming", value: 56},
  {name: "American Samoa", value: 60},
  {name: "Federated States of Micronesia", value: 64},
  {name: "Guam", value: 66},
  {name: "Northern Mariana Islands", value: 69},
  {name: "Palau", value: 70},
  {name: "Puerto Rico", value: 72},
  {name: "Virgin Islands", value: 78}
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
  {name: "Certificate"},
  {name: "Associate degree"},
  {name: "Bachelor's degree"}
];

const dPOptions = [
  { name: "Bachelor's degree", queryTerm: "latest.academics.program.bachelors"},
  { name: "Associate degree", queryTerm: "latest.academics.program.assoc"},
  { name: "Certificate (4 Year Program)", queryTerm: "latest.academics.program.certificate_lt_4_yr"},
  { name: "Certificate (2 Year Program)", queryTerm: "latest.academics.program.certificate_lt_2_yr"},
  { name: "Certificate (1 Year Program)", queryTerm: "latest.academics.program.certificate_lt_1_yr"}
];

const pOptions = [
  { name: "Agriculture, Agriculture Operations, And Related Sciences", queryTerm: ".agriculture"},
  { name: "Architecture And Related Services", queryTerm: ".architecture"},
  { name: "Area, Ethnic, Cultural, Gender, And Group Studies", queryTerm: ".ethnic_cultural_gender"},
  { name: "Biological And Biomedical Sciences", queryTerm: ".biological"},
  { name: "Business, Management, Marketing, And Related Support Services", queryTerm: ".business_marketing"},
  { name: "Communication, Journalism, And Related Programs", queryTerm: ".communication"},
  { name: "Communications Technologies/Technicians And Support Services", queryTerm: ".communications_technology"},
  { name: "Computer And Information Sciences And Support Services", queryTerm: ".computer"},
  { name: "Construction Trades", queryTerm: ".construction"},
  { name: "Education", queryTerm: ".education"},
  { name: "Engineering", queryTerm: ".engineering"},
  { name: "Engineering Technologies And Engineering-Related Fields", queryTerm: ".engineering_technology"},
  { name: "English Language And Literature/Letters", queryTerm: ".english"},
  { name: "Family And Consumer Sciences/Human Sciences", queryTerm: ".family_consumer_science"},
  { name: "Foreign Languages, Literatures, And Linguistics", queryTerm: ".language"},
  { name: "Health Professions And Related Programs", queryTerm: ".health"},
  { name: "History", queryTerm: ".history"},
  { name: "Homeland Security, Law Enforcement, Firefighting And Related Protective Services", queryTerm: ".security_law_enforcement"},
  { name: "Legal Professions And Studies", queryTerm: ".legal"},
  { name: "Liberal Arts And Sciences, General Studies And Humanities", queryTerm: ".humanities"},
  { name: "Library Science", queryTerm: ".library"},
  { name: "Mathematics And Statistics", queryTerm: ".mathematics"},
  { name: "Mechanic And Repair Technologies/Technicians", queryTerm: ".mechanic_repair_technology"},
  { name: "Military Technologies And Applied Sciences", queryTerm: ".military"},
  { name: "Multi/Interdisciplinary Studies", queryTerm: ".multidiscipline"},
  { name: "Natural Resources And Conservation", queryTerm: ".resources"},
  { name: "Parks, Recreation, Leisure, And Fitness Studies", queryTerm: ".parks_recreation_fitness"},
  { name: "Personal And Culinary Services", queryTerm: ".personal_culinary"},
  { name: "Philosophy And Religious Studies", queryTerm: ".philosophy_religious"},
  { name: "Physical Sciences", queryTerm: ".physical_science"},
  { name: "Precision Production", queryTerm: ".precision_production"},
  { name: "Psychology", queryTerm: ".psychology"},
  { name: "Public Administration And Social Service Professions", queryTerm: ".public_administration_social_service"},
  { name: "Science Technologies/Technicians", queryTerm: ".science_technology"},
  { name: "Social Sciences", queryTerm: ".social_science"},
  { name: "Theology And Religious Vocations", queryTerm: ".theology_religious_vocation"},
  { name: "Transportation And Materials Moving", queryTerm: ".transportation"},
  { name: "Visual And Performing Arts", queryTerm: ".visual_performing"}
];

const oOptions = [
  {name: "Public", value: 1},
  {name: "Private nonprofit", value: 2},
  {name: "Private for-profit", value: 3}
];

const siOptions = [
  {name: "Less than 5,000 students", queryTerm: "0..5000"},
  {name: "5,000--10,000 students", queryTerm: "5000..10000"},
  {name: "10,000--20,000 students", queryTerm: "10000..20000"},
  {name: "Greater than 20,000 students", queryTerm: "20000.."}
];

export const regionOptions = rOptions.map((option) => ({
  label: option.name,
  value: rOptions.indexOf(option)
}));

export const stateOptions = sOptions.map((option) => ({
  label: option.name,
  value: option.value
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
  value: option.queryTerm
}));

export const degreeProgramOptions = dPOptions.map((option) => ({
  label: option.name,
  value: option.queryTerm
}));

export const ownershipOptions = oOptions.map((option) => ({
  label: option.name,
  value: option.value
}));

export const sizeOptions = siOptions.map((option) => ({
  label: option.name,
  value: option.queryTerm
}));