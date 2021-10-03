import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AngularFirestore, 
  AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Devotional } from '../_models/devotional.model';

@Component({
  selector: 'app-create-devotional',
  templateUrl: './create-devotional.component.html',
  styleUrls: ['./create-devotional.component.css']
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

  devotionalForm = new FormGroup({
    day: new FormControl(''),
    title: new FormControl(''),
    bible_references: new FormControl(''),
    htmlContent: new FormControl(''),
  });

  private devotionalDoc: AngularFirestoreDocument<Devotional>;
  devotional: Observable<Devotional | null | undefined>;


  private devotionalsCollection: AngularFirestoreCollection<Devotional>;
  devotionals: Observable<Devotional[]>;
  

  constructor(private afs: AngularFirestore) {

    this.devotionalDoc = afs.doc<Devotional>('devotionals/1');
    this.devotional = this.devotionalDoc.valueChanges(['added', 'removed']);

    this.devotionalsCollection = afs.collection<Devotional>('items');
    this.devotionals = this.devotionalsCollection.valueChanges();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.devotionalForm.value);
    this.devotionalsCollection.add(this.devotionalForm.value);
  }

  update(devotional: Devotional) {
    this.devotionalDoc.update(devotional);
  }

}
