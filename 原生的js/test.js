let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  let a = arr.splice(0, 1)
  console.log(arr.length);
  console.log(i, a);
}
console.log(arr);


// let a = 2
// function foo () {
//   let a = 1;
//   let ab = new Function('console.log(a)');
//   ab();
// }
// foo();