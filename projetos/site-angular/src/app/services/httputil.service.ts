import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { Response, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttputilService {

  private API_URL = environment.API_URL;

  constructor() { }

  url(path: string) {
    return this.API_URL + path;
  }

  headers() {
    const headersParams = new Headers({ "Content-Type": "application/json" });
    const options = new RequestOptions({ headers: headersParams });
    return options;
  }

  extrairDados(response: Response) {
    const data = response.json();
    return data.data || {};
  }

  processarErros(erro: any) {
    return Observable.throw(`Erro acessando servidor remoto.${erro}`);
  }
}
