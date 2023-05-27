import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormComponent } from './template-form/template-form/template-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomRatePicker } from './custom-rate-picker/custom-rate-picker.component';

const routes:Routes = [
  {path:'', redirectTo:'template-forms', pathMatch:'full'},
  {path:'template-forms', component:TemplateFormComponent},
  {path:'reactive-forms', component:ReactiveFormsComponent},
  {path:'custom-form-control', component:CustomRatePicker},
  
]

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
