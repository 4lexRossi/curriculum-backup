import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalFormRoutingModule } from './personal-form-routing.module';
import { PersonalFormComponent } from './personal-form.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    PersonalFormComponent
  ],
  imports: [
    CommonModule,
    PersonalFormRoutingModule,
    MaterialModule
  ]
})
export class PersonalFormModule { }
