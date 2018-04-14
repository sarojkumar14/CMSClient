import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//routing
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './layouts';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
];

@NgModule({
  declarations: [
    AppComponent,
    APP_CONTAINERS
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
