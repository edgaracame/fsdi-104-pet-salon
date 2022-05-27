let salon = {
    name: "The Fashion Pet",
    address: {
        street: "Palomar",
        zip: "22345",
        city: "San Diego",
        number: "265-K"
    },
    hours: {
        open: "9:00 am",
        close: "5:00 pm"
    },
    phone: "555-555-555",
    pets: []
}

function Pet(name, age, gender, breed, service, owner, phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownerName = owner;
    this.contactPhone = phone;
}

let scooby = new Pet("Scooby", 50, "Male", "Dane", "Grooming", "Shaggy", "888-888-888");
let bolt = new Pet("Bolt", 15, "Male", "Shepherd", "Bath", "Penny", "777-777-777");
let marie = new Pet("Marie", 32, "Female", "Pug", "Pawdicure", "Thomas", "333-333-333");

function displaySalonInfo(){
    let element = document.getElementById("salonInfo");
    let tmp = `
        <p>${salon.name}</p>
        <p>Address: ${salon.address.street} Street #${salon.address.number} ${salon.address.zip} ${salon.address.city}</p>
        <p>Hours: ${salon.hours.open} - ${salon.hours.close}</p>
        <p>Phone Number: ${salon.phone}</p>
    `;

    element.innerHTML = tmp;
}

function register(){
    console.log("Registering");

    let petName = document.getElementById("txtName").value;
    let petAge = document.getElementById("txtAge").value;
    let petGender = document.getElementById("selGender").value;
    let petBreed = document.getElementById("txtBreed").value;
    let petService = document.getElementById("selService").value;
    let ownerName = document.getElementById("txtOwner").value;
    let ownerPhone = document.getElementById("txtPhone").value;

    let newPet = new Pet(petName, petAge, petGender, petBreed, petService, ownerName, ownerPhone);

    salon.pets.push(newPet);

    console.log(newPet);
    console.log(salon.pets);

    clearForm();
}

function clearForm(){
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("selGender").value = "";
    document.getElementById("txtBreed").value = "";
    document.getElementById("selService").value = "";
    document.getElementById("txtOwner").value = "";
    document.getElementById("txtPhone").value = "";
}

function init(){
    displaySalonInfo();
    salon.pets.push(scooby, bolt, marie);
}
window.onload = init;