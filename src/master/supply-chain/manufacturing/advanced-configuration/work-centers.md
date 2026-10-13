# Work centers

A work center is a place where production steps are carried out, such as a machine, an assembly table or a packing desk. It holds the data Aureus needs to plan work: when the place is open, how many units it handles at once, how efficient it is and what an hour of use costs.

> **In simple words:** A work center is the "where" of a production step.

Open `Manufacturing → Configurations → Work Centers`.

## Settings

::: info Gate
**Work Centers** is hidden until you turn on **Work Orders** in `Manufacturing → Settings → Manage Operations`. The option reads "Execute operations at designated work centers."
:::

## Overview

<ImagePopup src="/images1/manufacturing/wc_list.png" alt="Work Centers list with Assembly Station and Quality & Packing, all columns visible, tab All selected" />

- **Tabs:** **All** and **Archived**.
- **Columns:** **Name**, **Code**, **Company**, **Working Hours**, **Working State**, **Capacity**, **Efficiency**. **Cost per Hour** can be shown from the column toggle.
- **New Work Center:** opens the create form.

## Create a work center

Scenario: the sample shop has **Assembly Station** (code MC-ASM, capacity 3, efficiency 85.80%) and **Quality & Packing** (code MC-PCK, capacity 5, efficiency 92.46%). Both use the **Standard 38 hours/week** schedule.

1. Open `Manufacturing → Configurations → Work Centers` and click **New Work Center**.

<ImagePopup src="/images1/manufacturing/wc_create_general.png" alt="Create Work Center form filled for Assembly Station: Name, Code MC-ASM, Tag, Alternative Work Centers, Working Hours Standard 38 hours/week, Company, Description" />

### General

- **_Name:_** The title shown on work orders. Required.
- **_Code:_** A short reference, for example `MC-ASM`.
- **_Tag:_** Optional labels to group similar work centers.
- **_Alternative Work Centers:_** Other work centers that can do the same job. When planning, Aureus compares them with this one.
- **_Working Hours:_** The schedule that says when the work center is open. Required. Planning places work orders inside these hours.
- **_Company:_** The owning company.
- **_Description:_** Free notes for your team.

::: warning
If a work center has no working hours calendar, planning fails with "There is no defined calendar on work center".
:::

### Production Information

<ImagePopup src="/images1/manufacturing/wc_create_production.png" alt="Production Information and Costing Information boxes filled for Assembly Station (Time Efficiency 85.80, Default Capacity 3, Setup Time, Cleanup Time, Cost per Hour)" />

- **_Time Efficiency:_** A percentage up to 100. A lower value lengthens the planned time. At 80%, a 60 minute step is planned for 75 minutes.
- **_Default Capacity:_** How many units the work center makes in one cycle.
- **_Setup Time:_** Minutes to prepare before a run.
- **_Cleanup Time:_** Minutes to clean up after a run.

### Costing Information

- **_Cost per Hour:_** What one hour of use costs. Aureus multiplies it by the expected hours to get the operation cost on the manufacturing order.

### Specific Capacity

Use this when one product needs different numbers from the default. Click **Add a line**.

<ImagePopup src="/images1/manufacturing/wc_specific_capacity.png" alt="Specific Capacity table with one line added for Business Laptop (UOM, Capacity, Setup Time, Cleanup Time)" />

- **_Product:_** The product the line applies to.
- **_UOM:_** Its unit of measure.
- **_Capacity:_** Units per cycle for this product.
- **_Setup Time_ and _Cleanup Time:_** Minutes for this product. They replace the work center defaults.

2. Click **Create**. Use **Create & create another** to add the next one.

## How the expected time is worked out

```text
cycles   = units to make / capacity, rounded up
duration = setup + cleanup + cycles x step time x 100 / efficiency
```

Example: 5 laptops at **Assembly Station** with capacity 3 make 2 cycles. With a 60 minute step and 85.80% efficiency, the cycles take about 140 minutes. Setup and cleanup are added on top.

## The Operations sub page

Open a work center and click **Operations**. You see every routing step that runs here, and the **New Operation** button adds one with this work center already chosen. See [Operations](operations.md).

<ImagePopup src="/images1/manufacturing/wc_operations_subpage.png" alt="Assembly Station Operations sub page listing Assemble Components" />

## Actions and statuses

- **View** and **Edit** show or change the record.
- **Delete** archives the work center. It moves to the **Archived** tab, with the message "Work center archived".
- On the **Archived** tab you can restore it or delete it for good.
- A permanent delete is refused when the work center is in use: "The work center cannot be deleted because it is currently in use."
- The **Working State** column shows whether the work center is currently running work.

::: tip
Give every work center a realistic efficiency. Planned dates for work orders depend on it.
:::

## See also

- [Operations](operations.md)
- [Plan and schedule](../workflows/plan-and-schedule.md)
- [Work orders](../workflows/work-orders.md)
- [Manufacturing order costs](../basic-setup/manufacturing-order-costs.md)
