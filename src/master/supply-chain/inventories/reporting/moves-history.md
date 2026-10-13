# Moves history

Moves History lists every product movement as one line: what moved, from where, to where, how many and when. Receipts, deliveries, scraps, adjustments and manufacturing all leave lines here. It is your audit trail.

> **In simple words:** A diary of every product movement.

Open it from `Inventory → Reporting → Moves History`. The page title is **Move Lines**.

## Tabs

| Tab | Shows |
| --- | --- |
| **Default** | All lines. The page opens on **Done**. |
| **To Do** | Lines not yet done |
| **Done** | Completed movements |
| **Incoming** | Receipts |
| **Outgoing** | Deliveries |
| **Internal** | Movements inside the warehouse |

<ImagePopup src="/images1/inventory/rep_moves_history.png" alt="Moves History list with tabs Default, To Do, Done, Incoming, Outgoing and Internal" />

## Columns

- **Product:** the item moved.
- **Date:** when it moved.
- **Reference:** the document, for example WH/IN/12.
- **Lot / Serial Numbers** and **Package:** shown when those settings are on.
- **Source Location** and **Destination Location:** the two ends of the move.
- **Quantity** and **Unit:** how much.
- **Done By:** who validated it.
- **Delete:** a red button at the end of each line.

::: warning
Deleting a line removes a record of a real movement. Do not delete lines unless you are sure.
:::

## Group by

Choose **Group by** for Product, Status, Date, Operation, Location or Category. Grouping by Product shows one block per item.

## Filters

Open **Filters** to narrow by Product Category, Source Location, Destination Location, Package, Package Type or Lot/Serial Number. Click **Apply filters**, or **Reset** to clear.

<ImagePopup src="/images1/inventory/rep_moves_filters.png" alt="Moves History filter panel with Source Location WH/Stock and Product Category filled in" />

## Trace a product

Example: where did the Laptop Chassis go?

1. Open `Inventory → Reporting → Moves History`.
2. Search for **Laptop Chassis**.
3. Click the **Done** tab.
4. Read the list from the bottom up. The newest line is at the top.

<ImagePopup src="/images1/inventory/rep_moves_trace.png" alt="Moves History filtered to Laptop Chassis showing receipt, quality control and storage lines" />

From the oldest line to the newest you may see: Virtual Locations/Inventory Adjustment → WH/Stock (an opening stock correction), then Partners/Vendors → WH/Input (reference `PO/4`), then WH/Input → WH/Quality Control, then WH/Quality Control → WH/Stock. The last three lines belong to the same purchase order, so they show the three steps of the receipt.

::: tip
Adjustments appear with `Virtual Locations/Inventory Adjustment` as an end. Scraps use `Virtual Locations/Scrap`.
:::

## See also

- [Reporting overview](index.md)
- [Stock report](stock-report.md)
- [Stock moves and lots](../operations/stock-moves-and-lots.md)
- [Inventory adjustments](../adjustments/inventory-adjustments.md)
