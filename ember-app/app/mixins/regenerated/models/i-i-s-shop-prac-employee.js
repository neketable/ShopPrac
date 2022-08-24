import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  number: DS.attr('number', { defaultValue: 1 }),
  lastName: DS.attr('string'),
  firstName: DS.attr('string'),
  middleName: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  email: DS.attr('string'),
  position: DS.attr('i-i-s-shop-prac-position-list')
});

export let ValidationRules = {
  number: {
    descriptionKey: 'models.i-i-s-shop-prac-employee.validations.number.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  lastName: {
    descriptionKey: 'models.i-i-s-shop-prac-employee.validations.lastName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  firstName: {
    descriptionKey: 'models.i-i-s-shop-prac-employee.validations.firstName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  middleName: {
    descriptionKey: 'models.i-i-s-shop-prac-employee.validations.middleName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phoneNumber: {
    descriptionKey: 'models.i-i-s-shop-prac-employee.validations.phoneNumber.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  email: {
    descriptionKey: 'models.i-i-s-shop-prac-employee.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  position: {
    descriptionKey: 'models.i-i-s-shop-prac-employee.validations.position.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('EmployeeE', 'i-i-s-shop-prac-employee', {
    number: attr('Number', { index: 0 }),
    lastName: attr('Last name', { index: 1 }),
    firstName: attr('First name', { index: 2 }),
    middleName: attr('Middle name', { index: 3 }),
    phoneNumber: attr('Phone number', { index: 4 }),
    email: attr('Email', { index: 5 }),
    position: attr('Position', { index: 6 })
  });

  modelClass.defineProjection('EmployeeL', 'i-i-s-shop-prac-employee', {
    number: attr('Number', { index: 0 }),
    lastName: attr('Last name', { index: 1 }),
    firstName: attr('First name', { index: 2 }),
    middleName: attr('Middle name', { index: 3 }),
    phoneNumber: attr('Phone number', { index: 4 }),
    email: attr('Email', { index: 5 }),
    position: attr('Position', { index: 6 })
  });
};
