import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from '../home/home.component';
import { CreateDevotionalComponent } from '../create-devotional/create-devotional.component';
import { ViewDevotionalComponent } from '../view-devotional/view-devotional.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateDevotionalComponent,
    ViewDevotionalComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule,
    MatPaginatorModule,
    MatFormFieldModule,
    AngularEditorModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
