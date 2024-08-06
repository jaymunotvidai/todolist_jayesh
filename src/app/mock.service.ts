import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface task {
  name: string;
  description: string;
  status:string;
  priority: string;
  duedate: string;

}

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  public tasks :task[]= [
    {
      name: 'Task 1',
      description: 'task 1',
      status: 'Completed',
      priority: 'Low',
      duedate: '2024-08-05'
    },
    {
      name: 'Task 2',
      description: 'task 2',
      status: 'Pending',
      priority: 'High',
      duedate: '2024-08-10',
    },
    {
      name: 'Task 3',
      description: 'task 3',
      status: 'To Do',
      priority: 'Medium',
      duedate: '2024-08-12',
    },
    {
      name: 'Task 4',
      description: 'task 4',
      status: 'Completed',
      priority: 'High',
      duedate: '2024-08-15',
    },
    {
      name: 'Task 5',
      description: 'task 5',
      status: 'To Do',
      priority: 'Low',
      duedate: '2024-08-20',
    },
    {
      name: 'Task 6',
      description: 'task 6',
      status: 'Pending',
      priority: 'Medium',
      duedate: '2024-08-22',
    },
    {
      name: 'Task 7',
      description: 'task 7',
      status: 'Completed',
      priority: 'Low',
      duedate: '2024-08-25',
    },
    {
      name: 'Task 8',
      description: 'task 8',
      status: 'To Do',
      priority: 'High',
      duedate: '2024-08-27',
    },
    {
      name: 'Task 9',
      description: 'task 9',
      status: 'Pending',
      priority: 'Low',
      duedate: '2024-08-30',
    },
    {
      name: 'Task 10',
      description: 'task 10',
      status: 'Completed',
      priority: 'Medium',
      duedate: '2024-09-01',
    }
  ];

  private task = new BehaviorSubject<task[]>(this.tasks);
  tasks$ = this.task.asObservable();

  getTask(name: string): task | undefined {
    return this.tasks.find(task => task.name === name);
  }

  addTask(task: task): void {
    const existingTask = this.getTask(task.name);
    if (!existingTask) {
      this.tasks.push(task);
      this.task.next(this.tasks);
    } else {
      console.error(`Task already exists.`);
    }
  }

  updateTask(name: string, updatedTask: task): void {
    const taskIndex = this.tasks.findIndex(task => task.name === name);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = updatedTask;
      this.task.next(this.tasks);
    } else {
      console.error(`Task  not found.`);
    }
    
  }

  deleteTask(name: string): void {
    const taskIndex = this.tasks.findIndex(task => task.name === name);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.task.next(this.tasks);
    } else {
      console.error(`Task  not found.`);
    }
  }



  
}
