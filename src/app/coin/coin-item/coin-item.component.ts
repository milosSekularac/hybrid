import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coin } from 'src/app/model/coin';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-coin-item',
  templateUrl: './coin-item.component.html',
  styleUrls: ['./coin-item.component.css']
})
export class CoinItemComponent  {

  @Input() public coin: Coin; 

  constructor (private coinService:CoinService ) {
  }

  onToggleFavorite(event){
  this.coinService.toggleFavorite(this.coin)
  .subscribe ((coin) => this.coin.favorite = !this.coin.favorite);
  }
  

}




