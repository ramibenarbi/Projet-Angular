import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms';
import { User } from '../viewModels/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { switchAll } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
a:string;
b:string;
  constructor(private authService : AuthService , private router : Router) { }
registerGroup;
user : User = new User();
resultat : any;
  ngOnInit() {
   /* this.authService.getMyIp().subscribe(resultat =>{
      this.resultat = resultat ;
      console.log(this.resultat);
      console.log(this.resultat.ip);

    });*/
    this.registerGroup = new FormGroup({
      'name': new FormControl(Validators.required),
      'email': new FormControl(Validators.required,Validators.email),
      'password': new FormControl(Validators.required)
    });
  }

  inscrir() {
    console.log(this.user.email.slice(this.user.email.length - 10,this.user.email.length ));
   if(this.user.email.indexOf('@leoni.com') !== -1 && this.user.email.slice(this.user.email.length - 10,this.user.email.length) === '@leoni.com' ) {console.log(this.user);
    this.authService.registerWithEmailAndPassword(this.user.email, this.user.password)
    .then(res =>{console.log(res);
      this.router.navigate(['/layout/type']);
      this.b=undefined;
    },err=>{this.a=err})
}else{
 this.b='Access denied !';
 console.log(this.b);
}



  }
 /* google_signin(){

    this.authService.loginwithgoogle()
    .then(res => {console.log(res);
      let u = new User(res.additionalUserInfo.profile.name, res.additionalUserInfo.profile.email );
      sessionStorage.setItem('user', JSON.stringify(u));
      this.router.navigate(['/layout/type']);
    });


  }*/

}
