# Refunds

A refund returns products from a paid order and gives the money back. You start it from the terminal's **Orders** page. Aureus creates a new order with negative amounts, so the original sale stays untouched and your totals stay correct.

> **In simple words:** Find the old order, choose what comes back, click Refund, and pay the customer back.

You can refund only orders that are already paid. You cannot refund an order that is still **New**.

## Find the order

1. Click your initials at the top right of the terminal, then **Orders**.
2. Search by order, receipt or customer. Or use the status filter, which starts on **All active orders**.
3. Click the order in the list. Its lines show on the right.

<ImagePopup src="/images1/pos/refund_orders_list.png" alt="Terminal Orders page with TNE/00002 for Tom Baker selected and its line Nova X5 Smartphone 128GB on the right" />

The list shows **Date**, **Receipt number**, **Order number**, **Customer**, **Cashier**, **Tracking number**, **Total** and **Status**.

## Choose what to refund

1. Click the line you want to return. The panel says "Select the product(s) to refund and set the quantity".
2. Use the number pad to set the quantity. The line shows **To refund**.
3. Repeat for other lines.

<ImagePopup src="/images1/pos/refund_select_qty.png" alt="Selected order line Nova X5 Smartphone with To refund 1.00 and the Refund button at the bottom" />

**Example:** Tom Baker bought one Nova X5 Smartphone for 24,999 on order TNE/00002. He brings it back. Click the line and keep the quantity at 1.

A line also shows what is still **Refundable**. You cannot return more than the customer bought, and a partial refund is fine. For example, refund one of two mice.

## Create the refund

Click **Refund**. The terminal opens a new order with the returned lines at negative quantity. The customer is the same as on the original order. The total is negative, for example -24,999.

<ImagePopup src="/images1/pos/refund_new_order.png" alt="New refund order with Nova X5 Smartphone quantity -1 and a total of -24,999 for Tom Baker" />

## Pay the refund

1. Click **Payment**.
2. Choose the method, for example **Cash**. The amount is the negative total.
3. Click **Validate**.

<ImagePopup src="/images1/pos/refund_payment_cash.png" alt="Payment screen of the refund with Cash -24,999 and the Validate button" />

The receipt shows negative amounts: **TOTAL** -24,999 and **Cash** -24,999. Print it for the customer if you wish. Give the cash back from the drawer.

<ImagePopup src="/images1/pos/refund_receipt.png" alt="Refund receipt with Nova X5 Smartphone -1, TOTAL -24,999 and Cash -24,999" />

## Where the refund appears

In the **Orders** list the refund shows as its own row, "TNE/00002 REFUND", with the status **Paid** and a negative total. In the back office open `Point of Sale → Orders → Orders` and use the **Refunds** tab. The session also counts the money you gave back, so the cash at closing still balances.

## Actions and statuses

- **Details:** Shows the order details.
- **Invoice:** Creates an invoice for the selected order. See [Invoice a POS order](invoice-a-pos-order.md).
- **Print receipt:** Prints the receipt of the selected order again.
- **Refund:** Creates the refund order.

If the original order was invoiced, invoicing the refund produces a credit note for the customer. See [Credit notes and refunds](../../../finance/customer-invoices/credit-notes-and-refunds.md).

::: tip
Refund and pay in the same session when you can. The drawer then shows the cash movement clearly.
:::

::: warning
A refund only returns what the original order sold. To change a price, cancel before payment instead.
:::

## See also

- [Pay and receipt](pay-and-receipt.md)
- [Orders](../orders-payments/orders.md)
- [Close a session](../sessions/close-session.md)
