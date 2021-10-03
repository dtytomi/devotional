import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevotionalService {

   devotionals: Observable<any[]>;

  constructor(firestore: AngularFirestore) { 
    this.devotionals = firestore.collection('devotionals').valueChanges();
   }
}
