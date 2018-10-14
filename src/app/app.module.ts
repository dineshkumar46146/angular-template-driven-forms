import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserTemplateComponent } from './user-template/user-template.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SignupComponent } from './signup/signup.component';
import {PatientComponent } from './patient/patient.component';
import { AppRoutesModule } from './routes.module';

const URL_ROUTES: Routes = [
  { path: 'home', component: UserTemplateComponent },
  { path: 'template', component: UserTemplateComponent },
  { path: 'reactive', component: ReactiveFormsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'patient', component:PatientComponent},
  { path: '**', component: ReactiveFormsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserTemplateComponent,
    ReactiveFormsComponent,
    SignupComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(URL_ROUTES)
    //AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
