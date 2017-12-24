import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpService } from "./http/http.service";
import { LoggerModule } from "./logger/logger.module";
import { LoggerLevel } from "./logger/logger.service";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({
      logLevel: LoggerLevel.ALL,
      showLevel: true,
      colorConfig: {}
    })
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
