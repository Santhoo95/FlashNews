import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={};
  
  constructor(private _service:LoginService,private _route:Router) { }

  ngOnInit() {
  }
  signIn()
  {
    // sessionStorage.setItem("user",JSON.stringify(this.user));

    //  if(this._service.authenticate())
    //  {
    //    this.navigateToNewsContent();
    //  }
     this.navigateToNewsContent();
     this.user=localStorage.getItem("user");
   
  }
  signUp()
  {
    this.navigateToSignUp();
  }
  navigateToNewsContent()
  {
    this._route.navigate(["/news-content",this.user]);
    // this._route.navigate(["news-content"]);
  }

  navigateToSignUp()
  {
    this._route.navigate(["/registeration"]);
  }

}
