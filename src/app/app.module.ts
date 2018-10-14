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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

const URL_ROUTES: Routes = [
  { path: 'home', component: UserTemplateComponent },
  { path: 'template', component: UserTemplateComponent },
  { path: 'reactive', component: ReactiveFormsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'patient', component:PatientComponent},
  { path: '**', component: ReactiveFormsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserTemplateComponent,
    ReactiveFormsComponent,
    SignupComponent,
    PatientComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(URL_ROUTES),
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
    
    //AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
