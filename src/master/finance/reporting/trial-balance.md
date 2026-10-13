# Trial balance

The trial balance lists every account with its debit and credit totals. The grand totals of debit and credit must be equal. Use it to check that your books are balanced before you produce the final statements.

> **In simple words:** The trial balance is a quick health check. If total debit equals total credit, the books add up.

It is in the Accounting app only: `Accounting → Reporting → Trial Balance`.

## Filters

<ImagePopup src="/images1/finance/trial_balance.png" alt="Trial Balance with Date Range This Month (01/10/2026 - 31/10/2026) showing Initial Balance, the period and End Balance column groups" />

- **_Date Range:_** The period in the middle column group.
- **_Journals:_** Limit the report to chosen journals.

## How to read it

The report has three column groups. Each group has a **Debit** and a **Credit** column.

- **INITIAL BALANCE:** The totals of everything posted before the start of the range.
- **The period** (for example **01 OCT 2026 - 31 OCT 2026**): The movements inside the range.
- **END BALANCE:** Initial balance plus the period.

Example with the range October 2026. All sample entries are from July, so they sit in the initial balance and the period is zero.

| Account | Initial Debit | Initial Credit | End Debit | End Credit |
| --- | --- | --- | --- | --- |
| 101403 Outstanding Receipts | 891.25 | 0.00 | 891.25 | 0.00 |
| 101404 Outstanding Payments | 0.00 | 34,040.00 | 0.00 | 34,040.00 |
| 121000 Account Receivable | 2,098.75 | 891.25 | 2,098.75 | 891.25 |
| 131000 Tax Paid | 4,440.00 | 0.00 | 4,440.00 | 0.00 |
| 211000 Account Payable | 34,040.00 | 34,040.00 | 34,040.00 | 34,040.00 |
| 251000 Tax Received | 0.00 | 273.75 | 0.00 | 273.75 |
| 400000 Product Sales | 0.00 | 1,825.00 | 0.00 | 1,825.00 |
| 600000 Expenses | 29,600.00 | 0.00 | 29,600.00 | 0.00 |
| **Total** | **71,070.00** | **71,070.00** | **71,070.00** | **71,070.00** |

The **Total** row shows 71,070.00 on both sides. The books are balanced.

Look at **Account Payable**. It has 34,040.00 in debit and in credit. The bill raised the credit and the payment raised the debit, so the account is settled.

## Export

Click **Export to Excel** or **Export to PDF** to download the report.

## Common questions

**What if the totals differ?**
A posted entry is out of balance. Open [Journal items](../accounting-entries/journal-items.md) and look for the entry whose **Debit** and **Credit** differ.

**Why do I see my July amounts in the Initial Balance?**
The initial balance holds everything before the range. Pick a range that includes July to see the movements.

## See also

- [General ledger](./general-ledger.md)
- [Balance sheet](./balance-sheet.md)
- [Journal entries](../accounting-entries/journal-entries.md)
