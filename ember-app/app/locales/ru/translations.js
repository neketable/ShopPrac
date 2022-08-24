import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Магазин',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Магазин',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Магазин',
          title: 'Shop'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        магазин: {
          caption: 'Магазин',
          title: 'Магазин',
          'информация-о-заказах': {
            caption: 'Информация о заказах',
            title: 'Информация о заказах',
            'i-i-s-shop-prac-order-l': {
              caption: 'Заказы',
              title: ''
            },
            'i-i-s-shop-prac-invoice-l': {
              caption: 'Накладные',
              title: ''
            }
          },
          'товары-на-складе': {
            caption: 'Товары на складе',
            title: 'Товары на складе',
            'i-i-s-shop-prac-storehouse-l': {
              caption: 'Склады',
              title: ''
            },
            'i-i-s-shop-prac-product-l': {
              caption: 'Товары',
              title: ''
            }
          }
        },
        'данные-о-сотрудниках': {
          caption: 'Данные о сотрудниках',
          title: 'Данные о сотрудниках',
          'i-i-s-shop-prac-employee-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
