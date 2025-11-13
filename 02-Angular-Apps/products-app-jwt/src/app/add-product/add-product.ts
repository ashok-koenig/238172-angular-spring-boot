import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Products } from '../services/products';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  successMessage: string =''
  errorMessage: string =''
  constructor(private productService: Products){}

  handleSubmit(data: NgForm){
        this.successMessage =''
    this.errorMessage=''
    const newProduct: Product = data.value
    this.productService.createProduct(newProduct).subscribe({
      next: (data) => {
        if(data && data.id){
          this.successMessage="Product created successfully"
        }
      },
      error: (error) => {
        this.errorMessage = "Error creating product: "+ error
      }
    })
  }
}
