import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxJsonViewModule } from '@twp0217/ngx-json-view';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxJsonViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
