 const rOptions = [{name: "U.S. Service Schools"}, {name: "New England (CT, ME, MA, NH, RI, VT)"}, {name: "Mid East (DE, CD, MD, NJ, NY, PA)"}, {name: "Great Lakes (IL, IN, MI, OH, WI)"}, {name: "Plains (IA, IKS, MN, MO, NE, ND, SD)"}, {name: "Southeast (AL, AR, FL, GA, KY, LA, MS, NC, SC, TN, VA, WV)"}, {name: "Southwest (AZ, NM, OK, TX)"}, {name: "Rocky Mountains (CO, ID, MT, UT, WY)"}, {name: "Far West (AK, CA, HI, NV, OR, WA)"}, {name: "Outlying Areas (AS, FM, GU, MH, MP, PR, PW, VI)"}];

 export const regionOptions = rOptions.map((option) => ({
  ...option,
  label: option.name,
  value: rOptions.indexOf(option)
}));