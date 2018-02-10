import { Component } from '@angular/core';
import { 	Router, 
					ActivatedRoute,
					Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { GLOBAL } from '../services/global';

@Component({
	selector: 'app-products-list',
	templateUrl: '../views/products-list.html',
	providers: [ProductService]
})

export class ProductsListComponent {
	public titulo: string;
	public products: any;
	public resGetProducts: any;
	public url: string;
	public confirm: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productService: ProductService
	){
		this.titulo = 'Listado de productos';
		this.products = '';
		this.resGetProducts = 'Cargando lista de productos...';
		this.url = GLOBAL.url;
		this.confirm = null;
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
					try {
						this.resGetProducts = JSON.parse(err._body).message;
					} catch (e) {
						this.resGetProducts = 'Ha habido un problema con el servidor';
					}					
				}
			);
	}

	confirmDelete(productId) {
		this.confirm = productId;
	}

	cancelDelete() {
		this.confirm = null;
	}

	deleteProdut(productId) {
		this._productService.deleteProdut(productId).subscribe(
			res => {
				this.getProducts();
			},
			err => {
				console.log(err);
			}
		);
	}
}