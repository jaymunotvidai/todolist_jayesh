import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { Router } from '@angular/router';
import { MockService } from '../mock.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {
  constructor(private commonservice: CommonserviceService, private router: Router, private mockservice : MockService) {}
  @Output() dataEvent = new EventEmitter<any>();
  flagToggle: any = false;
  EditToggle: any = false;
  data: any[] = [
    // { id: 1, name: 'Task 1', status: 'Pending', priority: 'high', duedate: '2024-10-30' },
    // { id: 2, name: 'Task 2', status: 'Completed', priority: 'low', duedate: '2024-09-30' },
    // { id: 3, name: 'Task 3', status: 'In Progress', priority: 'medium', duedate: '2024-08-30' }
  ];

  ngOnInit() {
    this.commonservice.currentData.subscribe(data => {
      if (data) {
        this.data.push(data);
      }
    });

    this.mockservice.tasks$.subscribe(data => {
      this.data = data;
      // this.mockservice.tasksSubject.next(this.data);
    })
    

    // this.mockService.tasks$.subscribe((tasks) => {
    //   this.dataSource = new MatTableDataSource(tasks);
    //   this.dataSource.sort = this.sort;
    // });


    
  }

  onclick(e: any) {
    console.log(e);
    this.commonservice.changeData(e);
    this.flagToggle = true;
    this.router.navigate(['/task-detail']);
  }

  closeList() {
    this.flagToggle = false;
  }

  editlist() {
    this.EditToggle = true;
  }

  BackList() {
    this.EditToggle = false;
  }

  savedateEdited() {
    this.EditToggle = false;
  }

  delete(i: any,e:any) {
    this.data.splice(i, 1);
    this.mockservice.deleteTask(e.name)
  }

  addnew() {
    this.router.navigate(['/task-form']);
  }
}
