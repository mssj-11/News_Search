import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(parameters: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + parameters.country + '&category=' + parameters.category + '&apiKey=035cb4de05154aa3b0bf1546a57a5209';

    return this.http.get(URL);
  }


}