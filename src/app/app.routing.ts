import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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

const appRoutes: Routes = [
  {path: '',	component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'add-product', component: ProductAddComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent},
  {path: 'product-edit/:id', component: ProductEditComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);