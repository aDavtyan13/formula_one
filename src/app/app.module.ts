import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {AppRoutingModule} from 'app/app-routing.module';
import {JsonInterceptorService} from 'app/@core/services/json-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JsonInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
