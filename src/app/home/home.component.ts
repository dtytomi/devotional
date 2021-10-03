import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { faCoffee, faMinusCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { Devotional } from '../_models/devotional.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private devotionalsCollection: AngularFirestoreCollection<Devotional>;
  devotionals: Observable<Devotional[]>;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  faCoffee = faCoffee;
  faMinusCircle = faMinusCircle;
  faExternalLinkAlt = faExternalLinkAlt;

  constructor(private afs: AngularFirestore) { 
    this.devotionalsCollection = afs.collection<Devotional>('devotionals');
    this.devotionals = this.devotionalsCollection.valueChanges(['added', 'removed']);
  }

  ngOnInit(): void {
  }

}
