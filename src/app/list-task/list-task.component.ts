import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
	tasks:any = [];
	constructor(private taskService:TaskService) { }

	ngOnInit(): void {

		let list = this.taskService.getTask();
		this.tasks =  list.tasks;
		console.log(this.tasks)
		
	}

}
