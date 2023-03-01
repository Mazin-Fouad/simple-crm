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
    // console.log(this.user);
    this.addDataFireBase();
    setTimeout(() => {
      this.isDisabled = true;
      this.onNoClick();
    }, 500);
  }

  addDataFireBase() {
    const coll = collection(this.firestore, 'users');
    setDoc(doc(coll), this.user.toJSON());
  }

  onNoClick() {
    this.dialogRef.close();
    console.log(this.user);
  }
}
