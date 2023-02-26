import { Component } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  user: User = new User();
  birthDate: Date;

  constructor() {
    this.user.firstName;
    this.user.lastName;
    this.user.birthDate;
    this.user.street;
    this.user.zipCode;
    this.user.city;
  }

  onNoClick() {}

  saveUserData() {
    console.log('User Data', this.user);
    this.user.birthDate = this.birthDate.getTime();
  }
}
