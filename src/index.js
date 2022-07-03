import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;

//   let countNum1 = {};
//   let countNum2 = {};

//   for(let i = 0; i < strNum1.length; i++){
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }

//   for(let j = 0; j < strNum1.length; j++){
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }

//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]) return false;
//   }

//   return true;
// }

function sameFrequency(a, b) {
  // good luck. Add any arguments you deem necessary.

  let strNum1 = a.toString();
  let strNum2 = b.toString();

  if (strNum1.length !== strNum2.length) return false;

  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < strNum1.length; i++) {
    obj1[strNum1[i]] = (obj1[strNum1[i]] || 0) + 1;
    obj2[strNum2[i]] = (obj2[strNum2[i]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

let result = sameFrequency(69, 93);
