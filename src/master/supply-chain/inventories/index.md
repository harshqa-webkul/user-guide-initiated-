# Inventory

Inventory is the part of Aureus ERP that knows what you own, where it sits and where it is going. Every time goods arrive, move, leave or get counted, Inventory records it. Purchase, Sales, Manufacturing and Point of Sale all feed stock into this one place.

> **In simple words:** Inventory answers three questions: what do I have, where is it, and what is on its way.

## The whole stock flow

Stock always travels between **locations**. A location is a place, such as the vendor, a shelf in your warehouse or the customer. Each movement is recorded on a document called a **transfer**. Read the flow in six stages.

```text
1. Set up  →  2. Receive  →  3. Store  →  4. Count  →  5. Deliver  →  6. Report
```

1. **Set up.** Turn on the settings you need, check your warehouse and locations, and make products that track inventory. See [Get started](get-started/index.md).
2. **Receive.** A confirmed purchase order creates a receipt. When the goods arrive, you validate the receipt and stock enters your warehouse.
3. **Store.** Goods go to a shelf or zone. Putaway rules, storage categories and packages help you keep them organised.
4. **Count.** You compare the system quantity with the shelves. Adjustments fix the difference, and scrap removes damaged goods.
5. **Deliver.** A confirmed sales order creates a delivery. You pick, pack and ship, then validate. Stock leaves your warehouse.
6. **Report.** Moves History shows every movement. The stock report shows what sits in each location right now.

```text
Vendor  →  WH/Input  →  WH/Stock  →  WH/Output  →  Customer
 (buy)     (receive)    (store)       (ship)         (sell)
```

How many boxes in the middle you use depends on one or two, or three steps per warehouse. See [Routes](routes/index.md).

## Settings that reveal menus

Some menus and fields stay hidden until you turn on a setting. Go to `Inventory → Settings` and switch on what you need. See [Inventory settings](get-started/inventory-settings.md).

| Setting | Settings page | What it reveals |
| --- | --- | --- |
| **Locations** | Manage Warehouses | **Locations** menu, location fields on transfers and operation types |
| **Multi Steps Routes** | Manage Warehouses | **Routes**, **Rules**, and the step choices on a warehouse |
| **Lots & Serial Numbers** | Manage Traceability | **Lots / Serial Numbers** menu, **Track By** on products |
| **Packages** | Manage Operations | **Packages** and **Package Types** menus |
| **Packagings** | Manage Products | **Packagings** menu, **Packaging** columns on order lines |
| **Variants** | Manage Products | **Attributes** menu |
| **Unit of Measure** | Manage Products | **UOM Categories** menu, unit fields |
| **Dropshipping** | Manage Logistics | **Dropships** under Operations |

## Groups in this guide

| Group | What you learn |
| --- | --- |
| [Get started](get-started/index.md) | The Overview dashboard, settings and a first tutorial |
| [Products](products/index.md) | Storable products, categories, attributes, packagings and units |
| [Tracking](tracking/index.md) | Lots, serial numbers and packages |
| [Warehouses](warehouses/index.md) | Warehouses, locations, operation types and storage categories |
| [Operations](operations/index.md) | Receipts, deliveries, internal transfers and dropships |
| [Adjustments](adjustments/index.md) | Inventory counts and scrap |
| [Routes](routes/index.md) | One, two and three step flows, rules and putaway |
| [Reporting](reporting/index.md) | Moves History and the stock report |
| [Barcode](barcode/index.md) | Scan operations and counts on a phone or scanner |

## See also

- [Inventory overview](get-started/inventory-overview.md)
- [First steps tutorial](get-started/first-steps.md)
- [Purchase orders](../purchase/orders/purchase-orders.md)
- [Manage products in Sales](../../sales/sales/products-prices/manage-products.md)
