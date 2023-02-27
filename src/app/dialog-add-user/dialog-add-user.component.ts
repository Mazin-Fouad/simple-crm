import { Component } from '@angular/core';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
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
  isDisabled: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: Firestore
  ) {}

  saveUserData() {
    this.isDisabled = false;
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    const coll = collection(this.firestore, 'users');

    console.log(typeof this.user);

    setDoc(doc(coll), this.user.toJSON());

    setTimeout(() => {
      this.isDisabled = true;
    }, 500);

    this.onNoClick();
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
