import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from '../commonservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.scss']
})
export class TaskformComponent implements OnInit {
  TaskForm!: FormGroup;
  submitted:any = false
  constructor(private fb: FormBuilder, private commonservice : CommonserviceService,private router : Router) {}

  ngOnInit() {
    this.TaskForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['select', Validators.required],
      duedate: ['', Validators.required],
      status: ['select', Validators.required]
    });
    
  }

  submit() {
    if (this.TaskForm.invalid) {
      console.log(this.TaskForm.value);
      
      alert('Please enter all the fields below');
    }else{

      console.log(this.TaskForm.value);
      const data = this.TaskForm.value
      this.router.navigate(['/'])
      this.commonservice.adddata(data);
    }


  }


  backtolist(){
    this.router.navigate(['/'])

  }
}



 
  