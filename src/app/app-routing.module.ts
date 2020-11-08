import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToRouteComponent } from './to-route/to-route.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SecondRedirectComponent} from './second-redirect/second-redirect.component';
import {MycomponentComponent} from './mycomponent/mycomponent.component';
import {ChildOneComponent} from './mycomponent/child-one/child-one.component';
const routes: Routes = [
  {path: 'student-login', component: ToRouteComponent},
  {path: 'error', component: SecondRedirectComponent},
  {path: 'main-page', component:MycomponentComponent,
  children:[{
    path: 'child-one' , component: ChildOneComponent
  }]
 },
  { path: '',   redirectTo: '/main-page', pathMatch: 'full' },
  {path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
