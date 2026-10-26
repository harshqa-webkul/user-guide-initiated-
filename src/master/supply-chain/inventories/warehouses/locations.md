# Locations

A location is a named place where stock can be: a shelf, a zone, a dock, or even a virtual place such as "Customers". Locations sit inside each other, like folders. Every stock move goes from one location to another, so the tree you build here shapes all your documents.

> **In simple words:** Locations are the shelves and zones of your warehouse. Each one has a type that tells the system what kind of place it is.

Open `Inventory → Configurations → Warehouse Management → Locations`.

## Settings

The **Locations** menu appears only when **Locations** is on.

1. Go to `Inventory → Settings → Manage Warehouses`.
2. Turn on **Locations** ("Track product location in your warehouse").
3. Click **Save changes**.

## Overview

The list shows the **Location** (full path), **Type**, **Storage Category** and **Company**. The list opens on the **Internal** tab. Tabs above it filter by type: **All** (19), **Internal** (10), **Customer** (1), **Production** (1), **Vendor** (1) and **Archived** (2). You can group by **Warehouse**, **Type**, **Created At** or **Updated At**.

<ImagePopup src="/images1/inventory/loc_list.png" alt="Locations list on the Internal tab searched for WH/, with tabs All, Internal, Customer, Production, Vendor and Archived" />

## Parent and child locations

A child sits inside a parent. The full name joins the names with a slash, so **Stock** inside **WH** is **WH/Stock**. The dev app has this tree (it also holds sample locations such as **WH/Stock/Rack A1** and **WH/Stock/Shelf A**):

```text
Physical Locations
└── WH
    ├── Stock
    │   ├── Rack A1
    │   └── Shelf A
    ├── Input
    ├── Quality Control
    ├── Output
    ├── Packing Zone
    ├── Pre-Production
    └── Post-Production
Partners
├── Vendors
└── Customers
Virtual Locations
├── Inventory Adjustment
├── Production
└── Scrap
```

Stock in a child counts toward its parent. A location of type **View** is only a folder and never holds stock itself.

## Location types

| Type | Meaning | Dev example |
|---|---|---|
| **View** | A grouping folder. It holds no stock. | WH, Partners |
| **Internal Location** | A real place in your warehouse where stock lives. | WH/Stock |
| **Vendor Location** | Stands for your suppliers. Receipts start here. | Partners/Vendors |
| **Customer Location** | Stands for your customers. Deliveries end here. | Partners/Customers |
| **Transit Location** | Goods on the way between sites. | Inter Warehouse Transit (archived) |
| **Production** | Where materials are used up or made in manufacturing. | Virtual Locations/Production |
| **Inventory Loss** | Where lost, scrapped or corrected stock goes. | Virtual Locations/Scrap |

## Create a location

1. Click **New Location**.
2. Fill the two cards, **General** and **Settings**.
3. Click **Create**.

<ImagePopup src="/images1/inventory/loc_create_internal.png" alt="Create Location form with Rack A1, parent WH/Stock, type Internal Location and cyclic counting frequency 30" />

### General

- **_Location:_** The short name, for example **Rack A1**. Required.
- **_Parent Location:_** The place that contains it, such as **WH/Stock**. The full name becomes **WH/Stock/Rack A1**.
- **External Notes:** Free text about the place. It is a rich text box.

### Settings

- **_Location Type:_** Required. The default is **Internal Location**.
- **_Company:_** Your current company.
- **_Storage Category:_** Limits what the place can hold. Click **+** next to it to create a category on the spot. See [Storage categories](storage-categories.md).

The card also has three toggles:

- **_Is a Scrap Location?_** Marks a place for scrapped or damaged goods.
- **_Is a Dock Location?_** Marks a place for goods ready to ship.
- **_Is a Replenish Location?_** Marks a place used to refill stock. **WH/Stock** has this on.

The fields you see depend on the type.

| Type | Fields shown |
|---|---|
| View, Vendor, Customer, Production | **Company**, **Is a Dock Location?** |
| Internal Location | **Storage Category**, scrap, dock, replenish, cyclic counting |
| Inventory Loss | Scrap and dock toggles |
| Transit Location | Dock toggle and cyclic counting |

### Cyclic counting

Cyclic counting lets you count one location on a regular schedule instead of once a year. It shows for Internal and Transit locations.

- **_Inventory Frequency:_** The number of days between counts. 0 means no cyclic schedule.
- **Last Inventory:** The date of the last count. The system fills it.
- **Next expected:** The next planned count. The system works it out.

See [Inventory adjustments](../adjustments/inventory-adjustments.md).

## Print barcodes

1. Tick one or more locations in the list.
2. Open the bulk actions menu.
3. Click **Print Barcode**.

The bulk actions menu also has **Restore selected**, **Delete selected** and **Force delete selected**.

The edit page also has a **Print** button for one location. Barcodes help in [Scan operations](../barcode/scan-operations.md).

<ImagePopup src="/images1/inventory/loc_print_barcode.png" alt="Locations list with WH/Stock and WH/Input ticked and the bulk Print Barcode action" />

## Actions and statuses

- **Edit** and **View** open the record.
- **Delete** archives it. A location still used by stock or documents cannot be deleted.
- Archived locations appear under **Archived** and can be restored.

## See also

- [Warehouses](warehouses.md)
- [Storage categories](storage-categories.md)
- [Operation types](operation-types.md)
- [Putaway rules](../routes/putaway-rules.md)
