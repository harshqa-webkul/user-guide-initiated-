# Orders report

The Orders report counts your settled orders and groups them by day, week or month. For each group it shows the untaxed amount, the taxes, the total and the margin. Use it to see how your sales move over time and to spot slow or busy periods.

> **In simple words:** This report answers "how many orders did I take, and how much did they bring in, per day, week or month?"

## Open the report

Go to `Point of Sale → Reporting → Orders`. The page title is **Order Analysis**. You can also reach it from the three-dot menu of a register card, under **Reporting → Orders**. That link opens the report already filtered for that register.

<ImagePopup src="/images1/pos/orders_report_by_day.png" alt="Order Analysis page with dates 01/10/2026 to 12/10/2026, All terminals and By day, showing one row for 2026-10-12 with 4 orders and total 13,194.00" />

## Set the filters

The filter bar has four fields, from left to right.

1. **_Start date:_** The first day to include. It starts on the first day of the current month.
2. **_End date:_** The last day to include. It starts on today.
3. **_Terminal:_** Choose **All terminals** or one register, for example **TechNest Electronics**.
4. **_Grouping:_** Choose **By day**, **By week** or **By month**.

The table refreshes as soon as you change a field.

<ImagePopup src="/images1/pos/orders_report_filters.png" alt="Filter bar of the Order Analysis page with the start date, end date, TechNest Electronics selected and By month selected" />

## Read the table

Each row is one period. The columns are:

- **_Period:_** The day (2026-10-12), the ISO week (2026-W42) or the month (2026-10).
- **_Orders:_** How many settled orders fall in this period.
- **_Untaxed:_** The sum of order amounts before tax.
- **_Taxes:_** The sum of tax on those orders.
- **_Total:_** Untaxed plus taxes.
- **_Margin:_** The profit margin of the orders, added up for the period.

The last row, **Total**, adds up every column. Below the table you see **Average order value**, which is the total divided by the number of orders.

::: info
Only orders with status Paid, Posted or Invoiced are counted. Refund orders count too, with negative amounts.
:::

## Worked example

Take the sample data, all created on 12 October 2026, with **All terminals** and **By day**.

| Period | Orders | Untaxed | Taxes | Total | Margin |
| --- | --- | --- | --- | --- | --- |
| 2026-10-12 | 3 | 6,597.00 | 0.00 | 6,597.00 | 2,897.00 |
| **Total** | 3 | 6,597.00 | 0.00 | 6,597.00 | 2,897.00 |

The three orders are TNE/00001, TNE/00002 and the refund of TNE/00002. The smartphone sale and its refund cancel each other. The average order value is 6,597.00 divided by 3, which is 2,199.00.

Switch **By day** to **By month**. The table shows one row, 2026-10, with the same numbers.

<ImagePopup src="/images1/pos/orders_report_by_month.png" alt="Order Analysis grouped By month showing one row 2026-10 with 4 orders and total 13,194.00 and Average order value 3,298.50" />

## Common questions

**Why is my order missing?**
Check its status. A **New** or **Cancelled** order is not counted. Also check that the order date is inside the range.

**Why is the count higher than the number of sales I made?**
Each refund is an order. One sale plus one refund counts as two.

**Can I see which products were sold?**
Yes. Use [Sales details](./sales-details.md) for products, payments and taxes.

## See also

- [Reporting overview](./index.md)
- [Sales details](./sales-details.md)
- [Refunds](../selling/refunds.md)
- [Orders](../orders-payments/orders.md)
