import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { AuthGuard } from './gurds/auth.guard';
import { HomeComponent } from './home/home.component';
import { GooglePayComponent } from './payment/google-pay/google-pay.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'search/:searchItem', component: HomeComponent},
  {path: 'tag/:tag' ,component:HomeComponent},
  {path: 'food/:id' ,component:FoodPageComponent},
  {path: 'cart-page' ,component:CartPageComponent, canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'create/product', component:CreateProductComponent, canActivate: [AuthGuard]},
  {path: 'googlePay', component:GooglePayComponent},
  {path: 'signup', component:SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
