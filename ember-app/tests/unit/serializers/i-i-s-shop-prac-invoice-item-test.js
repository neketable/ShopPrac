import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-shop-prac-invoice-item', 'Unit | Serializer | i-i-s-shop-prac-invoice-item', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-shop-prac-invoice-item',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-shop-prac-invoice-status',
    'transform:i-i-s-shop-prac-order-status',
    'transform:i-i-s-shop-prac-position-list',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
