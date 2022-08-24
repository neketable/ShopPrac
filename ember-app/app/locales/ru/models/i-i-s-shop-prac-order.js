export default {
  projections: {
    OrderE: {
      number: {
        __caption__: 'Номер'
      },
      status: {
        __caption__: 'Статус'
      },
      createDate: {
        __caption__: 'Дата оформления'
      },
      manager: {
        __caption__: 'Менеджер',
        lastName: {
          __caption__: ''
        }
      },
      totalSum: {
        __caption__: 'Сумма заказа'
      },
      paymentDate: {
        __caption__: 'Дата оплаты'
      },
      shipmentDate: {
        __caption__: 'Дата отгрузки'
      },
      orderItem: {
        __caption__: 'Order item',
        amount: {
          __caption__: 'Amount'
        },
        priceWTaxes: {
          __caption__: 'Price w taxes'
        },
        totalSum: {
          __caption__: 'Total sum'
        },
        product: {
          __caption__: 'Product',
          name: {
            __caption__: 'Name'
          }
        }
      }
    },
    OrderL: {
      number: {
        __caption__: 'Номер'
      },
      status: {
        __caption__: 'Статус'
      },
      createDate: {
        __caption__: 'Дата оформления'
      },
      manager: {
        __caption__: 'Менеджер',
        lastName: {
          __caption__: 'Менеджер'
        }
      },
      totalSum: {
        __caption__: 'Стоимость заказа'
      },
      paymentDate: {
        __caption__: 'Дата оплаты'
      },
      shipmentDate: {
        __caption__: 'Дата отгрузки'
      }
    }
  },
  validations: {
    status: {
      __caption__: 'Статус'
    },
    shipmentDate: {
      __caption__: 'Дата отгрузки'
    },
    paymentDate: {
      __caption__: 'Дата оплаты'
    },
    totalSum: {
      __caption__: 'Сумма заказа'
    },
    manager: {
      __caption__: 'Менеджер'
    },
    orderItem: {
      __caption__: 'Order item'
    }
  }
};
