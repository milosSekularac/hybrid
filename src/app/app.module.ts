import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoinItemComponent } from './coin/coin-item/coin-item.component';
import { CreateCoinComponent } from './coin/create-coin/create-coin.component';
import { CoinlistComponent } from './coin/coin-list/coin-list.component';
import { CoinService } from './services/coin.service';
import { MessageService } from './services/message.service';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    CoinItemComponent,
    CreateCoinComponent,
    CoinlistComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CoinService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
