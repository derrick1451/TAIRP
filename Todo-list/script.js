class CreateList {
    constructor(task){
        this.task = task
        this.completed = false

    }
}

class GenerateTodos {
    constructor(){
        this.todolist = []
    }
    add = (todos)=>{
        if (todos === '') return;
        const todoz = new CreateList(todos)
        this.todolist.push(todoz)
        this.showList()
    }
    //save to local storage
    saveBooks=() => {
        localStorage.setItem('todos', JSON.stringify(this.todolist));
      }
    showList = ()=>{
        const listContainer = document.querySelector('.todo-list');
        //remove all existing lists
        listContainer.innerHTML = '';
        this.todolist.forEach((todo, index)=>{
            const list = document.createElement('li');
            list.classList.add('list-item');
           const checkbox = document.createElement('input');
              checkbox.type = 'checkbox';
                checkbox.checked = false;
                checkbox.classList.add('checkbox');
                list.appendChild(checkbox);
              
            const span = document.createElement('p');
            span.classList.add('task');
            span.setAttribute('id', `${index}`);
            span.textContent = todo.task;
            if (todo.completed === true) {
                checkbox.checked = true;
                span.classList.add('decorated');
              } else {
                checkbox.checked = false;
                span.classList.remove('decorated');
              }
            list.appendChild(span);
            const button = document.createElement('button');
            list.appendChild(button);
            button.innerHTML = '<i class="fa-solid fa-trash trash"></i>';
            listContainer.appendChild(list);  
            checkbox.addEventListener('change', ()=>{
                if(checkbox.checked){
                    span.classList.toggle('decorated');
                    todo.completed = true;
                    this.saveBooks();
                }else{
                    span.classList.toggle('decorated');
                    todo.completed = false;
                    this.saveBooks();
                }
            }) 
            button.addEventListener('click', ()=>{
                this.todolist.splice(index, 1);
                this.showList();
                this.saveBooks();
            })
        })
    }
    //window onload
    windowReload = ()=>{
        window.addEventListener('DOMContentLoaded',()=>{
            if(localStorage.getItem('todos')){
                this.todolist = JSON.parse(localStorage.getItem('todos'));
                this.showList()
            }
        })
    }

    displayList = () => {
        const input = document.querySelector('#inputs');
        const submit = document.querySelector('#create');
        submit.addEventListener('click', () => {
          if (input.value === '') {
            return null;
          }
          this.add(input.value);
          this.saveBooks();
          input.value = '';
          return input;
        });
      };
      //delete all
      deleteAll=() => {
        const clearAll = document.querySelector('.clear-btn');
        clearAll.addEventListener('click', () => {
          this.todolist = this.todolist.filter((item) => !item.completed);
          this.showList();
          this.saveBooks();
        });
      }
}
const todo = new GenerateTodos();
todo.displayList();
todo.windowReload()
todo.deleteAll()
const refreashBtn = document.querySelector('#refresh');
refreashBtn.addEventListener('click', () => {
    window.location.reload();
  });