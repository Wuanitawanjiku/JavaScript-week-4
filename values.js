/*Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 'orange'
 the program should fetch its price (30.00) and multiply with the quantity requested (2) and return 
 total cost in this printed format (2 Oranges for KES 60.00). 

calculateFruitCost(fruitName, quantity)

For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 60.00"*/

var kiosk= {
    fruit:"oranges",
    price:30.00,
    quantity:2,
    fruitCost:function(price,quantity){
        total = price*quantity
        this.fruitCost=total 
    }
}
kiosk.fruitCost(30.00,2)
console.log(kiosk.quantity+" "+kiosk.fruit +" for KES "+total)


//Come up with 2 examples that distinguish between an object, a function, and a method

//object
 let field={
    counties:47,
    name:"Kenya",
    population:52.57
}
console.log("There are, "+ field.counties +" counties in "+ field.name +" with a population of "+
field.population + " million citizens");

/*function
function x(a, b) {
    var sum = a + b
    return sum 
}*/

console.log((12, 13));

//method
var student ={
    age:19,
    gender:"female",
    year:2021,
    details:function(age, gender, year){
        request.this()}
    }
    console.log("All students are of the age "+ student.age +" years "+", all of the "+student.gender+ " gender. "+
    " Year is "+student.year)