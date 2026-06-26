// const circle = {

//   draw: function() {
//     console.log("draw")
//   }
// };

//Factory Function - They are used to avoid spagetti codes

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const create = createCircle(1);

// Constructor Function - Name used in a consturctor function is different. The first letter we use should be uppercase
function Circle(radius) {
  this.radius = radius; // "This" is a reference for the object that is executing the piece of code
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);
