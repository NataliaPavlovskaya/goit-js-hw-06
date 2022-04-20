// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) {
     str += `${i} sheep...`; }
  return str;
}

console.log(countSheep);

