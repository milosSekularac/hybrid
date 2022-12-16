import { Component } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hybrid Exchange';
  constructor(public MessageService:MessageService) {}
  ngOnInIt():void{
    this.MessageService.message = 'Hello Message Service';
  }
}

