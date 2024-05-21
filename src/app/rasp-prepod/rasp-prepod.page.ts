
import { Component, ElementRef, Injectable, NgZone, QueryList, ViewChildren } from '@angular/core';
import { ApiService } from '../api.service';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { ActionSheetController, Gesture, GestureController, IonCard } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params,ParamMap } from '@angular/router'
import { query } from '@angular/animations';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rasp-prepod',
  templateUrl: './rasp-prepod.page.html',
  styleUrls: ['./rasp-prepod.page.scss'],

})
export class RaspPrepodPage {

  headers: HttpHeaders;
  days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  day:any=[];
  groups: any = [];
  today: any;
  Группа: any;
  RaspPr: any = [];
  listPrepods: any=[];
  Gruppa: any;
  DenNedeli: any;
  TipNedeli: any;
  Disciplina: any;
  DataZ: any;
  VremyaS: any;
  VremyaPo: any;
  Prepod: any;
  Ayditoriya: any;
  DateToday='Нет занятий'
  groupa:any;
  id_group:any;
 public id_prepod1:any;
 id_prepod = '';
  //id_prepod =2477;
 // groupa: string = '1001';
  date = new Date();
  vibor_day = this.date.getDay();

  week_today=this.getWeekNumber(this.date) + 18;
  chek_pr:boolean = false;
  
  constructor(
    public _apiService: ApiService,
    public actionShCtrl: ActionSheetController,
    private http: HttpClient,
    private gestureCtrl:GestureController,
    private zone: NgZone,
    private router:ActivatedRoute
  ) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Accept-Charset', 'utf-8');
    this.headers.append('Content-Type', 'application/json; charset=utf-8');
    this.headers.append('Accept-Control-Allow-Origin', '*');
    //this.refresh();
    
    this.getIdPrepod();
    this.getRaspPr();
    this.SpisPrepod();
    this.d();
    
    //this.getDateToday();
   
    

  }
  proverka() {
    console.log("124");
  }

  refresh(): void {
    window.location.reload();
}

  getIdPrepod(){
    this.router.queryParams
    .subscribe((params) => {

    })
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

pred_week(item:any){
  this.week_today-=1;
  this.vibor_day=6;
  console.log('Pr_wekk= '+this.week_today);
  item.close();
  return this.week_today;
}
next_week(item:any){
  this.week_today+=1;
  this.vibor_day=1;
  console.log('Nxt_wekk= '+this.week_today);
  item.close();
  return this.week_today;
}


chek(){
  
    this.chek_pr = true;
  
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

  // getRaspGr(){

  //   this._apiService.getRaspGr().subscribe((res:any) => {
  //     console.log("getRaspG SUCC ++++", res);
  //     this.RaspGr = res;

  //   }, (error: any)=>{
  //     console.log("getRaspG ERrr ---", error);
  //   })
  // }

  getRaspPr() {
    this.d();
    const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
      "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
     
      if (this.chek_pr == false){
      this.router.queryParams.subscribe(data =>{
        this.id_prepod=data['id_prepod'];

    var url = 'http://localhost/timetable/src/app/backend/getRaspPr.php?' + 'id_prepod=' + this.id_prepod
      + '&vibor_day=' + this.vibor_day +'&week_today='+this.week_today;
      
    this.http.get(url).subscribe((res: any) => {
      console.log("getRaspPR SUCC ++++", res);
      console.log("id prepod = ", this.id_prepod)
      this.RaspPr = res;
      
      if (res!=''){let dateStr = this.RaspPr[0].DataZ;
        let date = new Date(dateStr);
        this.DateToday = date.getDate() + " " + monthNames[date.getMonth()];
        console.log('DATA=' + this.DateToday);}
        else this.DateToday='Нет занятий';
      
    }, (error: any) => {
      console.log(url, "getRaspPR ERrr ---", error);
    })
  });  }
  else {
    var url = 'http://localhost/timetable/src/app/backend/getRaspPr.php?' + 'id_prepod=' + this.id_prepod
      + '&vibor_day=' + this.vibor_day +'&week_today='+this.week_today;
      
    this.http.get(url).subscribe((res: any) => {
      console.log("getRaspPR SUCC ++++", res);
      console.log("id prepod = ", this.id_prepod)
      this.RaspPr = res;
      if (res!=''){let dateStr = this.RaspPr[0].DataZ;
        let date = new Date(dateStr);
        this.DateToday = date.getDate() + " " + monthNames[date.getMonth()];
        console.log('DATA=' + this.DateToday);}
        else this.DateToday='Нет занятий';
      
    }, (error: any) => {
      console.log(url, "getRaspPR ERrr ---", error);
    })
  }
  }

  ch_day(day:any){
    this.vibor_day=day;
    }
    
    d(){
      
      this.day[0]="";
      this.day[1]="";
      this.day[2]="";
      this.day[3]="";
      this.day[4]="";
      this.day[5]="";
    this.day[this.vibor_day-1]="act";
    }
  // getDateToday(){
  //   let date: Date = new Date();  

  //   const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
  //   "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

  //  this.DateToday = date.getDate() + " " + monthNames[date.getMonth()];

  // }


}