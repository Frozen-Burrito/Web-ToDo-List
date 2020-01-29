const newTaskInput = document.getElementById('task');
const taskList = document.getElementById('list');

const date = document.getElementById('date');

let currentDate = new Date();
date.innerHTML = `${currentDate.getDate()} ${currentDate.getMonth()}, ${currentDate.getFullYear()}`;

function addCloseBtns() {
    let items = document.getElementsByTagName('LI');
    for (let i = 0; i < items.length; i++) {
        let icon = document.createElement('i');
        icon.classList.add("fas", "fa-trash", "remove");

        items[i].appendChild(icon);
    }

    addCloseEvent();
}

function addCloseEvent(){
    //Remove item when 'close' clicked
    let remove = document.getElementsByClassName('remove');
    for (let i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            let item = this.parentElement;
            item.style.display = "none";
        }
    }
}

addCloseBtns();

//Complete a task
taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('complete');
    }
})

//Add new element
function addElement() {
    let value = newTaskInput.value;

    let li = document.createElement("li");
    let txt = document.createTextNode(value);

    li.appendChild(txt);

    if (value !== '') {
        taskList.appendChild(li);
    }

    newTaskInput.value = '';

    let icon = document.createElement('i');
    icon.classList.add("fas", "fa-trash", "remove");
    li.appendChild(icon);

    addCloseEvent();
}