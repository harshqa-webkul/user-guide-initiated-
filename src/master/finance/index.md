# Finance

The finance side of Aureus covers everything about money: billing customers, paying vendors, recording payments, keeping the books and reading financial reports. Two apps share this work. The **Invoices** app is a simple tool for day-to-day billing. The **Accounting** app adds the full books and reports on top.

> **In simple words:** Invoices is for billing and paying. Accounting is for billing, paying and seeing the full books.

## The two apps

Both apps work on the same data. An invoice made in one app shows up in the other.

- **Invoices app:** Create invoices, credit notes, bills, refunds and payments. Set up taxes, payment terms and bank accounts.
- **Accounting app:** Does everything the Invoices app does. It also gives you accounting entries, the chart of accounts, journals and financial reports.

The invoice, credit note, bill, refund and payment screens are identical in both apps. Only the menu path changes. For example, use `Invoices → Customers → Invoices` or `Accounting → Customers → Invoices`.

### Only in the Accounting app

- **Overview:** A dashboard with one card for each journal.
- **Journal Entries** and **Journal Items:** The accounting records behind every document.
- **Reporting:** Balance Sheet, Profit & Loss, General Ledger, Trial Balance, Partner Ledger, Aged Receivable and Aged Payable.
- **Chart of Accounts**, **Journals** and **Fiscal Positions**.
- **Settings:** Manage Taxes, Manage Customer Invoice and Manage Default Accounts, plus Manage Products with **Variants**.

### Only in the Invoices app

- The **Bank Accounts** menu item under **Configurations**.
- A **Settings** page with one option: **Unit of Measure**.

## Which app should I use?

| You want to | Use |
| --- | --- |
| Send invoices and record bills and payments | Either app |
| Keep a product list with taxes | Either app |
| See journal entries and journal items | Accounting |
| Read a balance sheet or profit and loss report | Accounting |
| Set up the chart of accounts and journals | Accounting |
| Map taxes and accounts by customer location | Accounting (Fiscal Positions) |
| Keep things simple, with no books | Invoices |

::: tip
If you run the Accounting app, you do not need the Invoices app. Every billing screen is already in Accounting.
:::

## How the money flows

Here is a simple example from start to finish.

1. You sell goods to a customer called Azure Interiors. You create a customer invoice and click **Confirm**. See [Create an invoice](./customer-invoices/create-invoice.md).
2. The customer pays. You click **Pay** on the invoice and register the payment. See [Register a payment](./payments/register-payment.md).
3. The invoice moves from **Not paid** to **Paid**.
4. In Accounting, each step writes lines in the books. Confirming the invoice records what the customer owes you and your income. The payment records the money received. See [Journal entries](./accounting-entries/journal-entries.md).
5. The reports read those lines. The invoice raises your income in **Profit & Loss**. The unpaid amount shows in **Aged Receivable**. See [Reporting](./reporting/index.md).

Buying works the same way in reverse. You record a vendor bill, confirm it, pay it, and the books record the cost.

## Groups in this guide

| Group | What it covers |
| --- | --- |
| [Get started](./get-started/index.md) | Set up accounting, the chart of accounts, journals, default accounts and currencies |
| [Taxes](./taxes/index.md) | Taxes, tax groups, fiscal positions and tax settings |
| [Customer invoices](./customer-invoices/index.md) | Invoicing processes, invoices, credit notes and refunds, payment terms, incoterms and invoice numbers |
| [Vendor bills](./vendor-bills/index.md) | Recording a bill, paying it and bill numbers |
| [Payments](./payments/index.md) | Register and manage payments, and bank accounts |
| [Accounting entries](./accounting-entries/index.md) | Journal entries and journal items |
| [Reporting](./reporting/index.md) | Financial reports and their exports |
| [Configuration](./configuration/index.md) | Every settings and configuration page in one list |

## Set up in this order

1. Set up accounting for your company. See [Accounting setup](./get-started/accounting-setup.md).
2. Review the [chart of accounts](./get-started/chart-of-accounts.md) and the [journals](./get-started/journals.md).
3. Check the [default accounts](./get-started/default-accounts.md).
4. Create your [taxes](./taxes/taxes.md) and review [tax settings](./taxes/tax-settings.md).
5. Add [payment terms](./customer-invoices/payment-terms.md) and [bank accounts](./payments/bank-accounts.md).
6. Create your [products](../sales/products-prices/manage-products.md), [customers](../sales/quotations-orders/manage-customers.md) and [vendors](../supply-chain/purchase/orders/vendors.md).
7. Create your first [invoice](./customer-invoices/create-invoice.md) or [bill](./vendor-bills/create-bill.md).

## See also

- [Get started](./get-started/index.md)
- [Configuration](./configuration/index.md)
- [Sales overview](../sales/index.md)
