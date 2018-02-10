import { Component } from '@angular/core';
import {  Router,
					ActivatedRoute,
					Params } from '@angular/router';
import { ProductService } from '../services/product.service';				
import { Product } from '../models/product';
import { GLOBAL } from '../services/global';

@Component({
	selector: 'app-product-detail',
	templateUrl: '../views/product-detail.html',
	providers: [ProductService]
})

export class ProductDetailComponent {
	public titulo: string;
	public product: Product;
	public resGetProduct: any;
	public url: string;

	constructor(
		private _productService: ProductService,
		private _route: ActivatedRoute,
		private _router: Router
	) {
		this.titulo = 'Detalles del producto';
		this.resGetProduct = 'Consultando el producto...';
		this.product = new Product('0','','',null,'');
		this.url = GLOBAL.url;
	}

	ngOnInit() {
		this.getProduct();
	}

	getProduct() {
		this._route.params.forEach((params: Params) => {
			let id = params.id;
			this._productService.getProduct(id).subscribe(
				res => {
					console.log(res);
					this.product = res.product;
				},
				err => {
					try {
						this.resGetProduct = JSON.parse(err._body);
					} catch (e) {
						this.resGetProduct = 'Ha habido un problema con el servidor';
					}					
				}
			);
		});
	}
}