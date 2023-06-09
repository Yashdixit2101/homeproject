import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLogoComponent } from './home-logo/home-logo.component';
import { HomeCatComponent } from './home-cat/home-cat.component';
import { HomelocationComponent } from './homelocation/homelocation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLogoComponent,
    HomeCatComponent,
    HomelocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
