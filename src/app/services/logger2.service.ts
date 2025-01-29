import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Logger2Service {
  logger(message: any): void {
    console.log('From Logger 2');
    console.log({message});
  }
}
