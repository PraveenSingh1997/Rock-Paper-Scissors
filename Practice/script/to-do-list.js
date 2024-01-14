const todoList = [{name : 'make dinner' , 
dueDate : '2022-12-22' }] ; 
renderTodoList() ;

function renderTodoList(){
    let todoListHtml = ''; 

        todoList.forEach(function(todoObject , index ){
            const {name , dueDate } = todoObject ; 
            const html = `
            <div> 
            ${name}  </div>
            <div> 
            ${dueDate}

            </div>
            <button class="delete-todo-button"
            onclick="todoList.splice(${index} , 1);
            renderTodoList() "
            
            > Delete </button>
             ` ; 
            todoListHtml += html ; 
        })

        // for (let i = 0 ; i < todoList.length ; i++){
        //     const todoObject = todoList[i] ; 
        //     //const name = todoObject.name ; 
        //     //const dueDate = todoObject.dueDate ; 
        //     const {name , dueDate} = todoObject
        //     const html = `
        //     <div> 
        //     ${name}  </div>
        //     <div> 
        //     ${dueDate}

        //     </div>
        //     <button class="delete-todo-button"
        //     onclick="todoList.splice(${i} , 1);
        //     renderTodoList() "
            
        //     > Delete </button>
        //      ` ; 
        //     todoListHtml += html ; 
        // }
        console.log(todoListHtml)

        document.querySelector('.js-todo-list').innerHTML = todoListHtml ; 


}



function addTodo() {
    const inputElement = document.querySelector('.js-name-input') ; 
    const dateInputelement = document.querySelector('.js-due-date-input');
    const name = inputElement.value ; 
    const dueDate = dateInputelement.value ; 
    console.log(name) ; 
    todoList.push({name , dueDate}) ; 
    console.log(todoList); 
    renderTodoList() ; 

    inputElement.value = ''
}