//exe2.js

let numAry = [{name:'조카',age: 10},
              {name:'큰 조카', age: 14},
              {name:'삼촌', age:31},
              {name:'큰 아버지', age:45},
              {name:'나', age: 21}];

let filAry = numAry.filter(function(item,idx,ary){
  if(item.name.indexOf('조카') != -1) {
    return true;
  }
  return false;
});
console.log(filAry);


// 0번째 값은 10
// 1번째 값은 14
numAry.forEach(function(item, idx, ary) {
  if(item > 10){
    console.log(`${idx}번째 값은 ${item}`);
  }
  console.log(`${idx}번째 값은 ${item}`);
});

numAry.forEach(function(item, idx, ary) {
  console.log(item);
  if (item.age > 20){
    console.log(`${item.name}`);
  }
})



