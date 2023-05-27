import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

export type DomainOptions = '.org' | '.net' | '.com' | '.ir' | null;
export interface Site{
  domain:DomainOptions,
  host:string
}

@Component({
  selector: 'domain-picker',
  templateUrl: './domain-picker.component.html',
  styleUrls: ['./domain-picker.component.scss'],
  standalone:true,
  imports:[CommonModule,FormsModule],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:DomainPickerComponent,
      multi:true
    }
  ]

})
export class DomainPickerComponent implements OnInit,ControlValueAccessor {

  constructor() { }

  @HostBinding('attr.tabIndex') tabIndex = 0;

  @HostListener('blur') onBlur(){
    this.onTouch();
  }


  value:Site = {
    domain:'.com',
    host:'ladygoldstone'
  };
  disabled:boolean = false;

  onChange: (value:Site) => void = () => {};
  onTouch: () => void = () => {};

  writeValue(value: Site): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(disable:boolean):void{
    this.disabled = disable;
  }

  ngOnInit(): void {
  }

  changeValue(){
    this.onChange(this.value);
  }

  changeSelection(){
    this.onChange(this.value);
  }
    
  



}
