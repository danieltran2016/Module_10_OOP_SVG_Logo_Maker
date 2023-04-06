const {Circle, Triangle, Square} = require('./shapes');

describe('Shapes', () => {
    describe('Circle', () =>{
        it("should create a circle with the color blue", () =>{
            const shape = new Circle();
            shape.setColor('blue');
            const equals = '<circle cx="150" cy="100" r="80" fill="blue" />'
            expect(shape.render()).toEqual(equals);
        });
    });
});

describe('Shapes', () => {
    describe('Triangle', () =>{
        it("should create a Triangle with the color blue", () =>{
            const shape = new Triangle();
            shape.setColor('blue');
            const equals = '<polygon points = "150,0 50,200 250,200" fill="blue"/>'
            expect(shape.render()).toEqual(equals);
        });
    });
});

describe('Shapes', () => {
    describe('Square', () =>{
        it("should create a Square with the color blue", () =>{
            const shape = new Square();
            shape.setColor('blue');
            const equals = '<rect x="0" y="0" width="200" height="200" fill="blue"/>'
            expect(shape.render()).toEqual(equals);
        });
    });
});