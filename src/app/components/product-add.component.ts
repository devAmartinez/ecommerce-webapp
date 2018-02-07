import { Component } from '@angular/core';
import {  Router,
					ActivatedRoute,
					Params } from '@angular/router';			
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { GLOBAL } from '../services/global';

@Component({
	selector: 'product-add',
	templateUrl: '../views/product-add.html',
	providers: [ProductService]
})

export class ProductAddComponent {

	public titulo: string;
	public product: Product;
	public filesToUpload;
	public responseFile: any = {
		message: '', 
		fileName: ''
	};
	public resFileUpload: string;
	public isEdit: boolean;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productService: ProductService
	){
		this.titulo = 'Crear un nuevo producto';
		this.product = new Product('0','','',null,'');
		this.isEdit = false;
	}
 
	onSubmit() {
		if (!!this.product.name &&
		    !!this.product.description &&
		    !!this.product.price) {
			if (this.filesToUpload && this.filesToUpload.length >= 1) {
				this._productService.makeFileRequest(GLOBAL.url + 'upload', [], this.filesToUpload)
		      .then((res) => {
		      	this.responseFile = res;
		      	console.log(this.responseFile.fileName);
		      	
		        this.product.image = this.responseFile.fileName;
		        this.saveData();

		      }, (err) => {
		      	console.log('Error en el llamado a makeFileRequest');
		      	// si el servidor (express) está apagado err, no se define
		      	if (err) {
		      		this.resFileUpload = err.message;
			      }
		      });
			}	else {
				this.product.image = 'default-image.svg' // Asigno la imagen por defecto
				this.saveData();	
			}    	
		}  	  
	}

	saveData() {
		if (!!this.product.name &&
		    !!this.product.description &&
		    !!this.product.price) {

			this._productService.addProduct(this.product).subscribe(
	      res => {
	        //console.log(res);
	        this._router.navigate(['/products']);
	      },
	      err => {
	      	console.log('Error en el llamado a addProduct');
	        console.log( < any > err);
	      }
	    );
		}
	}

  fileChangeEvent(fileInput: any) {
  	this.resFileUpload = null;
  	this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}