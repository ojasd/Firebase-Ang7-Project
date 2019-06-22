import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private firebase: AngularFireDatabase) { }

  projectList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    projectType: new FormControl('project'), //RadioButton
    projectTitle: new FormControl('', Validators.required),
    projectSubTitle: new FormControl(''),
    projectDescription: new FormControl(''), //TextArea
    projectCategory: new FormControl(false), //CheckBox
    projectTools: new FormControl(''), //AutocompleteChips
    projectCreatationDate: new FormControl('') //DatePicker
  });

  resetFormGroup() {
    this.form.setValue({
      $key: null,
      projectType: 'project', //RadioButton
      projectTitle: '',
      projectSubTitle: '',
      projectDescription: '', //TextArea
      projectCategory: false, //CheckBox
      projectTools: '', //AutocompleteChips
      projectCreatationDate: '' //DatePicker
    })
  }

  getProjects() {
    this.projectList = this.firebase.list('projects');
    return this.projectList.snapshotChanges();
  }

  createProject(project) {
    this.projectList.push({
      projectType: project.projectType,
      projectTitle: project.projectTitle,
      projectSubTitle: project.projectSubTitle,
      projectDescription: project.projectDescription, //TextArea
      projectCategory: project.projectCategory, //CheckBox
      projectTools: project.projectTools, //AutocompleteChips
      projectCreatationDate: project.projectCreatationDate //DatePicker
    });
  }

  updateProject(project) {
    this.projectList.update(project.$key,
      {
        projectType: project.projectType,
        projectTitle: project.projectTitle,
        projectSubTitle: project.projectSubTitle,
        projectDescription: project.projectDescription, //TextArea
        projectCategory: project.projectCategory, //CheckBox
        projectTools: project.projectTools, //AutocompleteChips
        projectCreatationDate: project.projectCreatationDate //DatePicker
      });
  }

  removeProject($key:string) {
    this.projectList.remove($key);
  }

}

