import { Serializer as OrderSerializer } from
  '../mixins/regenerated/serializers/i-i-s-shop-prac-order';
import DocumentSerializer from './i-i-s-shop-prac-document';

export default DocumentSerializer.extend(OrderSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
