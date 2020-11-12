import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { MydirectiveDirective } from './mydirective.directive';
import {FormsModule} from '@angular/forms';
import { ToRouteComponent } from './to-route/to-route.component';
import { SecondRedirectComponent } from './second-redirect/second-redirect.component';
import { ChildOneComponent } from './mycomponent/child-one/child-one.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    MydirectiveDirective,
    ToRouteComponent,
    SecondRedirectComponent,
    ChildOneComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
