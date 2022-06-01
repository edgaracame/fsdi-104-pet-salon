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
                <td>${pet.type}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.ownerName}</td>
                <td>${pet.contactPhone}</td>
                <td><button class="delete" onclick="deletePet(${i});"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
        `;
        petTable.append(tmp);
    }
}

function deletePet(id){
    salon.pets.splice(id, 1);
    document.getElementById("pets-table").deleteRow(id); 
}

function searchPet(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    table = document.getElementById("pets-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
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