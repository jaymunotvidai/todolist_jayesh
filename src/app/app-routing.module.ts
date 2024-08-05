import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskformComponent } from './taskform/taskform.component';
import { TaskdetailComponentComponent } from './taskdetail-component/taskdetail-component.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path: '', component:TasklistComponent},
  {path: 'task-detail', component:TaskdetailComponentComponent},
  {path: 'task-form', component:TaskformComponent},
  // {path: '', component : AppComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
6