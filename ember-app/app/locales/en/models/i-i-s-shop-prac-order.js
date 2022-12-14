export default {
  projections: {
    OrderE: {
      number: {
        __caption__: 'number'
      },
      status: {
        __caption__: 'status'
      },
      createDate: {
        __caption__: 'createDate'
      },
      manager: {
        __caption__: 'manager',
        lastName: {
          __caption__: 'lastName'
        }
      },
      totalSum: {
        __caption__: 'totalSum'
      },
      paymentDate: {
        __caption__: 'paymentDate'
      },
      shipmentDate: {
        __caption__: 'shipmentDate'
      },
      orderItem: {
        __caption__: 'orderItem',
        amount: {
          __caption__: 'amount'
        },
        priceWTaxes: {
          __caption__: 'priceWTaxes'
        },
        totalSum: {
          __caption__: 'totalSum'
        },
        product: {
          __caption__: 'product',
          name: {
            __caption__: 'name'
          }
        }
      }
    },
    OrderL: {
      number: {
        __caption__: 'number'
      },
      status: {
        __caption__: 'status'
      },
      createDate: {
        __caption__: 'createDate'
      },
      manager: {
        __caption__: 'manager',
        lastName: {
          __caption__: 'lastName'
        }
      },
      totalSum: {
        __caption__: 'totalSum'
      },
      paymentDate: {
        __caption__: 'paymentDate'
      },
      shipmentDate: {
        __caption__: 'shipmentDate'
      }
    }
  },
  validations: {
    status: {
      __caption__: 'status'
    },
    shipmentDate: {
      __caption__: 'shipmentDate'
    },
    paymentDate: {
      __caption__: 'paymentDate'
    },
    totalSum: {
      __caption__: 'totalSum'
    },
    manager: {
      __caption__: 'manager'
    },
    orderItem: {
      __caption__: 'orderItem'
    }
  }
};
