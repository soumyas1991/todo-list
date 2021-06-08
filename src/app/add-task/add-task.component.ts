import { Component, OnInit } from '@angular/core';
/*import {FormBuilder,FormGroup } from  '@angular/forms';  */
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
	
	taskForm : FormGroup; 
	show:boolean = false;
	showMsg:boolean = false;

	constructor(private fb:FormBuilder,private taskService:TaskService) {
		this.taskForm = this.fb.group({
	      tasks: this.fb.array([]) ,
	    });
	}

	tasks() : FormArray {
		return this.taskForm.get("tasks") as FormArray
	}

	newTask(): FormGroup {
		return this.fb.group({
		  task: '',
		  description: '',
		})
	}

	addTasks() {
		this.show = true;
		this.tasks().push(this.newTask());
	}

	removeTask(i:number) {
		console.log(i)
		if(i == 0)
		{
			this.show = false;
		}
		this.tasks().removeAt(i);
	}

	onSubmit() {
		let res = this.taskService.addTasks(this.taskForm.value);
		this.taskForm = this.fb.group({
	      tasks: this.fb.array([]) ,
	    });
	    this.show	 = false;
	    this.showMsg = true;
	}


	ngOnInit(): void {
	}

}
