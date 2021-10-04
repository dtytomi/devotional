import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import { Devotional } from '../_models/devotional.model';
import { DevotionalService } from '../_services/devotional.service';

import * as _moment from 'moment';
const moment = _moment;  

export const DATE_FORMATS = {

    parse: {
      dateInput: 'DD/MM/YYYY',
    },

    display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    },
};

@Component({
  selector: 'app-create-devotional',
  templateUrl: './create-devotional.component.html',
  styleUrls: ['./create-devotional.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ]
})
export class CreateDevotionalComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '7rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  today: any = new Date();

  devotionalForm = new FormGroup({
    day: new FormControl(moment().format('LL')),
    title: new FormControl(''),
    bible_references: new FormControl(''),
    htmlContent: new FormControl(''),
    action_point: new FormControl(''),
    prayer_point: new FormControl('')
  });

  submitted = false;
  

  constructor(private devotionalService: DevotionalService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.devotionalForm.value);
    this.devotionalService.create(this.devotionalForm.value).then(() => {
      this.toastrService.success(
        'Created new devotional successfully!', 
        'Submitted: true');
      this.submitted = true;
    });
  }

  update() {
    // this.devotionalDoc.update(devotional);
  }

}
