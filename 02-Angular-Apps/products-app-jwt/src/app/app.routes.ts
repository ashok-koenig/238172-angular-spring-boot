import { Routes } from '@angular/router';
import { ListProducts } from './list-products/list-products';
import { AddProduct } from './add-product/add-product';
import { EditProduct } from './edit-product/edit-product';
import { Login } from './login/login';
import { Register } from './register/register';
import { Unauthorized } from './unauthorized/unauthorized';
import { PageNotFound } from './page-not-found/page-not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: '', redirectTo:"/login", pathMatch:"full"},
    {path: 'login', component: Login},
    {path: 'register', component: Register},
    {path: 'products', component: ListProducts, canActivate: [authGuard]},
    {path: 'products/add', component: AddProduct, canActivate: [authGuard]},
    {path: 'products/:id', component: EditProduct, canActivate: [authGuard]},
    {path: 'unauthorized', component: Unauthorized},
    {path: '**', component: PageNotFound}
];
