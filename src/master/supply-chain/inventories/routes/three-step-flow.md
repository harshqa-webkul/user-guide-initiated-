# Three step flow

The three step flow is the most controlled setup. Receipts pass through quality control before storage. Deliveries are picked, packed and then shipped. Every stop is its own document, so you can see exactly where an order is.

> **In simple words:** Receive, check, store. Or pick, pack, ship.

## When to use it

- You inspect incoming goods.
- You pack orders at a packing bench.
- You want a clear audit trail for every handover.

The dev warehouse **WH** is set to three steps for incoming and outgoing shipments.

## Set it in the warehouse

1. Open `Inventory → Configurations → Warehouse Management → Warehouses`.
2. Click **Edit** on your warehouse.
3. Set **Incoming Shipments** to **Receive, Quality Control, then Store (Three steps)**.
4. Set **Outgoing Shipments** to **Pick, Pack, then Deliver (Three steps)**.
5. Click **Save changes**.

<ImagePopup src="/images1/inventory/route_wh_three_step.png" alt="Warehouse edit form with the Three steps radio changed on screen but not yet saved, for Incoming Shipments and Outgoing Shipments" />

::: info
Needs `Inventory → Settings → Manage Warehouses → Multi Steps Routes` and `Locations` on.
:::

## Documents created

| Step | Operation type | Prefix | Path |
| --- | --- | --- | --- |
| 1 Receive | Receipts | WH/IN | Partners/Vendors → WH/Input |
| 2 Check | Quality Control | WH/QC | WH/Input → WH/Quality Control |
| 3 Store | Storage | WH/STOR | WH/Quality Control → WH/Stock |
| 1 Pick | Pick | WH/PICK | WH/Stock → WH/Packing Zone |
| 2 Pack | Pack | WH/PACK | WH/Packing Zone → WH/Output |
| 3 Ship | Delivery Orders | WH/OUT | WH/Output → Partners/Customers |

Receipt rules use push: validating one step creates the next. Delivery uses pull: the delivery asks for a pack, and the pack asks for a pick.

## Example: receiving

Purchase order PO/4 buys Laptop Chassis and LCD Screen 14-inch. It produced WH/IN/12, then WH/QC/13, then WH/STOR/37.

1. Validate WH/IN/12. The goods are in `WH/Input`.
2. Open WH/QC/13 and inspect the goods. Click **Validate**. They move to `WH/Quality Control`.
3. Open WH/STOR/37 and click **Validate**. They reach `WH/Stock`.

<ImagePopup src="/images1/inventory/route_three_step_receipt_chain.png" alt="Receipt WH/IN/12 in Done state with the Next Transfer button leading to quality control and storage" />

## Example: delivering

Sales order SO/3 for customer Gemini Furniture produced WH/PICK/1, WH/PACK/41 and WH/OUT/42.

1. Validate WH/PICK/1. Goods move to `WH/Packing Zone`.
2. Validate WH/PACK/41. Goods move to `WH/Output`.
3. Validate WH/OUT/42. Goods leave for the customer.

<ImagePopup src="/images1/inventory/route_three_step_delivery_chain.png" alt="Manage SO/3 Deliveries page listing WH/OUT/42, WH/PACK/41 and WH/PICK/1, all Done" />

You can see every linked document on the **Deliveries** sub page of the sales order, for example **Manage SO/3 Deliveries**.

::: tip
Use `Inventory → Reporting → Moves History` to follow one product through all six steps.
:::

## What you do at each step

| Step | Your action |
| --- | --- |
| Receive, check, store | Validate each document in order |
| Pick, pack, ship | Validate each document in order |
| Missing quantity | Answer the backorder question. See [Backorders and returns](../operations/backorders-and-returns.md) |

## See also

- [Routes overview](index.md)
- [Two step flow](two-step-flow.md)
- [Routes and rules](routes-and-rules.md)
- [Moves history](../reporting/moves-history.md)
- [Sales products](../../../sales/sales/products-prices/manage-products.md)
