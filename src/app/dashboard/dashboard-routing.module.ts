import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CreateDevotionalComponent } from '../create-devotional/create-devotional.component';
import { ViewDevotionalComponent } from '../view-devotional/view-devotional.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add', component: CreateDevotionalComponent },
  { path: 'view', component: ViewDevotionalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
