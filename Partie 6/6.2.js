class Rectangle {
    constructor (topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    get fullRectangle(){
        return this.topLeftXPos + ", " + this.topLeftYPos + ", " + this.width + ", " + this.length;
    }
    collides (otherRectangle){
        if (this.topLeftXPos < (otherRectangle.topLeftXPos + otherRectangle.width) && (this.topLeftXPos + this.width) > otherRectangle.topLeftXPos && (this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length) && (this.length + this.topLeftYPos) > otherRectangle.topLeftYPos)
        return true;
    return false;
    }
}
let rect1 = new Rectangle(1, 3, 2, 3);
console.log(rect1.fullRectangle);

let rect2 = new Rectangle(2, 5, 3, 3);
console.log(rect1.collides(rect2));

let rect3 = new Rectangle(6, 5, 2, 3);
console.log(rect1.collides(rect3));
console.log(rect2.collides(rect3));