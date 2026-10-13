# Scrap

A scrap removes goods that are damaged, expired or otherwise unusable. The goods leave your stock and move to a special scrap location, so your on hand numbers stay honest and you keep a record of the loss.

> **In simple words:** Scrap tells Aureus that these items are destroyed and no longer for sale.

Open it from `Inventory → Operations → Adjustments → Scraps`.

::: warning Before you start
The **Source Location** and **Scrap Location** fields need `Inventory → Settings → Manage Warehouses → Locations` switched on. The **Lot/Serial** field appears for tracked products, and **Package** needs the **Packages** setting.
:::

## Overview

The **Scraps** list shows these columns: **Date**, **Reference**, **Product**, **Lot/Serial**, **Package**, **Source Location**, **Scrap Location**, **Quantity** and **Unit of Measure**. Use **Group by** for Product, Source Location or Scrap Location.

<ImagePopup src="/images1/inventory/scrap_list.png" alt="Scraps list with columns Date, Reference, Product, Source Location, Scrap Location and Quantity" />

## Create a scrap

Example: two Camping Hammocks arrive in `WH/Stock` with torn fabric.

1. Click **New Scrap**.
2. Fill in the **General** section.
3. Click **Create**. The scrap is saved as **Draft** with a number such as `SP/00001`, and its page opens.
4. Click **Validate** to finish the scrap. There is no confirmation window.

<ImagePopup src="/images1/inventory/scrap_form.png" alt="New Scrap form with product Camping Hammock, quantity 2, source WH/Stock and scrap location Virtual Locations/Scrap" />

- **_Product:_** the item to scrap. Pick Camping Hammock.
- **_Quantity:_** required. Default is 1. Enter 2.
- **_Unit of Measure:_** required. It follows the product.
- **_Tags:_** optional labels such as Damaged. The list is empty at first, so click the **+** button next to the field to create your first tag.
- **_Package:_** use it when scrapping goods inside a package.
- **_Owner:_** optional.
- **_Source Location:_** required. Where the goods are now. Default is `WH/Input`. Change it to `WH/Stock`.
- **_Scrap Location:_** required. Where the goods go. Default is `Virtual Locations/Scrap`.
- **_Source Document:_** optional. Type a reference such as the receipt number WH/IN/12.
- **_Company:_** your company.

::: tip
Fill **Source Document** when the scrap comes from a receipt or delivery. It lets you trace the loss back to the paper trail.
:::

## Effect on stock

After **Validate**, the state changes from **Draft** to **Done**. The **Validate** and **Delete** buttons disappear and the fields become read only. Two Camping Hammocks leave `WH/Stock` and arrive in `Virtual Locations/Scrap`. On hand drops by 2, for example from 108 to 106. Scrapped goods are not counted as available stock.

A scrap location is a location marked **Is a Scrap Location?**. See [Locations](../warehouses/locations.md).

## Actions and statuses

| State | Meaning |
| --- | --- |
| **Draft** | Saved, stock not changed |
| **Done** | Validated, goods moved to the scrap location |

## Behind the scenes

Validation creates a stock move from the source location to the scrap location. You can find it in [Moves history](../reporting/moves-history.md) with the scrap reference.

## See also

- [Adjustments overview](index.md)
- [Inventory adjustments](inventory-adjustments.md)
- [Locations](../warehouses/locations.md)
- [Stock report](../reporting/stock-report.md)
