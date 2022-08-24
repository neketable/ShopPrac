import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import InvoiceStatusEnum from '../enums/i-i-s-shop-prac-invoice-status';

export default FlexberryEnum.extend({
  enum: InvoiceStatusEnum,
  sourceType: 'IIS.ShopPrac.InvoiceStatus'
});
