# Manage payments

The payments list shows every payment you received or sent. You can open one, follow its status, confirm it, cancel it, or create a payment by hand. Most payments are made from an invoice with **Pay**, but a manual payment helps when no invoice exists yet, for example an advance.

> **In simple words:** The Payments page is your cash diary. Each row is one payment, and the status tells you how far it has come.

## Where to find payments

- Customer payments: `Invoices → Customers → Payments` or `Accounting → Customers → Payments`.
- Vendor payments: `Invoices → Vendors → Payments` or `Accounting → Vendors → Payments`.

Both apps show the same payments. Customer payments have the type **Receive**. Vendor payments have the type **Send**.

## Overview

<ImagePopup src="/images1/finance/payments_list.png" alt="Payments list with the views Default, Customer Payments, Vendor Payments, Draft, In Process, showing the Deco Addict payment of 891.25" />

### Columns

- **_Date:_** The payment date.
- **_Name:_** The payment number, for example `PBANK/2026/1`. The prefix comes from the journal.
- **_Journal:_** The journal that holds the money, for example **Bank Transactions**.
- **_Payment Method:_** For example **Manual Payment**.
- **_Partner:_** The customer or vendor.
- **_Amount (Currency):_** The amount with a sign. A vendor payment shows a minus, for example -$34,040.00.
- **_Amount:_** The amount without a sign.
- **_State:_** The status of the payment.
- **_Company:_** Hidden by default. Turn it on from the column toggle.

### Views

The tabs above the list are saved filters.

- **_Customer Payments:_** Only payments from customers.
- **_Vendor Payments:_** Only payments to vendors.
- **_Draft:_** Payments that are not confirmed yet.
- **_In Process:_** Confirmed payments.
- More views are in the view menu: **Sent**, **No Sent**, **No Bank Matching** and **Reconciled**.

### Search, group and filter

- Use the search box to find a payment by name.
- Click **Group by** to group by **Name**, **Company**, **Journal**, **Payment Method Line**, **Partner**, **Payment Method**, **Partner Bank Account**, **Created At** or **Updated At**.
- Click the filter button to filter by journal, company, bank account, payment method, currency, partner or dates.

See [Search, filter and group records](../../getting-started/search-filter-group.md).

### Export

Click **Export** above the list to download the payments. Pick the columns you need.

## Create a payment by hand

1. Open the payments list and click **New Payment**.
2. Fill in the form.
3. Click **Create**.

<ImagePopup src="/images1/finance/payment_form.png" alt="The New Payment form with Payment Type Receive, Customer Deco Addict, Amount 891.25, Currency USD, Date, Journal Bank Transactions, Payment Method Man" />

The form has a status bar at the top. A new payment starts as **Draft**.

### Fields

- **_Payment Type:_** **Receive** for money in, **Send** for money out. The label of the partner field follows this choice.
- **_Customer_** or **_Vendor:_** The partner who pays or is paid. Choosing a partner fills the bank account and the method if they are known.
- **_Amount:_** The money moved. It must be zero or more.
- **_Currency:_** Starts with your company currency.
- **_Date:_** Starts as today.
- **_Memo:_** A free note, up to 255 characters. Use the invoice number or a bank reference.
- **_Journal:_** A bank, cash or credit card journal. Aureus picks the first one.
- **_Payment Method:_** The list depends on the journal and on the payment type.
- **_Customer Bank Account_** or **_Vendor Bank Account:_** The partner bank account. It shows only for the method **Manual Payment** on a non-cash journal. Pick from the accounts of the chosen partner. See [Bank accounts](./bank-accounts.md).

::: info
A payment is editable only while it is a **Draft**. After you confirm it, the form is read only.
:::

## Statuses

The status bar shows these steps:

1. **Draft:** Just created.
2. **In Process:** Confirmed and posted.
3. **Paid:** Fully completed.

Two more statuses appear only when they apply: **Not Paid** and **Cancelled**.

## Actions and statuses

The buttons are in the top bar of the payment page.

- **Confirm:** Visible on a **Draft**. Aureus posts the payment and creates its journal entry. The status becomes **In Process**. A payment on a cash journal becomes **Paid**.
- **Cancel:** Visible on a **Draft**. The status becomes **Cancelled**.
- **Reset to Draft:** Visible once the payment is no longer a draft. The status goes back to **Draft** and the journal entry returns to draft.
- **Mark as Sent** and **Unmark as Sent:** Visible on an **In Process** payment with the method **Manual Payment**. Use it to track that you sent the payment details to the partner. The button toggles.
- **Delete:** Removes the payment.

You also find **Chatter** in the top bar. See [Chatter](../../getting-started/chatter.md).

## The linked invoices or bills

A payment page has an extra tab: **Invoices** on a customer payment, and **Bills** on a vendor payment. It lists the documents this payment settled. Click **View** to open one. Use it to check which invoice a payment paid.

## The journal entry of a payment

Each confirmed payment has a journal entry. It moves the money between the partner account and the outstanding account. In the Accounting app, open `Accounting → Journal Entries` and look for the payment number. The entry page has a **Payment** link back to the payment. See [Journal entries](../accounting-entries/journal-entries.md).

## Example

Deco Addict paid invoice INV/2026/2 for $891.25 through a bank journal.

1. Open `Customers → Payments`. The **In Process** view shows the payment.
2. Open it. The type is **Receive**, the method is **Manual Payment**, the amount is $891.25.
3. Open the **Invoices** tab. INV/2026/2 is listed.

::: warning
Do not delete a payment that already settled an invoice. Check the **Invoices** tab first, and keep the records that your accountant needs.
:::

## See also

- [Register a payment](./register-payment.md)
- [Payments overview](./index.md)
- [Bank accounts](./bank-accounts.md)
- [Journal entries](../accounting-entries/journal-entries.md)
