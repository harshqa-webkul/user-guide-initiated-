# Adjustments

Your system stock and your real shelves will sometimes disagree. Goods get damaged, miscounted, lost or found. An adjustment brings the numbers in Aureus back in line with what is physically there, and keeps a record of why.

> **In simple words:** Adjustments fix the stock numbers so they match what is on the shelf.

Open them from `Inventory → Operations → Adjustments`. The group has two pages.

| Page | Use it to | Result |
| --- | --- | --- |
| **Quantities** | Count stock and correct the difference | On hand quantity changes to the counted quantity |
| **Scraps** | Remove damaged or unusable goods | Goods move to the scrap location |

## Which tool should you use?

| Situation | Best tool |
| --- | --- |
| You counted a shelf and the number is different | [Inventory adjustments](inventory-adjustments.md) |
| A box fell and the items are broken | [Scrap](scrap.md) |
| You want to count many products on a schedule | [Inventory adjustments](inventory-adjustments.md) |
| You want to type a new on hand number straight in the stock report | See [Stock report](../reporting/stock-report.md) |

Use a scrap when you know goods are destroyed and want to say so. Use an adjustment when you only know the count is wrong.

::: info
The **Add Quantity** button and the stock report both work on the same stock records as the Quantities page. The difference is the workflow: a count is saved first, then you apply it when you are ready.
:::

## The flow

```text
Count the shelf
      |
      v
Type the Counted Quantity on the row
      |
      v
Check the Difference column
      |
      v
Apply   (stock is corrected)     or     Clear   (count is discarded)
```

For damaged goods the flow is shorter: create a scrap, then click **Validate**.

## Behind the scenes

Every correction is stored as a stock move, so you can trace it later in [Moves history](../reporting/moves-history.md). Adjustments use the virtual location `Virtual Locations/Inventory Adjustment`. Scraps use `Virtual Locations/Scrap`. Neither location counts as sellable stock.

## See also

- [Inventory adjustments](inventory-adjustments.md)
- [Scrap](scrap.md)
- [Stock report](../reporting/stock-report.md)
- [Locations](../warehouses/locations.md)
