# First steps with Manufacturing

This tutorial follows one build from start to end. You check the recipe, create a manufacturing order, confirm it, plan it, run the work orders and produce the finished goods. Each step links to a deeper page.

> **In simple words:** Check the recipe, order a build, plan it, do the work, produce.

```text
BoM  →  MO (Draft)  →  Confirm  →  Plan  →  Work orders  →  Produce All  →  Done
```

The example builds the **Business Laptop**. **Work Orders** is on, so the recipe has two operations. The components are in stock.

## Step 1: Check the bill of materials

The bill of materials (BoM) is the recipe. It lists what one laptop needs.

1. Go to `Manufacturing → Products → Bills of Materials`.
2. Open **BOM-MC-LAPTOP**.
3. Check the **Components** tab: Motherboard, RAM 16GB (2), SSD 512GB, Laptop Battery, LCD Screen 14-inch and Laptop Chassis.
4. Open the **Operations** tab: **Assemble Components** at Assembly Station, then **Test & Pack** at Quality & Packing.

<ImagePopup src="/images1/manufacturing/first_bom_view.png" alt="BOM-MC-LAPTOP view page with the Components tab open showing all six components and quantities" />

See [Bill of materials](../basic-setup/bill-of-materials.md).

## Step 2: Create the manufacturing order

1. Go to `Manufacturing → Operations → Manufacturing Orders` and click **Create Manufacturing Order**.
2. Choose **Product** **Business Laptop**. The **Bill of Material** fills in.
3. Enter **Quantity** 5. Check **Scheduled Date**.
4. Look at the **Components** tab. It lists the parts for 5 laptops. The **Work Orders** tab lists the two operations.
5. Click **Create**.

<ImagePopup src="/images1/manufacturing/first_mo_create.png" alt="New MO form with Business Laptop, BOM-MC-LAPTOP, Quantity 5, Components tab showing scaled quantities" />

The order gets a number like **MO/1** and the state **Draft**. See [Manufacturing orders](../workflows/manufacturing-orders.md).

## Step 3: Confirm

1. Click **Confirm** in the header and accept the prompt.

<ImagePopup src="/images1/manufacturing/first_mo_confirm.png" alt="MO header with Confirm button and the confirmation prompt" />

You see "Manufacturing order confirmed". The state becomes **Confirmed** and the components are reserved. The **MO Readiness** shows **Ready** when everything is in stock.

## Step 4: Plan

Planning gives each work order a start and end time on its work center.

1. Click **Plan**.

<ImagePopup src="/images1/manufacturing/first_mo_planned.png" alt="Confirmed MO after Plan with Unplan button visible and Work Orders tab showing Start and End dates" />

You see "Manufacturing order planned". Open the **Work Orders** tab to read the dates. Click **Unplan** to undo. See [Plan and schedule](../workflows/plan-and-schedule.md).

## Step 5: Run the work orders

1. Go to `Manufacturing → Operations → Work Orders`.
2. Find **Assemble Components** for the order. Click the start icon.
3. Click the done icon when it is finished.
4. Do the same for **Test & Pack**.

<ImagePopup src="/images1/manufacturing/first_wo_list.png" alt="Work Orders list with the MO/1 rows, one Finished and one In Progress" />

The order moves to **In Progress** after the first start. See [Work orders](../workflows/work-orders.md).

## Step 6: Produce

1. Open the order and click **Produce All**.
2. If a **Consumption Warning** appears, check the quantities and click **Confirm**.

<ImagePopup src="/images1/manufacturing/first_mo_done.png" alt="MO in Done state with the stepper showing Done and Quantity Producing 5" />

You see "Manufacturing order completed". The state becomes **Done**. Components are used up and 5 Business Laptops are in stock. See [Produce and consume](../workflows/produce-and-consume.md).

## Behind the scenes

| Action | Effect |
| --- | --- |
| Confirm | Stock moves are created for each component. A pick transfer such as **WH/PC/16** can appear |
| Plan | Work orders get dates from the work center **Working Hours** |
| Produce All | Components go from Stock through Pre-Production to Production. Finished goods enter stock |

## What you learned

| Step | Result |
| --- | --- |
| Check BoM | You know the recipe |
| Create | **Draft** order **MO/1** |
| Confirm | **Confirmed**, components reserved |
| Plan | Dates on work orders |
| Work | **In Progress** |
| Produce All | **Done** |

## See also

- [Manufacturing settings](manufacturing-settings.md)
- [Manufacturing overview](../index.md)
- [Manufacturing order costs](../basic-setup/manufacturing-order-costs.md)
- [Lots and serial numbers](../workflows/lots-and-serial-numbers.md)
