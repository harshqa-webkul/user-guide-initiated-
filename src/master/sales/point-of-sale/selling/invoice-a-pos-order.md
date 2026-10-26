# Invoice a POS order

Most till sales need only a receipt. Some customers, such as businesses, need a proper invoice for their records. You can create a customer invoice from a POS order, either while paying or later from the **Orders** page.

> **In simple words:** Tick Invoice when you pay, or click Invoice on the order afterwards. Aureus creates the invoice for the customer.

An invoice needs a customer on the order. Add one first. See [Notes and customers](order-notes-and-customers.md).

## Invoice while paying

1. Add the customer to the order.
2. Click **Payment**.
3. Choose the method and enter the amount.
4. Tick the **Invoice** checkbox.

<ImagePopup src="/images1/pos/payment_invoice_checkbox.png" alt="Payment screen with customer Sofia Rossi, Cash 7,000 and the Invoice checkbox ticked" />

5. Click **Validate**.

If there is no customer, the terminal shows "Customer required" and asks you to select one before validating.

## Invoice later from the Orders page

1. Click your initials, then **Orders**.
2. Click the paid order, for example **TNE/00001** for Sofia Rossi.
3. Click **Invoice**.

<ImagePopup src="/images1/pos/invoice_button_orders.png" alt="Terminal Orders page with order TNE/00001 selected and the Invoice button under the lines" />

4. In the window "Create an invoice for this order?", click **Confirm**.

<ImagePopup src="/images1/pos/invoice_confirm_window.png" alt="Window titled Create an invoice for this order with Cancel and Confirm buttons" />

A notice says **Invoice created**. The order status changes to **Invoiced** and the **Invoice** button turns grey.

<ImagePopup src="/images1/pos/invoice_created_status.png" alt="Terminal Orders page with an order showing the status Invoiced and a Print invoice button" />

## Find the invoice

The invoice is a normal customer invoice. Go to `Invoices → Customers → Invoices` or `Accounting → Customers → Invoices`. For TechNest the invoice is **INV/2026/00004**, status **Posted**, customer **Sofia Rossi**, amount 6,597.

<ImagePopup src="/images1/pos/invoice_in_invoices_list.png" alt="Invoices list with INV/2026/00004 for Sofia Rossi, Posted, 6,597" />

Open it to see the same lines as the order, with the order number as the **Source Document**. From there you can send it or register more payments like any invoice. See [Invoicing processes](../../../finance/customer-invoices/index.md) and [Create an invoice](../../../finance/customer-invoices/create-invoice.md).

## Actions and statuses

- **Invoice:** Creates the invoice once. If the order already has one, you get the same invoice.
- **Invoiced:** The order status after the invoice exists.
- After the session closes, an invoiced order settles through the customer invoice instead of the closing entry of the session.

An order cannot be invoiced after its session is closed. The invoice journal must also be set in the register. See [Set up a register](../get-started/set-up-a-register.md).

::: tip
Not sure if a customer wants an invoice? Ask before payment. It is faster to tick **Invoice** than to find the order later.
:::

::: warning
Invoice the order in the session it was sold in. Once the session is **Closed & Posted**, you can no longer invoice it from the terminal.
:::

## See also

- [Pay and receipt](pay-and-receipt.md)
- [Refunds](refunds.md)
- [Contacts](../../../getting-started/contacts/contacts.md)
