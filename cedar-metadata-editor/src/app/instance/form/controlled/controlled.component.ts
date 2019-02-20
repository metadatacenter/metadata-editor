import {Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, FormArray} from '@angular/forms';
import {Observable} from 'rxjs';
import {ControlledTermService} from '../../_service/controlled-terms.service';
import {Post} from '../../_models/post';

import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';


@Component({
  selector: 'controlled',
  templateUrl: './controlled.component.html',
  styleUrls: ['./controlled.component.less']
})
export class ControlledComponent implements OnInit {

  allPosts: Post[];
  autoCompleteList: any[];
  ct: ControlledTermService;
  fb: FormBuilder;
  selectable = true;
  removable = true;

  @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
  @ViewChild('chipList') chipList: ElementRef;
  @Output() onSelectedOption = new EventEmitter();
  @Input() group: FormGroup;
  @Input() controlledGroup: FormGroup;

  constructor(ct: ControlledTermService, fb:FormBuilder) {
    this.ct = ct;
    this.fb = fb;
  }

  ngOnInit() {
    // get all the post
    this.ct.getPosts().subscribe(posts => {
      this.allPosts = posts
    });

    // when user types something in input, the value changes will come through this
    const search = this.controlledGroup.get('search');
    search.valueChanges.subscribe(userInput => {
      let categoryList = this.filterCategoryList(userInput);
      this.autoCompleteList = categoryList;
    });

  }

  remove(index: number): void {
    const chips = this.controlledGroup.get('chips') as FormArray;

    if (index >= 0) {
      chips.removeAt(index);
    }
  }

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our requirement
    if ((value || '').trim()) {
      const chips = this.controlledGroup.get('chips') as FormArray;
      chips.push(this.fb.control(value.trim()));
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }


  selected(event: MatAutocompleteSelectedEvent, index:number): void {

    this.autocompleteInput.nativeElement.value = '';
    this.autocompleteInput.nativeElement.focus();
    const search = this.controlledGroup.get('search');
    search.setValue(null);

    // notify the parent component of the selection
    this.onSelectedOption.emit(event.option.value);

    const value = event.option.value.title;
    if ((value || '').trim()) {
      const chips = this.controlledGroup.get('chips') as FormArray;
      chips.push(this.fb.control(value.trim()));
    }
  }


    // filter the data by the search string
    filterCategoryList(val)
    {
      var categoryList = []
      if (typeof val != "string") {
        return [];
      }
      if (val === '' || val === null) {
        return [];
      }
      return val ? this.allPosts.filter(s => s.title.toLowerCase().indexOf(val.toLowerCase()) != -1)
        : this.allPosts;
    }

    // after you clicked an autosuggest option, this function will show the field you want to show in input
    displayFn(post: Post) {
      let k = post ? post.title : post;
      return k;
    }


    // focus the input field and remove any unwanted text.
    focusOnPlaceInput()
    {
      this.autocompleteInput.nativeElement.focus();
      this.autocompleteInput.nativeElement.value = '';
    }


  }
