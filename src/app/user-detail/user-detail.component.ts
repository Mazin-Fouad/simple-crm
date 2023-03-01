import { Component, OnInit } from '@angular/core';
import { collection, doc, docData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  idUser: string = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: Firestore) {}

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
}
