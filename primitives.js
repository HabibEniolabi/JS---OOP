// let x = 10;
// let y = x;

// x = 20; 

let x = { value: 20};
let y = x;

x.value = 30;

// Note:
// Primitives are copied by their value. They are also called Value Types
// Objects are copied by their reference. They are also called Reference Types



//------//

// let number = 10
// function increase(number) {
//   number ++
// }


// increase(number)
// console.log(number)


let obj = { value: 10 }
function increase(obj) {
  obj.value++;
}


increase(obj)
console.log(obj)