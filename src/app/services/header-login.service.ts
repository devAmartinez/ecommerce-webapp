import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogOverviewDialog } from '../components/modal_view/dialog-overview.component';

@Injectable()

export class HeaderLoginService {
	public dialogRef: MatDialogRef<any>;

	constructor(
		public dialog: MatDialog
	) { }

	openDialogOverview(data) {
		return new Promise(( resolve, reject ) => {
			this.dialogRef = this.dialog.open(DialogOverviewDialog, {
				width: '550px'
			});
			this.dialogRef.componentInstance.data = data;
			this.dialogRef.afterClosed().subscribe(result => {
				this.dialogRef = null;
				if (result) {
					resolve(result);
				} else {
					resolve();
				}
			});
		});
	}
}