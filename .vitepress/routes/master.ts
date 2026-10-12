const routes = [
  {
    text: 'Getting Started',
    collapsed: true,
    items: [
      { text: 'Introduction', link: '/master/Introduction' },
      { text: 'Stages', link: '/master/getting-started/stages' },
      { text: 'Chatter', link: '/master/getting-started/chatter' },
      { text: 'Activities', link: '/master/getting-started/activities' },
      { text: 'Search, Filter and Group', link: '/master/getting-started/search-filter-group' },
      {
        text: 'Contacts',
        collapsed: true,
        items: [
          { text: 'Contacts', link: '/master/getting-started/contacts/contacts' },
          { text: 'Configurations', link: '/master/getting-started/contacts/configurations' },
        ]
      },
    ]
  },
  {
    text: 'General Settings',
    collapsed: true,
    link: '/master/general-settings/',
    items: [
      { text: 'Plugins', link: '/master/general-settings/plugins' },
      {
        text: 'Companies',
        collapsed: true,
        items: [
          { text: 'Companies', link: '/master/general-settings/companies/companies' },
          { text: 'Currency', link: '/master/general-settings/companies/currency' },
          { text: 'Multi-Company', link: '/master/general-settings/companies/multi-company' },
        ]
      },
      {
        text: 'Users',
        collapsed: true,
        items: [
          { text: 'Manage Users', link: '/master/general-settings/users/manage-users' },
          { text: 'Users', link: '/master/general-settings/users/users' },
          { text: 'Roles', link: '/master/general-settings/users/roles' },
          { text: 'Teams', link: '/master/general-settings/users/teams' },
          { text: 'Portal Access', link: '/master/general-settings/users/portal-access' },
          { text: 'Your Profile', link: '/master/general-settings/users/profile' },
          { text: 'Two-Factor Authentication', link: '/master/general-settings/users/two-factor-authentication' },
        ]
      },
      {
        text: 'Customization',
        collapsed: true,
        items: [
          { text: 'Branding', link: '/master/general-settings/customization/branding' },
          { text: 'Custom Fields', link: '/master/general-settings/customization/custom-fields' },
          { text: 'Sequences', link: '/master/general-settings/customization/sequences' },
        ]
      },
    ]
  },
  {
    text: 'Finance',
    collapsed: true,
    link: '/master/finance/',
    items: [
      {
        text: 'Get Started',
        collapsed: true,
        link: '/master/finance/get-started/',
        items: [
          { text: 'Accounting Setup', link: '/master/finance/get-started/accounting-setup' },
          { text: 'Accounting Overview', link: '/master/finance/get-started/accounting-overview' },
          { text: 'Chart of Accounts', link: '/master/finance/get-started/chart-of-accounts' },
          { text: 'Journals', link: '/master/finance/get-started/journals' },
          { text: 'Default Accounts', link: '/master/finance/get-started/default-accounts' },
          { text: 'Multi-Currency', link: '/master/finance/get-started/multi-currency' },
        ]
      },
      {
        text: 'Taxes',
        collapsed: true,
        link: '/master/finance/taxes/',
        items: [
          { text: 'Taxes', link: '/master/finance/taxes/taxes' },
          { text: 'Tax Groups', link: '/master/finance/taxes/tax-groups' },
          { text: 'Fiscal Positions', link: '/master/finance/taxes/fiscal-positions' },
          { text: 'Tax Settings', link: '/master/finance/taxes/tax-settings' },
        ]
      },
      {
        text: 'Customer Invoices',
        collapsed: true,
        link: '/master/finance/customer-invoices/',
        items: [
          { text: 'Create an Invoice', link: '/master/finance/customer-invoices/create-invoice' },
          { text: 'Credit Notes and Refunds', link: '/master/finance/customer-invoices/credit-notes-and-refunds' },
          { text: 'Invoice Sequence', link: '/master/finance/customer-invoices/invoice-sequence' },
          { text: 'Payment Terms', link: '/master/finance/customer-invoices/payment-terms' },
          { text: 'Incoterms', link: '/master/finance/customer-invoices/incoterms' },
        ]
      },
      {
        text: 'Vendor Bills',
        collapsed: true,
        link: '/master/finance/vendor-bills/',
        items: [
          { text: 'Create a Bill', link: '/master/finance/vendor-bills/create-bill' },
          { text: 'Bill Sequence', link: '/master/finance/vendor-bills/bill-sequence' },
        ]
      },
      {
        text: 'Payments',
        collapsed: true,
        link: '/master/finance/payments/',
        items: [
          { text: 'Register a Payment', link: '/master/finance/payments/register-payment' },
          { text: 'Manage Payments', link: '/master/finance/payments/manage-payments' },
          { text: 'Bank Accounts', link: '/master/finance/payments/bank-accounts' },
        ]
      },
      {
        text: 'Accounting Entries',
        collapsed: true,
        link: '/master/finance/accounting-entries/',
        items: [
          { text: 'Journal Entries', link: '/master/finance/accounting-entries/journal-entries' },
          { text: 'Journal Items', link: '/master/finance/accounting-entries/journal-items' },
        ]
      },
      {
        text: 'Reporting',
        collapsed: true,
        link: '/master/finance/reporting/',
        items: [
          { text: 'Balance Sheet', link: '/master/finance/reporting/balance-sheet' },
          { text: 'Profit and Loss', link: '/master/finance/reporting/profit-and-loss' },
          { text: 'General Ledger', link: '/master/finance/reporting/general-ledger' },
          { text: 'Trial Balance', link: '/master/finance/reporting/trial-balance' },
          { text: 'Partner Ledger', link: '/master/finance/reporting/partner-ledger' },
          { text: 'Aged Receivable and Payable', link: '/master/finance/reporting/aged-receivable-and-payable' },
        ]
      },
      { text: 'Configuration', link: '/master/finance/configuration/' },
    ]
  },
  {
    text: 'Sales',
    collapsed: true,
    items: [
      {
        text: 'Sales',
        collapsed: true,
        link: '/master/sales/sales/',
        items: [
          {
            text: 'Quotations and Orders',
            collapsed: true,
            link: '/master/sales/sales/quotations-orders/',
            items: [
              { text: 'Create a Quotation', link: '/master/sales/sales/quotations-orders/create-quotation' },
              { text: 'Optional Products', link: '/master/sales/sales/quotations-orders/optional-products' },
              { text: 'Send and Confirm a Quotation', link: '/master/sales/sales/quotations-orders/send-and-confirm-quotation' },
              { text: 'Manage Orders', link: '/master/sales/sales/quotations-orders/manage-orders' },
              { text: 'Manage Customers', link: '/master/sales/sales/quotations-orders/manage-customers' },
            ]
          },
          {
            text: 'Invoicing',
            collapsed: true,
            link: '/master/sales/sales/invoicing/',
            items: [
              { text: 'Invoicing Policies', link: '/master/sales/sales/invoicing/invoicing-policies' },
              { text: 'Order to Invoice', link: '/master/sales/sales/invoicing/order-to-invoice' },
              { text: 'Order to Upsell', link: '/master/sales/sales/invoicing/order-to-upsell' },
            ]
          },
          {
            text: 'Products and Prices',
            collapsed: true,
            link: '/master/sales/sales/products-prices/',
            items: [
              { text: 'Manage Products', link: '/master/sales/sales/products-prices/manage-products' },
              { text: 'Product Variants', link: '/master/sales/sales/products-prices/product-variants' },
              { text: 'Price Lists', link: '/master/sales/sales/products-prices/price-lists' },
              { text: 'Discounts and Margins', link: '/master/sales/sales/products-prices/discounts-margins' },
              { text: 'Sell in Other Currencies', link: '/master/sales/sales/products-prices/sell-in-other-currencies' },
            ]
          },
          {
            text: 'Configuration',
            collapsed: true,
            link: '/master/sales/sales/configuration/',
            items: [
              { text: 'Settings', link: '/master/sales/sales/configuration/settings' },
              { text: 'Product Categories', link: '/master/sales/sales/configuration/product-categories' },
              { text: 'Product Attributes', link: '/master/sales/sales/configuration/product-attributes' },
              { text: 'Packagings', link: '/master/sales/sales/configuration/packagings' },
              { text: 'Tags', link: '/master/sales/sales/configuration/tags' },
              { text: 'UOM Categories', link: '/master/sales/sales/configuration/uom-categories' },
            ]
          },
        ]
      },
      {
        text: 'Point of Sale',
        collapsed: true,
        link: '/master/sales/point-of-sale/',
        items: [
          {
            text: 'Get Started',
            collapsed: true,
            link: '/master/sales/point-of-sale/get-started/',
            items: [
              { text: 'POS Overview', link: '/master/sales/point-of-sale/get-started/pos-overview' },
              { text: 'Set Up a Register', link: '/master/sales/point-of-sale/get-started/set-up-a-register' },
              { text: 'POS Settings', link: '/master/sales/point-of-sale/get-started/pos-settings' },
            ]
          },
          {
            text: 'Sessions',
            collapsed: true,
            link: '/master/sales/point-of-sale/sessions/',
            items: [
              { text: 'Open a Register', link: '/master/sales/point-of-sale/sessions/open-register' },
              { text: 'Cash In and Out', link: '/master/sales/point-of-sale/sessions/cash-in-and-out' },
              { text: 'Close a Session', link: '/master/sales/point-of-sale/sessions/close-session' },
            ]
          },
          {
            text: 'Selling',
            collapsed: true,
            link: '/master/sales/point-of-sale/selling/',
            items: [
              { text: 'Terminal Overview', link: '/master/sales/point-of-sale/selling/terminal-overview' },
              { text: 'Take an Order', link: '/master/sales/point-of-sale/selling/take-an-order' },
              { text: 'Notes and Customers', link: '/master/sales/point-of-sale/selling/order-notes-and-customers' },
              { text: 'Restaurant Tables', link: '/master/sales/point-of-sale/selling/restaurant-tables' },
              { text: 'Pay and Receipt', link: '/master/sales/point-of-sale/selling/pay-and-receipt' },
              { text: 'Refunds', link: '/master/sales/point-of-sale/selling/refunds' },
              { text: 'Invoice a POS Order', link: '/master/sales/point-of-sale/selling/invoice-a-pos-order' },
            ]
          },
          {
            text: 'Orders and Payments',
            collapsed: true,
            link: '/master/sales/point-of-sale/orders-payments/',
            items: [
              { text: 'Orders', link: '/master/sales/point-of-sale/orders-payments/orders' },
              { text: 'Payments', link: '/master/sales/point-of-sale/orders-payments/payments' },
              { text: 'Customers', link: '/master/sales/point-of-sale/orders-payments/customers' },
            ]
          },
          {
            text: 'Products and Pricing',
            collapsed: true,
            link: '/master/sales/point-of-sale/products-pricing/',
            items: [
              { text: 'Products', link: '/master/sales/point-of-sale/products-pricing/products' },
              { text: 'Categories and Attributes', link: '/master/sales/point-of-sale/products-pricing/categories-and-attributes' },
              { text: 'Pricing and Taxes', link: '/master/sales/point-of-sale/products-pricing/pricing-and-taxes' },
            ]
          },
          {
            text: 'Payments Setup',
            collapsed: true,
            link: '/master/sales/point-of-sale/payments-setup/',
            items: [
              { text: 'Payment Methods', link: '/master/sales/point-of-sale/payments-setup/payment-methods' },
              { text: 'Coins and Bills', link: '/master/sales/point-of-sale/payments-setup/coins-and-bills' },
              { text: 'Preparation Printers', link: '/master/sales/point-of-sale/payments-setup/preparation-printers' },
              { text: 'Floors and Notes', link: '/master/sales/point-of-sale/payments-setup/restaurant-floors-and-notes' },
            ]
          },
          {
            text: 'Reporting',
            collapsed: true,
            link: '/master/sales/point-of-sale/reporting/',
            items: [
              { text: 'Dashboard', link: '/master/sales/point-of-sale/reporting/dashboard' },
              { text: 'Orders Report', link: '/master/sales/point-of-sale/reporting/orders-report' },
              { text: 'Sales Details', link: '/master/sales/point-of-sale/reporting/sales-details' },
              { text: 'Session Report', link: '/master/sales/point-of-sale/reporting/session-report' },
            ]
          },
        ]
      },
    ]
  },
  {
    text: 'Supply Chain',
    collapsed: true,
    items: [
      {
        text: 'Purchase',
        collapsed: true,
        items: [
          {
            text: 'Orders',
            collapsed: true,
            items: [
          { text: 'Quotations', link: '/master/supply-chain/purchase/orders/quotations' },
          { text: 'Purchase Orders', link: '/master/supply-chain/purchase/orders/purchase-orders' },
          { text: 'Purchase Agreements', link: '/master/supply-chain/purchase/orders/purchase-agreements' },
          { text: 'Vendors', link: '/master/supply-chain/purchase/orders/vendors' },
            ]
          },
          { text: 'Products', link: '/master/supply-chain/purchase/products' },
          { text: 'Configurations', link: '/master/supply-chain/purchase/configurations' },
          { text: 'Settings', link: '/master/supply-chain/purchase/settings' },
        ]
      },
      {
        text: 'Inventory',
        collapsed: true,
        items: [
          {
            text: 'Operations',
            collapsed: true,
            items: [
          { text: 'Transfers', link: '/master/supply-chain/inventories/operations/transfers' },
          { text: 'Adjustments', link: '/master/supply-chain/inventories/operations/adjustments' },
            ]
          },
          {
            text: 'Products',
            collapsed: true,
            items: [
          { text: 'Products', link: '/master/supply-chain/inventories/products/products' },
          { text: 'Packages', link: '/master/supply-chain/inventories/products/packages' },
          { text: 'Lots/Serial Number', link: '/master/supply-chain/inventories/products/lots-serial-number' },
            ]
          },
          {
            text: 'Configurations',
            collapsed: true,
            items: [
          { text: 'Warehouse Management', link: '/master/supply-chain/inventories/configurations/warehouse-management' },
          { text: 'Products', link: '/master/supply-chain/inventories/configurations/products' },
          { text: 'Delivery', link: '/master/supply-chain/inventories/configurations/delivery' },
            ]
          },
          { text: 'Settings', link: '/master/supply-chain/inventories/settings' },
        ]
      },
      {
        text: 'Manufacturing',
        collapsed: true,
        items: [
          {
            text: 'Operations',
            collapsed: true,
            items: [
          { text: 'Manufacturing Orders', link: '/master/supply-chain/manufacturing/operations/manufacturing-orders' },
          { text: 'Work Orders', link: '/master/supply-chain/manufacturing/operations/work-orders' },
            ]
          },
          {
            text: 'Products',
            collapsed: true,
            items: [
          { text: 'Products', link: '/master/supply-chain/manufacturing/products/products' },
          { text: 'Bills of Materials', link: '/master/supply-chain/manufacturing/products/bills-of-material' },
          { text: 'Lots/Serial Numbers', link: '/master/supply-chain/manufacturing/products/lots' },
            ]
          },
          {
            text: 'Configurations',
            collapsed: true,
            items: [
          { text: 'Work Centers', link: '/master/supply-chain/manufacturing/configurations/work-centers' },
          { text: 'Operations', link: '/master/supply-chain/manufacturing/configurations/operations' },
            ]
          },
          { text: 'Settings', link: '/master/supply-chain/manufacturing/settings' },
        ]
      },
      {
        text: 'Maintenance',
        collapsed: true,
        items: [
          {
            text: 'Operations',
            collapsed: true,
            items: [
          { text: 'Maintenance Requests', link: '/master/supply-chain/maintenance/operations/maintenance-requests' },
          { text: 'Maintenance Calendar', link: '/master/supply-chain/maintenance/operations/calendar' },
            ]
          },
          {
            text: 'Equipment',
            collapsed: true,
            items: [
          { text: 'Equipment', link: '/master/supply-chain/maintenance/equipments/equipments' },
            ]
          },
          {
            text: 'Configurations',
            collapsed: true,
            items: [
          { text: 'Categories', link: '/master/supply-chain/maintenance/configurations/categories' },
          { text: 'Teams', link: '/master/supply-chain/maintenance/configurations/teams' },
          { text: 'Stages', link: '/master/supply-chain/maintenance/configurations/stages' },
            ]
          },
        ]
      },
    ]
  },
  {
    text: 'Human Resources',
    collapsed: true,
    items: [
      {
        text: 'Employees',
        collapsed: true,
        items: [
          { text: 'Employees', link: '/master/human-resources/employees/employees' },
          { text: 'Departments', link: '/master/human-resources/employees/departments' },
          { text: 'Configurations', link: '/master/human-resources/employees/configurations' },
        ]
      },
      {
        text: 'Recruitment',
        collapsed: true,
        items: [
          { text: 'Applications', link: '/master/human-resources/recruitment/applications' },
          { text: 'Configurations', link: '/master/human-resources/recruitment/configuration' },
        ]
      },
      {
        text: 'Time Off',
        collapsed: true,
        items: [
          { text: 'My Time', link: '/master/human-resources/time-off/my-time' },
          { text: 'Overview', link: '/master/human-resources/time-off/overview' },
          { text: 'Management', link: '/master/human-resources/time-off/management' },
          { text: 'Configuration', link: '/master/human-resources/time-off/configuration' },
        ]
      },
    ]
  },
  {
    text: 'Services',
    collapsed: true,
    items: [
      {
        text: 'Project',
        collapsed: true,
        items: [
          { text: 'Projects', link: '/master/services/project/projects' },
          { text: 'Tasks', link: '/master/services/project/tasks' },
          { text: 'Configurations', link: '/master/services/project/configurations' },
          { text: 'Settings', link: '/master/services/project/settings' }
        ]
      },
      {
        text: 'Timesheets',
        collapsed: true,
        items: [
          { text: 'Timesheets', link: '/master/services/timesheets/timesheets' },
        ]
      },
    ]
  },
  {
    text: 'Website',
    collapsed: true,
    items: [
      { text: 'Blog Posts', link: '/master/website/blog-posts' },
      { text: 'Pages', link: '/master/website/pages' },
      { text: 'Customers', link: '/master/website/customers' },
      { text: 'Configuartions', link: '/master/website/configurations' },
      { text: 'Settings', link: '/master/website/settings' },
    ]
  },

]

export default routes
