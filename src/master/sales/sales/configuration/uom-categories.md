# UOM categories

A UOM category groups units that measure the same thing, such as weight or length. Each category has one reference unit. Other units convert to it with a ratio.

> **In simple words:** A category such as Weight holds units such as kg and g.

::: info
Turn on **Unit of Measure** in [Settings](./settings.md) to use units on products.
:::

## Overview

Go to `Sales → Configurations → Units of Measure → UOM Categories`.

<ImagePopup src="/images1/sales/cfg_uom_list.png" alt="Sales → Configurations → UOM Categories list showing categories and their units" />

The list shows **Name** and **UOMs**. Aureus ships with categories such as Unit, Weight, Working Time, Length / Distance, Surface and Volume. Use **Group by** to group by **Created At**.

## Create a UOM category

1. Go to `Sales → Configurations → Units of Measure → UOM Categories`.
2. Click **New UOM Category**.

### General

- **_Name\*:_** Enter the category name, such as Weight.

### Units of Measure

Add one row per unit. Click **Add Unit** for more rows.

- **_Unit of Measure\*:_** Enter the unit name, such as kg.
- **_Type\*:_** Choose **Reference**, **Bigger** or **Smaller**. The default is **Reference**.
- **_Ratio\*:_** Enter how the unit relates to the reference unit. It must be above zero. For a **Reference** unit it is fixed at 1.
- **_Rounding Precision\*:_** Enter the rounding step. It must be above zero. The default is 0.01.

<ImagePopup src="/images1/sales/cfg_uom_form.png" alt="New UOM Category form with the General section and the Units of Measure table" />

3. Click **Create**.

::: warning
Each category needs exactly one **Reference** unit. Aureus shows an error if there are none or more than one.
:::

## Actions

- **Edit:** Change the name or units.
- **Delete:** Remove the category. Select several rows to delete them together.

## See also

- [Settings](./settings.md)
- [Packagings](./packagings.md)
- [Manage products](../products-prices/manage-products.md)
