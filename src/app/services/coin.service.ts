  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  import { mergeScan, Observable } from 'rxjs';
  import { throwError as ObservableThrow } from 'rxjs';
  import {of as ObservableOf} from 'rxjs'; 
  import { Coin } from '../model/coin';

  @Injectable({
    providedIn: 'root'
  })
  export class CoinService {

    private coins:Coin[];

    constructor(private http: HttpClient ) {
      this.coins = [
          new Coin ('Chainlink','LINK',5,6,'BINANCE'),
          new Coin ('Polkadot','DOT',3,7,'KRAKEN'),
          new Coin ('MoonBeam','GLMR',2,1,'BINANCE')
      ]
    }

    getCoins() : Observable<Coin[]> {
      return this.http.get<Coin[]>('/api/coin');
    }
    createCoin(coin:Coin) : Observable<any> {
      let foundCoin = this.coins.find(each=>each.code === coin.code);
      if(foundCoin) {
        return ObservableThrow({  msg: 'Coin with code' + coin.code + 'alredy exist'
        });
      }
      this.coins.push(coin);
      return ObservableOf ({msg: 'Coin with code ' + coin.code + ' successfuly created'});;
    }

    toggleFavorite(coin:Coin):Observable <Coin>{
      let foundCoin = this.coins.find(each =>each.code === coin.code);
      foundCoin.favorite = !foundCoin.favorite;
      return ObservableOf(foundCoin);
      }






} 
