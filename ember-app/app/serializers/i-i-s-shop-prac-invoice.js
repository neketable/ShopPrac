import { Serializer as InvoiceSerializer } from
  '../mixins/regenerated/serializers/i-i-s-shop-prac-invoice';
import DocumentSerializer from './i-i-s-shop-prac-document';

export default DocumentSerializer.extend(InvoiceSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
