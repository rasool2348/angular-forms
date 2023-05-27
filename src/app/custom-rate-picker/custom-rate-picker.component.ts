import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import '@polymer/paper-input/paper-textarea';
import { CustomValueAccessorDirective } from './directives/custom-value-accessor.directive';

@Component({
  selector: 'app-custom-rate-picker',
  templateUrl: './custom-rate-picker.component.html',
  styleUrls: ['./custom-rate-picker.component.css'],
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,CustomValueAccessorDirective],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomRatePickerComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  form = this.fb.group({
    reviewText:'hello Rasool'
  })

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form);
    this.form.reset();
  }

}
