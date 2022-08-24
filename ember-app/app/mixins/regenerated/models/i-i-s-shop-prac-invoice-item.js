import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  amount: DS.attr('number'),
  weight: DS.attr('decimal'),
  price: DS.attr('decimal'),
  totalSum: DS.attr('decimal'),
  product: DS.belongsTo('i-i-s-shop-prac-product', { inverse: null, async: false }),
  invoice: DS.belongsTo('i-i-s-shop-prac-invoice', { inverse: 'invoiceItem', async: false })
});

export let ValidationRules = {
  amount: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice-item.validations.amount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  weight: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice-item.validations.weight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  price: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice-item.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice-item.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  product: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice-item.validations.product.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  invoice: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice-item.validations.invoice.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('InvoiceItemE', 'i-i-s-shop-prac-invoice-item', {
    amount: attr('Amount', { index: 0 }),
    weight: attr('Weight', { index: 1 }),
    price: attr('Price', { index: 2 }),
    totalSum: attr('Total sum', { index: 3 }),
    product: belongsTo('i-i-s-shop-prac-product', 'Product', {
      name: attr('Name', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'name' })
  });
};
