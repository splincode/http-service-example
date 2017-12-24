import { TestBed, inject } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { LoggerLevel, LoggerService } from "../logger/logger.service";
import { LoggerModule } from "../logger/logger.module";

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        LoggerModule.forRoot({
          logLevel: LoggerLevel.ALL,
          showLevel: true,
          colorConfig: {}
        })
      ],
      providers: [
        LoggerService,
        HttpService
      ]
    });
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
