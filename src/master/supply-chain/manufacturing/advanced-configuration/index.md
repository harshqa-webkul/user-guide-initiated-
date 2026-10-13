# Advanced configuration

Basic setup gets a product built. Advanced configuration describes how the work is done on the shop floor: where each step runs, how long it takes, in which order, and which parts of a bill of materials apply to which variant.

> **In simple words:** Work centers are the places, operations are the steps, and dependencies are the order.

Open `Manufacturing → Configurations`.

::: info Gate
**Work Centers** and **Operations** only appear when **Work Orders** is on in `Manufacturing → Settings → Manage Operations`. Dependencies need **Work Order Dependencies** too. See [Manufacturing settings](../get-started/manufacturing-settings.md).
:::

## How the pieces fit together

```text
Work center  (a place: Assembly Station)
     ^
Operation    (a step on a BoM: Assemble Components)
     |
Bill of materials  (BOM-MC-LAPTOP)
     |
Manufacturing order  ->  one work order per operation
```

Each operation belongs to one BoM and runs at one work center. When you confirm a manufacturing order, Aureus creates one work order for every operation of its BoM.

## Pages in this group

| Page | What you learn |
| --- | --- |
| [Work centers](work-centers.md) | Create a work center, set its working hours, capacity, efficiency and cost per hour. |
| [Operations](operations.md) | Define routing steps, their duration, worksheet and work center. |
| [Work order dependencies](work-order-dependencies.md) | Make one step wait for another. |
| [BoM variants](bom-variants.md) | Use a component or step for chosen variants only. |

## Suggested order

1. Create the work centers.
2. Create the operations and attach each one to a BoM and a work center.
3. Create a manufacturing order and watch the work orders appear.

The sample data in this guide has two work centers, **Assembly Station** and **Quality & Packing**. It also has two operations, **Assemble Components** and **Test & Pack**, both on **BOM-MC-LAPTOP**.

## See also

- [Bill of materials](../basic-setup/bill-of-materials.md)
- [Work orders](../workflows/work-orders.md)
- [Plan and schedule](../workflows/plan-and-schedule.md)
