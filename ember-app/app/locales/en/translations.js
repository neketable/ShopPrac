import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISShopPracDocumentLForm from './forms/i-i-s-shop-prac-document-l';
import IISShopPracEmployeeLForm from './forms/i-i-s-shop-prac-employee-l';
import IISShopPracInvoiceLForm from './forms/i-i-s-shop-prac-invoice-l';
import IISShopPracOrderLForm from './forms/i-i-s-shop-prac-order-l';
import IISShopPracProductLForm from './forms/i-i-s-shop-prac-product-l';
import IISShopPracStorehouseLForm from './forms/i-i-s-shop-prac-storehouse-l';
import IISShopPracDocumentEForm from './forms/i-i-s-shop-prac-document-e';
import IISShopPracEmployeeEForm from './forms/i-i-s-shop-prac-employee-e';
import IISShopPracInvoiceEForm from './forms/i-i-s-shop-prac-invoice-e';
import IISShopPracOrderEForm from './forms/i-i-s-shop-prac-order-e';
import IISShopPracProductEForm from './forms/i-i-s-shop-prac-product-e';
import IISShopPracStorehouseEForm from './forms/i-i-s-shop-prac-storehouse-e';
import IISShopPracDocumentModel from './models/i-i-s-shop-prac-document';
import IISShopPracEmployeeModel from './models/i-i-s-shop-prac-employee';
import IISShopPracInvoiceItemModel from './models/i-i-s-shop-prac-invoice-item';
import IISShopPracInvoiceModel from './models/i-i-s-shop-prac-invoice';
import IISShopPracOrderItemModel from './models/i-i-s-shop-prac-order-item';
import IISShopPracOrderModel from './models/i-i-s-shop-prac-order';
import IISShopPracProductModel from './models/i-i-s-shop-prac-product';
import IISShopPracStoreProductModel from './models/i-i-s-shop-prac-store-product';
import IISShopPracStorehouseModel from './models/i-i-s-shop-prac-storehouse';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-shop-prac-document': IISShopPracDocumentModel,
    'i-i-s-shop-prac-employee': IISShopPracEmployeeModel,
    'i-i-s-shop-prac-invoice-item': IISShopPracInvoiceItemModel,
    'i-i-s-shop-prac-invoice': IISShopPracInvoiceModel,
    'i-i-s-shop-prac-order-item': IISShopPracOrderItemModel,
    'i-i-s-shop-prac-order': IISShopPracOrderModel,
    'i-i-s-shop-prac-product': IISShopPracProductModel,
    'i-i-s-shop-prac-store-product': IISShopPracStoreProductModel,
    'i-i-s-shop-prac-storehouse': IISShopPracStorehouseModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        магазин: {
          caption: 'магазин',
          title: 'магазин',
          'информация-о-заказах': {
            caption: 'информация-о-заказах',
            title: 'информация-о-заказах',
            'i-i-s-shop-prac-order-l': {
              caption: 'i-i-s-shop-prac-order-l',
              title: 'i-i-s-shop-prac-order-l'
            },
            'i-i-s-shop-prac-invoice-l': {
              caption: 'i-i-s-shop-prac-invoice-l',
              title: 'i-i-s-shop-prac-invoice-l'
            }
          },
          'товары-на-складе': {
            caption: 'товары-на-складе',
            title: 'товары-на-складе',
            'i-i-s-shop-prac-storehouse-l': {
              caption: 'i-i-s-shop-prac-storehouse-l',
              title: 'i-i-s-shop-prac-storehouse-l'
            },
            'i-i-s-shop-prac-product-l': {
              caption: 'i-i-s-shop-prac-product-l',
              title: 'i-i-s-shop-prac-product-l'
            }
          }
        },
        'данные-о-сотрудниках': {
          caption: 'данные-о-сотрудниках',
          title: 'данные-о-сотрудниках',
          'i-i-s-shop-prac-employee-l': {
            caption: 'i-i-s-shop-prac-employee-l',
            title: 'i-i-s-shop-prac-employee-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-shop-prac-document-l': IISShopPracDocumentLForm,
    'i-i-s-shop-prac-employee-l': IISShopPracEmployeeLForm,
    'i-i-s-shop-prac-invoice-l': IISShopPracInvoiceLForm,
    'i-i-s-shop-prac-order-l': IISShopPracOrderLForm,
    'i-i-s-shop-prac-product-l': IISShopPracProductLForm,
    'i-i-s-shop-prac-storehouse-l': IISShopPracStorehouseLForm,
    'i-i-s-shop-prac-document-e': IISShopPracDocumentEForm,
    'i-i-s-shop-prac-employee-e': IISShopPracEmployeeEForm,
    'i-i-s-shop-prac-invoice-e': IISShopPracInvoiceEForm,
    'i-i-s-shop-prac-order-e': IISShopPracOrderEForm,
    'i-i-s-shop-prac-product-e': IISShopPracProductEForm,
    'i-i-s-shop-prac-storehouse-e': IISShopPracStorehouseEForm
  },

});

export default translations;
