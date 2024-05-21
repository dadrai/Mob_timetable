import { OnInit, Component, ElementRef, Injectable, NgZone, QueryList, ViewChildren } from '@angular/core';
import { ApiService } from '../api.service';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { ActionSheetController, Gesture, GestureController, IonCard } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-spisok-prepod',
  templateUrl: './spisok-prepod.page.html',
  styleUrls: ['./spisok-prepod.page.scss'],
})
export class SpisokPrepodPage implements OnInit {
  headers: HttpHeaders;
  id_prepod: any = 0;
  SpisokPrepod: any = [];
  listPrepods: any=[];
  fam_pr: any;
  name_pr: any;
  otch_pr: any;
  Prepod: any;

  date = new Date();
  vibor_day = this.date.getDay();
  week_today=this.getWeekNumber(this.date) + 18;
 


  constructor(public _apiService: ApiService,
    public actionShCtrl: ActionSheetController,
    private http: HttpClient,
    private gestureCtrl: GestureController,
    private zone: NgZone) {

    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Accept-Charset', 'utf-8');
    this.headers.append('Content-Type', 'application/json; charset=utf-8');
    this.headers.append('Accept-Control-Allow-Origin', '*');
    this.getPrepod();
    this.SpisPrepod();
    //this.refresh();
  }

  refresh(): void {
    window.location.reload();
}
  ngOnInit() {
  }
  getWeekNumber(d:Date) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    let q = d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    let k = yearStart.getTime();
    var weekNo = Math.ceil(( ( (q - k) / 86400000) + 1)/7);
    // Return array of year and week number
    console.log('Week= '+weekNo);
    return weekNo;
    
}
  getPrepod() {


    var url = 'http://localhost/timetable/src/app/backend/getPrepod.php?' + 'id_prepod=' + this.id_prepod;
    this.http.get(url).subscribe((res: any) => {
      console.log("getSpisPrepod SUCC ++++", res);
      this.SpisokPrepod = res;


    }, (error: any) => {
      console.log(url, "getSpisPrepod ERrr ---", error);
    })

  }

  SpisPrepod() {


    var url = 'http://localhost/timetable/src/app/backend/getPrepod.php?'+ 'id_prepod=' + this.id_prepod;
    this.http.get(url).subscribe((res: any) => {
      console.log("vibor SUCC ++++", res);
      this.listPrepods = res;


    }, (error: any) => {
      console.log(url, "vibor ERrr ---", error);
    })

  }

  

}
