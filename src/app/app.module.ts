import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ShabdawaliComponent } from './shabdawali/shabdawali.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ShabdawaliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavComponent,
    FooterComponent
  ]
})
export class AppModule { }
