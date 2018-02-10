import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './app.routing';
import { HttpModule  } from '@angular/http';

import { AppComponent } from './app.component';

// Componentes propios
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { HomeComponent } from './components/home.component';
import { ProductsListComponent } from './components/products-list.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductEditComponent } from './components/product-edit.component';

import { SignInComponent } from './components/sign-in.component';
import { SignUpComponent } from './components/sign-up.component';

import { ErrorComponent } from './components/error.component';


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
    ErrorComponent
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
