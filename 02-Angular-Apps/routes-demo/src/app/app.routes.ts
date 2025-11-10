import { Routes } from '@angular/router';
import { Home } from './home/home';
// import { About } from './about/about';
import { PageNotFound } from './page-not-found/page-not-found';
// import { Users } from './users/users';
import { UserDetail } from './user-detail/user-detail';
import { Payment } from './payment/payment';
import { testGuard } from './guards/test-guard';

export const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: 'home', component: Home},
    {path: 'about', loadComponent: ()=> import("./about/about").then( c => c.About)},
    {path: 'users', canActivate:[testGuard], loadComponent: ()=> import("./users/users").then( c => c.Users)},
    // {path: 'about', component: About},
    // {path: 'users', component: Users},
    {path: 'users/:name', canActivate:[testGuard], component: UserDetail},
    {path: 'payment', component:Payment},
    {path: '**', component: PageNotFound}
];
