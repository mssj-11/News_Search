import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newsList: any[] = [];
  loading = false;

  constructor(private _newService: NewsService){  }

  searchNews(parameters: any){
    this.loading = true;
    this.newsList = [];

    setTimeout(() => {
      this._newService.getNews(parameters).subscribe(data => {
        this.loading = false;
        console.log('Data received', data);
        this.newsList = data.articles;
      }, error => {
        console.log(error);
        this.loading = false;
      })
    }, 1000);
    
  }


}