let input = document.querySelector("input")
let btn = document.querySelector("button")
let list = document.querySelector("ol")

btn.addEventListener("click", taskHandler)

function taskHandler() {
    let data = input.value;

    if (data == "") {
        alert("Please Enter Task before adding")
        return
    }

    let li = document.createElement("li")
    li.innerHTML = data + " "

    let delBtn = document.createElement("button")
    delBtn.innerText = "Delete"

    delBtn.addEventListener("click", function () {
        li.remove()
    })

    li.appendChild(delBtn)
    list.appendChild(li)

    input.value = ""
}