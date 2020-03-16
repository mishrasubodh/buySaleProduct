import { Component, OnInit } from "@angular/core";
import { GetDataService } from "../get-data.service";
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'Firebase';

@Component({
  selector: "app-salegrosary",
  templateUrl: "./salegrosary.page.html",
  styleUrls: ["./salegrosary.page.scss"]
})
export class SalegrosaryPage implements OnInit {
  port: any;
  items: Observable<any[]>;
  allData1 = [];
  yourname: string;
  yourdistrict: string;
  yourcity: string;
  yournumber: number;
  saveData: any;
  data = {};
  rate: number;
  grain = ["sugarcane", "barley", "Wheat", "Paddy"];
  public selectedStateId = "";
  showdata = true;
  validnumber=false

  constructor(public service: GetDataService,
    private router: Router
  ) { }
  ionViewWillLeave() {
    this.allData1 = [];
    this.yourname = ""
    this.yourdistrict = ""
    this.yourcity = ""
    this.yournumber = 0
    this.saveData = ""
    this.data = {};
    this.rate = 0
  }
  ngOnInit() { }

  ngAfterViewInit() {

  }

  getUserData(yourname, yourdistrict, yourcity, yournumber) {
    if (yourname && yourdistrict && yourcity && yournumber) {
      this.showdata = false;
    }
    this.data["yourname"] = yourname;
    this.data["yourdistrict"] = yourdistrict;
    this.data["yourcity"] = yourcity;
    this.data["yournumber"] = yournumber;
  }
checkmobil(){

if(this.yournumber){
if(this.yournumber.toString().length > 8 &&this.yournumber.toString().length < 13 ){
 this.validnumber=true

}
else{
  this.validnumber=false
}
}
}
  showSelectValue(event) {
    this.selectedStateId = event.target.value;
    this.data["grain"] = this.selectedStateId;
  }

  gohomepage() { 
    this.data["grain"] = this.selectedStateId;
    this.data["rate"] = this.rate;
    this.data["time"] = new Date().toUTCString();
   
    
    let newInfo = firebase.database().ref('user/').push();
    newInfo.set(this.data);

    this.SaveDataToLocalStorage(this.data);
    this.router.navigate(['/home'])
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    var d;
    try {
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&sensor=true&key=AIzaSyDHOgQoqKBF4sLEzYXXPvsOCemkIeePQR4`;
      fetch(url)
        .then(data => data.json())

        .then(d => {
          d.results.map(element => {
            this.allData1.push(element.formatted_address);
          });
        });
    } catch (err) {
      console.log(err);
    }
  }

  async SaveDataToLocalStorage(data) {
    var a = [];
    a = JSON.parse(localStorage.getItem("saveuserdata")) || [];
    a.push(data);
    localStorage.setItem("saveuserdata", JSON.stringify(a));
  }
}
