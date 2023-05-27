import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckNameService implements AsyncValidator {

  constructor(private http:HttpClient) { }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
    return this.http.get<unknown[]>(`https://jsonplaceholder.typicode.com/users?username=${control.value}`).pipe(
      map(result => result.length == 0 ? null : {checkname:{checkname : control.value}})
    )
  }

}
