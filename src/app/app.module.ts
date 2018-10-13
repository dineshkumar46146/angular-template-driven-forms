import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserTemplateComponent } from './user-template/user-template.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AppRoutesModule } from './routes.module';

const URL_ROUTES: Routes = [
  { path: 'home', component: UserTemplateComponent },
  { path: 'template', component: UserTemplateComponent },
  { path: 'reactive', component: ReactiveFormsComponent },
  
  { path: '**', component: ReactiveFormsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserTemplateComponent,
    ReactiveFormsComponent
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
