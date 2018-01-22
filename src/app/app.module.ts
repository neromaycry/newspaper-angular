import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BusyModule } from 'angular2-busy';
// import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { CoreModule } from './core/core.module';

import { NewsListModule } from './news-list';
import { NewsArticleModule } from './news-article';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BusyModule,
    HttpClientModule,
    CoreModule,
    NewsListModule,
    NewsArticleModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
