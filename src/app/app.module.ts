import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TagComponent } from './tag/tag.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import {HttpClientModule } from '@angular/common/http';
import { CreateProductComponent } from './product/create-product/create-product.component';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GooglePayComponent } from './payment/google-pay/google-pay.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    CartPageComponent,
    FoodPageComponent,
    NotFoundComponent,
    LoginComponent,
    CreateProductComponent,
    GooglePayComponent,
    SignupComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    GooglePayButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
