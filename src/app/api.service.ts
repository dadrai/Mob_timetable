
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
headers: HttpHeaders;
  constructor(
    public http: HttpClient
  ) { 
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept-Control-Allow-Origin', '*');

  }
  
  getGroups(){
    return this.http.get('http://localhost/timetable/src/app/backend/getGroups.php');
  } 
  getRaspGr(groupaApi: string){
    return this.http.get('http://localhost/timetable/src/app/backend/getRaspGr.php?groupa='+groupaApi);
  }


}
