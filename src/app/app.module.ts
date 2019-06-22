import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XMaterialModule } from './x-material/x-material.module';
import { ReactiveFormsModule } from '@angular/forms';


import {LayoutModule} from '@angular/cdk/layout';
import 'hammerjs'; 

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { XnavComponent } from './xnav/xnav.component';


import { ProjectService } from './shared/project.service';
import { ProjectTypesService } from './shared/project-types.service';
import { ProjectCategoriesService } from './shared/project-categories.service';
import { ProjectToolsService } from './shared/project-tools.service';
import { environment } from '../environments/environment';
import { ToolTagsComponent } from './tool-tags/tool-tags.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    XnavComponent,
    routingComponents,
    ToolTagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    XMaterialModule,
    LayoutModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    XMaterialModule
  ],
  providers: [ ProjectService, ProjectTypesService, ProjectCategoriesService, ProjectToolsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
