import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/app/model/coin';

@Component({
  selector: 'app-coin-item',
  templateUrl: './coin-item.component.html',
  styleUrls: ['./coin-item.component.css']
})
export class CoinItemComponent  {
    public coins:Array<Coin>;
  constructor() { }
  ngOnInit(): void {
    this.coins = [ 
      new Coin ('Chainlink','LINK' ,7,5,""),
      new Coin ('Polkadot','DOT'   ,6,50,""),
      new Coin ('MoonBeam','GLMR'  ,3,7,"")
    ]
    }; 

toggleFavorite(event,index){
  console.log('We are toggling the favorite state of coin',event,index);
  this.coins[index].favorite = !this.coins[index].favorite;
}
  }

