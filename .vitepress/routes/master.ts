const routes = [
  {
    text: 'Invoices',
    collapsed: false,
    items: [
      {
        text: 'Customers',
        collapsed: true,
        items: [
          { text: 'Products', link: '/master/invoice/customers/products' },
          { text: 'Customers', link: '/master/invoice/customers/customers' },
          { text: 'Invoices', link: '/master/invoice/customers/invoices' },
          { text: 'Credit Notes', link: '/master/invoice/customers/credit-notes' },
          { text: 'Payments', link: '/master/invoice/customers/payments' },
        ]
      },
      {
        text: 'Vendors',
        collapsed: true,
        items: [
          { text: 'Products', link: '/master/invoice/vendors/products' },
          { text: 'Vendors', link: '/master/invoice/vendors/vendors' },
          { text: 'Bills', link: '/master/invoice/vendors/bills' },
          { text: 'Refunds', link: '/master/invoice/vendors/refunds' },
          { text: 'Payments', link: '/master/invoice/vendors/payments' },
        ]
      },
      { text: 'Configurations', link: '/master/invoice/configurations' },
      { text: 'Settings', link: '/master/invoice/settings' },
    ]
  },
  {
    text: 'Sales',
    collapsed: false,
    items: [
      {
        text: 'Orders',
        collapsed: true,
        items: [
          { text: 'Quotations', link: '/master/sales/orders/quotations' },
          { text: 'Orders', link: '/master/sales/orders/orders' },
          { text: 'Customers', link: '/master/sales/orders/customers' },
        ]
      },
      { text: 'To Invoice', link: '/master/sales/toInvoice' },
      { text: 'Products', link: '/master/sales/products' },
      { text: 'Configurations', link: '/master/sales/configurations' },
      { text: 'Settings', link: '/master/sales/settings' },
    ]
  },
  {
    text: 'Purchase',
    collapsed: false,
    items: [
      {
        text: 'Orders',
        collapsed: true,
        items: [
          { text: 'Quotations', link: '/master/purchase/orders/quotations' },
          { text: 'Purchase Orders', link: '/master/purchase/orders/purchase-orders' },
          { text: 'Purchase Agreements', link: '/master/purchase/orders/purchase-agreements' },
          { text: 'Vendors', link: '/master/purchase/orders/vendors' },
        ]
      },
      { text: 'Products', link: '/master/purchase/products' },
      { text: 'Configurations', link: '/master/purchase/configurations' },
      { text: 'Settings', link: '/master/purchase/settings' },
    ]
  },
  {
    text: 'Inventory',
    collapsed: false,
    items: [
      {
        text: 'Operations',
        collapsed: true,
        items: [
          { text: 'Transfers', link: '/master/inventories/operations/transfers' },
          { text: 'Adjustments', link: '/master/inventories/operations/adjustments' },
        ]
      },
      {
        text: 'Products',
        collapsed: true,
        items: [
          { text: 'Products', link: '/master/inventories/products/products' },
          { text: 'Packages', link: '/master/inventories/products/packages' },
          { text: 'Lots/Serial Number', link: '/master/inventories/products/lots-serial-number' },
        ]
      },
      {
        text: 'Configurations',
        collapsed: true,
        items: [
          { text: 'Warehouse Management', link: '/master/inventories/configurations/warehouse-management' },
          { text: 'Products', link: '/master/inventories/configurations/products' },
          { text: 'Delivery', link: '/master/inventories/configurations/delivery' },
        ]
      },
      { text: 'Settings', link: '/master/inventories/settings' },
    ]
  },
  {
    text: 'Manufacturing',
    collapsed: false,
    items: [
      {
        text: 'Operations',
        collapsed: true,
        items: [
          { text: 'Manufacturing Orders', link: '/master/manufacturing/operations/manufacturing-orders' },
          { text: 'Work Orders', link: '/master/manufacturing/operations/work-orders' },
        ]
      },
      {
        text: 'Products',
        collapsed: true,
        items: [
          { text: 'Products', link: '/master/manufacturing/products/products' },
          { text: 'Bills of Materials', link: '/master/manufacturing/products/bills-of-material' },
          { text: 'Lots/Serial Numbers', link: '/master/manufacturing/products/lots' },
        ]
      },
      {
        text: 'Configurations',
        collapsed: true,
        items: [
          { text: 'Work Centers', link: '/master/manufacturing/configurations/work-centers' },
          { text: 'Operations', link: '/master/manufacturing/configurations/operations' },
        ]
      },
      { text: 'Settings', link: '/master/manufacturing/settings' },
    ]
  },
  {
    text: 'Contacts',
    collapsed: false,
    items: [
      { text: 'Contacts', link: '/master/contact/contacts' },
      { text: 'Configurations', link: '/master/contact/configurations' },
    ]
  },
  {
    text: 'Project',
    collapsed: false,
    items: [
      { text: 'Projects', link: '/master/project/projects' },
      { text: 'Tasks', link: '/master/project/tasks' },
      { text: 'Configurations', link: '/master/project/configurations' },
      { text: 'Settings', link: '/master/project/settings' }
    ]
  },
  {
    text: 'Website',
    collapsed: false,
    items: [
      { text: 'Blog Posts', link: '/master/website/blog-posts' },
      { text: 'Pages', link: '/master/website/pages' },
      { text: 'Customers', link: '/master/website/customers' },
      { text: 'Configuartions', link: '/master/website/configurations' },
      { text: 'Settings', link: '/master/website/settings' },
    ]
  },
  {
    text: 'Employees',
    collapsed: false,
    items: [
      { text: 'Employees', link: '/master/employees/employees' },
      { text: 'Departments', link: '/master/employees/departments' },
      { text: 'Configurations', link: '/master/employees/configurations' },
    ]
  },
  {
    text: 'Recruitments',
    collapsed: false,
    items: [
      { text: 'Applications', link: '/master/recruitment/applications' },
      { text: 'Configurations', link: '/master/recruitment/configuration' },
    ]
  },
  {
    text: 'Time Off',
    collapsed: false,
    items: [
      { text: 'My Time', link: '/master/timeOff/my-time' },
      { text: 'Overview', link: '/master/timeOff/overview' },
      { text: 'Management', link: '/master/timeOff/management' },
      { text: 'Configuration', link: '/master/timeOff/configuration' },
    ]
  },
]

export default routes
