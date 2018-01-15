import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { ApiService } from './api.service';
import { UtilsService } from './utils.service';
import { FilterSortService } from './filter-sort.service';
import { SubmittingComponent } from './forms/submitting.component';
import { LoadingComponent } from './loading.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    SubmittingComponent
  ],
  providers: [
    Title,
    DatePipe,
    ApiService,
    UtilsService,
    FilterSortService
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    SubmittingComponent
  ]
})

export class CoreModule { }
