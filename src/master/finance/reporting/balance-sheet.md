# Balance sheet

The balance sheet shows what your company owns (assets), what it owes (liabilities) and what is left for the owners (equity) on one date. Use it at month end, or when a bank or an investor asks for your financial position.

> **In simple words:** The balance sheet is a photo of your money on one day. Assets on one side, debts and equity on the other.

It is in the Accounting app only: `Accounting → Reporting → Balance Sheet`.

## Filters

<ImagePopup src="/images1/finance/balance_sheet.png" alt="Balance Sheet with Date Range Last Quarter (01/07/2026 - 30/09/2026), showing Assets, Liabilities and Equity sections" />

- **_Date Range:_** The report is "as of" the last day of the range. It adds up everything posted up to that date, not only inside the range. The title reads **Balance Sheet - As of** with the date.
- **_Journals:_** Limit the report to chosen journals.

## How to read it

The report has two columns: **Account** and **Balance**. It has three blocks.

### Assets

- **Current Assets:** Cash, receivables and similar.
- **Fixed Assets** and **Non-current Assets:** Long term items. They are empty in the sample data.

Example, as of Oct 31, 2026:

| Account | Balance |
| --- | --- |
| 101403 - Outstanding Receipts | 891.25 |
| 101404 - Outstanding Payments | -34,040.00 |
| 121000 - Account Receivable | 1,207.50 |
| 131000 - Tax Paid | 4,440.00 |
| Total Current Assets | -27,501.25 |

Account Receivable of $1,207.50 is invoice INV/2026/1, still unpaid.

### Liabilities

- **Current Liabilities:** **211000 - Account Payable** (0.00, the bill is paid) and **251000 - Tax Received** (273.75).
- **Non-current Liabilities:** Long term debts.

**Total LIABILITIES** is 273.75.

### Equity

- **Unallocated Earnings** holds profit that is not moved to an equity account yet.
- **Current Year Unallocated Earnings:** -27,775.00. It is the net profit of the year to date. See [Profit and loss](./profit-and-loss.md).
- **Previous Years Unallocated Earnings:** 0.00.

**Total EQUITY** is shown as 27,775.00 and **LIABILITIES + EQUITY** as 28,048.75.

::: info
In this sample the numbers are odd because the data has only one vendor payment and a large bill. A real company starts with opening balances and has positive equity.
:::

## Export

Click **Export to Excel** or **Export to PDF** at the top right. The file uses the same date and filters.

## Common questions

**Why is the report empty?**
The default range is the current month. Pick a range up to a date with posted entries.

**Why do my draft invoices not show?**
Only posted entries count. Confirm the invoice first.

**Why is Current Year Unallocated Earnings a minus number?**
Your expenses are larger than your revenue so far. The result is a loss.

## See also

- [Profit and loss](./profit-and-loss.md)
- [Trial balance](./trial-balance.md)
- [Chart of accounts](../get-started/chart-of-accounts.md)
