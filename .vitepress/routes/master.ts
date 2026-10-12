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
    items: [
      {
        text: 'Invoices',
        collapsed: true,
        link: '/master/finance/invoices/',
        items: [
          {
            text: 'Customers',
            collapsed: true,
            link: '/master/finance/invoices/customers/',
            items: [
          { text: 'Manage Customers', link: '/master/finance/invoices/customers/manage-customers' },
          { text: 'Create an Invoice', link: '/master/finance/invoices/customers/create-invoice' },
          { text: 'Create a Credit Note', link: '/master/finance/invoices/customers/create-credit-note' },
          { text: 'Register a Payment', link: '/master/finance/invoices/customers/register-payment' },
            ]
          },
          {
            text: 'Vendors',
            collapsed: true,
            link: '/master/finance/invoices/vendors/',
            items: [
          { text: 'Manage Vendors', link: '/master/finance/invoices/vendors/manage-vendors' },
          { text: 'Create a Bill', link: '/master/finance/invoices/vendors/create-bill' },
          { text: 'Create a Refund', link: '/master/finance/invoices/vendors/create-refund' },
          { text: 'Register a Payment', link: '/master/finance/invoices/vendors/register-payment' },
            ]
          },
          {
            text: 'Products',
            collapsed: true,
            link: '/master/finance/invoices/products/',
            items: [
          { text: 'Manage Products', link: '/master/finance/invoices/products/manage-products' },
            ]
          },
          {
            text: 'Configuration',
            collapsed: true,
            link: '/master/finance/invoices/configuration/',
            items: [
          { text: 'Settings', link: '/master/finance/invoices/configuration/settings' },
          { text: 'Bank Accounts', link: '/master/finance/invoices/configuration/bank-accounts' },
          { text: 'Payment Terms', link: '/master/finance/invoices/configuration/payment-terms' },
          { text: 'Incoterms', link: '/master/finance/invoices/configuration/incoterms' },
          { text: 'Taxes', link: '/master/finance/invoices/configuration/taxes' },
          { text: 'Product Categories', link: '/master/finance/invoices/configuration/product-categories' },
          { text: 'Product Attributes', link: '/master/finance/invoices/configuration/product-attributes' },
            ]
          },
        ]
      },
    ]
  },
  {
    text: 'Sales',
    collapsed: true,
    link: '/master/sales/',
    items: [
      {
        text: 'Quotations and Orders',
        collapsed: true,
        link: '/master/sales/quotations-orders/',
        items: [
          { text: 'Create a Quotation', link: '/master/sales/quotations-orders/create-quotation' },
          { text: 'Optional Products', link: '/master/sales/quotations-orders/optional-products' },
          { text: 'Send and Confirm a Quotation', link: '/master/sales/quotations-orders/send-and-confirm-quotation' },
          { text: 'Manage Orders', link: '/master/sales/quotations-orders/manage-orders' },
          { text: 'Manage Customers', link: '/master/sales/quotations-orders/manage-customers' },
        ]
      },
      {
        text: 'Invoicing',
        collapsed: true,
        link: '/master/sales/invoicing/',
        items: [
          { text: 'Invoicing Policies', link: '/master/sales/invoicing/invoicing-policies' },
          { text: 'Order to Invoice', link: '/master/sales/invoicing/order-to-invoice' },
          { text: 'Order to Upsell', link: '/master/sales/invoicing/order-to-upsell' },
        ]
      },
      {
        text: 'Products and Prices',
        collapsed: true,
        link: '/master/sales/products-prices/',
        items: [
          { text: 'Manage Products', link: '/master/sales/products-prices/manage-products' },
          { text: 'Product Variants', link: '/master/sales/products-prices/product-variants' },
          { text: 'Price Lists', link: '/master/sales/products-prices/price-lists' },
          { text: 'Discounts and Margins', link: '/master/sales/products-prices/discounts-margins' },
          { text: 'Sell in Other Currencies', link: '/master/sales/products-prices/sell-in-other-currencies' },
        ]
      },
      {
        text: 'Configuration',
        collapsed: true,
        link: '/master/sales/configuration/',
        items: [
          { text: 'Settings', link: '/master/sales/configuration/settings' },
          { text: 'Product Categories', link: '/master/sales/configuration/product-categories' },
          { text: 'Product Attributes', link: '/master/sales/configuration/product-attributes' },
          { text: 'Packagings', link: '/master/sales/configuration/packagings' },
          { text: 'Tags', link: '/master/sales/configuration/tags' },
          { text: 'UOM Categories', link: '/master/sales/configuration/uom-categories' },
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
