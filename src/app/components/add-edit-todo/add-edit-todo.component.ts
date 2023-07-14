import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-add-edit-todo',
  templateUrl: './add-edit-todo.component.html',
  styleUrls: ['./add-edit-todo.component.css'],
})
export class AddEditTodoComponent implements OnInit {
addTaskValue = '';
editTaskValue = '';
constructor(private dataService: DataService) {
  this.dataService.TaskListSub.subscribe(task => this.editTaskValue = task);
}
  ngOnInit(): void {
  }
  addTask(){
    this.dataService.AddTaskSub.next(this.addTaskValue);
    this.addTaskValue = '';
  }

  saveEditTask(){
    this.dataService.EditTaskSub.next(this.editTaskValue);
    this.editTaskValue = '';
  }

}
