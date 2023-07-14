import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceURL: string;
  constructor( private http: HttpClient) {
    this.serviceURL="http://localhost:3000/tasks"
  }

  addTask(task: Task):Observable<Task> {
    return this.http.post<Task>(this.serviceURL, task);
  }
  getAllTask():Observable<Task[]> {
    return this.http.get<Task[]>(this.serviceURL);
  }
  deleteTask(task: Task):Observable<Task> {
    return this.http.delete<Task>(this.serviceURL+'/'+task.id);
  }
  editTask(task: Task):Observable<Task> {
    return this.http.put<Task>(this.serviceURL+'/'+task.id, task);
  }

  private eventSubject = new Subject<Task>();

  emitEvent(task: Task) {
    this.eventSubject.next(task);
  }

  getEvent(): Observable<Task> {
    return this.eventSubject.asObservable();
  }
}
