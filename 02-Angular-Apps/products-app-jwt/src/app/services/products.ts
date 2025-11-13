import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { catchError, retry, throwError } from 'rxjs';
import { Token } from './token';

@Injectable({
  providedIn: 'root',
})
export class Products {
  apiUrl: string = 'http://localhost:8080/products'
  headers: HttpHeaders
  constructor(private http: HttpClient, private token: Token){
    this.headers = new HttpHeaders({'Authorization': 'Bearer '+ token.getToken()})
  }

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl, {headers: this.headers}).pipe(catchError(this.handleError));
  }

  createProduct(newProduct: Product){
    return this.http.post<Product>(this.apiUrl, newProduct, {headers: this.headers}).pipe(catchError(this.handleError), retry(3))
  }

  deleteProduct(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`, {headers: this.headers}).pipe(catchError(this.handleError))
  }

  getAproduct(id: number){
    return this.http.get<Product>(`${this.apiUrl}/${id}`, {headers: this.headers}).pipe(catchError(this.handleError))
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product, {headers: this.headers}).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    console.log(error)
    return throwError(()=> new Error('Something went wrong, please try again later.'))
  }
}
