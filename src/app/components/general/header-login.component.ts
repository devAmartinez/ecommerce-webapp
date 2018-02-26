import { Component, Inject } from '@angular/core';
//import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HeaderLoginService } from '../../services/header-login.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
	selector: 'app-header-login',
	templateUrl: '../../views/general/header-login.html'
})

export class HeaderComponent {
	public tituloEncabezado: string;
	public modalTitle: string;
  public isLoggedIn: boolean;

	constructor(
		//private _router: Router,
		private _headerLoginService: HeaderLoginService,
		private _userService: UserService,
		private _snackBar: MatSnackBar,
    private _localStorageService: LocalStorageService,
    @Inject('AUTH_TOKEN') private _tokenName: string
	) {
		this.tituloEncabezado = 'Ecommerce webApp en Angular 5 (MEAN)';
		this.modalTitle = 'Iniciar sesión';
    this.isLoggedIn = this._localStorageService.getItem(this._tokenName) ? true : false ;
	}

	openDialog() {
    this._headerLoginService.openDialogOverview(this.modalTitle)
	    .then(
	    	(res: FormGroup) => {
	    		if (res) {	    			
	    			if (res.value.formName == 'formSignIn') {
	    				this.submitSignIn(res.value);
		    		} else {
		    			this.submitSignUp(res.value);
		    		}	
		    		console.log(res.value.formName);
	    		}
	    	}
	  );
  }

 	submitSignIn(formSignIn: string) { 		
    this._userService.signIn(formSignIn).subscribe(
  		(data) => {
  			this._userService.storeToken(data.token).then(
  				(status) => {
  					console.log('logueado');
  					this._snackBar.open(data.message, '', {
                duration: 2000,
            });
            this.isLoggedIn = true;
  					//this._router.navigate(['/home']);
  				}
  			);
  		}
  	);
  }

  submitSignUp(formSignUp: string) {
  	this._userService.signUp(formSignUp).subscribe(
  		(data) => {
  			this._userService.storeToken(data.token).then(
  				(status) => {
  					console.log('logueado');
  					this._snackBar.open(data.message, '', {
                duration: 2000,
            });
            this.isLoggedIn = true;
  					//this._router.navigate(['/home']);
  				}
  			);
  		}
  	);
  }
}
