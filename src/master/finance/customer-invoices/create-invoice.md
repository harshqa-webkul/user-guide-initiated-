# Create an invoice

An invoice asks a customer to pay for what you sold. It lists the products, the taxes and the total, and it states the date the money is due. When you confirm it, Aureus also writes the matching accounting entry, so your reports stay correct without extra work.

> **In simple words:** You fill in a form, click **Confirm**, and the invoice becomes official. Then you send it and wait for the payment.

You use invoices every time you sell something and want to be paid. If the sale started in the **Sales** app, create the invoice from the order instead. See [Order to invoice](../../sales/invoicing/order-to-invoice.md).

Open the invoice list with `Invoices → Customers → Invoices` or `Accounting → Customers → Invoices`. Both apps show the same screen.

In this page we use one example. The customer **Azure Interiors** buys 4 Camping Hammocks and must pay in 30 days.

## The invoice list

The list shows every invoice, newest first.

<ImagePopup src="/images1/finance/invoice_list.png" alt="Invoices list with the view tabs, Export, Group by, search box and the Summary row at the bottom" />

### Views

The tabs above the list are ready-made views:

- **_Default:_** All invoices.
- **_Draft_, _Posted_, _Cancelled_:** Invoices in that state.
- **_Not Secured_:** Invoices that have no security hash saved.
- **_To Check_:** Posted invoices that nobody has marked as checked.
- **_To Pay_:** Posted invoices that still wait for payment.
- **_Unpaid_:** Posted invoices with an **Amount Due** above zero.
- **_In Payment_:** Posted invoices with the payment state **In payment**.
- **_Overdue_:** Not paid invoices whose due date is in the past.

If you cannot see all the tabs, click the three dots at the end of the tab bar.

### Columns

The list shows **Number**, **State**, **Created By**, **Customer**, **Invoice Date**, **Due Date**, **Tax Excluded**, **Tax**, **Total**, **Amount Due** and **Payment State**. A summary row adds up the amounts you see.

Use the column toggle to show more: **Checked**, **Accounting**, **Source Document**, **Reference**, **Sales Person** and **Invoice Currency**.

### Search, filter, group and export

- Type in the search box to find an invoice.
- Use the filter icon to build rules on fields such as **Number**, **Customer**, **Invoice Date**, **Journal**, **Currency**, **Total Amount** or **Amount Due**.
- Use **Group by** to fold the list by **Customer**, **Invoice Date**, **Sales Person**, **Currency** and more.
- Click **Export** to download the rows you see.

See [Search, filter and group records](../../getting-started/search-filter-group.md).

## Create an invoice

1. Go to `Invoices → Customers → Invoices` or `Accounting → Customers → Invoices`.
2. Click **New Invoice**.
3. Fill in the **General** section and the **Invoice Lines** tab.
4. Click **Create**. Use **Create & create another** to save and open an empty form.

<ImagePopup src="/images1/finance/invoice_create_empty.png" alt="New Invoice page with the State bar (Draft, Posted) and the General section empty" />

The state bar at the top shows **Draft** and **Posted**. A new invoice is a **Draft**.

### General

- **_Customer:_** Who you invoice. Required. Pick an existing customer. To add one, see [Contacts](../../getting-started/contacts/contacts.md). This also fills **Sales Person**, **Payment Term**, **Payment Method** and the **Recipient Bank** from the customer record.
- **_Invoice Date:_** The date on the invoice. It starts as today. If you leave it empty, Aureus uses the day you confirm.
- **_Due Date:_** The last day to pay. Required. It is hidden when you choose a **Payment Term**, because the term then works out the date.
- **_Payment Term:_** The rule for when to pay, such as 30 Days. Pick one when you want Aureus to calculate the due date. See [Payment terms](payment-terms.md).
- **_Journal:_** The accounting book where the invoice is recorded. Required. Only sales journals are listed, normally **Customer Invoices**.
- **_Currency:_** The currency of the invoice. Required. It starts as the currency of your company.

