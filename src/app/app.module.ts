import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormComponent } from './template-form/template-form/template-form.component';

const routes:Routes = [
  {path:'', redirectTo:'template-forms', pathMatch:'full'},
  {path:'template-forms', component:TemplateFormComponent},
  {path:'reactive-forms', component:ReactiveFormsComponent},
  
]

@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
