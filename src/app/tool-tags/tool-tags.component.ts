import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { ProjectToolsService } from '../shared/project-tools.service';

/**
 * @title Chips Autocomplete
 */
@Component({
  selector: 'app-tool-tags',
  templateUrl: './tool-tags.component.html',
  styleUrls: ['./tool-tags.component.css']
})
export class ToolTagsComponent {
  
  projectCategoriesArray = [];
  tools: string[] = ['Lemon'];
  allTools: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  toolCtrl = new FormControl();
  filteredTools: Observable<string[]>;
  

  @ViewChild('toolInput') toolInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor( private projectToolsService : ProjectToolsService,) {
    this.filteredTools = this.toolCtrl.valueChanges.pipe(
        startWith(null),
        map((tool: string | null) => tool ? this._filter(tool) : this.allTools.slice()));
  }

  add(event: MatChipInputEvent): void {
    // Add tool only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our tool
      if ((value || '').trim()) {
        this.tools.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.toolCtrl.setValue(null);
    }
  }

  remove(tool: string): void {
    const index = this.tools.indexOf(tool);

    if (index >= 0) {
      this.tools.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tools.push(event.option.viewValue);
    this.toolInput.nativeElement.value = '';
    this.toolCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTools.filter(tool => tool.toLowerCase().indexOf(filterValue) === 0);
  }
}

