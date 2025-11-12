import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Products {
  apiUrl: string = 'http://localhost:8080/products'
  constructor(private http: HttpClient){}

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  createProduct(newProduct: Product){
    return this.http.post<Product>(this.apiUrl, newProduct).pipe(catchError(this.handleError), retry(3))
  }

  deleteProduct(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError))
  }

  getAproduct(id: number){
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError))
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    console.log(error)
    return throwError(()=> new Error('Something went wrong, please try again later.'))
  }
}
