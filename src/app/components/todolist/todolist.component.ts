import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskList: string[] = [];
  currentEditValue = '';
  constructor(private dataService: DataService) {
    this.dataService.AddTaskSub.subscribe(task => {this.taskList.push(task)});
    this.dataService.EditTaskSub.subscribe(task => {
      this.taskList[this.taskList.indexOf(this.currentEditValue)] = task;
      this.currentEditValue = '';
    });
  }
  ngOnInit(): void {

  }
deleteTask(task: string){
  this.taskList.splice(this.taskList.indexOf(task), 1);
}
sendCurrentEditValue(task:string){
  this.currentEditValue = task;
  this.dataService.TaskListSub.next(task);
}
}
