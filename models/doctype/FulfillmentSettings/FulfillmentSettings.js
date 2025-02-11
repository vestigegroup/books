import { t } from 'frappe';
import model from 'frappe/model';
import QuotationSettings from '../QuotationSettings/QuotationSettings';

export default model.extend(QuotationSettings, {
  name: 'FulfillmentSettings',
  label: t`Fulfillment Settings`,
  fields: [],
});
