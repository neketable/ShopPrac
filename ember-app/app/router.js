import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-shop-prac-document-l');
  this.route('i-i-s-shop-prac-document-e',
  { path: 'i-i-s-shop-prac-document-e/:id' });
  this.route('i-i-s-shop-prac-document-e.new',
  { path: 'i-i-s-shop-prac-document-e/new' });
  this.route('i-i-s-shop-prac-employee-l');
  this.route('i-i-s-shop-prac-employee-e',
  { path: 'i-i-s-shop-prac-employee-e/:id' });
  this.route('i-i-s-shop-prac-employee-e.new',
  { path: 'i-i-s-shop-prac-employee-e/new' });
  this.route('i-i-s-shop-prac-invoice-l');
  this.route('i-i-s-shop-prac-invoice-e',
  { path: 'i-i-s-shop-prac-invoice-e/:id' });
  this.route('i-i-s-shop-prac-invoice-e.new',
  { path: 'i-i-s-shop-prac-invoice-e/new' });
  this.route('i-i-s-shop-prac-order-l');
  this.route('i-i-s-shop-prac-order-e',
  { path: 'i-i-s-shop-prac-order-e/:id' });
  this.route('i-i-s-shop-prac-order-e.new',
  { path: 'i-i-s-shop-prac-order-e/new' });
  this.route('i-i-s-shop-prac-product-l');
  this.route('i-i-s-shop-prac-product-e',
  { path: 'i-i-s-shop-prac-product-e/:id' });
  this.route('i-i-s-shop-prac-product-e.new',
  { path: 'i-i-s-shop-prac-product-e/new' });
  this.route('i-i-s-shop-prac-storehouse-l');
  this.route('i-i-s-shop-prac-storehouse-e',
  { path: 'i-i-s-shop-prac-storehouse-e/:id' });
  this.route('i-i-s-shop-prac-storehouse-e.new',
  { path: 'i-i-s-shop-prac-storehouse-e/new' });
});

export default Router;
