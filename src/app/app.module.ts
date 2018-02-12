import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './app.routing';
import { HttpModule  } from '@angular/http';

import { AppComponent } from './app.component';

// Componentes propios
import { HeaderComponent } from './components/general/header.component';
import { FooterComponent } from './components/general/footer.component';
import { HomeComponent } from './components/general/home.component';
import { ProductsListComponent } from './components/product/products-list.component';
import { ProductAddComponent } from './components/product/product-add.component';
import { ProductDetailComponent } from './components/product/product-detail.component';
import { ProductEditComponent } from './components/product/product-edit.component';

import { SignInComponent } from './components/user/sign-in.component';
import { SignUpComponent } from './components/user/sign-up.component';

import { Error404Component } from './components/error/error-404.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsListComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent,
    SignInComponent,
    SignUpComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
