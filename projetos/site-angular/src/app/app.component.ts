import { Component } from '@angular/core';
import { NewsService } from './services/news.service';
import { News } from './models/news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'site-angular';

  public news: News[];

  constructor(private newsService: NewsService) {
    this.newsService.getAll().subscribe(data => {
      this.news = data;
      console.log(this.news);
    });
  }


}
