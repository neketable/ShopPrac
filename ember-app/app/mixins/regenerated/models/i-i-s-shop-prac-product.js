import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  productCode: DS.attr('number', { defaultValue: 1 }),
  name: DS.attr('string'),
  measure: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('decimal'),
  weight: DS.attr('decimal')
});

export let ValidationRules = {
  productCode: {
    descriptionKey: 'models.i-i-s-shop-prac-product.validations.productCode.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-shop-prac-product.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  measure: {
    descriptionKey: 'models.i-i-s-shop-prac-product.validations.measure.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.i-i-s-shop-prac-product.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  price: {
    descriptionKey: 'models.i-i-s-shop-prac-product.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  weight: {
    descriptionKey: 'models.i-i-s-shop-prac-product.validations.weight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ProductE', 'i-i-s-shop-prac-product', {
    productCode: attr('Product code', { index: 0 }),
    name: attr('Name', { index: 1 }),
    measure: attr('Measure', { index: 2 }),
    description: attr('Description', { index: 3 }),
    price: attr('Price', { index: 4 }),
    weight: attr('Weight', { index: 5 })
  });

  modelClass.defineProjection('ProductL', 'i-i-s-shop-prac-product', {
    productCode: attr('Product code', { index: 0 }),
    name: attr('Name', { index: 1 }),
    measure: attr('Measure', { index: 2 }),
    description: attr('Description', { index: 3 }),
    price: attr('Price', { index: 4 }),
    weight: attr('Weight', { index: 5 })
  });
};
