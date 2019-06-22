import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProjectCategoriesService {
  projectCategoriesList: AngularFireList<any>;
  projectCategoriesArray = [];

  constructor(private firebase: AngularFireDatabase) {
    this.projectCategoriesList = this.firebase.list('projectCategories');
    this.projectCategoriesList.snapshotChanges().subscribe(
      list => {
        this.projectCategoriesArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }
}
