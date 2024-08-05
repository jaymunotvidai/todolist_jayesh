import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdetailComponentComponent } from './taskdetail-component.component';

describe('TaskdetailComponentComponent', () => {
  let component: TaskdetailComponentComponent;
  let fixture: ComponentFixture<TaskdetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskdetailComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskdetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
