import { Component } from '@angular/core';
import {  Router,
					ActivatedRoute,
					Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { GLOBAL } from '../services/global';

@Component({
	selector: 'product-edit',
	templateUrl: '../views/product-add.html',
	providers: [ProductService]
})										

export class ProductEditComponent {
	public titulo: string;
	public product: Product;
	public filesToUpload;
	public isEdit: boolean;
	public url: string;
	public responseFile: any = {
		message: '',
		fileName: ''
	};
	public resFileUpload: string;

	constructor(
		public _route: ActivatedRoute,
		public _router: Router,
		public _productService: ProductService
	) {
		this.titulo = 'Editar producto';
		this.product = new Product('0','','',null,'');
		this.isEdit = true;
		this.url = GLOBAL.url;
	}

	ngOnInit() {
		this.getProduct();
	}

	getProduct() {
		this._route.params.forEach((params: Params) => {
			let id =  params.id;
			this._productService.getProduct(id).subscribe(
				res => {
					this.product = res.product;
				},
				err => {
					console.log(err);
					this._router.navigate(['/products']);
				}
			);
		});		
	}

	onSubmit() {
		if (!!this.product.name &&
		    !!this.product.description &&
		    !!this.product.price) {
			if (this.filesToUpload && this.filesToUpload.length >= 1) {
				this._productService.makeFileRequest(this.url + 'upload', [], this.filesToUpload)
		      .then((res) => {
		      	this.responseFile = res;
		      	console.log(this.responseFile.fileName);
		      	
		        this.product.image = this.responseFile.fileName;
		        this.updateProduct();

		      }, (err) => {
		      	console.log('Error en el llamado a makeFileRequest');
		      	// si el servidor (express) está apagado err, no se define
		      	if (err) {
		      		this.resFileUpload = err.message;
			      }
		      });
			}	else {
				if (!this.product.image) {
					this.product.image = 'default-image.svg' // Asigno la imagen por defecto
				}
				this.updateProduct();	
			}    	
		}  	  
	}

	updateProduct() {
		if (!!this.product.name &&
		    !!this.product.description &&
		    !!this.product.price) {

			this._route.params.forEach((params: Params) => {
				let id =  params.id;

				this._productService.editProduct(id,this.product).subscribe(
		      res => {
		        //console.log(res);
		        this._router.navigate(['/product-detail',id]);
		      },
		      err => {
		      	console.log('Error en el llamado a addProduct');
		        console.log( < any > err);
		      }
		    );
		  });	
		}
	}

	fileChangeEvent(fileInput: any) {
  	this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}