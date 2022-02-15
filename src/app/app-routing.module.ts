import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./_guards/auth.guard";
import { HomepageComponent } from "./homepage/homepage.component";
import {SubscribeListComponent} from "./subscribe-list/subscribe-list.component";

const routes: Routes = [
  {
  path:'login',
  component: LoginComponent,
  canActivate: []
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'subscribers-list',
    component: SubscribeListComponent,
    canActivate: [AuthGuard]
  },
  {
  path:'upload-picture', loadChildren: () => import('./upload-media/upload-media.module').then(m => m.UploadMediaModule),
  canActivate: [AuthGuard]
  },{
    path: '**', redirectTo: 'homepage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
