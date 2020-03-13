import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(
    public http:HttpClient
  ) { }
  getdata(){
 // return this.http.get('https://api.postalpincode.in/pincode/242123')
  }
}
