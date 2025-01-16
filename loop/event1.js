// event1.js

let item = document.querySelector('button');

item.addEventListener('click',function () {
  let n1 = document.querySelector('input[name="first"]').value;
  let n2 = document.querySelector('input[name="second]').value;
  console.dir(n1 + n2);
  document.querySelector('input[name="result"]').value = parseInt(n1) + parseInt(n2);
});

let item2 = doucument.querySelector('button');
item2.addEventListener('click', function () {
  
})