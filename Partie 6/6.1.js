class Circle {
    constructor (xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    get fullCircle(){
        return this.xPos +", "+ this.yPos +", "+ this.radius;
    }
    set fullCircle(move){
        this.xPos = move.split(" ")[0];
        this.yPos = move.split(" ")[1];
    }
    get surface(){
        return Math.PI * (this.radius * this.radius);
    }
    talk (){
        console.log("Hi, i'm a circle. My coordinates are : "+ this.xPos + " and "+ this.yPos + ". Ma surface est de "+ this.surface + " cm2.")
    }
}
let cir1 = new Circle(3, 2, 5);
console.log(cir1.fullCircle);
console.log(cir1.surface);
cir1.talk();

cir1.fullCircle = "1 4";
console.log(cir1.fullCircle);
console.log(cir1.surface);
cir1.talk();