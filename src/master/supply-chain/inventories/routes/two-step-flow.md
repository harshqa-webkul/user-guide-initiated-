# Two step flow

The two step flow adds one staging step. Received goods wait in `WH/Input` until someone stores them. Outgoing goods are picked from stock into `WH/Output` before the final delivery. Each step is its own document.

> **In simple words:** Receive, then store. Or pick, then deliver.

## When to use it

- Goods arrive in bulk and are put away later.
- You want to prepare orders before the truck comes.
- Different people receive and store.

## Set it in the warehouse

1. Open `Inventory → Configurations → Warehouse Management → Warehouses`.
2. Click **Edit** on your warehouse.
3. Set **Incoming Shipments** to **Receive then Store (Two steps)**.
4. Set **Outgoing Shipments** to **Pick then Deliver (Two steps)**.
5. Click **Save changes**.

<ImagePopup src="/images1/inventory/route_wh_two_step.png" alt="Warehouse edit form with the radio changed on screen but not yet saved: Incoming Shipments Receive then Store (Two steps) and Outgoing Shipments Pick then Deliver (Two steps)" />

::: info
Needs `Inventory → Settings → Manage Warehouses → Multi Steps Routes` and `Locations` on.
:::

## Documents created

| Flow | Document | Prefix | Path |
| --- | --- | --- | --- |
| Receipt | Receipts | WH/IN | Partners/Vendors → WH/Input |
| Receipt | Storage | WH/STOR | WH/Input → WH/Stock |
| Delivery | Pick | WH/PICK | WH/Stock → WH/Output |
| Delivery | Delivery Orders | WH/OUT | WH/Output → Partners/Customers |

The second document appears when you validate the first. The prefixes are the ones used in the dev warehouse.

## Example: receiving

You receive 15 SSD 512GB from Consolidated Components.

1. Open receipt WH/IN/11 and click **Validate**. The SSDs land in `WH/Input`.
2. A storage transfer WH/STOR/n is created and shows **Ready**.
3. Open it from `Inventory → Operations → Transfers → Internal Transfers`.
4. Click **Validate**. The SSDs move to `WH/Stock`.

The screenshot shows a finished storage transfer, WH/STOR/37, from the three-step dev warehouse. It moves goods from `WH/Quality Control` to `WH/Stock`. In the two-step flow the same kind of document moves goods from `WH/Input` to `WH/Stock`.

<ImagePopup src="/images1/inventory/route_two_step_storage.png" alt="Storage transfer WH/STOR/37 in Done state moving Laptop Chassis and LCD Screen 14-inch from WH/Quality Control to WH/Stock, taken from the three-step dev warehouse" />

On a finished receipt, the **Next Transfer** button jumps to the follow-up document.

## Example: delivering

Confirming a sales order creates the delivery WH/OUT and a pick WH/PICK. Validate the pick first. Goods move to `WH/Output`. Then validate WH/OUT so they reach the customer.

## What you do at each step

| Step | Your action |
| --- | --- |
| Receive | Validate WH/IN |
| Store | Validate WH/STOR |
| Pick | Validate WH/PICK |
| Deliver | Validate WH/OUT |

## See also

- [Routes overview](index.md)
- [One step flow](one-step-flow.md)
- [Three step flow](three-step-flow.md)
- [Internal transfers](../operations/internal-transfers.md)
- [Putaway rules](putaway-rules.md)
