import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { delay, Observable, of, startWith, tap } from 'rxjs';
import { BanNameValidator } from '../validators/ban-names.validator';
import { CheckNameService } from '../validators/check-name.service';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDir!:FormGroupDirective

  form = new FormGroup({
    firstName: new FormControl('',
    {validators:[Validators.required,BanNameValidator(['test','khar'])],
    asyncValidators:[this.checkNameService.validate.bind(this.checkNameService)],
     nonNullable:true,
    updateOn:'change'}),
    lastName: new FormControl(''),
    nickName: new FormControl(''),
    yearOfBirth: new FormControl(2010,{validators:[Validators.required], nonNullable:true}),
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
    skills: this.fb.nonNullable.record<boolean>({})
  });

  constructor(private fb:FormBuilder, private checkNameService:CheckNameService) { }

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
    //this.form.reset()
    this.formDir.resetForm();
  }

  ngOnInit(): void {
    this.form.controls.yearOfBirth.valueChanges.pipe(
      startWith(2010),
      tap(() => this.form.controls.passport.markAsDirty())
    )
    .subscribe(
      yearOfBirth => {
        if(yearOfBirth < 2014){
          this.form.controls.passport.addValidators([Validators.required]);
          this.form.controls.passport.updateValueAndValidity();
        }else{
          this.form.controls.passport.removeValidators([Validators.required]);
          this.form.controls.passport.updateValueAndValidity();
        }
      }
    )
  }

}
