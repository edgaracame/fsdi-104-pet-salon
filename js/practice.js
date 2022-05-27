let student = {
    //Attributes - Properties
    name: "Edgar",
    age: 23,
    isActive: true,

    //Functions - Methods
    sayHi: function(){
        return "Hello";
    },

    //Arrays
    hobbies:["Videogames", "Movies", "Music"],

    //Objects
    address:{
        street: "Alejandria",
        zip: "22654",
        city: "Tijuana",
        country: "Mexico"
    }
}

/* console.log(student);
console.log(student.name);
console.log(student.sayHi());
console.log(student.hobbies[0]);
console.log(student.address);
console.log(student.address.street); */

let products = [];

/* let product1 = {
    name: "Laptop",
    description: "HP laptop 14'' core i7",
    price: 200
} */

// products.push(product1, product2, product3);
/* console.log(products[2]);
console.log(products[2].name); */

function displayName(){
    for(i = 0; i < products.length; i++)
    {
        console.log(products[i]);
    }
}

function Product(n, d, p){
    this,name = n;
    this.description = d;
    this.price = p;
}

let product1 = new Product("Speaker", "Sony wireless", 20.50);
let product2 = new Product("Laptop", "HP", 100.00);
let product3 = new Product("Camera", "Polaroid instant", 75.25);
let product4 = new Product("Keyboard", "LogiTech", 125.00);
console.log(product1, product2, product3, product4);