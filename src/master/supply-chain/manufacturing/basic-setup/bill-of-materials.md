# Bill of materials

A bill of materials (BoM) is the recipe of a finished product. It lists the components for one batch, the quantity it makes and, with **Work Orders** on, the operations. Every manufacturing order copies its components and work orders from the BoM.

> **In simple words:** A BoM says what goes in, in what amount, and which steps make the product.

Open it from `Manufacturing → Products → Bills of Materials`.

## Settings

The **Operations** tab appears only when **Work Orders** is on. The setting is in `Manufacturing → Settings → Manage Operations`. See [Manufacturing settings](../get-started/manufacturing-settings.md).

## Overview

The list has the tabs **All** and **Archived**. Columns are **Reference**, **Product**, **Quantity**, **UOM** and **Company**.

<ImagePopup src="/images1/manufacturing/bom_list.png" alt="Bills of Materials list with BOM-MC-LAPTOP row and the New Bill of Material button" />

## Create a bill of materials

1. Go to `Manufacturing → Products → Bills of Materials`.
2. Click **New Bill of Material**.
3. Fill the **General** box, then the tabs and **Miscellaneous** box below.
4. Click **Create**. Use **Create & create another** to keep going.

### General

- **_Product:_** Required. The finished product, for example **Business Laptop**.
- **_Product Variant:_** Pick one variant, or leave empty to cover all variants.
- **_Quantity:_** Required. How many units this recipe makes, usually 1.
- **_UOM:_** Unit of the quantity.
- **_Reference:_** A code such as **BOM-MC-LAPTOP**. Useful when a product has several BoMs.
- **_Company:_** Required. The company that owns the BoM.

<ImagePopup src="/images1/manufacturing/bom_general.png" alt="New BoM form General box filled for Business Laptop, quantity 1, Units, reference BOM-MC-LAPTOP" />

### Components tab

Click **Add a line** for each part.

- **_Component:_** Required. The product you consume.
- **_Quantity:_** Required. Amount needed for one batch. RAM 16GB is 2 for one laptop.
- **_Product Unit of Measure:_** Required. Unit of the component.
- **_Apply on Variants:_** Optional column. Limit the line to some variants. See [BoM variants](../advanced-configuration/bom-variants.md).
- **_Consumed in Operation:_** Optional column. Choose the operation that uses the part.
- **_Highlight Consumption:_** Optional column. Marks a key component.

<ImagePopup src="/images1/manufacturing/bom_components.png" alt="Components tab with the six Business Laptop components and quantities" />

### Operations tab

Shown when **Work Orders** is on. Each line becomes a work order on the manufacturing order.

- **_Operation:_** The step, such as **Assemble Components**.
- **_Work Center:_** Where it runs, such as Assembly Station.
- **_Duration Computation:_** Compute from tracked time or set it manually.
- **_Computed on last:_** Number of past work orders used for the average.
- **_Company_**, **_Apply on Variants_**, **_Duration (minutes)_:** Company, variant limit and the planned time.

Use **Add a line** for a new step, **Edit Operation** to open the full form, or **Copy Existing Operations** to reuse steps from another BoM. See [Operations](../advanced-configuration/operations.md).

<ImagePopup src="/images1/manufacturing/bom_operations.png" alt="Operations tab with Assemble Components (Assembly Station) and Test & Pack (Quality & Packing)" />

## Miscellaneous box

- **_Manufacturing Readiness:_** Required. **When all components are available** or **When components for first operation are available**. It decides when the order shows **Ready**.
- **_Routing:_** The operation type used for the order.
- **_Flexible Consumption:_** Required. **Allowed**, **Allowed with warning** or **Blocked**. New BoMs start on **Allowed with warning**. See below.
- **_Manufacturing Lead Time:_** Required. Days needed to build.
- **_Days to prepare Manufacturing Order:_** Required. Days of preparation before production.

<ImagePopup src="/images1/manufacturing/bom_miscellaneous.png" alt="Miscellaneous box with Flexible Consumption and readiness options visible" />

### Flexible Consumption

It controls what happens when operators use other quantities than planned.

| Choice | Result at Produce |
| --- | --- |
| **Allowed** | No question asked |
| **Allowed with warning** | The **Consumption Warning** window appears |
| **Blocked** | The same window appears |

See [Produce and consume](../workflows/produce-and-consume.md).

## BoM Overview

Open a BoM and click **Overview**. Choose **Quantity** and **Variant** filters. The page shows **Free to Use**, **On Hand** and **Total Cost**. The table lists each component with **Quantity**, **Lead Time**, **Route**, **BoM Cost** and **Product Cost**, plus operation minutes. For BOM-MC-LAPTOP the unit cost is $19,395.29.

<ImagePopup src="/images1/manufacturing/bom_overview.png" alt="BoM Overview page for BOM-MC-LAPTOP showing components, Operations rows and Unit Cost" />

## Actions and statuses

- **View**, **Edit** and **Overview** are the sub tabs of a BoM.
- Deleting a BoM archives it. Open the **Archived** tab to find it.

## Behind the scenes

When you create an order, Aureus scales the component quantities to the order quantity. It also adds one work order per BoM operation.

## See also

- [Configure a product](configure-product.md)
- [Manufacturing order costs](manufacturing-order-costs.md)
- [Work order dependencies](../advanced-configuration/work-order-dependencies.md)
- [Manufacturing orders](../workflows/manufacturing-orders.md)
