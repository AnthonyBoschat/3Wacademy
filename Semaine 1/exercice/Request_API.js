const userSelect = document.querySelector("#userSelect")
const todoList = document.querySelector("#todoList")

// On récupère tout les utilisateurs
fetch("https://jsonplaceholder.typicode.com/users")
.then(result => result.json())
.then(users => {
    // On récupère son nom et son id
    const options = users.map((user) => {
        const test = `<option value=${user.id}>${user.name}</option>`
        const option = document.createElement("option")
        option.value = user.id
        option.textContent = user.name
        //return option
        return test
    })
    options.forEach(element => {
        userSelect.insertAdjacentHTML("beforeend", element)
    });
})

userSelect.addEventListener("change", function(){
    const userId = userSelect.value
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then(response => response.json())
    .then(todos => {
        todoList.innerhtml = ""
        const listItems = todos.map(todo => {
            const li = `<li>${todo.title}</li>`
            return li
        })
        listItems.forEach(item => {
            todoList.insertAdjacentHTML("beforeend", item)
        })
    })
})