import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Componentes propios
import { HomeComponent } from './components/home.component';
import { ProductsListComponent } from './components/products-list.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductEditComponent } from './components/product-edit.component';
import { ErrorComponent } from './components/error.component';

const appRoutes:Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'products', component: ProductsListComponent},
	{path: 'add-product', component: ProductAddComponent},
	{path: 'product-detail/:id', component: ProductDetailComponent},
	{path: 'product-edit/:id', component: ProductEditComponent},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders:any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);