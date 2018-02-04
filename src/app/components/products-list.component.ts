import { Component } from '@angular/core';
import { 	Router, 
					ActivatedRoute,
					Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
	selector: 'products-list',
	templateUrl: '../views/products-list.html',
	providers: [ProductService]
})

export class ProductsListComponent {
	public titulo: string;
	public products: any;
	public resGetProducts: any;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productService: ProductService
	){
		this.titulo = 'Listado de productos';
		this.products = '';
		this.resGetProducts = 'Cargando lista de productos...';
	}

	ngOnInit() {
		this.getProducts();
	}

	getProducts() {
		this._productService.getProducts()
			.subscribe(
				res => {
					this.products = res.products;
					console.log(this.products);
				}, 
				err => {
					this.resGetProducts = JSON.parse(err._body).message;
				}
			);
	}
}