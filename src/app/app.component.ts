import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newsList: any[] = [];

  constructor(private _newService: NewsService){  }

  searchNews(parameters: any){
    this.newsList = [];
    this._newService.getNews(parameters).subscribe(data => {
      console.log('Data received', data);
      this.newsList = data.articles;
    }, error => {
      console.log(error);
    })
  }


}