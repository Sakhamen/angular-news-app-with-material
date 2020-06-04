import { Component } from '@angular/core';

import { NewsApiService } from './services/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newsArticles: Array<any>;
  newsSources: Array<any>;

  constructor(
    private newsapi:NewsApiService
  ) { }

  ngOnInit() {
    //load articles
    this.newsapi.initializeArticles().subscribe(data => this.newsArticles = data['articles']);
    //load news sources
    this.newsapi.initializeSources().subscribe(data=> this.newsSources = data['sources']);
  }

  searchArticles(source){
    console.log("selected source is: ", source);
    this.newsapi.getArticlesBySource(source).subscribe(data => this.newsArticles = data['articles']);
  }
}
