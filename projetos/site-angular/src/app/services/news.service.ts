import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttputilService } from './httputil.service';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import {News} from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private path = "news";

  constructor(private http: Http, private httpUtil: HttputilService) { }

  getAll(): Observable<News[]> {
    return this.http
      .get(this.httpUtil.url(this.path), this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }

}
