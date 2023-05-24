import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    TemplateFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
