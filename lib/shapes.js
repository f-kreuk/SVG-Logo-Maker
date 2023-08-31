//utilized activity 10-Stu Polymorphism of 10-OOP topic as reference for this file

//shape class for default properties across all shapes, takes in color variable

class Shape {
    constructor () {
        this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
};


//circle inherits properties from Shape class

class Circle extends Shape {
    render() {
        //returns circle with color input
        return `circle cx="150" cy="100" r="80" fill="${this.color}"`;
    }
};

//square inherits properties from Shape class

class Square extends Shape {
    render() {
        //returns square with color input
        return `rect x="75" y="25" width="150" height="150" fill="${this.color}"`;
    }

};

//tringle inherits properties from Shape class

class Triangle extends Shape {
    render() {
        //returns triangle with color input
        return `polygon points="150,2 288, 200 2, 200" fill="${this.color}"`;
    }

};

//export for the shape classes

module.exports = {Triangle, Square, Circle};