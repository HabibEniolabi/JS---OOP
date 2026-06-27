function Circle(radius) {
  this.radius = radius;  
  let defaultLocation = {x: 0, y: 2}
  let computeOptimalLocations= function(factor) {
    //....
  }
  this.draw = function () { 
    computeOptimalLocations(0.1)
    console.log("draw");
  };
}

const circle = new Circle(1);