**Example:** Choose **Azure Interiors**. Pick **30 Days** as **Payment Term**. Keep the journal **Customer Invoices** and the currency **USD**.

<ImagePopup src="/images1/finance/invoice_create_general.png" alt="General section filled in: Customer Azure Interiors, Payment Term 30 Days, Journal Customer Invoices, Currency USD" />

### Invoice Lines

Each line is one product you sell.

1. Open the **Invoice Lines** tab.
2. Click **Add Product**.
3. Choose the **Product**. Aureus fills the other columns.
4. Change what is different for this customer.

- **_Product:_** What you sell. Required.
- **_Quantity:_** How many. It starts at 1.
- **_Unit:_** The unit of measure. It shows only when **Unit of Measure** is turned on in the settings.
- **_Taxes:_** The taxes on the line. They come from the product. You can add or remove them.
- **_Discount (%):_** A percentage taken off the line price.
- **_Unit Price:_** The price of one unit. It comes from the product. Type another price if needed.
- **_Sub Total:_** The line total before tax. Aureus calculates it.

Below the lines, a summary shows **Tax Excluded**, **Tax** and **Total**.

**Example:** Add **Camping Hammock**, quantity 4. The unit price is $65.00 and the tax is 15 %. The sub total is $260.00, the tax $39.00 and the total $299.00.

<ImagePopup src="/images1/finance/invoice_create_lines.png" alt="Invoice Lines tab with 4 Camping Hammock at 65.00, tax 15 %, and the totals summary" />

### Other Information

This tab holds details that are optional. It has two blocks.

**Invoice**

- **_Customer Reference:_** The number the customer uses for this order, such as their purchase order. Print it so they can match your invoice.
- **_Sales Person:_** The employee in charge of the sale.
- **_Payment Reference:_** The text the customer should write on the payment, so you can match it.
- **_Recipient Bank:_** Your bank account that the customer should pay into.
- **_Delivery Date:_** When you delivered the goods.

**Accounting**

- **_Company:_** The company that issues the invoice. Change it only if you work with several companies.
- **_Incoterm:_** The delivery term, such as FOB. See [Incoterms](incoterms.md).
- **_Incoterm Location:_** The place that goes with the term, for example a port.
- **_Fiscal Position:_** Changes taxes and accounts for customers in other regions. See [Fiscal positions](../taxes/fiscal-positions.md).
- **_Cash Rounding Method:_** Shows only when cash rounding is turned on in the invoice settings.
- **_Payment Method:_** The way you expect to be paid.
- **_Checked:_** Tick it when someone has reviewed the invoice.

### Term & Conditions

Type the notes you want on the invoice, such as bank details or late payment rules. They print on the invoice.

## After you save

The invoice opens on its view page. The tabs are **View**, **Edit** and **Payments**. Inside the view, the tabs are **Invoice Lines**, **Journal Items**, **Other Information** and **Term & Conditions**.

Click **Edit** to change a draft. On a posted invoice, the customer, dates, payment term, journal, currency and lines are locked. You can still change fields such as **Customer Reference**, **Payment Reference** and **Checked**.

## Buttons on the invoice

The header buttons change with the state.

### On a draft invoice

- **Confirm:** Posts the invoice. The state changes to **Posted**. Aureus checks that the invoice has a customer and at least one line, that the total is not negative, and that the journal, currency and accounts are in use. If a check fails, a message tells you what to fix.
- **Cancel:** Sets the state to **Cancelled**. Use it for an invoice you no longer need.
- **Delete:** Removes the draft for good.

### On a posted invoice

