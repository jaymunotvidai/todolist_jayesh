import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() formGroup!: FormGroup ;
  @Input() controlName: any;
  @Input() label: string | undefined;
  @Input() type: any;
  @Input() placeholder: string = '';
}
