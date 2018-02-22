import { Component } from '@angular/core';
import { 
  Validators,
  FormControl,
  FormGroup 
} from '@angular/forms';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: '../../views/user/login.html',
})

export class DialogOverviewDialog {
	public formSignIn: FormGroup;
	public formSignUp: FormGroup;
	public hideIconEye = true;
	public isSignInTab = true;
	public data: string;

  constructor() { }

  ngOnInit() {
  	this.formSignIn = new FormGroup({
  			formName: new FormControl('formSignIn',[]),
	      email: new FormControl('', [Validators.required, Validators.email]),
	      password: new FormControl('', Validators.required),
		});
  	
  	this.formSignUp = new FormGroup({
  		formName: new FormControl('formSignUp',[]),
  		displayName: new FormControl('', [Validators.required, Validators.minLength(3)]),
  		email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
  	});
  }

}