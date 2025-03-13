import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroFormComponent } from './registro-form/registro-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    RegistroFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class RegistroModule { }
