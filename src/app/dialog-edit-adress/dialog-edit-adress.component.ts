import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-adress',
  templateUrl: './dialog-edit-adress.component.html',
  styleUrls: ['./dialog-edit-adress.component.scss'],
})
export class DialogEditAdressComponent {
  user: User;
  isDisabled: boolean = false;

  constructor(public dialog: MatDialog) {}

  saveUserData() {}

  onNoClick() {}
}
