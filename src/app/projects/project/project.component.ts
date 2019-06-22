import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ToolTagsComponent } from '../../tool-tags/tool-tags.component';
import { ProjectService } from '../../shared/project.service';
import { ProjectTypesService } from '../../shared/project-types.service';
import { ProjectCategoriesService } from '../../shared/project-categories.service';
import { ProjectToolsService } from '../../shared/project-tools.service';
import { NotificationService } from '../../shared/notification.service';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private service : ProjectService,
              private projectTypeService : ProjectTypesService,
              private projectCategoriesService : ProjectCategoriesService,
              private projectToolsService : ProjectToolsService,
              private notificationService : NotificationService
               ) { }

  // projectCategories = [
  //   {id: "branding", value:'Branding'},
  //   {id: "UI", value:'User Interface'},
  //   {id: "UX", value:'User Experience'},
  //   {id: "logoDesign", value:'Logo Design'},
  // ];
  
  ngOnInit() {
    this.service.getProjects();
  }

  onClear() {
    this.service.form.reset();
    this.service.resetFormGroup();
    // this.service.initializedFormGroup();
  }

  onSubmit(){
    if(this.service.form.valid){
      this.service.createProject(this.service.form.value);
      this.service.form.reset();
      this.service.resetFormGroup();
    // this.service.initializedFormGroup();
    this.notificationService.success(':: Submitted Successfully');
    }
  }

}
