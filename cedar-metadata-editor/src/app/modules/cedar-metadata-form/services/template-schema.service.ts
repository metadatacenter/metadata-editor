import {Injectable} from "@angular/core";
import {InputTypeService} from "./input-type.service";
import {TemplateSchema} from "../models/template-schema";
import {InputType} from "../models/input-type";

@Injectable()
export class TemplateSchemaService {

  it: InputTypeService;

  constructor() {
    this.it = new InputTypeService();
  }

  /* parsing Template object */
  static isUndefined(value) {
    return value === null || value === undefined;
  }

  static schemaOf(node): TemplateSchema {
    return (node && node.type === 'array' && node.items) ? node.items : node;
  }

  static propertiesOf(schema: TemplateSchema) {
    return schema.properties;
  }

  static isBasedOn(instance: any) {
    return instance['schema:isBasedOn'];
  }

  static isSpecialKey(key) {
    const specialKeyPattern = /(^@)|(^_)|(^schema:)|(^pav:)|(^rdfs:)|(^oslc:)/i;
    return specialKeyPattern.test(key);
  }

  // get the value constraint literal values
  static getLiterals(schema: TemplateSchema) {
    if (schema._valueConstraints) {
      return schema._valueConstraints.literals;
    }
  }

  static getHelp(schema: TemplateSchema) {
    return schema['schema:description'];
  }

  static getPlaceholder(schema: TemplateSchema) {
    return 'placeholder text';
  }

  static getHint(schema: TemplateSchema) {
    return ' ';
  }

  static isRequired(schema: TemplateSchema) {
    return schema._valueConstraints && schema._valueConstraints.requiredValue;
  }

  static getMin(schema: TemplateSchema) {
    return schema && schema._valueConstraints && schema._valueConstraints.minValue;
  }

  static getMax(schema: TemplateSchema) {
    return schema && schema._valueConstraints && schema._valueConstraints.maxValue;
  }

  static getDecimals(schema: TemplateSchema) {
    return schema && schema._valueConstraints && schema._valueConstraints.decimalPlace;
  }

  static getNumeric(schema: TemplateSchema) {
    return schema && schema._valueConstraints && schema._valueConstraints.numberType;
  }

  static getMinStringLength(schema: TemplateSchema) {
    return schema && schema._valueConstraints && schema._valueConstraints.minLength;
  }

  static getMaxStringLength(schema: TemplateSchema) {
    return schema && schema._valueConstraints && schema._valueConstraints.maxLength;
  }

  static getMaxDefaultValue(schema: TemplateSchema) {
    return schema._valueConstraints.defaultValue;
  }

  static getName(schema: TemplateSchema) {
    return schema['schema:name'];
  }

  static getPrefLabel(schema: TemplateSchema) {
    return schema['skos:prefLabel'];
  }

  static getTitle(schema: TemplateSchema) {
    return TemplateSchemaService.getPrefLabel(schema) || TemplateSchemaService.getName(schema);
  }

  static isElement(schema: TemplateSchema) {
    return (schema['@type'] === 'https://schema.metadatacenter.org/core/TemplateElement');
  }

  // does this field have a value constraint?
  static hasControlledTermValue(schema: TemplateSchema) {
    let result = false;
    const vcst = schema._valueConstraints;
    if (vcst) {
      const hasOntologies = vcst.ontologies && vcst.ontologies.length > 0;
      const hasValueSets = vcst.valueSets && vcst.valueSets.length > 0;
      const hasClasses = vcst.classes && vcst.classes.length > 0;
      const hasBranches = vcst.branches && vcst.branches.length > 0;
      result = hasOntologies || hasValueSets || hasClasses || hasBranches;
    }
    return result;
  }

  // get the controlled terms list for field types
  static getFieldControlledTerms(schema: TemplateSchema, inputType: InputType) {
    if (!InputTypeService.isStatic(inputType) && inputType !== InputType.attributeValue) {
      const properties = this.propertiesOf(schema);
      if (properties['@type'] && properties['@type'].oneOf && properties['@type'].oneOf[1]) {
        return properties['@type'].oneOf[1].items['enum'];
      }
    }
  }

  // where is the value of this field, @id or @value?
  static getValueLocation(schema: TemplateSchema, inputType: InputType) {
    const ct = TemplateSchemaService.getFieldControlledTerms(schema, inputType);
    const ctv = TemplateSchemaService.hasControlledTermValue(schema);
    const link = inputType === InputType.link;
    return (ct || ctv || link) ? '@id' : '@value';
  }

  static isField(schema: TemplateSchema) {
    return (schema['@type'] === 'https://schema.metadatacenter.org/core/TemplateField');
  }

  static isStaticField(schema: TemplateSchema) {
    return (schema['@type'] === 'https://schema.metadatacenter.org/core/StaticTemplateField');
  }

  static getOrder(schema: TemplateSchema) {
    return schema['_ui']['order'];
  }

  static getProperties(schema: TemplateSchema) {
    return schema['properties'];
  }

  static getPageCount(schema: TemplateSchema) {
    const properties = this.getProperties(schema);
    let currentPage = 0;
    this.getOrder(schema).forEach(function (key) {
      let prop: TemplateSchema = properties[key];
      let type: InputType = TemplateSchemaService.getInputType(prop);
      if (InputTypeService.isPageBreak(type)) {
        currentPage++;
      }
    });
    return currentPage + 1;
  }

