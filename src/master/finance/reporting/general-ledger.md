# General ledger

The general ledger lists every account that has a balance, with its opening balance, its movements and its closing balance. Use it when you need to know why an account has a certain amount, or to audit the books account by account.

> **In simple words:** The general ledger is a drawer per account. Open a drawer to see every entry inside.

It is in the Accounting app only: `Accounting → Reporting → General Ledger`.

## Filters

<ImagePopup src="/images1/finance/general_ledger.png" alt="General Ledger with Date Range Last Quarter (01/07/2026 - 30/09/2026), one account expanded to show its entry lines" />

- **_Date Range:_** The period of the movements. Entries before the start date become the opening balance.
- **_Journals:_** Limit the report to chosen journals.

Pick July 1 to July 31, 2026 to see the sample data. With the October default range the movements are zero, because nothing happened in October.

## How to read it

The columns are **Account**, **Date**, **Communication**, **Partner**, **Debit**, **Credit** and **Balance**.

- Each row is one account, for example **121000 Account Receivable**. Only accounts with a balance on the end date are listed.
- On the account row, **Debit** and **Credit** are the movements in the range. **Balance** is the closing balance.
- Click a row to open it. Click **Expand All** to open every account, and **Collapse All** to close them.
- An opened account shows its opening balance first, then each entry line with the date, the label, the partner and the amounts.
- The last row, **Total General Ledger**, sums the debit and credit.

Example, balances as of end of October 2026:

| Account | Balance |
| --- | --- |
| 101403 Outstanding Receipts | 891.25 |
| 101404 Outstanding Payments | -34,040.00 |
| 121000 Account Receivable | 1,207.50 |
| 131000 Tax Paid | 4,440.00 |
| 251000 Tax Received | -273.75 |
| 400000 Product Sales | -1,825.00 |
| 600000 Expenses | 29,600.00 |

For July 2026, **Account Receivable** has debits of 2,098.75 (both invoices) and a credit of 891.25 (the payment from Deco Addict). The balance is 1,207.50. **Account Payable** has a zero balance, so it is not listed.

A debit balance is positive. A credit balance is negative.

## Export

Click **Export to Excel** or **Export to PDF**. The file uses the same range and filters.

## Common questions

**Why are Debit and Credit zero but Balance is not?**
The range has no movements, but the account has an older balance. Move the range back.

**Where is the entry behind a line?**
Use [Journal items](../accounting-entries/journal-items.md) to search by account and open the entry.

**Why is an account missing?**
An account with a zero balance on the end date is hidden.

## See also

- [Trial balance](./trial-balance.md)
- [Journal items](../accounting-entries/journal-items.md)
- [Reporting overview](./index.md)
