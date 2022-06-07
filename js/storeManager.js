function savePet(pet){
    let val = JSON.stringify(pet);
    localStorage.setItem("pets", val);
}