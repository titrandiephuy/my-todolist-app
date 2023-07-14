import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  AddTaskSub: Subject<any> = new Subject<any>();
  TaskListSub: Subject<any> = new Subject<any>();
  EditTaskSub: Subject<any> = new Subject<any>();

  constructor() {
  }
}
