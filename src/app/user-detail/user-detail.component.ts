import { Component, OnInit } from '@angular/core';
import {
  collection,
  deleteDoc,
  doc,
  docData,
  Firestore,
} from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditAdressComponent } from '../dialog-edit-adress/dialog-edit-adress.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  idUser: string = '';
  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idUser = params['id'];
      console.log(this.idUser);

      this.getUser();
    });
  }

  getUser() {
    const coll = collection(this.firestore, 'users');
    const docRef = doc(coll, this.idUser);
    const user$ = docData(docRef);

    user$.subscribe((userData: any) => {
      console.log('Get User Info', userData);
      this.user = new User(userData);
    });
  }

  editAddress(): void {
    const dialog = this.dialog.open(DialogEditAdressComponent, {});
    // dialog.componentInstance.user = this.user;
    dialog.componentInstance.user = new User(this.user.toJSON()); // Kopie von dem Objekt erstellen damit es erst nach dem Speichern die Daten aktualisiert werden und nicht vorher.
  }

  editUserDetails(): void {
    const dialog = this.dialog.open(DialogEditUserComponent, {});
    // dialog.componentInstance.user = this.user;
    dialog.componentInstance.user = new User(this.user.toJSON());
  }

  deleteUser(): void {
    const coll = collection(this.firestore, 'users');
    const docRef = doc(coll, this.idUser);
    deleteDoc(docRef)
      .then(() => {
        console.log('User document deleted successfully');
        this.toUserPage();
      })
      .catch((error) => {
        console.error('Error deleting user document:', error);
      });
  }

  toUserPage() {
    this.router.navigateByUrl('/user');
  }
}
