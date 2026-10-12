# Orders to invoice

The **Orders To Invoice** page lists the confirmed sales orders that are ready to be invoiced. Use it as your invoicing worklist. You open an order from it and create the customer invoice.

> **In simple words:** This page shows every order that is waiting for an invoice.

## Overview

Go to `Sales → To Invoice → Orders To Invoice`.

The list has these views:

- **Default:** All orders ready to invoice.
- **My Orders:** Only your orders.
- **Archived:** Archived orders.

The list shows these columns:

- **Number:** The order number, for example `SO/3`.
- **Creation Date:** The date the order was created.
- **Customer:** The customer on the order.
- **Sales Person:** The person who owns the order.
- **Amount Total:** The order total.
- **Status:** The order status. Orders in this list show **Sales Order**.

A summary row at the bottom shows the **Total Amount** of the listed orders.

<ImagePopup src="/images1/sales/order_to_invoice_list.png" alt="Sales → To Invoice → Orders To Invoice list with the Default, My Orders and Archived views" />

You can search, group and filter the list. Use **Group by** for **Medium**, **Source**, **Team**, **Sales Person**, **Currency**, **Company**, **Customer**, **Quotation Date** or **Commitment Date**. For more help, see [Search, filter and group](../../getting-started/search-filter-group.md).

::: info
An order appears here when its invoice status is **To Invoice**. The invoice policy sets when that happens. See [Invoicing policies](invoicing-policies.md).
:::

## Create an invoice from an order

1. Go to `Sales → To Invoice → Orders To Invoice`.
2. Click the order you want to invoice.
3. Check the **Order Line** table. The **Delivered** and **Invoiced** columns show how much is delivered and already invoiced.

   <ImagePopup src="/images1/sales/order_view_lines.png" alt="Order view with the Order Line table showing Quantity, Delivered and Invoiced columns" />

4. Click **Create Invoice** at the top of the page.
5. In the **Create Invoice** window, keep **Regular invoice** selected.
6. Click **Submit**.

   <ImagePopup src="/images1/sales/create_invoice_window.png" alt="Create Invoice window with the Regular invoice option and the Submit and Cancel buttons" />

The app shows the message **Invoice created**.

## Actions and statuses

- **Create Invoice:** Creates a customer invoice for the quantities that are ready to invoice.
- **Submit:** Confirms the window and creates the invoice.
- **Cancel:** Closes the window without creating an invoice.

After you create the invoice, the **Invoiced** column on the order lines shows the invoiced quantity. Open the **Invoices** tab on the order to see the invoice.

::: warning
If no line is ready to invoice, the app shows **No invoiceable lines**. Check that the goods are delivered when the policy is **Delivered Quantities**.
:::

## See also

- [Invoicing policies](invoicing-policies.md)
- [Orders to upsell](order-to-upsell.md)
- [Manage orders](../quotations-orders/manage-orders.md)
