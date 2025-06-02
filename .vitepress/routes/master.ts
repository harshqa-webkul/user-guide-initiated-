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
          { text: 'Transfers', link: '/master/inventory/operations/transfers' },
          { text: 'Adjustments', link: '/master/inventory/operations/adjustments' },
        ]
      },
      {
        text: 'Products',
        collapsed: true,
        items: [
          { text: 'Products', link: '/master/inventory/products/products' },
          { text: 'Packages', link: '/master/inventory/products/packages' },
          { text: 'Lots/Serial Number', link: '/master/inventory/products/lots-serial-number' },
        ]
      },
      {
        text: 'Configurations',
        collapsed: true,
        items: [
          { text: 'Warehouse Management', link: '/master/inventory/configurations/warehouse-management' },
          { text: 'Products', link: '/master/inventory/configurations/products' },
          { text: 'Delivery', link: '/master/inventory/configurations/delivery' },
        ]
      },
      { text: 'Settings', link: '/master/inventory/settings' },
    ]
  },
  {
    text: 'Contacts',
    collapsed: false,
    items: [
      { text: 'Introduction', link: '/master/contacts/introduction' },
      { text: 'Upgrade Guide', link: '/master/prologue/upgrade-guide' },
      {
        text: 'Contribution Guide',
        link: '/master/prologue/contribution-guide'
      }
    ]
  },
  {
    text: 'Project',
    collapsed: false,
    items: [
      { text: 'Introduction', link: '/master/projects/introduction' },
      { text: 'Upgrade Guide', link: '/master/prologue/upgrade-guide' },
      {
        text: 'Contribution Guide',
        link: '/master/prologue/contribution-guide'
      }
    ]
  },
  {
    text: 'Website',
    collapsed: false,
    items: [
      { text: 'Introduction', link: '/master/websites/introduction' },
      { text: 'Upgrade Guide', link: '/master/prologue/upgrade-guide' },
      {
        text: 'Contribution Guide',
        link: '/master/prologue/contribution-guide'
      }
    ]
  },
  {
    text: 'Employees',
    collapsed: false,
    items: [
      { text: 'Introduction', link: '/master/employees/introduction' },
      { text: 'Upgrade Guide', link: '/master/prologue/upgrade-guide' },
      {
        text: 'Contribution Guide',
        link: '/master/prologue/contribution-guide'
      }
    ]
  },
  {
    text: 'Recruitments',
    collapsed: false,
    items: [
      { text: 'Introduction', link: '/master/recruitment/introduction' },
      { text: 'Upgrade Guide', link: '/master/prologue/upgrade-guide' },
      {
        text: 'Contribution Guide',
        link: '/master/prologue/contribution-guide'
      }
    ]
  },
  {
    text: 'Time Off',
    collapsed: false,
    items: [
      { text: 'Introduction', link: '/master/time-off/introduction' },
      { text: 'Upgrade Guide', link: '/master/prologue/upgrade-guide' },
      {
        text: 'Contribution Guide',
        link: '/master/prologue/contribution-guide'
      }
    ]
  },
]

export default routes
