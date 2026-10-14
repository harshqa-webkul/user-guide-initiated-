const routes = [
  {
    text: 'Getting Started',
    collapsed: false,
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
        link: '/master/supply-chain/purchase/',
        items: [
          {
            text: 'Get Started',
            collapsed: true,
            link: '/master/supply-chain/purchase/get-started/',
            items: [
              { text: 'Purchase Settings', link: '/master/supply-chain/purchase/get-started/purchase-settings' },
              { text: 'First Steps', link: '/master/supply-chain/purchase/get-started/first-steps' },
            ]
          },
          {
            text: 'Products',
            collapsed: true,
            link: '/master/supply-chain/purchase/products/',
            items: [
              { text: 'Configure a Product', link: '/master/supply-chain/purchase/products/configure-product' },
              { text: 'Vendor Price Lists', link: '/master/supply-chain/purchase/products/vendor-price-lists' },
              { text: 'Product Configuration', link: '/master/supply-chain/purchase/products/product-configuration' },
            ]
          },
          {
            text: 'Manage Deals',
            collapsed: true,
            link: '/master/supply-chain/purchase/orders/',
            items: [
              { text: 'Requests for Quotation', link: '/master/supply-chain/purchase/orders/quotations' },
              { text: 'Vendor Portal', link: '/master/supply-chain/purchase/orders/vendor-portal' },
              { text: 'Purchase Orders', link: '/master/supply-chain/purchase/orders/purchase-orders' },
              { text: 'Vendor Bills', link: '/master/supply-chain/purchase/orders/vendor-bills' },
              { text: 'Blanket Orders', link: '/master/supply-chain/purchase/orders/blanket-orders' },
              { text: 'Purchase Templates', link: '/master/supply-chain/purchase/orders/purchase-templates' },
            ]
          },
        ]
      },
      {
        text: 'Inventory',
        collapsed: true,
        link: '/master/supply-chain/inventories/',
        items: [
          {
            text: 'Get Started',
            collapsed: true,
            link: '/master/supply-chain/inventories/get-started/',
            items: [
              { text: 'Inventory Overview', link: '/master/supply-chain/inventories/get-started/inventory-overview' },
              { text: 'Inventory Settings', link: '/master/supply-chain/inventories/get-started/inventory-settings' },
              { text: 'First Steps', link: '/master/supply-chain/inventories/get-started/first-steps' },
            ]
          },
          {
            text: 'Products',
            collapsed: true,
            link: '/master/supply-chain/inventories/products/',
            items: [
              { text: 'Configure a Product', link: '/master/supply-chain/inventories/products/configure-product' },
              { text: 'Product Categories', link: '/master/supply-chain/inventories/products/product-categories' },
              { text: 'Attributes and Packagings', link: '/master/supply-chain/inventories/products/attributes-and-packagings' },
              { text: 'Units of Measure', link: '/master/supply-chain/inventories/products/units-of-measure' },
            ]
          },
          {
            text: 'Tracking',
            collapsed: true,
            link: '/master/supply-chain/inventories/tracking/',
            items: [
              { text: 'Lots and Serial Numbers', link: '/master/supply-chain/inventories/tracking/lots-and-serial-numbers' },
              { text: 'Packages', link: '/master/supply-chain/inventories/tracking/packages' },
            ]
          },
          {
            text: 'Warehouses and Locations',
            collapsed: true,
            link: '/master/supply-chain/inventories/warehouses/',
            items: [
              { text: 'Warehouses', link: '/master/supply-chain/inventories/warehouses/warehouses' },
              { text: 'Locations', link: '/master/supply-chain/inventories/warehouses/locations' },
              { text: 'Operation Types', link: '/master/supply-chain/inventories/warehouses/operation-types' },
              { text: 'Storage Categories', link: '/master/supply-chain/inventories/warehouses/storage-categories' },
            ]
          },
          {
            text: 'Operations',
            collapsed: true,
            link: '/master/supply-chain/inventories/operations/',
            items: [
              { text: 'Receipts', link: '/master/supply-chain/inventories/operations/receipts' },
              { text: 'Deliveries', link: '/master/supply-chain/inventories/operations/deliveries' },
              { text: 'Internal Transfers', link: '/master/supply-chain/inventories/operations/internal-transfers' },
              { text: 'Dropships', link: '/master/supply-chain/inventories/operations/dropships' },
              { text: 'Stock Moves and Lots', link: '/master/supply-chain/inventories/operations/stock-moves-and-lots' },
              { text: 'Backorders and Returns', link: '/master/supply-chain/inventories/operations/backorders-and-returns' },
              { text: 'Print Documents', link: '/master/supply-chain/inventories/operations/print-documents' },
            ]
          },
          {
            text: 'Adjustments',
            collapsed: true,
            link: '/master/supply-chain/inventories/adjustments/',
            items: [
              { text: 'Inventory Adjustments', link: '/master/supply-chain/inventories/adjustments/inventory-adjustments' },
              { text: 'Scrap', link: '/master/supply-chain/inventories/adjustments/scrap' },
            ]
          },
          {
            text: 'Routes and Rules',
            collapsed: true,
            link: '/master/supply-chain/inventories/routes/',
            items: [
              { text: 'One-Step Flow', link: '/master/supply-chain/inventories/routes/one-step-flow' },
              { text: 'Two-Step Flow', link: '/master/supply-chain/inventories/routes/two-step-flow' },
              { text: 'Three-Step Flow', link: '/master/supply-chain/inventories/routes/three-step-flow' },
              { text: 'Routes and Rules', link: '/master/supply-chain/inventories/routes/routes-and-rules' },
              { text: 'Putaway Rules', link: '/master/supply-chain/inventories/routes/putaway-rules' },
            ]
          },
          {
            text: 'Reporting',
            collapsed: true,
            link: '/master/supply-chain/inventories/reporting/',
            items: [
              { text: 'Moves History', link: '/master/supply-chain/inventories/reporting/moves-history' },
              { text: 'Stock Report', link: '/master/supply-chain/inventories/reporting/stock-report' },
            ]
          },
          {
            text: 'Barcode',
            collapsed: true,
            link: '/master/supply-chain/inventories/barcode/',
            items: [
              { text: 'Scan Operations', link: '/master/supply-chain/inventories/barcode/scan-operations' },
              { text: 'Scan Adjustments', link: '/master/supply-chain/inventories/barcode/scan-adjustments' },
            ]
          },
        ]
      },
      {
        text: 'Manufacturing',
        collapsed: true,
        link: '/master/supply-chain/manufacturing/',
        items: [
          {
            text: 'Get Started',
            collapsed: true,
            link: '/master/supply-chain/manufacturing/get-started/',
            items: [
              { text: 'Manufacturing Settings', link: '/master/supply-chain/manufacturing/get-started/manufacturing-settings' },
              { text: 'First Steps', link: '/master/supply-chain/manufacturing/get-started/first-steps' },
            ]
          },
          {
            text: 'Basic Setup',
            collapsed: true,
            link: '/master/supply-chain/manufacturing/basic-setup/',
            items: [
              { text: 'Configure a Product', link: '/master/supply-chain/manufacturing/basic-setup/configure-product' },
              { text: 'Bills of Materials', link: '/master/supply-chain/manufacturing/basic-setup/bill-of-materials' },
              { text: 'One-Step Manufacturing', link: '/master/supply-chain/manufacturing/basic-setup/one-step-manufacturing' },
              { text: 'Two-Step Manufacturing', link: '/master/supply-chain/manufacturing/basic-setup/two-step-manufacturing' },
              { text: 'Three-Step Manufacturing', link: '/master/supply-chain/manufacturing/basic-setup/three-step-manufacturing' },
              { text: 'Manufacturing Order Costs', link: '/master/supply-chain/manufacturing/basic-setup/manufacturing-order-costs' },
            ]
          },
          {
            text: 'Advanced Configuration',
            collapsed: true,
            link: '/master/supply-chain/manufacturing/advanced-configuration/',
            items: [
              { text: 'Work Centers', link: '/master/supply-chain/manufacturing/advanced-configuration/work-centers' },
              { text: 'Operations', link: '/master/supply-chain/manufacturing/advanced-configuration/operations' },
              { text: 'Work Order Dependencies', link: '/master/supply-chain/manufacturing/advanced-configuration/work-order-dependencies' },
              { text: 'BoMs for Product Variants', link: '/master/supply-chain/manufacturing/advanced-configuration/bom-variants' },
            ]
          },
          {
            text: 'Workflows',
            collapsed: true,
            link: '/master/supply-chain/manufacturing/workflows/',
            items: [
              { text: 'Manufacturing Orders', link: '/master/supply-chain/manufacturing/workflows/manufacturing-orders' },
              { text: 'Plan and Schedule', link: '/master/supply-chain/manufacturing/workflows/plan-and-schedule' },
              { text: 'Work Orders', link: '/master/supply-chain/manufacturing/workflows/work-orders' },
              { text: 'Produce and Consume', link: '/master/supply-chain/manufacturing/workflows/produce-and-consume' },
              { text: 'Lots and Serial Numbers', link: '/master/supply-chain/manufacturing/workflows/lots-and-serial-numbers' },
            ]
          },
        ]
      },
      {
        text: 'Maintenance',
        collapsed: true,
        link: '/master/supply-chain/maintenance/',
        items: [
          {
            text: 'Get Started',
            collapsed: true,
            link: '/master/supply-chain/maintenance/get-started/',
            items: [
              { text: 'First Steps', link: '/master/supply-chain/maintenance/get-started/first-steps' },
            ]
          },
          {
            text: 'Setup',
            collapsed: true,
            link: '/master/supply-chain/maintenance/setup/',
            items: [
              { text: 'Maintenance Teams', link: '/master/supply-chain/maintenance/setup/maintenance-teams' },
              { text: 'Equipment Categories', link: '/master/supply-chain/maintenance/setup/equipment-categories' },
              { text: 'Stages', link: '/master/supply-chain/maintenance/setup/stages' },
            ]
          },
          {
            text: 'Equipment',
            collapsed: true,
            link: '/master/supply-chain/maintenance/equipment/',
            items: [
              { text: 'Add Equipment', link: '/master/supply-chain/maintenance/equipment/add-equipment' },
              { text: 'Manage Equipment', link: '/master/supply-chain/maintenance/equipment/manage-equipment' },
            ]
          },
          {
            text: 'Maintenance Requests',
            collapsed: true,
            link: '/master/supply-chain/maintenance/requests/',
            items: [
              { text: 'Create a Request', link: '/master/supply-chain/maintenance/requests/create-request' },
              { text: 'Process a Request', link: '/master/supply-chain/maintenance/requests/process-request' },
              { text: 'Preventive Maintenance', link: '/master/supply-chain/maintenance/requests/preventive-maintenance' },
              { text: 'Request List', link: '/master/supply-chain/maintenance/requests/request-list' },
            ]
          },
          {
            text: 'Calendar',
            collapsed: true,
            items: [
              { text: 'Maintenance Calendar', link: '/master/supply-chain/maintenance/calendar/maintenance-calendar' },
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
        link: '/master/human-resources/employees/',
        items: [
          {
            text: 'Get Started',
            collapsed: true,
            link: '/master/human-resources/employees/get-started/',
            items: [
              { text: 'First Steps', link: '/master/human-resources/employees/get-started/first-steps' },
            ]
          },
          { text: 'Departments', link: '/master/human-resources/employees/departments/departments' },
          {
            text: 'Setup',
            collapsed: true,
            link: '/master/human-resources/employees/setup/',
            items: [
              { text: 'Job Positions', link: '/master/human-resources/employees/setup/job-positions' },
              { text: 'Employment Types', link: '/master/human-resources/employees/setup/employment-types' },
              { text: 'Work Locations', link: '/master/human-resources/employees/setup/work-locations' },
              { text: 'Tags', link: '/master/human-resources/employees/setup/tags' },
              { text: 'Departure Reasons', link: '/master/human-resources/employees/setup/departure-reasons' },
              { text: 'Skill Types', link: '/master/human-resources/employees/setup/skill-types' },
              { text: 'Activity Plans', link: '/master/human-resources/employees/setup/activity-plans' },
            ]
          },
          {
            text: 'Employees',
            collapsed: true,
            link: '/master/human-resources/employees/employees/',
            items: [
              { text: 'Add an Employee', link: '/master/human-resources/employees/employees/add-employee' },
              { text: 'Employee Profile', link: '/master/human-resources/employees/employees/employee-profile' },
              { text: 'Employee List', link: '/master/human-resources/employees/employees/employee-list' },
              { text: 'Skills and Resume', link: '/master/human-resources/employees/employees/skills-and-resume' },
              { text: 'Leaving the Company', link: '/master/human-resources/employees/employees/leaving-the-company' },
            ]
          },
          {
            text: 'Reporting',
            collapsed: true,
            items: [
              { text: 'Skills Report', link: '/master/human-resources/employees/reporting/skills-report' },
            ]
          },
        ]
      },
      {
        text: 'Recruitment',
        collapsed: true,
        link: '/master/human-resources/recruitment/',
        items: [
          {
            text: 'Get started',
            collapsed: true,
            link: '/master/human-resources/recruitment/get-started/',
            items: [
              { text: 'First steps', link: '/master/human-resources/recruitment/get-started/first-steps' }
            ]
          },
          { text: 'Recruitment dashboard', link: '/master/human-resources/recruitment/dashboard/recruitment-dashboard' },
          { text: 'Job positions', link: '/master/human-resources/recruitment/job-positions/job-positions' },
          {
            text: 'Applicants',
            collapsed: true,
            link: '/master/human-resources/recruitment/applicants/',
            items: [
              { text: 'Candidates', link: '/master/human-resources/recruitment/applicants/candidates' },
              { text: 'Add an applicant', link: '/master/human-resources/recruitment/applicants/add-applicant' },
              { text: 'Process an applicant', link: '/master/human-resources/recruitment/applicants/process-applicant' },
              { text: 'Refuse and reopen', link: '/master/human-resources/recruitment/applicants/refuse-and-reopen' },
              { text: 'Applicant list', link: '/master/human-resources/recruitment/applicants/applicant-list' }
            ]
          },
          {
            text: 'Setup',
            collapsed: true,
            link: '/master/human-resources/recruitment/setup/',
            items: [
              { text: 'Stages', link: '/master/human-resources/recruitment/setup/stages' },
              { text: 'Refuse reasons', link: '/master/human-resources/recruitment/setup/refuse-reasons' },
              { text: 'Tags and degrees', link: '/master/human-resources/recruitment/setup/tags-degrees' },
              { text: 'Sources and mediums', link: '/master/human-resources/recruitment/setup/sources-and-mediums' }
            ]
          },
        ]
      },
      {
        text: 'Time Off',
        collapsed: true,
        link: '/master/human-resources/time-off/',
        items: [
          {
            text: 'Get Started',
            collapsed: true,
            link: '/master/human-resources/time-off/get-started/',
            items: [
              { text: 'First Steps', link: '/master/human-resources/time-off/get-started/first-steps' },
            ]
          },
          {
            text: 'Setup',
            collapsed: true,
            link: '/master/human-resources/time-off/setup/',
            items: [
              { text: 'Leave Types', link: '/master/human-resources/time-off/setup/time-off-types' },
              { text: 'Public Holidays', link: '/master/human-resources/time-off/setup/public-holidays' },
              { text: 'Mandatory Days', link: '/master/human-resources/time-off/setup/mandatory-days' },
            ]
          },
          {
            text: 'Allocations',
            collapsed: true,
            link: '/master/human-resources/time-off/allocations/',
            items: [
              { text: 'My Allocation', link: '/master/human-resources/time-off/allocations/my-allocation' },
              { text: 'Manage Allocations', link: '/master/human-resources/time-off/allocations/manage-allocations' },
            ]
          },
          {
            text: 'Requests',
            collapsed: true,
            link: '/master/human-resources/time-off/requests/',
            items: [
              { text: 'Request Time Off', link: '/master/human-resources/time-off/requests/request-time-off' },
              { text: 'My Time', link: '/master/human-resources/time-off/requests/my-time' },
              { text: 'Manage Requests', link: '/master/human-resources/time-off/requests/manage-requests' },
              { text: 'Overview Calendar', link: '/master/human-resources/time-off/requests/overview-calendar' },
            ]
          },
          {
            text: 'Reporting',
            collapsed: true,
            items: [
              { text: 'By Employees', link: '/master/human-resources/time-off/reporting/by-employees' },
            ]
          },
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
        link: '/master/services/project/',
        items: [
          {
            text: 'Get Started',
            collapsed: true,
            link: '/master/services/project/get-started/',
            items: [
              { text: 'Project Settings', link: '/master/services/project/get-started/project-settings' }
            ]
          },
          {
            text: 'Project Management',
            collapsed: true,
            link: '/master/services/project/project-management/',
            items: [
              { text: 'Create a Project', link: '/master/services/project/project-management/create-project' },
              { text: 'Project Stages and Milestones', link: '/master/services/project/project-management/project-stages-and-milestones' },
              { text: 'Project Dashboard', link: '/master/services/project/project-management/project-dashboard' }
            ]
          },
          {
            text: 'Task Management',
            collapsed: true,
            link: '/master/services/project/task-management/',
            items: [
              { text: 'Create a Task', link: '/master/services/project/task-management/create-task' },
              { text: 'Task Stages and States', link: '/master/services/project/task-management/task-stages-and-states' },
              { text: 'Task Views and Filters', link: '/master/services/project/task-management/task-list-views-and-filters' },
              { text: 'Sub Tasks', link: '/master/services/project/task-management/sub-tasks' }
            ]
          },
          {
            text: 'Configuration',
            collapsed: true,
            link: '/master/services/project/configuration/',
            items: [
              { text: 'Tags', link: '/master/services/project/configuration/tags' },
              { text: 'Activity Plans', link: '/master/services/project/configuration/activity-plans' }
            ]
          }
        ]
      },
      {
        text: 'Timesheets',
        collapsed: true,
        link: '/master/services/timesheets/',
        items: [
          { text: 'Timesheet Settings', link: '/master/services/timesheets/timesheet-settings' },
          { text: 'Log Time', link: '/master/services/timesheets/log-time' },
          { text: 'Timesheet List and Filters', link: '/master/services/timesheets/timesheet-list-and-filters' }
        ]
      },
    ]
  },
  {
    text: 'Website',
    collapsed: true,
    link: '/master/website/',
    items: [
      {
        text: 'Get Started',
        collapsed: true,
        link: '/master/website/get-started/',
        items: [
          { text: 'Website Overview', link: '/master/website/get-started/website-overview' },
          { text: 'First Steps', link: '/master/website/get-started/first-steps' },
        ]
      },
      {
        text: 'Pages',
        collapsed: true,
        link: '/master/website/pages/',
        items: [
          { text: 'Create a Page', link: '/master/website/pages/create-a-page' },
          { text: 'Publish and Draft', link: '/master/website/pages/publish-and-draft' },
        ]
      },
      {
        text: 'Blog',
        collapsed: true,
        link: '/master/website/blog/',
        items: [
          { text: 'Blog Posts', link: '/master/website/blog/blog-posts' },
          { text: 'Categories and Tags', link: '/master/website/blog/categories-and-tags' },
        ]
      },
      {
        text: 'Customers',
        collapsed: true,
        link: '/master/website/customers/',
        items: [
          { text: 'Customers', link: '/master/website/customers/customers' },
          { text: 'Portal and Sign In', link: '/master/website/customers/portal-and-sign-in' },
        ]
      },
      {
        text: 'Settings',
        collapsed: true,
        link: '/master/website/settings/',
        items: [
          { text: 'Manage Contacts', link: '/master/website/settings/manage-contacts' },
        ]
      },
    ]
  },

]

export default routes
