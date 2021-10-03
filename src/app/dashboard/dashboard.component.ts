import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.signOut();
    this.router.navigate(['/login']);
  }

}
