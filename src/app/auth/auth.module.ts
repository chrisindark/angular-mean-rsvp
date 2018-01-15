import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { AuthService } from './auth.service';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
  ],
  declarations: [],
  providers: [
    AuthService
  ],
  exports: [
    CoreModule
  ]
})

export class AuthModule { }
