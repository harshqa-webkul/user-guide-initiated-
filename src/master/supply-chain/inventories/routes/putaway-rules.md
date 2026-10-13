# Putaway rules

A putaway rule tells Aureus where to store goods when they arrive. Without a rule, goods go to the default destination of the document. With a rule, a product or category is sent to a chosen shelf or zone.

> **In simple words:** When this product arrives here, store it over there.

Open it from `Inventory → Configurations → Warehouse Management → Putaway Rules`.

::: warning Gate
Needs `Inventory → Settings → Manage Warehouses → Locations` and `Multi Steps Routes` on. A **Storage Category** is optional. Create one under `Configurations → Storage Categories`.
:::

## Overview

The list shows **When Product Arrives In**, **Product**, **Product Category**, **Store To** and **Sub Location**. It has tabs **All** and **Archived**. Each row has only **Edit** and **Delete** links.

<ImagePopup src="/images1/inventory/put_list.png" alt="Putaway Rules list with one rule for Camping Hammock stored to WH/Stock/Shelf A" />

## Create a putaway rule

1. Click **New Putaway Rule**. The **Create Putaway Rule** window opens.
2. Fill in the fields.
3. Click **Create**.

<ImagePopup src="/images1/inventory/put_form.png" alt="Create Putaway Rule window with When Product Arrives In WH/Stock, Product Camping Hammock and Store To WH/Stock/Shelf A" />

- **_Company:_** required. Defaults to your company.
- **_When Product Arrives In:_** required. The location where goods land, for example `WH/Stock`.
- **Product:** shows **All Products** until you pick one.
- **Product Category:** shows **All Categories** until you pick one.
- **Storage Category:** limits the rule to locations of that category.
- **_Store To:_** required. The final shelf. The list shows only the children of the arrival location. For example, **WH/Stock/Shelf A** appears after you choose `WH/Stock` as the arrival location.
- **_Sub Location:_** required. Default is **No**. Other choices are **Last Used** and **Closest Location**.

## Example

Camping Hammocks should go to `WH/Stock/Shelf A`.

1. Create locations `WH/Stock/Shelf A` as a child of `WH/Stock`. See [Locations](../warehouses/locations.md).
2. Create a rule: arrives in `WH/Stock`, product Camping Hammock, store to `WH/Stock/Shelf A`.
3. Receive hammocks. When the transfer into stock is validated, the goods are placed on Shelf A.

## Putaway vs routes

A route decides which steps happen. A putaway rule decides the final shelf inside the last step.

## See also

- [Routes overview](index.md)
- [Routes and rules](routes-and-rules.md)
- [Locations](../warehouses/locations.md)
- [Storage categories](../warehouses/storage-categories.md)
