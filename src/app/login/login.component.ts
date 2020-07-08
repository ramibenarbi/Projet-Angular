import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms';
import { User } from '../viewModels/user';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
a:string;
  constructor( private router : Router, private authService : AuthService) { }


  loginGroup;
  user : User = new User();

    ngOnInit() {

      this.loginGroup = new FormGroup({
        'email': new FormControl(Validators.required,Validators.email),

        'password': new FormControl(Validators.required)
      });

    }

    login() {
      this.authService.login(this.user.email, this.user.password)
      .then(res => {console.log(res); console.log(this.user);
      if(typeof(Storage) !== 'undefined'){
        sessionStorage.setItem("email",this.user.email);
        sessionStorage.setItem("user", JSON.stringify(this.user));
        this.router.navigate(['/layout/type'])
        this.authService.isLoggedIn();
      }},err =>{this.a = err})

    }
  /*  google_signin(){

      this.authService.loginwithgoogle()
      .then(res => {console.log(res);
        this.router.navigate(['/layout/type'])
      })



    }*/

}

