import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  user: User = new User();
  birthDate: Date;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  saveUserData() {
    console.log('User Data', this.user);
    this.user.birthDate = this.birthDate.getTime();
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
