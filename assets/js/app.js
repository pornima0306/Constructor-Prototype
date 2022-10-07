let cl = console.log;

//constructor function
/* function is also an object  */

//when we create a function at that time that function having own prototype i.e CircleBase and CircleBase having prototype ObjectBase

function Circle (radius){
    this.radius =radius
}
cl(typeof Circle)
cl(Circle.name)  //define the name of the function
cl(Circle.length)  //length represents the number of parameter

let circleBase = Object.getPrototypeOf(Circle);  //prototype is Circle Base
cl(circleBase)
cl(Object.getPrototypeOf(circleBase))   // prototype is Objectbase


function Square(side){
    this.side = side;
}

let squarebase = Object.getPrototypeOf(Square) //prototype is function own prototype i.e squarebase
cl(squarebase)
cl(Object.getPrototypeOf(squarebase)) // prototype is objectbase