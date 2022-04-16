const Shape = function() {}
Shape.prototype.draw = function()
{
    return "I am a generic shape";
}

const Circle = function () {}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function()
{
    return "I am a circle";
}
const Square = function() {}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.draw = function() {
    return "I am a square";
}

const Traingle = function (){}
Traingle.prototype = Object.create(Shape.prototype);

const shapes = [new Shape(), new Circle(), new Square(), new Traingle()];
shapes.forEach(function(shape){
    console.log(shape.draw())
    // console.log(shape.draw() +"<br>")
    document.write(shape.draw() +"<br>");
})