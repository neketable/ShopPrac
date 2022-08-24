import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-shop-prac-product', 'Unit | Model | i-i-s-shop-prac-product', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-shop-prac-document',
    'model:i-i-s-shop-prac-employee',
    'model:i-i-s-shop-prac-invoice-item',
    'model:i-i-s-shop-prac-invoice',
    'model:i-i-s-shop-prac-order-item',
    'model:i-i-s-shop-prac-order',
    'model:i-i-s-shop-prac-product',
    'model:i-i-s-shop-prac-store-product',
    'model:i-i-s-shop-prac-storehouse',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
