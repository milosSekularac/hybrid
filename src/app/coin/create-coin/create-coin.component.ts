import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/app/model/coin';
import { CoinService } from 'src/app/services/coin.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-create-coin',
  templateUrl: './create-coin.component.html',
  styleUrls: ['./create-coin.component.css'],
  providers: [MessageService]
})
export class CreateCoinComponent {

  public coin:Coin;
  public confirmed = false;
  public exchanges =['Binance','Coinbase','Kraken','Other']
  
  constructor(private coinService:CoinService,
              public messageService:MessageService) { 
    this.coin = new Coin ('', '',0,0,"Binance");
    this.messageService.message = 'Somthing else'
   }

  setCoinPrice (price){
    this.coin.price = price;
    this.coin.praviousPrice;
  }

createCoin (coinForm){
  console.log('Coin form',coinForm);
  if (coinForm.valid) {
    let created = this.coinService.createCoin(this.coin);
    if(created) {
      this.messageService.message = 'Successfully created coin with coin code:'
      + this.coin.code;
      this.coin = new Coin('','',0,0,'BINANCE');
    }else {
      this.messageService.message = 'Coin with coin code: ' + this.coin.code
      + 'alredy exist'
    }
  } else {
    console.error('Coin form is in an invalid state')
  }
}

}
