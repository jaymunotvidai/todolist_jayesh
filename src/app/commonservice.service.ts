import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor() { }

  private dataSource = new BehaviorSubject<any>({});
  currentData = this.dataSource.asObservable();

  changeData(data: any) {
    this.dataSource.next(data);
  }


  
  private mainsource = new BehaviorSubject<any>({});
  adddDataToform = this.mainsource.asObservable();

  adddata(data: any) {
    this.dataSource.next(data);
    console.warn(data);
    
  }


}
