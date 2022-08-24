import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';
import InvoiceStatusEnum from '../../../enums/i-i-s-shop-prac-invoice-status';

export let Model = Mixin.create({
  status: DS.attr('i-i-s-shop-prac-invoice-status', { defaultValue: InvoiceStatusEnum.New }),
  shipmentDateTime: DS.attr('date'),
  totalSum: DS.attr('decimal'),
  totalWeight: DS.attr('decimal'),
  note: DS.attr('string'),
  customerName: DS.attr('string'),
  order: DS.belongsTo('i-i-s-shop-prac-order', { inverse: null, async: false }),
  responsiblePerson: DS.belongsTo('i-i-s-shop-prac-employee', { inverse: null, async: false }),
  invoiceItem: DS.hasMany('i-i-s-shop-prac-invoice-item', { inverse: 'invoice', async: false })
});

export let ValidationRules = {
  status: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  shipmentDateTime: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice.validations.shipmentDateTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  totalWeight: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice.validations.totalWeight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  note: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice.validations.note.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  customerName: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice.validations.customerName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  order: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice.validations.order.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  responsiblePerson: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice.validations.responsiblePerson.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  invoiceItem: {
    descriptionKey: 'models.i-i-s-shop-prac-invoice.validations.invoiceItem.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-shop-prac-document'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('InvoiceE', 'i-i-s-shop-prac-invoice', {
    status: attr('Status', { index: 0 }),
    shipmentDateTime: attr('Shipment date time', { index: 1 }),
    totalSum: attr('Total sum', { index: 2 }),
    totalWeight: attr('Total weight', { index: 3 }),
    note: attr('Note', { index: 4 }),
    customerName: attr('Customer name', { index: 5 }),
    number: attr('Number', { index: 6 }),
    createDate: attr('Create date', { index: 7 }),
    order: belongsTo('i-i-s-shop-prac-order', 'Order', {
      number: attr('', { index: 9 })
    }, { index: 8, displayMemberPath: 'number' }),
    responsiblePerson: belongsTo('i-i-s-shop-prac-employee', 'Responsible person', {
      lastName: attr('Last name', { index: 11, hidden: true })
    }, { index: 10 }),
    invoiceItem: hasMany('i-i-s-shop-prac-invoice-item', 'Invoice item', {
      amount: attr('Amount', { index: 0 }),
      weight: attr('Weight', { index: 1 }),
      price: attr('Price', { index: 2 }),
      totalSum: attr('Total sum', { index: 3 }),
      product: belongsTo('i-i-s-shop-prac-product', 'Product', {
        name: attr('Name', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('InvoiceL', 'i-i-s-shop-prac-invoice', {
    number: attr('Number', { index: 0 }),
    status: attr('Status', { index: 1 }),
    createDate: attr('Create date', { index: 2 }),
    order: belongsTo('i-i-s-shop-prac-order', 'Номер заказа', {
      number: attr('Номер заказа', { index: 3 })
    }, { index: -1, hidden: true }),
    customerName: attr('Customer name', { index: 4 }),
    totalSum: attr('Total sum', { index: 5 }),
    totalWeight: attr('Total weight', { index: 6 }),
    note: attr('Note', { index: 7 }),
    shipmentDateTime: attr('Shipment date time', { index: 8 }),
    responsiblePerson: belongsTo('i-i-s-shop-prac-employee', 'Last name', {
      lastName: attr('Last name', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
