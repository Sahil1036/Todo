let add = document.querySelector(".add");
let text = document.querySelector('.text');
let bottom = document.querySelector('.bottom');
add.addEventListener("click", todo);

// Its for add task and press Enter key
text.addEventListener("keypress", (e) => {
    if (e.key === "Enter")
        todo();
});

// Its for add task in todo
function todo() {
    document.location.reload()
    add.innerHTML = "add";
    if (text.value === '') {
        alert("Please add some task");
    }
    else {
        let list = document.createElement('div');
        list.innerHTML = `
        <p class="task">${text.value}</p>
        <button class="rename">rename</button>
        <button class="delete">del</button> `
        bottom.appendChild(list);
        text.value = '';
        localStorage.setItem("data", bottom.innerHTML);
    }
}
bottom.innerHTML = localStorage.getItem("data");

// Its for delete task in todo
let del = document.getElementsByClassName("delete");
let del_arr = Array.from(del);
del_arr.forEach((e) => {
    e.addEventListener("click", (e) => {
        e.target.parentElement.remove();
        localStorage.setItem("data", bottom.innerHTML);
    });
});

// Its for rename task in todo
let ren = document.getElementsByClassName("rename");
let ren_arr = Array.from(ren);
ren_arr.forEach((e) => {
    e.addEventListener("click", (e) => {
        text.value = e.target.previousElementSibling.innerHTML;
        text.focus();
        add.innerHTML = "Rename";
        e.target.parentElement.remove();
        localStorage.setItem("data", bottom.innerHTML);
    });
});

// Its for mark task is done
let task = document.getElementsByClassName("task");
let task_arr = Array.from(task);
task_arr.forEach((e) => {
    e.addEventListener("click", (e) => {
        e.target.classList.toggle("task_check");
        localStorage.setItem("data", bottom.innerHTML);
    });
});

