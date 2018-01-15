import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';

// import { HomeComponent } from './pages/home/home.component';
// import { CallbackComponent } from './pages/callback/callback.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: 'app/pages/home/home.module#HomeModule',
  },
  {
    path: 'callback',
    loadChildren: 'app/pages/callback/callback.module#CallbackModule',
  },
  {
    path: 'event',
    loadChildren: 'app/pages/event/event.module#EventModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: 'app/pages/admin/admin.module#AdminModule',
    canActivate: [AuthGuard, AdminGuard]
  },
  // {
  //   path: '**',
  //   loadChildren: './pages/error/error.module#ErrorModule'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard],
})

export class AppRoutingModule { }
