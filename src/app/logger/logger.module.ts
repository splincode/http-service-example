import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoggerConfig, LoggerService} from "./logger.service";

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class LoggerModule {
  static forRoot(config: LoggerConfig): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        LoggerService,
        {
          provide: "LoggerConfig",
          useValue: config
        }
      ]
    };
  }
}
