import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


import { Devotional } from '../_models/devotional.model';
import { DevotionalService } from '../_services/devotional.service';

@Component({
  selector: 'app-view-devotional',
  templateUrl: './view-devotional.component.html',
  styleUrls: ['./view-devotional.component.css']
})
export class ViewDevotionalComponent implements  OnDestroy {

  devotional: any; 
  subscription: Subscription;
  day: any;

  constructor(private devotionalService: DevotionalService ) { 
      this.subscription = devotionalService.setDevotional$.subscribe(
          devotional => {
            this.devotional = devotional;
          }
        )

  }

  

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
