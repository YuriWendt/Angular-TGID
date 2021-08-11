import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../models/product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`)
  }

  readById(id: number): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }
  
}
