# Point of Sale reporting

Point of Sale reporting shows you what your registers sold, how customers paid and whether the cash drawer matched at closing. You have one dashboard for a quick look and three reports for detail. Each one answers a different question.

> **In simple words:** Use the dashboard for a fast health check, then open a report when you need exact numbers.

## Which page answers which question

| Question | Page | Path |
| --- | --- | --- |
| Which registers are open, and what was the last closing balance? | [Dashboard](./dashboard.md) | `Point of Sale → Dashboard` |
| How many sessions are open, and what is my revenue and best seller? | [Dashboard](./dashboard.md) | `Point of Sale` (top bar) |
| How many orders did I take each day, week or month? | [Orders report](./orders-report.md) | `Point of Sale → Reporting → Orders` |
| What did I sell, how was it paid and how much tax did I collect? | [Sales details](./sales-details.md) | `Point of Sale → Reporting → Sales Details` |
| Did the cash drawer balance for one session? | [Session report](./session-report.md) | `Point of Sale → Reporting → Session Report` |

## What counts as a sale

All three reports count only settled orders. A settled order has the status **Paid**, **Posted** or **Invoiced**. Orders in **New** or **Cancelled** status never appear in the totals.

A refund is also an order, but its amount is negative. It reduces your totals. See [Refunds](../selling/refunds.md) for how a refund is created.

## Sample data used in this section

The pages use the TechNest Electronics register and its closed session TNE/SESSION/00002.

| Order | Customer | What was sold | Total |
| --- | --- | --- | --- |
| TNE/00001 | Sofia Rossi | 2 Glide Wireless Mouse, 1 BudsAir Wireless Earbuds | 6,597.00 |
| TNE/00002 | Tom Baker | 1 Nova X5 Smartphone 128GB | 24,999.00 |
| TNE/00002 refund | Tom Baker | The same smartphone, returned | -24,999.00 |

Together the three orders add up to 6,597.00.

## Good habits

- Close each session at the end of the shift. The session report is complete only after closing.
- Check the dashboard each morning for sessions that stay open for days.
- Set the same date range on the report and on your accounting records when you compare them.

## See also

- [Point of Sale overview](../index.md)
- [Close a session](../sessions/close-session.md)
- [Orders](../orders-payments/orders.md)
