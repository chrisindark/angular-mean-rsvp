// src/app/pages/event/event.routes.ts
import { Routes } from '@angular/router';

import { EventComponent } from './event.component';

export const EVENT_ROUTES: Routes = [
  {
    path: ':id',
    component: EventComponent
  }
];
