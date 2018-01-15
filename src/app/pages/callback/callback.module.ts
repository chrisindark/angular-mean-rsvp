import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../core/core.module';

import { CallbackComponent } from './callback.component';
import { CALLBACK_ROUTES } from './callback.routes';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(CALLBACK_ROUTES)
  ],
  declarations: [
    CallbackComponent
  ]
})

export class CallbackModule { }
