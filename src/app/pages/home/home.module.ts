import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../core/core.module';

import { HomeComponent } from './home.component';
import { HOME_ROUTES } from './home.routes';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(HOME_ROUTES)
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})

export class HomeModule { }
