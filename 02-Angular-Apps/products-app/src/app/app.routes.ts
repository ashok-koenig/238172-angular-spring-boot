import { Routes } from '@angular/router';
import { ListProducts } from './list-products/list-products';
import { AddProduct } from './add-product/add-product';
import { EditProduct } from './edit-product/edit-product';

export const routes: Routes = [
    {path: '', redirectTo:"/products", pathMatch:"full"},
    {path: 'products', component: ListProducts},
    {path: 'products/add', component: AddProduct},
    {path: 'products/:id', component: EditProduct}
];
