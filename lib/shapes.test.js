// imports the classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

//test of yellow Circle render
describe("Circle", () => {
    it('should insert the color yellow in the circle shape class'), () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            'circle cx="150" cy="100" r="80" fill="blue"'
            );
    }
});

//test of green Square render
describe("Square", () => {
    it('should insert the color green in the square shape class'), () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            'rect x="75" y="25" width="150" height="150" fill="green"'
            );
    }
});

//test of blue Triangle render
describe("Triangle", () => {
    it('should insert the color blue in the triangle shape class'), () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            'polygon points="150,2 288, 200 2, 200" fill="blue"'
            );
    }
});

