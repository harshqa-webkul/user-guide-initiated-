# Manufacturing

Manufacturing turns components into finished products. You describe the recipe once, then create a manufacturing order (MO) each time you want to build some units. Aureus reserves the components, schedules the work and records what you produce.

> **In simple words:** Write the recipe, order a build, do the work, get finished goods in stock.

Open the app from the top bar: `Manufacturing`. It has four menus: **Operations**, **Products**, **Configurations** and **Settings**.

## The whole flow

```text
Product + Bill of Materials  →  Warehouse steps  →  Manufacturing order (Draft)
        →  Confirm  →  Plan  →  Work orders  →  Produce All  →  Done
```

| Stage | What happens | Page |
| --- | --- | --- |
| Set up | A goods product and a recipe (Bill of Materials) | [Configure a product](basic-setup/configure-product.md), [Bill of materials](basic-setup/bill-of-materials.md) |
| Choose warehouse steps | One, two or three steps for stock movement | [One step](basic-setup/one-step-manufacturing.md), [Two steps](basic-setup/two-step-manufacturing.md), [Three steps](basic-setup/three-step-manufacturing.md) |
| Order | Create the MO in **Draft** | [Manufacturing orders](workflows/manufacturing-orders.md) |
| Confirm | Components are reserved, state **Confirmed** | [Manufacturing orders](workflows/manufacturing-orders.md) |
| Plan | Work orders get dates on work centers | [Plan and schedule](workflows/plan-and-schedule.md) |
| Work | Operators start, pause and finish each step | [Work orders](workflows/work-orders.md) |
| Produce | Components are used, finished goods arrive, state **Done** | [Produce and consume](workflows/produce-and-consume.md) |

## Settings that open menus

Some menus stay hidden until you switch a setting on. Go to `Manufacturing → Settings → Manage Operations`.

| Setting | What it turns on |
| --- | --- |
| **Work Orders** | The **Work Orders** menu, **Work Centers**, **Operations**, the **Work Orders** tab on an MO and the **Operations** tab on a BoM |
| **Work Order Dependencies** | Steps that wait for other steps |
| Multi Steps Routes (Inventory) | The warehouse **Manufacturing** steps (two and three steps) |

See [Manufacturing settings](get-started/manufacturing-settings.md).

## Where to go next

- **Get started**: [Overview](get-started/index.md), [Manufacturing settings](get-started/manufacturing-settings.md), [First steps](get-started/first-steps.md)
- **Basic setup**: [Overview](basic-setup/index.md), [Configure a product](basic-setup/configure-product.md), [Bill of materials](basic-setup/bill-of-materials.md), [One step](basic-setup/one-step-manufacturing.md), [Two steps](basic-setup/two-step-manufacturing.md), [Three steps](basic-setup/three-step-manufacturing.md), [Manufacturing order costs](basic-setup/manufacturing-order-costs.md)
- **Advanced configuration**: [Overview](advanced-configuration/index.md), [Work centers](advanced-configuration/work-centers.md), [Operations](advanced-configuration/operations.md), [Work order dependencies](advanced-configuration/work-order-dependencies.md), [BoM variants](advanced-configuration/bom-variants.md)
- **Workflows**: [Overview](workflows/index.md), [Manufacturing orders](workflows/manufacturing-orders.md), [Plan and schedule](workflows/plan-and-schedule.md), [Work orders](workflows/work-orders.md), [Produce and consume](workflows/produce-and-consume.md), [Lots and serial numbers](workflows/lots-and-serial-numbers.md)

## See also

- [Inventory overview](../inventories/index.md)
- [Purchase overview](../purchase/index.md)
- [Warehouses](../inventories/warehouses/warehouses.md)
