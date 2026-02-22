// let form = document.getElementById("addForm");
// let itemList = document.getElementById("items");

// //form submit event
// form.addEventListener("submit",addItem);

// function addItem(e) {
//     // console.log(e);
//     e.preventDefault()

//     let newItem = document.getElementById("item").value;

//     //create new element
//     let li = document.createElement("li");

//     //add className
//     li.className = "list-group-item";

//     //add textNode with input value
//     li.appendChild(document.createTextNode(newItem));
//     itemList.appendChild(li);
    
//     //create delete button
//     let deleteBtn = document.createElement("button");
//     deleteBtn.classList = "btn btn-danger btn-sm float-end delete"
//     deleteBtn.appendChild(document.createTextNode("X"));
//     li.appendChild(deleteBtn);
//     itemList.appendChild(li)
    
// }

let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

form.addEventListener("submit",addEvent);

function addEvent(e){
    e.preventDefault()

    let newItem = document.getElementById("item").value;
    //create newItem
    let li = document.createElement("li")
    li.className = "list-group-item"
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li)

    // create button

    let deleteBtn = document.getElementById("button");
    deleteBtn.classList = "btn btn-danger btn-sm float-end delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
};
