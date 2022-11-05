import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { StudentBadgeComponent } from './student-badge/student-badge.component';
import { MaterialModule } from '../shared/material/materials.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    // RegisterComponent,
    // SigninComponent,
    // StudentBadgeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    // RegisterComponent,
    // SigninComponent,
    // StudentBadgeComponent
  ]
})
export class StudentModule { }