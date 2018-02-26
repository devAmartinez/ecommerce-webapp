import { Component, Inject } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
	selector: 'app-logout',
	template: `
		<button mat-button (click)="logOut($event)">
      Cerrar sesión
    </button>
	`
})

export class LogoutComponent {
	constructor(
		private _localStorageService: LocalStorageService,
		@Inject('AUTH_TOKEN') private _tokenName: string
	) {
		
	}

	logOut(event) {
    this._localStorageService.clearItem(this._tokenName);
    // Refrescar página para poder efectuar el cierre y que se reactive la opción del login
    window.location.reload();
  }
}