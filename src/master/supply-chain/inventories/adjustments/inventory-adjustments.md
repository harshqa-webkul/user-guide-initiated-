# Inventory adjustments

An inventory adjustment is a physical count. You walk the shelves, enter what you find, and Aureus works out the difference from what the system expected. When you apply the count, the stock numbers are corrected.

> **In simple words:** Type what you counted, check the difference, then click Apply.

Open it from `Inventory → Operations → Adjustments → Quantities`. The page title is **Quantity Adjustments**.

::: warning Before you start
The **Location**, **Lot / Serial Numbers** and **Package** columns appear only when the matching settings are on. Check `Inventory → Settings → Manage Warehouses → Locations`, `Manage Traceability → Lots & Serial Numbers` and `Manage Operations → Packages`.
:::

## Settings

The scheduled date of a count comes from the annual inventory date. Set it in `Inventory → Settings → Manage Operations`.

- **Annual Inventory Day:** the day of the month, for example 31.
- **Annual Inventory Month:** the month, for example December.

With 31 and December, new count rows get the scheduled date 31 December.

## Overview

The list shows one row per product, location, lot and package. It has these tabs:

| Tab | Shows |
| --- | --- |
| **Default** | All rows |
| **Internal Locations** | Stock inside your own warehouse |
| **Transit Locations** | Stock in transit locations |
| **On Hand** | Rows with a quantity above zero |
| **To Count** | Rows whose scheduled date is still ahead |
| **To Apply** | Rows that already have a counted quantity |

<ImagePopup src="/images1/inventory/adj_quantities_list.png" alt="Quantity Adjustments list with the tabs Internal Locations, Transit Locations, On Hand, To Count and To Apply" />

### Columns

- **Location, Product, Lot / Serial Numbers, Package:** where the stock is and what it is.
- **On Hand Quantity:** what the system believes is there.
- **Counted Quantity:** what you found. You type it in the row.
- **Difference:** counted minus on hand. It stays empty until you count.
- **Scheduled At:** the date the count is due.
- **User:** who is responsible.

You can also show **Storage Category**, **Product Category**, **Available Quantity** and **Company**. Use **Group by** for Product, Product Category, Location, Storage Category, Lot / Serial Numbers, Package or Company.

## Count an existing row

The company counts Camping Hammock at `WH/Stock`. The system says 106.

1. Open `Inventory → Operations → Adjustments → Quantities`.
2. Search for **Camping Hammock**.
3. Click the **Counted Quantity** box on the `WH/Stock` row.
4. Type **104** and leave the box. The row shows **Change saved.**

<ImagePopup src="/images1/inventory/adj_counted_quantity.png" alt="Camping Hammock row in WH/Stock with Counted Quantity 104 and Difference -2" />

The **Difference** now reads -2. The row also appears in the **To Apply** tab.

## Apply or clear the count

Two row actions appear once a count exists.

1. Click **Apply** to write the count into stock. A message says **Quantity changes applied**. On hand becomes 104.
2. Click **Clear** to throw the count away instead. A message says **Quantity changes cleared**. On hand stays 106.

<ImagePopup src="/images1/inventory/adj_apply_clear.png" alt="Row actions Apply and Clear on the Camping Hammock row in the To Apply tab" />

::: tip
Review the **To Apply** tab before you apply. It lists every pending count in one place.
:::

## Add a quantity

Use **Add Quantity** when a product has no row at that location yet, for example after finding unrecorded stock.

1. Click **Add Quantity**. The **Create Product Quantity** window opens.
2. Fill in the fields.
3. Click **Create**.

<ImagePopup src="/images1/inventory/adj_add_quantity.png" alt="Create Product Quantity window with Location WH/Stock, Product Camping Hammock and Counted Quantity 5" />

- **_Location:_** required. Default is `WH/Stock`.
- **_Product:_** required.
- **_Package:_** optional. Pick it when the goods sit in a package.
- **_Counted Quantity:_** required. Default is 0.
- **_Scheduled At:_** the due date. It defaults to the annual inventory date.

A message says **Quantity added**. If a row for the same product and location already exists, Aureus warns you to update the existing quantity instead.

## Behind the scenes

When you apply a count, Aureus creates a stock move for the difference. For a loss of 2 units, the stock leaves `WH/Stock` and goes to `Virtual Locations/Inventory Adjustment`. For a gain, the move runs the other way. You can see it in [Moves history](../reporting/moves-history.md).

## Actions and statuses

| Action | Where | Effect |
| --- | --- | --- |
| Type a **Counted Quantity** | Row | Saves the count and fills **Difference** |
| **Apply** | Row with a count | Corrects stock and clears the count |
| **Clear** | Row with a count | Removes the count, stock unchanged |
| **Add Quantity** | Page header | Creates a new stock row |

## See also

- [Adjustments overview](index.md)
- [Scrap](scrap.md)
- [Stock report](../reporting/stock-report.md)
- [Scan adjustments](../barcode/scan-adjustments.md)
- [Inventory settings](../get-started/inventory-settings.md)
