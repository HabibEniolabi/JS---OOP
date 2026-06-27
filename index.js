// const circle = {

//   draw: function() {
//     console.log("draw")
//   }
// };

//Factory Function - They are used to avoid spagetti codes

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const create = createCircle(1);

// Constructor Function - Name used in a consturctor function is different. The first letter we use should be uppercase
function Circle(radius) {
  this.radius = radius; // "This" is a reference for the object that is executing the piece of code
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

// ------- //
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const create = createCircle(1);
// create.location = { x: 1};

// const playerName = "create-location";
// create[playerName] = { value: 1 }
// create['location'] = { x: 1 };

// delete create.location;

//Enumerating Properties//

function Circle(radius) {
  this.radius = radius;  
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);

for( let key in Circle) {
  if(typeof circle[key] !== "function")
    console.log(key, circle[key])
}