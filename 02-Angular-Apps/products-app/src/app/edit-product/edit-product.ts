import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from '../services/products';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct {
  id: number;
  product: any
    successMessage: string =''
  errorMessage: string =''
  constructor(private productService: Products, private route: ActivatedRoute){
    this.id = route.snapshot.params['id']
    productService.getAproduct(this.id).subscribe((data)=>{
      this.product = data
    })
  }

  handleSubmit(){
    this.successMessage =''
    this.errorMessage=''
    if(this.product){
      this.productService.updateProduct(this.product).subscribe({
        next: (data)=>{
          if(data){
            this.successMessage ="Product updated successfully"
          }
        },
        error: (error)=>{
          this.errorMessage ="Error updating product: "+error
        }
      })
    }
  }
}
