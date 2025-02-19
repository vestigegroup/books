import frappe, { t } from 'frappe';
import Account from './AccountDocument';

export default {
  name: 'Account',
  label: t`Account`,
  doctype: 'DocType',
  documentClass: Account,
  isSingle: 0,
  isTree: 1,
  keywordFields: ['name', 'rootType', 'accountType'],
  fields: [
    {
      fieldname: 'name',
      label: t`Account Name`,
      fieldtype: 'Data',
      required: 1,
    },
    {
      fieldname: 'rootType',
      label: t`Root Type`,
      fieldtype: 'Select',
      placeholder: t`Root Type`,
      options: ['Asset', 'Liability', 'Equity', 'Income', 'Expense'],
      required: 1,
    },
    {
      fieldname: 'parentAccount',
      label: t`Parent Account`,
      fieldtype: 'Link',
      target: 'Account',
      getFilters: (query, doc) => {
        const filter = {
          isGroup: 1,
        };
        doc.rootType ? (filter.rootType = doc.rootType) : '';
        return filter;
      },
    },
    {
      fieldname: 'accountType',
      label: t`Account Type`,
      placeholder: t`Account Type`,
      fieldtype: 'Select',
      options: [
        'Accumulated Depreciation',
        'Bank',
        'Cash',
        'Chargeable',
        'Cost of Goods Sold',
        'Depreciation',
        'Equity',
        'Expense Account',
        'Expenses Included In Valuation',
        'Fixed Asset',
        'Income Account',
        'Payable',
        'Receivable',
        'Round Off',
        'Stock',
        'Stock Adjustment',
        'Stock Received But Not Billed',
        'Tax',
        'Temporary',
      ],
    },
    {
      fieldname: 'balance',
      label: t`Balance`,
      fieldtype: 'Currency',
      readOnly: 1,
    },
    {
      fieldname: 'isGroup',
      label: t`Is Group`,
      fieldtype: 'Check',
    },
  ],

  quickEditFields: [
    'name',
    'rootType',
    'parentAccount',
    'accountType',
    'isGroup',
  ],

  treeSettings: {
    parentField: 'parentAccount',
    async getRootLabel() {
      let accountingSettings = await frappe.getSingle('AccountingSettings');
      return accountingSettings.companyName;
    },
  },
};
