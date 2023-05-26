import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormRecord, ReactiveFormsModule } from '@angular/forms';
import { delay, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl('',{ nonNullable:true}),
    lastName: new FormControl(''),
    nickName: new FormControl(''),
    yearOfBirth: new FormControl(2010),
    passport: new FormControl(''),
    emailAddress: new FormControl(''),
    address: new FormGroup({
      fullAddress: new FormControl(''),
      city: new FormControl(''),
      zipCode: new FormControl(0),
    }),
    phones: new FormArray([
      new FormGroup({
        label: new FormControl('Main'),
        phoneNumber: new FormControl('')
      })
    ]),
    //skills: new FormGroup<{[key:string]:FormControl<boolean>}>({})
    //skills: new FormRecord<FormControl<boolean>>({})
    skills: this.fb.record<boolean>({})
  });

  constructor(private fb:FormBuilder) { }

  addPhone(){
    (this.form.controls.phones.controls).push(
      new FormGroup({
        label: new FormControl('Main'),
        phoneNumber: new FormControl('')
      })
    );
  }
  removePhone(index:number){
    (this.form.controls.phones.controls).splice(index,1);
  }


  skills$ : Observable<string[]> = 
  of(['Angular','Type Script','Git','Java Script']).pipe(
    delay(1000),
    tap( skill => this.addSkillToForm(skill))
  );

  addSkillToForm(skill:string[]){
    skill.forEach(
      skill => this.form.controls.skills.addControl(skill,new FormControl(false,{nonNullable:true}))
    )
    
  }

  onSubmit(e:Event){
    console.log(this.form.value)
  }

  ngOnInit(): void {
    
  }

}
