import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from 'src/app/model/coin';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-coinlist',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinlistComponent implements OnInit {

  public coins$:Observable<Coin[]>;

  constructor(private coinService:CoinService) { }

  ngOnInit(): void  {
   this.coins$ = this.coinService.getCoins();   
  }

 onToggleFavorite(coin:Coin){
  console.log('Favorite for coin',coin,'was triggered')
  this.coinService.toggleFavorite(coin);
 }
}