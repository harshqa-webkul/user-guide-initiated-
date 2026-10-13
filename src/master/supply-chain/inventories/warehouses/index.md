# Warehouses and locations

Stock always sits somewhere. Aureus describes "somewhere" with four building blocks: warehouses, locations, operation types and storage categories. This group explains each one and how they fit together, so the transfers you create later make sense.

> **In simple words:** A warehouse is the building, locations are the shelves and zones inside it, and operation types are the kinds of job you do between them.

## How the pieces relate

| Building block | What it is | Example |
|---|---|---|
| **Warehouse** | A physical site that holds stock. It has a short name that prefixes its locations. | My Company, short name **WH** |
| **Location** | A named place where stock can be. Locations sit inside each other like folders. | **WH/Stock**, **WH/Input** |
| **Operation type** | A kind of job, such as a receipt or a delivery. It sets the document prefix and the default from and to locations. | **Receipts**, prefix **IN** |
| **Storage category** | A rule set for a location: how much weight, packages or products it may hold. | A pallet rack with a 500 kg limit |

The tree below shows the dev warehouse after you choose three-step reception and delivery.

```text
Physical Locations
└── WH  (warehouse, type View)
    ├── Stock          (Internal)
    ├── Input          (Internal)
    ├── Quality Control(Internal)
    ├── Output         (Internal)
    └── Packing Zone   (Internal)

Partners
├── Vendors            (Vendor)
└── Customers          (Customer)

Virtual Locations
├── Inventory Adjustment (Inventory Loss)
├── Production           (Production)
└── Scrap                (Inventory Loss)
```

Every stock move goes from one location to another. A receipt moves goods from **Partners/Vendors** to **WH/Stock**. A delivery moves them from **WH/Stock** to **Partners/Customers**. The operation type decides which pair of locations a document starts with.

## Pages in this group

- [Warehouses](warehouses.md): create a warehouse and choose its reception and delivery steps.
- [Locations](locations.md): build the location tree and set the type of each place.
- [Operation types](operation-types.md): see the 14 ready-made job types and what each setting does.
- [Storage categories](storage-categories.md): limit what a location can hold.

::: info
The Locations menu appears only when **Locations** is on in `Inventory → Settings → Manage Warehouses`. Storage categories and the extra step options need **Multi Steps Routes** in the same page. See [Inventory settings](../get-started/inventory-settings.md).
:::

## Where to start

1. Open [Warehouses](warehouses.md) and check the short name and the step options.
2. Read [Locations](locations.md) to understand the tree and the location types.
3. Use [Operation types](operation-types.md) when you need to change a prefix or a default location.

## See also

- [Inventory overview](../get-started/inventory-overview.md)
- [Operations](../operations/index.md)
- [Routes](../routes/index.md)
