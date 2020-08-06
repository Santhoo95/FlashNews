import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  // loggedIn:boolean=false;
  loggedIn:boolean=true;

  constructor() { }

  authenticate():boolean
  {
     let sessionStorageObject:any=JSON.parse(sessionStorage.getItem("user"));
     let localStorageObject:any=JSON.parse(localStorage.getItem("user"));
    

    if(sessionStorageObject.emailId==localStorageObject.emailId &&
      sessionStorageObject.password==localStorageObject.password)
      {
        return this.loggedIn=true;
        
      }
      return this.loggedIn;
  
  }
}
