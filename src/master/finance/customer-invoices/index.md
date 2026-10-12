# Invoicing processes

An invoice asks a customer to pay for what you sold. In Aureus an invoice can start in three ways: from a sales order, by hand, or as a credit note from an existing invoice. This page shows each way, then follows an invoice from its first draft to the day it is paid.

> **In simple words:** Pick the way that matches your sale, check the draft, confirm it, send it and record the payment.

You can do all of this in the **Invoices** app or in the **Accounting** app. The screens are identical. Each page names both menu paths, for example `Invoices → Customers → Invoices` or `Accounting → Customers → Invoices`.

## Process 1: invoice from a sales order

Use this process when the sale started in the **Sales** app. You do not retype anything. Aureus copies the customer and the lines from the order.

1. Open the confirmed sales order.
2. Click **Create Invoice**.

<ImagePopup src="/images1/finance/so_create_invoice_button.png" alt="Confirmed sales order SO/3 with the Create Invoice button in the page header" />

3. Choose **Regular invoice**. This is the only type Aureus offers.
4. Click **Submit**.

<ImagePopup src="/images1/finance/so_create_invoice_modal.png" alt="Create Invoice window with Regular invoice selected and the Submit button" />

5. Aureus creates a **Draft** invoice and links it to the order. The order number shows in **Source Document**.
6. Open the invoice, check the lines and click **Confirm**.

See [Manage orders](../../sales/quotations-orders/manage-orders.md) for the order itself and [Order to invoice](../../sales/invoicing/order-to-invoice.md) for the full flow.

## Process 2: invoice by hand

Use this process for a sale that has no order, such as a service you bill directly.

1. Go to `Invoices → Customers → Invoices` or `Accounting → Customers → Invoices`.
2. Click **New Invoice**.
3. Pick the **Customer**, add the **Invoice Lines** and click **Create**.
4. Click **Confirm**.

<ImagePopup src="/images1/finance/invoice_list.png" alt="Invoices list where you click New Invoice" />

The customer must already exist. To add one, see [Contacts](../../getting-started/contacts/contacts.md) and [Manage customers](../../sales/quotations-orders/manage-customers.md). The full form is in [Create an invoice](create-invoice.md).

## Process 3: credit note from an invoice

Use this process when a posted invoice is wrong, or when goods come back.

1. Open the posted invoice.
2. Click **Credit Note**.
3. Fill in **Reason**, **Journal** and **Date**, then submit.
4. Aureus creates a **Draft** credit note with the same lines. Edit it if the credit is partial.
5. Click **Confirm**.

<ImagePopup src="/images1/finance/credit_note_button_modal.png" alt="Create Credit Note window on a posted invoice with Reason, Journal and Date filled in" />

See [Credit notes and refunds](credit-notes-and-refunds.md).

## The life of an invoice

The **State** tells you where the invoice is in its life.

- **Draft:** You are still working. You can change everything. Nothing is recorded in your accounts.
- **Posted:** You confirmed it. It is a real accounting document and most fields are locked.
- **Cancelled:** You cancelled a draft. It stays in the list for your records.

### Buttons in each state

<ImagePopup src="/images1/finance/invoice_view_posted.png" alt="Posted invoice with its header buttons, state bar, payment state and totals" />

| State | Buttons |
| --- | --- |
| Draft | **Confirm**, **Cancel**, **Delete** |
| Posted | **Print & Send**, **Preview**, **Pay**, **Set as Checked**, **Credit Note**, **Reset To Draft** |
| Cancelled | **Reset To Draft** |

### What posting does

When you click **Confirm**, Aureus checks the invoice, fills the invoice date if it is empty, and creates the journal entry. The customer balance goes up. Your income and tax accounts are credited. The invoice number does not change. See [Invoice sequence](invoice-sequence.md) and [Journal entries](../accounting-entries/journal-entries.md).

### Payment state

A posted invoice also has a **Payment State**.

- **Not paid:** Nothing is paid yet.
- **Partial:** The customer paid part of the total. **Amount Due** shows what is left.
- **In payment:** A payment is recorded but not yet fully processed.
- **Paid:** The **Amount Due** is zero.
- **Reversed:** The invoice was reversed, for example by a credit note.

### How a payment settles the invoice

1. Click **Pay** on the posted invoice.
2. Enter the amount, date and journal, then confirm.
3. Aureus matches the payment with the invoice. The **Amount Due** falls and the **Payment State** changes.
4. The **Payments** tab lists the payment.

<ImagePopup src="/images1/finance/pay_window_invoice.png" alt="Pay window with Journal, Payment Method, Amount, Currency and Payment Date filled in" />

See [Register a payment](../payments/register-payment.md).

::: tip
Use the **Draft** view in the invoice list every morning. It shows the invoices that still wait for you to confirm them.
:::

## Pages in this group

- [Create an invoice](create-invoice.md): the full invoice form, buttons and tabs.
- [Credit notes and refunds](credit-notes-and-refunds.md): reduce or cancel a posted invoice or bill.
- [Payment terms](payment-terms.md): rules such as "pay within 30 days".
- [Incoterms](incoterms.md): delivery terms you can print on an invoice.
- [Invoice sequence](invoice-sequence.md): how document numbers are built.

## See also

- [Vendor bills](../vendor-bills/index.md)
- [Payments](../payments/index.md)
- [Taxes](../taxes/index.md)
