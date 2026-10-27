# Journal entries

A journal entry is the accounting record behind a document or a manual adjustment. The Journal Entries page lists all of them: invoices, bills, payments and entries you type. You use it to check what Aureus booked, and to create entries that no invoice or payment covers.

> **In simple words:** One entry is one balanced set of debit and credit lines. This page is where you read them and write your own.

Journal entries exist in the Accounting app only. Open `Accounting → Journal Entries`.

## Overview

<ImagePopup src="/images1/finance/journal_entries_list.png" alt="Journal Entries list on the Posted view, showing rows such as INV/2026/1, INV/2026/2, PBANK/2026/3 and BILL/2026/4 with their date, partner and journal" />

### Columns

- **_Date:_** The accounting date.
- **_Number:_** The entry number, for example `INV/2026/1`.
- **_Partner:_** The customer or vendor.
- **_Reference:_** An outside reference, if any.
- **_Journal:_** For example **Customer Invoices** or **Bank Transactions**.
- **_Company:_** The company of the entry.
- **_Total:_** The entry amount. A bill shows a minus, for example -$34,040.00. The footer sums the amounts.
- **_State:_** **Draft**, **Posted** or **Cancelled**.
- **_Invoice Date_** and **_Checked_:** Hidden by default. Turn them on from the column toggle.

### Views

The tabs are saved filters: **Default**, **Draft**, **Posted**, **Sales**, **Purchases**, **Bank**, **Cash**, **Credit** and **Misc**. The view menu also holds **Reversed**.

### Group, filter and export

- **Group by:** **Partner**, **Journal**, **State**, **Payment Method**, **Date**, **Invoice Date** or **Company**.
- **Filter:** by **Number**, **Invoice Origin**, **Reference**, **Invoice Partner Display Name**, **Invoice Date**, **Invoice Due Date** and dates of creation or update.
- **Export:** Click **Export** to download the list.

See [Search, filter and group records](../../getting-started/search-filter-group.md).

::: info
When you click a row for an invoice or a bill, Aureus opens the invoice or bill page. Other entries open here.
:::

## Create a manual entry

1. Click **New Journal Entries** on the list.
2. Fill in the **General** section.
3. Add the lines in the **Journal Items** tab.
4. Click **Create**.
5. Open the entry and click **Confirm**.

<ImagePopup src="/images1/finance/journal_entry_form.png" alt="New journal entry with Reference 'Office rent correction', the Miscellaneous journal, and two item rows, one Debit and one Credit of 100.00" />

### General

- **_Reference:_** A free text label. Use it to say why you book the entry.
- **_Accounting Date:_** The day the entry counts. It starts as today.
- **_Journal:_** Required. Aureus picks your general (miscellaneous) journal. Keep it for manual entries.

### Journal Items

The tab holds a table named **Items**. Click **Add Item** to add a row. Each row has:

- **_Account:_** Required. The account to debit or credit. See [Chart of accounts](../get-started/chart-of-accounts.md).
- **_Partner:_** Optional. Fill it for receivable or payable accounts, so the amount shows in the partner reports.
- **_Label:_** A short text for the line.
- **_Amount (Currency):_** The amount in the line currency. A positive number is a debit. A negative number is a credit.
- **_Currency:_** Required. Starts with the company currency.
- **_Taxes:_** Optional. Pick taxes that apply to the line.
- **_Debit_** and **_Credit_:** Type the amount in one of them. When you type in one, Aureus clears the other and updates **Amount (Currency)**.

The footer of the **Debit** and **Credit** columns shows the totals. Make them equal before you confirm.

::: warning
Before you click **Confirm**, check that the **Debit** and **Credit** totals match.
:::

### Other Information

- **_Checked:_** A switch. Turn it on when someone has reviewed the entry. The journal items view has the saved filter **To Check** for unchecked entries.
- **_Company:_** Starts with your current company.
- **_Fiscal Position:_** Adapts taxes and accounts to the partner location. See [Fiscal positions](../taxes/fiscal-positions.md).

The **Term & Conditions** tab holds a free text note.

## Actions and statuses

The buttons are in the top bar of the entry.

- **Confirm:** Visible on a **Draft**. It posts the entry and the status becomes **Posted**. Aureus needs at least one line, and the accounts and journal must be active.
- **Cancel:** Visible on a **Draft**. The status becomes **Cancelled**.
- **Reverse:** Visible on a **Posted** entry. A window asks for **Reason displayed on Reverse**, **Journal** and **Date**. Aureus creates a new draft entry with debit and credit swapped and opens it. Confirm it to cancel the effect of the first.
- **Reset To Draft:** Visible on a **Posted** or **Cancelled** entry. The status goes back to **Draft**, so you can edit it.
- **Delete:** Removes the entry.

A posted entry is read only. Reset it to draft to edit it.

## Example 1: a simple entry

Your accountant asks you to move $100.00 from the sales account to the expense account.

1. Create an entry with **Reference** `Move 100 to expenses`.
2. Add item 1: **Account** `Expenses`, **Debit** `100.00`.
3. Add item 2: **Account** `Product Sales`, **Credit** `100.00`.
4. Click **Create**, then **Confirm**.

The status is **Posted** and both reports now show the change.

## Example 2: the entry of an invoice

Invoice **INV/2026/1** (Azure Interiors, $1,207.50) created this entry when you confirmed it.

| Account | Debit | Credit |
| --- | --- | --- |
| Account Receivable | 1,207.50 | |
| Product Sales | | 1,050.00 |
| Tax Received | | 157.50 |

Debit and credit both total $1,207.50. On the invoice page, the **Journal Items** tab shows the same lines. See [Create an invoice](../customer-invoices/create-invoice.md).

When Deco Addict paid invoice INV/2026/2, entry `PBANK/2026/3` debited **Outstanding Receipts** with $891.25 and credited **Account Receivable** with $891.25.

## See also

- [Journal items](./journal-items.md)
- [Accounting entries overview](./index.md)
- [Register a payment](../payments/register-payment.md)
- [Journals](../get-started/journals.md)
