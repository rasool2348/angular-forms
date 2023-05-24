import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormsModule, NgForm, NgModel } from '@angular/forms';
import { UserInfo } from './models/user-info';
import { BanWordsDirective } from './directive/ban-words.directive';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  standalone:true,
  imports:[CommonModule,FormsModule,BanWordsDirective],
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {


  userInfo:UserInfo = {
    firstName : '',
    lastName: '',
    nickName: '',
    email: '',
    fullAddress: '',
    city:'',
    postCode: 0,
    passport: '',
    yearOfBirth: 2020
  }

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(form:NgForm){
    console.log(form);
  }

  isPassportNeeded(control:NgModel){
    return control.value < 2013 ? true : false;
  }

}
 