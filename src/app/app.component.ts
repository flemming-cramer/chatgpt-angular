import { Component } from '@angular/core';
import { ChatgptService } from '../services/chatgpt.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <textarea [(ngModel)]="userInput" placeholder="Type your message"></textarea>
      <button (click)="sendMessage()">Send</button>
      <p *ngIf="response">Response: {{ response }}</p>
    </div>
  `,
})
export class AppComponent {
  userInput: string = '';
  response: string | null = null;

  constructor(private chatgptService: ChatgptService) {}

  sendMessage() {
    this.chatgptService.sendMessage(this.userInput).subscribe(
      (data) => {
        this.response = data.choices[0].message.content;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
