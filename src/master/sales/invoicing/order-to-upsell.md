# Orders to upsell

The **Orders To Upsell** page lists orders whose invoice status is **Up Selling**. These are orders where the delivered quantity is higher than the ordered quantity. Use the page to find orders that you may want to invoice for extra goods.

> **In simple words:** This page shows orders where you delivered more than the customer ordered.

## Overview

Go to `Sales → To Invoice → Orders To Upsell`.

The page has the same views, columns and filters as [Orders to invoice](order-to-invoice.md):

- **Default**, **My Orders** and **Archived** views.
- **Number**, **Creation Date**, **Customer**, **Sales Person**, **Amount Total** and **Status** columns.

When no order qualifies, the page shows **No Orders To Upsells**.

<!-- TODO-SCREENSHOT: /images1/sales/order_to_upsell_list.png | Sales → To Invoice → Orders To Upsell list (needs sample data, list is empty in the dev app) -->

## When an order appears here

An order is listed when its invoice status becomes **Up Selling**. The app sets this status when:

- The order line uses the **Ordered Quantities** policy.
- The delivered quantity is higher than the ordered quantity.

For example, a customer orders 2 units and you deliver 3.

## What to do next

1. Click the order to open it.
2. Check the **Quantity**, **Delivered** and **Invoiced** columns on the lines.
3. Decide how to handle the extra quantity with your customer.

::: info
You can also see these orders on the **Orders** page of the Sales menu. See [Manage orders](../quotations-orders/manage-orders.md).
:::

## See also

- [Invoicing policies](invoicing-policies.md)
- [Orders to invoice](order-to-invoice.md)
