import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';

const routes: Routes =[
  {path:'listtask',component:ListTaskComponent},  
  { path: 'addtask', component: AddTaskComponent },
  {path:'',redirectTo:'listtask',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const 
RoutingComponent = [AddTaskComponent,ListTaskComponent];
