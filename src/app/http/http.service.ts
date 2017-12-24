import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from "../logger/logger.service";

@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private logger: LoggerService) {
    console.log(http, logger);
  }

}
