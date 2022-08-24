import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import PositionListEnum from '../enums/i-i-s-shop-prac-position-list';

export default FlexberryEnum.extend({
  enum: PositionListEnum,
  sourceType: 'IIS.ShopPrac.PositionList'
});
