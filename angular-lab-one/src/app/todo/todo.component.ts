import { Component, OnInit } from '@angular/core';

interface Todo{
task:string;
status:boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  filter: string = "";
  addTodo: string = "";
  //status:boolean;

  thingsTodo :Todo[] = [
    {task:"fold clothes", status:false},
    {task:"put clothes in drawer", status:false},
    {task:"relax",status:false},
    {task:"pet cat",status:true},
    {task:"pet dog",status:false},
    {task:"be awesome",status:false},
  ];

  removeTask=function(task:string): void{

  let removeindex = this.thingsTodo.findIndex(function(thingsTodo){

   return thingsTodo.task===task;
  })
   this.thingsTodo.splice(removeindex,1);
  }

  addTask() {
    const newTodo = { task: this.addTodo, status: false };
    this.thingsTodo.push(newTodo);
    this.addTodo = "";
  } 

  checkComplete=function(todo:Todo): void{
   
    todo.status = true;
     
  }


  getFilteredResults(): Todo[] {
    return this.thingsTodo.filter((todo) => {
      // convert the todo.task to lowercase
      const taskLower = todo.task.toLowerCase();
      // convert the filter input to lowercase
      const filterLower = this.filter.toLowerCase();
      // check to set if the filter input is inside of the task
      // string
      return taskLower.includes(filterLower);
    });
  }

  constructor() { 

  }

  ngOnInit(): void {
  }

}
