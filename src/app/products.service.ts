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
      catchError((error) => {
        console.error('Error fetching products:', error); // Doug: Log the error to the console
        alert('Failed to fetch products'); // Doug: Alert the user
        return of([]); // Doug: Return an empty Observable
      })
    );
  }
}
