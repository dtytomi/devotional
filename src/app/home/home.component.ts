import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { faCoffee, faMinusCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Devotional } from '../_models/devotional.model';
import { DevotionalService } from '../_services/devotional.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  faCoffee = faCoffee;
  faMinusCircle = faMinusCircle;
  faExternalLinkAlt = faExternalLinkAlt;

  message: string = ''; 
  devotionals: any;

  constructor(private devotionalService: DevotionalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retrieveDevotionals();
  }

  delete(id: any) {
    this.devotionalService.delete(id)
      .then(() => {
        this.message = 'The tutorial was deleted successfully!';
      })
      .catch(err => console.log(err));
  }

  retrieveDevotionals(): void {
    this.devotionals = 
      this.devotionalService.getAll().snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Devotional;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  setDevtionalView(devotional: Devotional) {
    this.devotionalService.getOne(devotional);
    this.router.navigate(['/dashboard/view']);
  }

}
