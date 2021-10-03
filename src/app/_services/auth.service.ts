import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/compat/auth';


import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private firebaseAuth: AngularFireAuth,
      private toastrService: ToastrService
    ) { }

  signUp(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res: any) => {
        // console.log('Success', res);
        this.toastrService.success('Kindly Login to Continue', 'Login below');
      })
      .catch((err: any) => {
        // console.log('Something went wrong!!!', err.message);
        this.toastrService.error(err.message, 'Signup Error');
      })
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        // console.log('Success', res);
      })
      .catch((err: any) => {
        // console.log('Something went wrong!!!', err.message);
        this.toastrService.error(err.message, 'Login Error');
      })
  }

}