  // build an order array for a particular page
  static getOrderofPage(schema: TemplateSchema, page: number) {
    const p = page || 0;
    const properties = this.getProperties(schema);
    const order = this.getOrder(schema);
    let currentPage = 0;
    let pageOrder = [];
    let that = this;
    order.forEach(function (key) {

      let prop: TemplateSchema = properties[key];

      let type: InputType = that.getInputType(prop);
      if (InputTypeService.isPageBreak(type)) {
        currentPage++;
      } else {
        if (currentPage === p) {
          pageOrder.push(key);
        }
      }

    });
    return pageOrder;
  }

  static getInputType(schema: TemplateSchema): InputType {
    let result = InputType.textfield;
    if (schema && schema._ui && schema._ui.inputType) {
      result = schema._ui.inputType as InputType;
      if (InputTypeService.isTextfield(result) && this.hasControlledTermValue(schema)) {
        result = InputType.controlled;
      }
    }
    return result;
  }

  static getContent(schema: TemplateSchema): any {
    return (schema && schema._ui && schema._ui['_content']) ? schema._ui['_content'] : null;
  }

  static getSize(schema: TemplateSchema): any {
    return (schema && schema._ui && schema._ui['_size']) ? schema._ui['_size'] : null;
  }

  // has multiple choice value constraints?
  static isMultiValue(schema: TemplateSchema) {
    return schema._valueConstraints && schema._valueConstraints.multipleChoice;
  }

  // Function that generates the @type for a field in an instance, based on the schema @type definition
  static generateInstanceType(value) {
    const enumeration = this.isUndefined(value.oneOf) ? value.enum : value.oneOf[0].enum;

    // If the type is defined at the schema level
    if (!this.isUndefined(enumeration)) {
      // If only one type has been defined, it is returned
      const instanceType = (enumeration.length === 1) ? enumeration[0] : enumeration;
      if (instanceType) {
        return instanceType;
      }
    }
  }

  static generateInstanceTypeForDateField() {
    return 'xsd:date';
  }

  static generateInstanceTypeForNumericField(schema: TemplateSchema) {
    if (schema._valueConstraints.hasOwnProperty('numberType')) {
      return schema._valueConstraints.numberType;
    }
  }

  static setTextValue(model, key, index, valueLocation, val) {
    if (Array.isArray(model[key])) {
      model[key][index][valueLocation] = val;
    } else {
      model[key][valueLocation] = val;
    }
    console.log('setTextValue', model);
  }

  static setListValue(model, key, index, valueLocation, val) {
    console.log('setListValue', model[key], val);
    if (Array.isArray(model[key])) {
      let arr = [];
      for (let i = 0; i < val.length; i++) {
        arr.push({'@value': val[i]});
      }
      model[key] = arr;
    } else {
      model[key][valueLocation] = val;
    }
  }

  static setRadioValue(model, key, index, valueLocation, val) {
    if (Array.isArray(model[key])) {
      model[key][index][valueLocation] = val;
    } else {
      model[key][valueLocation] = val;
    }
  }

  static generateGUID = function () {
    let d = Date.now();
    const guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return guid;
  };

  // build the values
  static buildAttributeValues(model, key): any[] {
    const itemCount = model[key].length;
    const modelValue = (model && model[key]) ? model[key] : [];
    let val = [];
    for (let i = 0; i < itemCount; i++) {
      const itemKey = modelValue[i];
      const itemValue = model[itemKey]['@value'];
      val.push({'@value': itemValue, 'rdfs:label': itemKey})
    }
    return val;
  }

  static setAttributeValue(model, key, itemKey, valueLocation, val) {
    if (valueLocation === '@value') {
      // change the value
      model[itemKey][valueLocation] = val;

    } else {
      // change the label
      const itemValue = model[itemKey]['@value'];
      const index = model[key].indexOf(itemKey);
      delete model[itemKey];
      model['@context'][val] = model['@context'][itemKey];
      delete model['@context'][itemKey];
      model[key][index] = val;
      model[val] = {'@value': itemValue}
    }
  }

  static copyAttributeValue(model, key, index) {
    const oldKey = model[key][index];
    const oldValue = model[oldKey]['@value'];
    let newKey = oldKey;
    while (model.hasOwnProperty(newKey)) {
      newKey = newKey + '1';
    }

    model['@context'][newKey] = "https://schema.metadatacenter.org/properties/" + this.generateGUID();
    model[key].splice(index + 1, 0, newKey);
    model[newKey] = {'@value': oldValue};
  };

  static removeAttributeValue(model, key, index) {
    const oldKey = model[key][index];
    delete model['@context'][oldKey];
    model[key].splice(index, 1);
    delete model[oldKey]
  };

  static getRadioValue(model, key, index, valueLocation) {
    if (Array.isArray(model[key])) {
      return model[key][index][valueLocation];
    } else {
      return model[key][valueLocation];
    }
  }

  static addControlledValue(model: any, key: string, value: string, label: string) {
    let val = {'@id': value, 'rdfs:label': label};
    model[key].push(val);
    console.log('setControlledValue', value, label, model[key]);
  }

  static removeControlledValue(model: any, key: string, index: number) {
    model[key].splice(index, 1);
  }


  static setCheckValue(model: any, key: string, index: number, location: string, val: string[]) {
    let arr = [];
    for (let i = 0; i < val[index].length; i++) {
      let obj = {};
      obj[location] = val[index][i];
      arr.push(obj);
    }
    model[key] = arr;
    console.log('setCheckValue', val, location, arr);
  }

  static setDateValue(model: any, key: string, index: number, valueLocation, val) {
    let obj = Array.isArray(model[key]) ? model[key][index] : model[key];
    obj[valueLocation] = val;
    obj['@type'] = 'xsd:date';
  }

}