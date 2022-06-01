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

function Pet(name, age, type, gender, breed, service, owner, phone){
    this.name = name;
    this.age = age;
    this.type = type;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownerName = owner;
    this.contactPhone = phone;
}

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

let scooby = new Pet("Scooby", 50, "Dog", "Male", "Dane", "Grooming", "Shaggy", "888-888-888");
let bolt = new Pet("Bolt", 15, "Dog", "Male", "Shepherd", "Vaccines", "Penny", "777-777-777");
let marie = new Pet("Marie", 32, "Cat", "Female", "Pug", "Nails Cut", "Thomas", "333-333-333");

function isValid(aPet){
    let valid = true;

    if(aPet.name == "" || aPet.age == "" || aPet.type == "" || aPet.gender == "" || aPet.breed == "" || aPet.service == "" || aPet.ownerName == "" || aPet.contactPhone == ""){

        valid = false;
        
    }

    return valid;
}

function register(){
    let petName = document.getElementById("txtName").value;
    let petAge = document.getElementById("txtAge").value;
    let petType = document.getElementById("selType").value;
    let petGender = document.getElementById("selGender").value;
    let petBreed = document.getElementById("txtBreed").value;
    let petService = document.getElementById("selService").value;
    let ownerName = document.getElementById("txtOwner").value;
    let ownerPhone = document.getElementById("txtPhone").value;

    let newPet = new Pet(petName, petAge, petType, petGender, petBreed, petService, ownerName, ownerPhone);

    if(isValid(newPet) == true){
        salon.pets.push(newPet);

        displayTable();

        clearForm();
    }
    else{
        alert("There is something wrong!");
    }
}

function clearForm(){
    /* let inputs = document.getElementsByTagName('input');
    for(i = 0; i < inputs.length; i++){
        inputs[i].value = "";
    }

    document.getElementById("selGender").value="";
    document.getElementById("selService").value=""; */

    $("input").val("");
    $("select").val("");
}

function init(){
    displaySalonInfo();
    salon.pets.push(scooby, bolt, marie);
    displayTable();
}
window.onload = init;