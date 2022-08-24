import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  number: DS.attr('number', { defaultValue: 1 }),
  address: DS.attr('string'),
  storekeeper: DS.belongsTo('i-i-s-shop-prac-employee', { inverse: null, async: false }),
  storeProduct: DS.hasMany('i-i-s-shop-prac-store-product', { inverse: 'storehouse', async: false })
});

export let ValidationRules = {
  number: {
    descriptionKey: 'models.i-i-s-shop-prac-storehouse.validations.number.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  address: {
    descriptionKey: 'models.i-i-s-shop-prac-storehouse.validations.address.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  storekeeper: {
    descriptionKey: 'models.i-i-s-shop-prac-storehouse.validations.storekeeper.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  storeProduct: {
    descriptionKey: 'models.i-i-s-shop-prac-storehouse.validations.storeProduct.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('StorehouseE', 'i-i-s-shop-prac-storehouse', {
    number: attr('Number', { index: 0 }),
    address: attr('Address', { index: 1 }),
    storekeeper: belongsTo('i-i-s-shop-prac-employee', 'Storekeeper', {
      lastName: attr('Last name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'lastName' }),
    storeProduct: hasMany('i-i-s-shop-prac-store-product', 'Store product', {
      amount: attr('Amount', { index: 0 }),
      product: belongsTo('i-i-s-shop-prac-product', 'Product', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('StorehouseL', 'i-i-s-shop-prac-storehouse', {
    number: attr('Number', { index: 0 }),
    address: attr('Address', { index: 1 }),
    storekeeper: belongsTo('i-i-s-shop-prac-employee', 'Last name', {
      lastName: attr('Last name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
