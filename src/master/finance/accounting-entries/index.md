# Accounting entries overview

Every money event in Aureus leaves a trace in the books. That trace has two parts: a journal entry and its journal items. Invoices, bills, payments and manual adjustments all create them.

> **In simple words:** A journal entry is one page in the ledger book. The journal items are the lines on that page.

These screens exist in the Accounting app only. Open them from `Accounting → Journal Entries` and `Accounting → Journal Items`.

## Journal entries and journal items

- **Journal entry:** One record with a number, a date, a journal and a status. Example: `INV/2026/1`.
- **Journal item:** One line of an entry. It names an account, a partner, a label, and an amount in **Debit** or **Credit**.

::: info Debit and credit
**Debit** and **Credit** are the two sides of an entry. Money that comes in or an asset that grows is a debit. Money that goes out or a debt that grows is a credit. The two sides always match.
:::

Every entry holds two or more items. The total debit should equal the total credit. That is the rule of double entry.

## How documents create entries

You do not have to type entries for normal work. Aureus builds them for you.

1. **Customer invoice:** When you confirm **INV/2026/1** for $1,207.50, Aureus debits **Account Receivable** with $1,207.50. It credits **Product Sales** with $1,050.00 and **Tax Received** with $157.50.
2. **Vendor bill:** A bill debits expense and tax accounts. It credits **Account Payable**.
3. **Payment:** When a customer pays, Aureus debits **Outstanding Receipts** and credits **Account Receivable**. A vendor payment does the reverse with **Outstanding Payments**.
4. **Matching:** The payment line and the invoice line on **Account Receivable** are matched. The invoice is then settled.

## When to type an entry yourself

Create a manual entry for events that no document covers, for example a correction or a year start balance. Use the **Miscellaneous** journal for it. See [Journal entries](./journal-entries.md).

## Entry status

- **Draft:** You can still change it. It does not count in reports.
- **Posted:** It is final. Reports count it.
- **Cancelled:** It was cancelled and does not count.

Reports such as the balance sheet read posted entries only. See [Reporting](../reporting/index.md).

## In this section

- [Journal entries](./journal-entries.md): list, create and post entries.
- [Journal items](./journal-items.md): browse every line, filter and group them.

## See also

- [Chart of accounts](../get-started/chart-of-accounts.md)
- [Journals](../get-started/journals.md)
- [Register a payment](../payments/register-payment.md)
