import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'Firebase';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user = [];
ref = firebase.database().ref('user/');
userdata:any
  constructor(
    
  ) {
  this.ref.on('value', resp => {
    this.user = [];
    this.user =this.snapshotToArray(resp);
  })
   }

  ngOnInit() {
  }
  snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};
}
