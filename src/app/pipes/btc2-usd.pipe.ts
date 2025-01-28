import { Pipe, PipeTransform } from '@angular/core';
const BTC_USD = 102772;
@Pipe({
  name: 'btc2Usd'
})
export class Btc2UsdPipe implements PipeTransform {

  transform(amount: number, isBtcToUsd = true): number {
    return isBtcToUsd ? amount * BTC_USD : amount / BTC_USD;
  }

}
