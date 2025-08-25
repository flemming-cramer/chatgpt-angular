import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatgptService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = 'your-openai-api-key';

  constructor(private http: HttpClient) {}

  sendMessage(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}

