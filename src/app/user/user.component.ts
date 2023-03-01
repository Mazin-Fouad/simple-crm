import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  item$: Observable<any>;
  newUsers: Array<any>;
  userID: any;

  constructor(public dialog: MatDialog, private firestore: Firestore) {}

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData() {
    const coll = collection(this.firestore, 'users');
    this.item$ = collectionData(coll, { idField: 'userId' });

    this.item$.subscribe((newUser: any) => {
      setTimeout(() => {
        this.newUsers = newUser;
      }, 500);
      console.log(this.newUsers);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
