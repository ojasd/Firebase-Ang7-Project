import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProjectTypesService {
  projectTypeList: AngularFireList<any>;
  projectTypeArray = [];

  constructor(private firebase: AngularFireDatabase) {
    this.projectTypeList = this.firebase.list('projectTypes');
    this.projectTypeList.snapshotChanges().subscribe(
      list => {
        this.projectTypeArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }
}
