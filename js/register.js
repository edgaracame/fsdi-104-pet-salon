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
    pets: [{
        name: "Scooby",
        age: 50,
        gender: "Male",
        breed: "Dane",
        service: "Grooming",
        owner: "Shaggy",
        phone: "888-888-888"
    },
    {
        name: "Bolt",
        age: 15,
        gender: "Male",
        breed: "Shepherd",
        service: "Bath",
        owner: "Penny",
        phone: "777-777-777"
    },
    {
        name: "Marie",
        age: 32,
        gender: "Female",
        breed: "Pug",
        service: "Pawdicure",
        owner: "Thomas",
        phone: "333-333-333"
    }]
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
displaySalonInfo();

alert(`There are ${salon.pets.length} pets in the salon!`)

function displayPetName(){
    for(i = 0; i < salon.pets.length; i++)
    {
        console.log(`Pet #${i+1}: ${salon.pets[i].name}`);
    }
}
displayPetName();