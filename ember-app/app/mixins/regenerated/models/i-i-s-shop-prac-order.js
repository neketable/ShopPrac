import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';
import OrderStatusEnum from '../../../enums/i-i-s-shop-prac-order-status';

export let Model = Mixin.create({
  status: DS.attr('i-i-s-shop-prac-order-status', { defaultValue: OrderStatusEnum.New }),
  shipmentDate: DS.attr('date'),
  paymentDate: DS.attr('date'),
  /**
    Non-stored property.

    @property totalSum
  */
  totalSum: DS.attr('decimal'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'totalSumCompute' method in model class (outside of this mixin) if you want to compute value of 'totalSum' property.

    @method _totalSumCompute
    @private
    @example
      ```javascript
      _totalSumChanged: on('init', observer('totalSum', function() {
        once(this, '_totalSumCompute');
      }))
      ```
  */
  _totalSumCompute: function() {
    let result = (this.totalSumCompute && typeof this.totalSumCompute === 'function') ? this.totalSumCompute() : null;
    this.set('totalSum', result);
  },
  manager: DS.belongsTo('i-i-s-shop-prac-employee', { inverse: null, async: false }),
  orderItem: DS.hasMany('i-i-s-shop-prac-order-item', { inverse: 'order', async: false })
});

export let ValidationRules = {
  status: {
    descriptionKey: 'models.i-i-s-shop-prac-order.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  shipmentDate: {
    descriptionKey: 'models.i-i-s-shop-prac-order.validations.shipmentDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  paymentDate: {
    descriptionKey: 'models.i-i-s-shop-prac-order.validations.paymentDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-shop-prac-order.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  manager: {
    descriptionKey: 'models.i-i-s-shop-prac-order.validations.manager.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  orderItem: {
    descriptionKey: 'models.i-i-s-shop-prac-order.validations.orderItem.__caption__',
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
  modelClass.defineProjection('OrderE', 'i-i-s-shop-prac-order', {
    number: attr('Номер', { index: 0 }),
    status: attr('Статус', { index: 1 }),
    createDate: attr('Дата оформления', { index: 2 }),
    manager: belongsTo('i-i-s-shop-prac-employee', 'Менеджер', {
      lastName: attr('', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'lastName' }),
    totalSum: attr('Сумма заказа', { index: 5 }),
    paymentDate: attr('Дата оплаты', { index: 6 }),
    shipmentDate: attr('Дата отгрузки', { index: 7 }),
    orderItem: hasMany('i-i-s-shop-prac-order-item', 'Order item', {
      amount: attr('Amount', { index: 0 }),
      priceWTaxes: attr('Price w taxes', { index: 1 }),
      totalSum: attr('Total sum', { index: 2 }),
      product: belongsTo('i-i-s-shop-prac-product', 'Product', {
        name: attr('Name', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('OrderL', 'i-i-s-shop-prac-order', {
    number: attr('Номер', { index: 0 }),
    status: attr('Статус', { index: 1 }),
    createDate: attr('Дата оформления', { index: 2 }),
    manager: belongsTo('i-i-s-shop-prac-employee', 'Менеджер', {
      lastName: attr('Менеджер', { index: 3 })
    }, { index: -1, hidden: true }),
    totalSum: attr('Стоимость заказа', { index: 4 }),
    paymentDate: attr('Дата оплаты', { index: 5 }),
    shipmentDate: attr('Дата отгрузки', { index: 6 })
  });
};
