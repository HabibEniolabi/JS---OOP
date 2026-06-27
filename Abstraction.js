function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 2 };
  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  this.draw = function () {
    computeOptimalLocations(0.1);
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y)
        throw new Error("Invalid location.")
      return defaultLocation
    }
  });
}

const circle = new Circle(1);
circle.draw();
circle.defaultLocation = 1;

// Note we use the Object.define properties to define getters or setters