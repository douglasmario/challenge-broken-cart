import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products.model';
import { catchError, of, tap } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<Product[]>('/assets/products.json').pipe(
      tap(() => console.log('Products fetched successfully')),
      catchError(error => {
        alert('Failed to fetch products');
        return of([]);  // Doug Returns an empty Observable
      })
    );
  }
}
