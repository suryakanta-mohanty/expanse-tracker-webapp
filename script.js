const itemName = document.getElementById("itemName");
const itemAmount = document.getElementById("itemAmount");

const listContainer = document.getElementById("item-list");


function addTask(){
    if((itemName.value && itemAmount.value) === ''){
        alert("You need to add something, before clicking the add button");
    } else{
        let li = document.createElement("li");
        li.innerHTML = itemName.value + "&#58;" + " ₹" + itemAmount.value + ".00";
        
        
        listContainer.appendChild(li);
    }

    itemName.value = '';
    itemAmount.value = '';
    saveData();
}

document.getElementById("clearbtn").addEventListener("click", function(){
    listContainer.innerHTML = '';
    saveData();
});



function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();
