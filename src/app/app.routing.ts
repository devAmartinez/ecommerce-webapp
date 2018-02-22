import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Componentes propios
import { HeaderComponent } from './components/general/header-login.component';
import { FooterComponent } from './components/general/footer.component';
import { HomeComponent } from './components/general/home.component';
import { ProductsListComponent } from './components/product/products-list.component';
import { ProductAddComponent } from './components/product/product-add.component';
import { ProductDetailComponent } from './components/product/product-detail.component';
import { ProductEditComponent } from './components/product/product-edit.component';

import { ModalViewUserComponent } from './components/user/modal-view-login.component';

import { Error404Component } from './components/error/error-404.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'add-product', component: ProductAddComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent},
  {path: 'product-edit/:id', component: ProductEditComponent},
  {path: 'modalLogin', component: ModalViewUserComponent},
  {path: '**', component: Error404Component}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);