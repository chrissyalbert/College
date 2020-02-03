let str = 'latest.cost.net_price.consumer.by_income_level';
let arr = [];
let arrStrings = ['.0-30000', '.30001-48000', '.48001-75000', '.75001-110000', '.110001-plus'];
function mapper(array, string) {
  array = array.map(item => {
    return string + item;
  });
  return array;
}
arr = mapper(arrStrings, str);
console.log(arr.toString());
/*
let str = 'latest.cost';
let arr = [];
let i = 0;
do {
  i++;
  arr.push(str);
} while (i < 2);
// ["latest.cost", "latest.cost"]
console.log(arr);

let net = '.net_price';
let title = '.title_iv';
arr[0] += net;
arr[1] += title;
// ["latest.cost.net_price", "latest.cost.title_iv"]
console.log(arr);

let public = '.public';
let private = '.private';
let program = '.program_reporter';
let other = '.other_acad_calendar';

function mapper(array, string) {
  array = array.map(item => {
    return item + string;
  });
  return array;
}

let pubArr = [...arr];
pubArr = mapper(pubArr, public);
console.log(pubArr);
pubArr = pubArr.map(item => {
  return item + public;
});
console.log(pubArr);
//["latest.cost.net_price.public", "latest.cost.title_iv.public"]

let privArr = [...arr];
privArr = mapper(privArr, private);
console.log(privArr);
//["latest.cost.net_price.private", "latest.cost.title_iv.private"]

let programArr = [...arr];
programArr = mapper(programArr, program);
console.log(programArr);
//["latest.cost.net_price.program_reporter", "latest.cost.title_iv.program_reporter"]

let otherArr = [...arr];
otherArr = mapper(otherArr, other);
console.log(otherArr);
//["latest.cost.net_price.other_acad_calendar", "latest.cost.title_iv.other_acad_calendar"]

arr = [...pubArr, ...privArr, ...programArr, ...otherArr];
console.log(arr);
// ["latest.cost.net_price.public", "latest.cost.title_iv.public", "latest.cost.net_price.private", "latest.cost.title_iv.private", "latest.cost.net_price.program_reporter", "latest.cost.title_iv.program_reporter", "latest.cost.net_price.other_acad_calendar", "latest.cost.title_iv.other_acad_calendar"]

let by = '.by_income_level';
let byArr = arr.map(item => {
  return item + by;
});
console.log(byArr);
// ["latest.cost.net_price.public.by_income_level", "latest.cost.title_iv.public.by_income_level", "latest.cost.net_price.private.by_income_level", "latest.cost.title_iv.private.by_income_level", "latest.cost.net_price.program_reporter.by_income_level", "latest.cost.title_iv.program_reporter.by_income_level", "latest.cost.net_price.other_acad_calendar.by_income_level", "latest.cost.title_iv.other_acad_calendar.by_income_level"]

let str0 = '.0-30000';
let str30 = '.30001-48000';
let str48 = '.48001-75000';
let str75 = '.75001-110000';
let str110 = '.110001-plus';

let arr0 = mapper(byArr, str0);
let arr0 = mapper(byArr, str0);
let arr30 = mapper(byArr, str30);
let arr48 = mapper(byArr, str48);
let arr75 = mapper(byArr, str75);
let arr110 = mapper(byArr, str110);
arr = [...arr0, ...arr30, ...arr48, ...arr75, ...arr110];
console.log(arr.toString());
"latest.cost.net_price.public.by_income_level.0-30000,latest.cost.title_iv.public.by_income_level.0-30000,latest.cost.net_price.private.by_income_level.0-30000,latest.cost.title_iv.private.by_income_level.0-30000,latest.cost.net_price.program_reporter.by_income_level.0-30000,latest.cost.title_iv.program_reporter.by_income_level.0-30000,latest.cost.net_price.other_acad_calendar.by_income_level.0-30000,latest.cost.title_iv.other_acad_calendar.by_income_level.0-30000,latest.cost.net_price.public.by_income_level.30001-48000,latest.cost.title_iv.public.by_income_level.30001-48000,latest.cost.net_price.private.by_income_level.30001-48000,latest.cost.title_iv.private.by_income_level.30001-48000,latest.cost.net_price.program_reporter.by_income_level.30001-48000,latest.cost.title_iv.program_reporter.by_income_level.30001-48000,latest.cost.net_price.other_acad_calendar.by_income_level.30001-48000,latest.cost.title_iv.other_acad_calendar.by_income_level.30001-48000,latest.cost.net_price.public.by_income_level.48001-75000,latest.cost.title_iv.public.by_income_level.48001-75000,latest.cost.net_price.private.by_income_level.48001-75000,latest.cost.title_iv.private.by_income_level.48001-75000,latest.cost.net_price.program_reporter.by_income_level.48001-75000,latest.cost.title_iv.program_reporter.by_income_level.48001-75000,latest.cost.net_price.other_acad_calendar.by_income_level.48001-75000,latest.cost.title_iv.other_acad_calendar.by_income_level.48001-75000,latest.cost.net_price.public.by_income_level.75001-110000,latest.cost.title_iv.public.by_income_level.75001-110000,latest.cost.net_price.private.by_income_level.75001-110000,latest.cost.title_iv.private.by_income_level.75001-110000,latest.cost.net_price.program_reporter.by_income_level.75001-110000,latest.cost.title_iv.program_reporter.by_income_level.75001-110000,latest.cost.net_price.other_acad_calendar.by_income_level.75001-110000,latest.cost.title_iv.other_acad_calendar.by_income_level.75001-110000,latest.cost.net_price.public.by_income_level.110001-plus,latest.cost.title_iv.public.by_income_level.110001-plus,latest.cost.net_price.private.by_income_level.110001-plus,latest.cost.title_iv.private.by_income_level.110001-plus,latest.cost.net_price.program_reporter.by_income_level.110001-plus,latest.cost.title_iv.program_reporter.by_income_level.110001-plus,latest.cost.net_price.other_acad_calendar.by_income_level.110001-plus,latest.cost.title_iv.other_acad_calendar.by_income_level.110001-plus"



*/