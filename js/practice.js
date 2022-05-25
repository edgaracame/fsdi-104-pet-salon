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

let product1 = {
    name: "Laptop",
    description: "HP laptop 14'' core i7",
    price: 200
}

let product2 = {
    name: "Camera",
    description: "Polaroid instant camera go white",
    price: 100
}

let product3 = {
    name: "Keyboard",
    description: "Pro grade logitech g mechanical keyboard",
    price: 150
}

products.push(product1, product2, product3);
/* console.log(products[2]);
console.log(products[2].name); */

function displayName(){
    for(i = 0; i < products.length; i++)
    {
        console.log(products[i]);
    }
}