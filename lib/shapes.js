//utilized activity 10-Stu Polymorphism of 10-OOP topic as reference for this file

//shape class for default properties across all shapes

class Shape {
    constructor () {
        
    }
};

//unique properties for triangle

class Triangle extends Shape {

};

//unique properties for Square

class Square extends Shape {

};

//unique properties for Circle

class Circle extends Shape {

};

//export for the shape classes

module.exports = {Triangle, Square, Circle};