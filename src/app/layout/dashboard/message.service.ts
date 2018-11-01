import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  myName = "Sanad Amin";
  serverURL = "http://212.118.13.26/energy/v1/energy"
  constructor(private http:Http) { }



  getSiteList(){
    return this.http.get( this.serverURL + '/getsitelist')

  }

  getSiteReadings(siteid: String){
    return this.http.get(this.serverURL + '/gettodayreadings/' + siteid)


  }


}
