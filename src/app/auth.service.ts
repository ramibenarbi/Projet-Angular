import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { map, first } from 'rxjs/operators';
import {
  AngularFireList
} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = false
  booksRef: AngularFireList<any>
  constructor(private http: HttpClient, private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  getUser(): Promise<any> {
    return this.afAuth.authState.pipe(first()).toPromise();
}
   isLoggedIn(){
    if ( sessionStorage.length!== 0){ this.loggedInStatus= true}
  return this.loggedInStatus
  }
  registerWithEmailAndPassword(email, pass) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, pass).then(res => {
        resolve(res);
      }, err =>
          reject(err)
      );
    });

  }




  login(email, pass) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, pass).then(res => {
        resolve(res);
      }, err =>
          reject(err)
      );
    });


  }
  /*
  loginwithgoogle() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        })

    })

  }
*/
  documentToDomainObject = _ => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
  }
  getData(): Observable<any> {
    return this.db.list('values/type/type1').snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }))
  }

  getDataa(): Observable<any> {
    return this.db.list('values/type/type2').snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }))
  }
  getDataaa(): Observable<any> {
    return this.db.list('values/type/type3').snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }))
  }
  getDataByDay(day): Observable<any> {
    return this.db.list('values/type/type1/'+day,ref=>ref.orderByKey()).snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }))
  }
  getDataaByDay(day): Observable<any> {
    return this.db.list('values/type/type2/'+day,ref=>ref.orderByKey()).snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }))
  }
  getDataaaByDay(day): Observable<any> {
    return this.db.list('values/type/type3/'+day,ref=>ref.orderByKey()).snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }))
  }

}

