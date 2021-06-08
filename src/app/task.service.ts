import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  addTasks(result:any){
    localStorage.setItem('task', JSON.stringify(result)); 
  }
  getTask(){
	let task = JSON.parse(localStorage.getItem('task')|| '{}');
	return task;
  }
}
