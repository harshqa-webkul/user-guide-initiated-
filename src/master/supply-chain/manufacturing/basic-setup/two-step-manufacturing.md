# Two-step manufacturing

Two-step manufacturing adds a pick step before production. A storekeeper first moves the components from stock to a staging area. Production then starts from that area. You get a clear record of what left the shelves and when.

> **In simple words:** Pick the parts first, then build. The pick is its own document.

## Settings

The **Manufacturing** radio needs **Multi Steps Routes** and **Locations** on in `Inventory → Settings → Manage Warehouses`. See [One-step manufacturing](one-step-manufacturing.md) for the full gate.

## Choose two steps

1. Open `Inventory → Configurations → Warehouse Management → Warehouses`.
2. Click your warehouse, then the **Edit** tab.
3. In **Resupply Management**, select **Pick components then manufacture (2 steps)** in the **Manufacturing** radio.
4. Click **Save changes**.

<ImagePopup src="/images1/manufacturing/step2_warehouse_radio.png" alt="Warehouse Edit form, Resupply Management, Manufacturing radio with 'Pick components then manufacture (2 steps)' selected, not yet saved" />

::: info
The warehouse now has the location **Pre-Production** and the operation type **Pick Components** (prefix **PC**). See [Locations](../../inventories/warehouses/locations.md) and [Operation types](../../inventories/warehouses/operation-types.md).
:::

## How the stock moves

```text
Stock ──► Pre-Production ──► Production ──► Stock
  pick transfer (WH/PC)   manufacture    finished product
```

The pick transfer moves components from **Stock** to **Pre-Production**. The manufacturing order then consumes them from **Pre-Production**. The finished product goes straight to **Stock**.

## Walk through a manufacturing order

This is the same order as in [One-step manufacturing](one-step-manufacturing.md): **MO/2**, **Business Laptop**, 2 units.

1. Open `Manufacturing → Operations → Manufacturing Orders` and create the order.
2. Click **Confirm**. The state becomes **Confirmed**.
3. Open the **Transfers** sub page. A transfer such as **WH/PC/16** appears with the state **Ready**.

<ImagePopup src="/images1/manufacturing/step2_transfers.png" alt="MO/2 Transfers sub page listing WH/PC/16, Source Document MO/2, State Ready" />

4. Open the transfer and click **Validate**. The components move to **Pre-Production**.

<ImagePopup src="/images1/manufacturing/step2_pick_validated.png" alt="The WH/PC transfer after validation, state Done, product lines Motherboard, RAM 16GB, SSD 512GB, Laptop Battery, LCD Screen 14-inch, Laptop Chassis" />

5. Back on the order, click **Produce All**. The state becomes **Done**.

<ImagePopup src="/images1/manufacturing/step2_mo_done.png" alt="MO/2 in Done state after the pick was validated" />

## Actions and statuses

| Moment | What happens |
|---|---|
| **Confirm** | Creates the pick transfer **WH/PC/…**, state **Ready**. |
| **Validate** (pick) | Components move **Stock** to **Pre-Production**. |
| **Produce All** | Components are consumed from **Pre-Production**. Finished product enters **Stock**. |

::: warning
Validate the pick transfer before you produce. Until then the components are not at the production area.
:::

## See also

- [One-step manufacturing](one-step-manufacturing.md)
- [Three-step manufacturing](three-step-manufacturing.md)
- [Two-step flow in Inventory](../../inventories/routes/two-step-flow.md)
- [Manufacturing order lifecycle](../workflows/index.md)
