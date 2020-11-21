var todoList=[
    {
        id:0,
        title:"Hello",
        description:"hey"
    }
   

]

function renderTodoItems(){
    var todoListDiv= document.getElementsByClassName("todo-list")[0];
    var singleLis
   
    var body="";
todoList.forEach(item=>{
    body +=`
  <div class="todo-items" data-id="${item.id}">
       <div class="todo-title"> 
           ${item.title}
           </br>
           ${item.description}
       </div>
     <div class="todo-action">
        <a href="#" class="action-delete" onclick="deleteItem(${item.id})">Delete</a>
      </div>
  </div>
    `;
})
todoListDiv.innerHTML=body;

}
renderTodoItems();
function addTOdoItem(domElement){
    todoListDiv.appendChild(domElement)
}


var input= document.getElementById("todoInputBox");
var click= document.getElementById("addButton");

click.onclick=()=>{
    var newTodoTitle=input.value;
    console.log(input.value);
    
    todoList.push({
        id:   todoList[todoList.length -1].id + 1,   //todoList.length+1,
        title:newTodoTitle,
         description:"added via input box"
    })
    console.log(todoList);
    renderTodoItems();
}

function deleteItem(id){
    todoList=todoList.filter(item => item.id!=id);
    console.log(todoList);
    renderTodoItems();
}
