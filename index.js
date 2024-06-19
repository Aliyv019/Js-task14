const input_div=document.querySelector(".input_div")
const input=input_div.querySelector("input")
const todoList=document.querySelector("ul")
const add_btn=input_div.querySelector("button")

const arr=[]

function input_enter(index){
    if(input.value!==null && input.value.trim()!==''){
    const listItem=document.createElement('li')
    const toDotext=document.createElement('span')
    const buttons=document.createElement('div')
    const edit_btn=document.createElement('button')
    edit_btn.classList='edit_btn'
    const delete_btn=document.createElement('button')
    delete_btn.classList='delete_btn'
    buttons.classList='buttons'
    buttons.appendChild(edit_btn)
    buttons.appendChild(delete_btn)
    edit_btn.textContent='Edit'
    delete_btn.textContent='Delete'
    todoList.appendChild(listItem)
    listItem.appendChild(toDotext)
    listItem.appendChild(buttons)
    toDotext.textContent=input.value
    arr.push(input.value)
    input.value=''
    edit_btn.addEventListener('click',()=>{editTodoItem(arr.length-1,listItem)})
    delete_btn.addEventListener('click',()=>{deleteTodoItem(arr.length-1,listItem)})
    }
}
add_btn.addEventListener('click',input_enter)
input.addEventListener('keypress',()=>{if(event.keyCode===13){input_enter()}})

function editTodoItem(index,listItem){
    const newTodo=prompt("enter your new ToDo")
    if(newTodo!==null && newTodo.trim()!==''){
        arr[index]=newTodo
        const toDotext=listItem.querySelector('span')
        toDotext.textContent=newTodo
    }
}
function deleteTodoItem(index,listItem){
    arr.splice(index,1)
    listItem.remove()
}