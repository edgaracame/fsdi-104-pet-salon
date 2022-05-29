function displayTable(){
    let petTable = $("#pets-table");
    petTable.html("");

    let tmp = "";
    for(i = 0; i < salon.pets.length; i++){
        let pet = salon.pets[i];
        tmp = `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.ownerName}</td>
                <td>${pet.contactPhone}</td>
            </tr>
        `;
        petTable.append(tmp);
    }
}

/* function displayCards(){
    let petCards = $("#pets");
    petCards.html("");

    let tmp = "";
    for(i = 0; i < salon.pets.length; i++){
        let pet = salon.pets[i];
        tmp += `
            <div class = "pet">
                <h5>Name: ${pet.name}</h5>
                <p>Age: ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Service: ${pet.service}</p>
            </div>
        `;
    }

    petDiv.append(tmp);
} */