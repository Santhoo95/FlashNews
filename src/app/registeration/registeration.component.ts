import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  user:any={};

  constructor() { }

  ngOnInit() {
  }

  register()
  {
    console.log("inside navigate");
    console.log(this.user);
    localStorage.setItem("user",JSON.stringify(this.user));
  }

}
