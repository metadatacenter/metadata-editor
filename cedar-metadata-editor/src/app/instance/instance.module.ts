
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {DemoMaterialModule} from '../../material-module';


import {
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule
} from '@angular/material';

import {InstanceRoutingModule} from './instance-routing.module';
import {InstanceComponent} from './instance.component';
import {FormComponent} from './form/form.component';
import {TemplateService} from '../template.service';
import {QuestionComponent} from './form/question/question.component';
import {ElementComponent} from './form/element/element.component';

@NgModule({
  declarations: [
    InstanceComponent, FormComponent,  QuestionComponent, ElementComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    InstanceRoutingModule,
    DemoMaterialModule
  ],
  exports: [
    InstanceComponent
  ],
  providers: [
    TemplateService
  ],
})
export class InstanceModule {
}
