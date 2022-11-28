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
function rand10(x){
    return Math.random() * (x) + x;
}