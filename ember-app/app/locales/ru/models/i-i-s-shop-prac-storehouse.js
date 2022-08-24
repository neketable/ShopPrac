export default {
  projections: {
    StorehouseE: {
      number: {
        __caption__: 'Number'
      },
      address: {
        __caption__: 'Address'
      },
      storekeeper: {
        __caption__: 'Storekeeper',
        lastName: {
          __caption__: 'Last name'
        }
      },
      storeProduct: {
        __caption__: 'Store product',
        amount: {
          __caption__: 'Amount'
        },
        product: {
          __caption__: 'Product',
          name: {
            __caption__: 'Name'
          }
        }
      }
    },
    StorehouseL: {
      number: {
        __caption__: 'Number'
      },
      address: {
        __caption__: 'Address'
      },
      storekeeper: {
        __caption__: 'Last name',
        lastName: {
          __caption__: 'Last name'
        }
      }
    }
  },
  validations: {
    number: {
      __caption__: 'Number'
    },
    address: {
      __caption__: 'Address'
    },
    storekeeper: {
      __caption__: 'Storekeeper'
    },
    storeProduct: {
      __caption__: 'Store product'
    }
  }
};
