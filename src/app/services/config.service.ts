import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: any;

  private apiUrl: string;

  private configurationUrl = '/assets/api-config.json';

  constructor( private http: HttpClient ) {

  }

  getAppConfig() {
    return this.http.get('/assets/api-config.json');
  }


  getApiUrl() {
    return this.apiUrl;
  }

}
