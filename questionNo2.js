//question no 2
function cylinder(height, radius) {
    this.height = height;
    this.radius = radius;
}

cylinder.prototype.volume = function () {
    return Math.PI * this.radius * this.radius * this.height;
}

let cyl = new cylinder(9, 2);
const volume = cyl.volume();
console.log(volume.toFixed(4));



//using class object.
class Cylinder {
    constructor(cyl_height, cyl_diameter) {
        this.cyl_height = cyl_height;
        this.cyl_diameter = cyl_diameter;
    }
    Volume() {
        let radius = this.cyl_diameter / 2;
        return this.cyl_height * Math.PI * radius * radius;
    }
}


let cyli = new Cylinder(9, 3);
const volumeofCyli = cyli.Volume().toFixed(4)
console.log(volumeofCyli);