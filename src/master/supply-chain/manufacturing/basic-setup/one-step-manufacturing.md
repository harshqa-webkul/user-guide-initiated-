# One-step manufacturing

One-step manufacturing is the simplest way to run production. Components leave your stock location and go straight into production. Finished products come back straight into stock. No extra transfer documents are created, so a small shop can work fast.

> **In simple words:** Take the parts from stock, build the product, put it back in stock. One document, the manufacturing order.

Open `Inventory → Configurations → Warehouse Management → Warehouses`, then choose a warehouse and click **Edit**.

## Settings

One step is the default. If you only want to keep it, you need no setting. You turn on the options below only to see the **Manufacturing** radio and change it.

The **Manufacturing** radio sits in the **Resupply Management** fieldset of the warehouse form. It shows only when the Manufacturing app is installed and **Multi Steps Routes** is on.

1. Go to `Inventory → Settings → Manage Warehouses`.
2. Turn on **Multi Steps Routes** and **Locations**.
3. Click **Save changes**.

See [Inventory settings](../../inventories/get-started/inventory-settings.md) and [Warehouses](../../inventories/warehouses/warehouses.md) for the rest of the warehouse form.

## Choose one step

1. Open `Inventory → Configurations → Warehouse Management → Warehouses`.
2. Click your warehouse, then the **Edit** tab.
3. In **Resupply Management**, select **Manufacture (1 step)** in the **Manufacturing** radio.
4. Click **Save changes**.

<ImagePopup src="/images1/manufacturing/step1_warehouse_radio.png" alt="Warehouse Edit form, Resupply Management fieldset, Manufacturing radio with 'Manufacture (1 step)' selected, not yet saved; crop to the fieldset" />

The three options are:

| Radio option | Steps | Page |
|---|---|---|
| Manufacture (1 step) | Manufacture | This page |
| Pick components then manufacture (2 steps) | Pick, manufacture | [Two-step manufacturing](two-step-manufacturing.md) |
| Pick components, manufacture, then store products (3 steps) | Pick, manufacture, store | [Three-step manufacturing](three-step-manufacturing.md) |

## How the stock moves

```text
Stock  ───────────────►  Production  ───────────────►  Stock
   components consumed       finished product created
```

Production is a virtual location. Components disappear from **Stock** when the order is done. The finished product appears in **Stock** at the same time.

## Walk through a manufacturing order

This walk-through uses the same order in all three step pages, so you can compare them. The order is **MO/2**: **Business Laptop**, 2 units, BoM **BOM-MC-LAPTOP**.

1. Open `Manufacturing → Operations → Manufacturing Orders` and click **Create Manufacturing Order**.
2. Select **Business Laptop** as **Product** and set **Quantity** to 2. The BoM fills in.
3. Click **Create**. The order is in **Draft**.
4. Click **Confirm**. The state becomes **Confirmed**.

<ImagePopup src="/images1/manufacturing/step1_mo_confirmed.png" alt="View page of a Confirmed manufacturing order with its header buttons and General section" />

5. Open the **Transfers** sub page. The list is empty, because 1 step creates no pick transfer.

<ImagePopup src="/images1/manufacturing/step1_transfers_empty.png" alt="Transfers sub page of a manufacturing order with no linked transfers, showing 'No operations'" />

6. Click **Produce All**. The state becomes **Done**.

<ImagePopup src="/images1/manufacturing/step1_mo_done.png" alt="The same MO in Done state; Components tab showing consumed quantities" />

## Actions and statuses

| Moment | What happens |
|---|---|
| **Confirm** | The state becomes **Confirmed**. No transfer is created. |
| **Produce All** | Components leave **Stock**. The finished product enters **Stock**. State **Done**. |

::: tip
Choose one step when the same people pick, build and store. It has the least paperwork.
:::

## See also

- [Two-step manufacturing](two-step-manufacturing.md)
- [Three-step manufacturing](three-step-manufacturing.md)
- [Manufacturing order costs](manufacturing-order-costs.md)
- [Routes](../../inventories/routes/index.md)
- [Manufacturing order lifecycle](../workflows/index.md)
