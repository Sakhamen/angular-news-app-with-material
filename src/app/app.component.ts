import { Component } from "@angular/core";

import { NewsApiService } from "./services/news-api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  newsArticles: Array<any>;
  newsSources: Array<any>;

  constructor(private newsApiService: NewsApiService) {}

  ngOnInit() {
    //load articles
    this.newsApiService
      .initializeArticles()
      .subscribe((data) => (this.newsArticles = data["articles"]));
    //load news sources
    this.newsApiService
      .initializeSources()
      .subscribe((data) => (this.newsSources = data["sources"]));
  }

  searchArticles(source: string) {
    this.newsApiService
      .getArticlesBySource(source)
      .subscribe((data) => (this.newsArticles = data["articles"]));
  }
}
