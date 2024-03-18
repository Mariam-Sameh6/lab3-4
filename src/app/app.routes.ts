import { Routes } from '@angular/router';
import { CartComponent } from './Component/cart/cart.component';
import { HomeComponent } from './Component/home/home.component';

export const routes: Routes = [{path: 'cart', component: CartComponent}, {path: 'home', component: HomeComponent}];
