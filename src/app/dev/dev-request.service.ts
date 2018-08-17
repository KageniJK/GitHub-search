import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Dev } from '../dev';


@Injectable()
export class DevRequestService {

  dev: Dev;

  constructor(private http: HttpClient) {
  this.dev = new Dev('', ''); }

  devRequest() {
    interface ApiResponse {
      login: string;
      avatar_url: string;
    }

  const promise = new Promise((resolve, reject) => {
    this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
      this.dev.name = response.login;
      this.dev.image = response.avatar_url;

      resolve();
    },
    error => {
      this.dev.name = 'Experiencing some tech difficulties';

      reject(error);
    });
    });
    return promise;
  }
}
