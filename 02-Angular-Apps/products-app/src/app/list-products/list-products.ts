import { Component } from '@angular/core';
import { Product } from '../models/product';
import { Products } from '../services/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-products',
  imports: [RouterLink],
  templateUrl: './list-products.html',
  styleUrl: './list-products.css',
})
export class ListProducts {
  products: Product[] =[]
  constructor(private productService: Products){
    this.loadProducts()
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((data)=> {
      console.log(data)
      this.products = data
    })
  }

  handleDelete(id: number){
    const result = confirm("Are you sure, you want to delete the product?")
    if(result){
      this.productService.deleteProduct(id).subscribe(()=>{
        this.loadProducts()
      })
    }
  }
}
