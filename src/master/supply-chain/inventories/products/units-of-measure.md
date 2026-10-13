# Units of measure

A unit of measure tells Aureus how a quantity is counted. You may buy flour in kilograms, sell eggs by the dozen and count chairs as units. Units of measure are grouped in categories so Aureus only converts between units that fit together.

> **In simple words:** A unit is how you count. A category keeps kilograms with weights and metres with lengths.

## Settings

Go to `Inventory → Settings → Manage Products` and turn on **Unit of Measure**. The menu `Configurations → Units of Measure → UOM Categories` then appears, and products and moves show unit fields. See [Inventory settings](../get-started/inventory-settings.md).

## Overview

Open `Inventory → Configurations → Units of Measure → UOM Categories`. The list shows **Name** and **UOMs**. Aureus ships six categories.

<ImagePopup src="/images1/inventory/uom_categories_list.png" alt="UOM categories list with Unit, Weight, Working Time, Length, Surface and Volume" />

| Category | Units |
| --- | --- |
| Unit | Units, Dozens |
| Weight | kg, g, t, lb, oz |
| Working Time | Days, Hours |
| Length / Distance | m, mm, km, cm, in, ft, yd, mi |
| Surface | m², ft² |
| Volume | L, m³, fl oz (US), qt (US), gal (US), in³, ft³ |

Rows have **Edit** and **Delete** actions.

## Create a category

1. Go to `Inventory → Configurations → Units of Measure → UOM Categories`.
2. Click **New UOM Category**.

<ImagePopup src="/images1/inventory/uom_category_create.png" alt="UOM category form named Packaging weight with units listed in the Units of Measure repeater" />

- **_Name\:_** Required. The category, for example **Packaging weight**.
- **Units of Measure:** Click **Add Unit** for each row.
  - **_Unit of Measure\:_** Required. The unit name.
  - **_Type\:_** Required. The first row is the **Reference** unit. Later rows are bigger or smaller than it.
  - **_Ratio:_** How many reference units fit in this one. Default 1. Locked for the Reference row.
  - **_Rounding Precision\:_** Required. The smallest step allowed. Default 0.01.

3. Click **Create**.

::: tip
Create the reference unit first. Set the other units against it. For example, kg is the reference and g has a smaller ratio.
:::

## Use units on stock

Choose the unit on the product, and Aureus shows it on prices, order lines and stock moves. On a receipt, the **Unit** column shows the unit for each move. Quantities are converted to the product unit when stored.

**Example:** Wheat Flour is held in **kg**. The sample warehouse holds 675 kg in **WH/Stock**.

## Behind the scenes

The reference unit is the base for the category. When you receive a different unit, Aureus converts it with the ratio. You cannot convert between categories, for example kilograms to metres.

::: info
This page covers the inventory view. The same records are managed in Sales. See [UOM categories in Sales](../../../sales/sales/configuration/uom-categories.md).
:::

## See also

- [Inventory settings](../get-started/inventory-settings.md)
- [Configure a product](configure-product.md)
- [UOM categories in Sales](../../../sales/sales/configuration/uom-categories.md)
