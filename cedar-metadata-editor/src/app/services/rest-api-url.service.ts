import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestApiUrlService {

  API_URL: string = environment.apiUrl;
  TERMINOLOGY_URL: string = environment.terminologyUrl;

  constructor() {
  }

  private base() {
    return `${this.API_URL}`;
  }

  private terminology() {
      return `${this.TERMINOLOGY_URL}`;
  }

  private templateFields() {
    return `${this.base()}template-fields`;
  }

  private templateElements() {
    return `${this.base()}template-elements`;
  }

  private templates() {
    return `${this.base()}templates`;
  }

  private templateInstances() {
    return `${this.base()}template-instances`;
  }

  templateField(id: string) {
    return `${this.templateFields()}/${encodeURIComponent(id)}`;
  }

  templateElement(id: string) {
    return `${this.templateElements()}/${encodeURIComponent(id)}`;
  }

  template(id: string) {
    return `${this.templates()}/${encodeURIComponent(id)}`;
  }

  templateInstance(id: string) {
    return `${this.templateInstances()}/${encodeURIComponent(id)}`;
  }

  getOntologyRootClasses(id: string) {
    return `${this.terminology()}bioportal/ontologies/${encodeURIComponent(id)}/classes/roots`;
  }



}