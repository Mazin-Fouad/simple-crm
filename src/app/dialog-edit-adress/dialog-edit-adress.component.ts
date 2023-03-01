import { Component } from '@angular/core';
import { collection, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-adress',
  templateUrl: './dialog-edit-adress.component.html',
  styleUrls: ['./dialog-edit-adress.component.scss'],
})
export class DialogEditAdressComponent {
  user: User;
  isDisabled: boolean = true;
  userID: string;

  constructor(
    public dialog: MatDialog,
    private firestore: Firestore,
    public dialogRef: MatDialogRef<DialogEditAdressComponent>
  ) {}

  saveUserData() {
    this.isDisabled = false;
    const coll = collection(this.firestore, 'users');
    const docRef = doc(coll, this.userID);
    updateDoc(docRef, this.user.toJSON());

    setTimeout(() => {
      this.isDisabled = true;
      this.onNoClick();
    }, 500);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
