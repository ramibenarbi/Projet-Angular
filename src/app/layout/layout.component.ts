import { Component, OnInit } from '@angular/core';
import { Coordonnees } from '../viewModels/coordonnees';
import { User } from '../viewModels/user';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth} from 'angularfire2/auth';
import { AuthService} from '../auth.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router : Router,public afA: AngularFireAuth,private auth:AuthService) { }

user : User =new User;
islogin = false;
ngOnInit() {
   this.auth.getUser().then((res) => this.user.email = res.email
 )  }
logout(){
  this.afA.auth.signOut().then(()=>{
    sessionStorage.clear();
    this.islogin=false;
    this.router.navigate(['/']);
  });
}
}
