import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string
  password:string

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  LoginUser(){
    if(this.username == "Admin" && this.password == "1234" ){
      console.log("Welcome")
      this.router.navigate(['list'])
    } else {
      alert('Wrong credentials');
    }
  }
}
