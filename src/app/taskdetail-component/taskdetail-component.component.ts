import { Component, EventEmitter, Output } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskdetail-component',
  templateUrl: './taskdetail-component.component.html',
  styleUrls: ['./taskdetail-component.component.scss']
})
export class TaskdetailComponentComponent {
  data: any;
  constructor (private commonservice : CommonserviceService,private router : Router){}
  @Output() dataEvent = new EventEmitter<any>();
 
  ngOnInit() {
    this.commonservice.currentData.subscribe(data => this.data = data);
    console.log(this.data);
    
  }
  // dataClicked(menu:any){
  //   console.log(menu);
    
  // }

  backbutton(){
this.router.navigate(['/'])

  }

  editbutton(){
this.router.navigate(['/task-form'])

  }
}
