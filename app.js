var list = document.getElementById("list")
// console.log(list)

function addTodo() {
    var todoItem = document.getElementById("todoItem")
    if (todoItem.value.length > 2) {


        // create aside
        var aside = document.createElement("aside")
        aside.classList.add("listItem")
        aside.setAttribute("id", "compInp")


        //create li
        var li = document.createElement("li")
        var liText = document.createTextNode(todoItem.value)
        li.appendChild(liText)
        aside.appendChild(li)


        // creat edit button
        var editBtn = document.createElement("button")
        editBtn.innerHTML = "<i class='far fa-edit'></i>"
        editBtn.classList.add("btnP")
        editBtn.setAttribute("onclick", "editBtn(this)")
        aside.appendChild(editBtn)

        // create delete btn
        var dltBtn = document.createElement("button")
        dltBtn.innerHTML = "<i class='fal fa-minus-circle'></i>"
        dltBtn.classList.add("btnM")
        // dltBtn.setAttribute("class", "hide")
        dltBtn.setAttribute("onclick", "hideList(this)")
        // console.log(dltBtn);
        aside.appendChild(dltBtn)

        list.appendChild(aside)

        // var icon = document.createElement("i")
        // var delText = document.createTextNode("fal fa-minus-circle")
        // icon.appendChild(delText)
        // delBtn.appendChild(icon)

        todoItem.value = "";


    } else {
        alert("Enter Value Sir...!")
    }

}

// delete list
function hideList(e) {
    e.parentNode.remove()
    // console.log(e.parentNode);

}

// delete ALl
function dltAll() {
    list.innerHTML = " ";
}

function editBtn(e) {
    // e.parentNode.firstChild.parentNode.firstChild.nodeValue = "shahjee"
    var val = e.parentNode.firstChild.parentNode.firstChild.innerHTML
    var editValue = prompt("Enter Edit Value", val)
    e.parentNode.firstChild.parentNode.firstChild.innerHTML = editValue
    console.log();
}