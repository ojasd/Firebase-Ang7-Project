import { NgModule, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatButtonModule, Material.MatCheckboxModule, 
    Material.MatToolbarModule, Material.MatSidenavModule, Material.MatIconModule,
    Material.MatListModule, Material.MatGridListModule, Material.MatInputModule,
    Material.MatFormFieldModule, Material.MatRadioModule, Material.MatSelectModule,
    Material.MatDatepickerModule, Material.MatNativeDateModule, Material.MatCheckboxModule,
    Material.MatSnackBarModule, Material.MatChipsModule, Material.MatAutocompleteModule
  ],
  exports: [
    CommonModule,
    Material.MatButtonModule, Material.MatCheckboxModule, 
    Material.MatToolbarModule, Material.MatSidenavModule, Material.MatIconModule,
    Material.MatListModule, Material.MatGridListModule, Material.MatInputModule,
    Material.MatFormFieldModule, Material.MatRadioModule, Material.MatSelectModule,
    Material.MatDatepickerModule, Material.MatNativeDateModule, Material.MatCheckboxModule,
    Material.MatSnackBarModule, Material.MatChipsModule, Material.MatAutocompleteModule
  ]
})
export class XMaterialModule { }
