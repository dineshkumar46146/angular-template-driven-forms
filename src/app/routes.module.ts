import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserTemplateComponent } from './user-template/user-template.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const URL_ROUTES: Routes = [
  { path: 'home', component: UserTemplateComponent },
  { path: 'template', component: UserTemplateComponent },
  { path: 'reactive', component: ReactiveFormsComponent },
  { path: '', redirectTo: "home" },
  { path: '**', component: ReactiveFormsComponent }
];

@NgModule({

  imports: [
    RouterModule.forRoot(URL_ROUTES)
  ]
})
export class AppRoutesModule { }
