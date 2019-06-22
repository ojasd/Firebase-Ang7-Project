import { Injectable, ElementRef, ViewChild, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectToolsService {

  projectToolsList: AngularFireList<any>;
  projectToolsArray = [];

  constructor(private firebase: AngularFireDatabase) {
    this.projectToolsList = this.firebase.list('projectTools');
    this.projectToolsList.snapshotChanges().subscribe(
      list => {
        this.projectToolsArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }


}
