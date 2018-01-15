import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { CoreModule } from './core/core.module';

import { NewsListModule } from './news-list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    NewsListModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
