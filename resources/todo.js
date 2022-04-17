var localStorageTodoList = JSON.parse(localStorage.getItem("todos"));
var TODO_LIST = (localStorageTodoList === null) ? [] : localStorageTodoList;
var ID = -1;

function get_todo_item_template(id, value) {
    let todo_item_template = `
    <li class="list-group-item">
        <input class="form-check-input me-1" id="${id}" type="radio" value="${value}" name="todo-items" onclick="select_item(this.id)"/>
        <label for="${id}">${value}</label>
    </li>`;
    return todo_item_template;
}

function generate_list(array) {
    document.querySelector("#todo-list").innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        document.querySelector("#todo-list").innerHTML += get_todo_item_template(
            i + 1,
            array[i]
        );
    }
    localStorage.setItem("todos", "");
    localStorage.setItem("todos", JSON.stringify(array));
}

function select_item(id) {
    ID = id - 1;
    document.querySelector("#todo-text").value = TODO_LIST[ID];
}

generate_list(TODO_LIST);

document.querySelector("#todo-add-btn").addEventListener("click", () => {
    let todo_item = document.querySelector("#todo-text").value;
    TODO_LIST.push(todo_item);
    generate_list(TODO_LIST);
});

document.querySelector("#todo-update-btn").addEventListener("click", () => {
    let todo_item = document.querySelector("#todo-text").value;
    TODO_LIST[ID] = todo_item;
    generate_list(TODO_LIST);
});

document.querySelector("#todo-delete-btn").addEventListener("click", () => {
    for (let i = 0; i < TODO_LIST.length; i++) {
        if (TODO_LIST[i] === TODO_LIST[ID]) {
            let spliced = TODO_LIST.splice(i, 1);
            console.log(spliced);
        }
    }
    generate_list(TODO_LIST);
});