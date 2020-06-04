import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key: string = 'api key here';

  constructor(
    private http:HttpClient
  ) { }

  initializeSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }

  initializeArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }

  getArticlesBySource(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }

  getArticlesByCountryCode(countryCode: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?country='+countryCode+'&apiKey='+this.api_key);
  }

  getCoronaVirusArticles() {
    return this.http.get('https://newsapi.org/v2/everything?q=corona virus&apiKey='+this.api_key);
  }
}
