import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss'],
})
export class DialogEditUserComponent {
  user: User;
  isDisabled: boolean = true;
  birthDate: Date;

  constructor(public dialog: MatDialog) {}

  saveUserData() {}

  onNoClick() {}
}
