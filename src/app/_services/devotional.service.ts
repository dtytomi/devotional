import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, 
  AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, BehaviorSubject } from 'rxjs';

import { Devotional } from '../_models/devotional.model';
export interface DevotionalId extends Devotional { id: string; }


@Injectable({
  providedIn: 'root'
})
export class DevotionalService {

  devDetail: any = [];

  private devotionalSource = new BehaviorSubject<Devotional>(this.devDetail);
  setDevotional$ = this.devotionalSource.asObservable();

  private devotionalsCollection: AngularFirestoreCollection<Devotional>;

  constructor(private afs: AngularFirestore) { 
    this.devotionalsCollection = afs.collection<Devotional>('devotionals');
  }


  getAll(): AngularFirestoreCollection<Devotional> {
    return this.devotionalsCollection;
  }

  getOne(devotional: Devotional) {
    this.devotionalSource.next(devotional);
  }

  create(devotional: Devotional): any {
    return this.devotionalsCollection.add({ ...devotional });
  }

  update(id: string, data: any): Promise<void> {
    return this.devotionalsCollection.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.devotionalsCollection.doc(id).delete();
  }

}
