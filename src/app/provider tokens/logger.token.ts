import { InjectionToken } from "@angular/core";

export interface LoggerInterface {
  logger(message: any): void;
}

export const LoggerProviderToken = new InjectionToken<LoggerInterface[]>('LoggerProviderToken');
