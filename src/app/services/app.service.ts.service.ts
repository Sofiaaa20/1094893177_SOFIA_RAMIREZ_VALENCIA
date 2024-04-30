import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppServiceTsService {

  constructor(
    private http: HttpClient,
  ) { }

  getProducts() {
    return this.http.get(`https://example.com/api/productos`);
  }
}
