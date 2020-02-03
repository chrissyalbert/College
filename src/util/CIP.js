let str = "latest.programs.cip_4_digit";

// "Natural Resources Conservation and Research."
let str0 = ".0.title"
// 0.credential.level = 3
// 0.credential.title = "Bachelor's Degree"
// 0.code = "0301"
// 0.debt.median debt = integer
// 0.debt.monthly_debt_payment = integer
// 0.earnings.median_earnings = integer

let obj = {
   // program reporters
   PROGRAM_REPORTER_OFFERED: 'latest.academics.program_reporter.programs_offered',
   PROGRAM_REPORTER_CIP:     'cip_6_digit',
   PROGRAM_REPORTER_COST:    'latest.cost.program_reporter',
   PROGRAM_REPORTER_PROGRAM: 'latest.academics.program_reporter',
 
   // field of study
   FIELD_OF_STUDY:           'latest.programs.cip_4_digit',
   FIELD_OF_STUDY_CODE:      'latest.programs.cip_4_digit.code',
   FIELD_OF_STUDY_LENGTH:    'latest.programs.cip_4_digit.credential.level',
   FIELD_OF_STUDY_NAME:      'latest.programs.cip_4_digit.title',
   FIELD_OF_STUDY_EARNINGS:  'latest.programs.cip_4_digit.median_earnings',
}