- **Print & Send:** Emails the invoice. See below.
- **Preview:** Shows the invoice as the customer will see it, with **Close** and **Print**.
- **Pay:** Records a payment. See [Register a payment](../payments/register-payment.md).
- **Set as Checked:** Marks the invoice as reviewed. The button disappears afterwards.
- **Credit Note:** Cancels or reduces the invoice. See [Credit notes](credit-notes-and-refunds.md).
- **Reset To Draft:** Moves the invoice back to **Draft** so you can edit it. Linked payments are unlinked and the payment state goes back to **Not paid**.

You can also **Reset To Draft** a cancelled invoice. A posted invoice cannot be deleted. Use a credit note instead.

The **Chatter** button opens notes, messages and activities. See [Chatter](../../getting-started/chatter.md) and [Activities](../../getting-started/activities.md).

::: warning
Use **Reset To Draft** with care. It unlinks every payment of the invoice. Re-check the payments afterwards.
:::

### Print & Send

1. Open a posted invoice and click **Print & Send**.
2. Check the **Customer** list. Your customer is already chosen. Add more people if needed.
3. Edit the **Subject** and the message **Description**.
4. Check the **Attachment**. The invoice PDF is already attached. You can add images or PDFs.
5. Click **Send**.

Aureus emails every selected customer who has an email address. It skips the others. You see the notification **Invoice Sent**, and the message is saved in the chatter.

<ImagePopup src="/images1/finance/invoice_print_send.png" alt="Print & Send window for INV/2026/1 with Customer, Subject, message and the PDF attachment" />

### Preview

Click **Preview** to see the printable invoice in a window. Click **Print** to print it or **Close** to leave.

<ImagePopup src="/images1/finance/invoice_preview.png" alt="Preview window of a posted invoice with the Close and Print buttons" />

## Payments and journal items

- **Payments tab:** Lists the payments linked to this invoice. Open one to see its details.
- **Payment State:** Shows **Not paid**, **Partial**, **In payment**, **Paid** or **Reversed**.
- **Amount Due:** Under the totals, it falls as payments arrive.
- **Journal Items tab:** Shows the accounting lines made when you confirmed: **Account**, **Partner**, **Label**, **Currency**, **Due Date**, **Taxes**, **Debit** and **Credit**.

Under the totals of a posted invoice you may also see:

- **Unlink:** Appears beside an applied payment. Click it to separate the payment from the invoice.
- **Add:** Appears beside an outstanding payment or credit of the same customer. Click it to apply it to the invoice.

<ImagePopup src="/images1/finance/invoice_view_posted.png" alt="Posted invoice INV/2026/1 with header buttons, state bar, Payment state and the totals with Amount Due" />

## Auto post

The **Other Information** tab of a saved invoice shows **Auto Post** as a tick or a cross. In daily use it is off, so you can ignore it. If an invoice is marked for auto post and its accounting date is in the future, the **Confirm** button is hidden until that date.

## What happens when you confirm

- The state becomes **Posted** and the invoice keeps its number. See [Invoice sequence](invoice-sequence.md).
- If the invoice date is empty, today is filled in.
- Aureus creates a journal entry. The customer balance goes up, and your income and tax accounts are credited.
- The customer is counted as a customer, so it shows in **Customers**.

## Complete example

1. Click **New Invoice**.
2. Pick **Azure Interiors** and **30 Days**.
3. Add 4 **Camping Hammock** lines at $65.00. The total is $299.00.
4. Click **Create**, then **Confirm**.
5. Click **Print & Send** and **Send**.
6. When the money arrives, click **Pay**.

## Tips

- Use the **Overdue** view each week and chase the customers listed there.
- Fill in **Customer Reference** when the customer gave you a purchase order number.
- Tick **Checked** after your accountant has reviewed the invoice. The **To Check** view then shows only what is left.

## See also

- [Manage customers](../../sales/quotations-orders/manage-customers.md)
- [Credit notes and refunds](credit-notes-and-refunds.md)
- [Invoice sequence](invoice-sequence.md)
- [Invoicing processes](index.md)
- [Register a payment](../payments/register-payment.md)
- [Journal entries](../accounting-entries/journal-entries.md)
