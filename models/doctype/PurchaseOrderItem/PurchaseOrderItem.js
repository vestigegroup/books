import model from 'frappe/model';
import PurchaseInvoiceItem from '../PurchaseInvoiceItem/PurchaseInvoiceItem';

export default model.extend(PurchaseInvoiceItem, {
  name: 'PurchaseOrderItem',
});
