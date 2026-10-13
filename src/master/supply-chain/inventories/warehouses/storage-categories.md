# Storage categories

A storage category describes how much a kind of shelf can hold. You attach it to locations, and the system then knows the weight limit and the capacity for packages or products. Use it when your racks, bins or pallet positions have real limits.

> **In simple words:** A storage category is a label that says "this shelf holds at most this much", which you stick on one or many locations.

Open `Inventory → Configurations → Warehouse Management → Storage Categories`.

## Settings

The menu appears when **Multi Steps Routes** is on in `Inventory → Settings → Manage Warehouses`. To set capacity by package type, also turn on **Packages** in `Inventory → Settings → Manage Operations`.

## Overview

The list shows **Name**, **Allow New Products**, **Max Weight** and **Company**. You can group by **Allow New Products**. A new database starts with no categories.

<ImagePopup src="/images1/inventory/wh_storage_category_list.png" alt="Storage Categories list with Pallet Rack row showing Mixed and max weight 500" />

## Create a storage category

1. Click **New Storage Category**.
2. Fill the form.
3. Click **Create**.

<ImagePopup src="/images1/inventory/wh_storage_category_create.png" alt="Create Storage Category form with name Pallet Rack, max weight 500 and Allow New Products Mixed" />

- **_Name:_** For example **Pallet Rack**. Required.
- **_Max Weight:_** The most weight a location of this category may hold. The default is 0.
- **_Allow New Products:_** Required. Choose **Empty**, **Same** or **Mixed**. The default is **Mixed**.
- **_Company:_** Your current company by default.

### What Allow New Products means

| Option | Meaning |
|---|---|
| **Empty** | Put new products here only when the location is empty. |
| **Same** | Put new products here only when it already holds the same product. |
| **Mixed** | Put any product here. |

## Capacity tabs

After you save, open the record. The top of the page has the tabs **View**, **Edit**, **Capacity By Packages**, **Capacity By Products** and **Locations**. The **View** tab is read only. Each capacity tab opens its own page where you add and change rows.

### Capacity by packages

1. Open the **Capacity By Packages** tab.
2. Click **Add Package Type Capacity**. The **Create Storage Category Capacity** window opens.
3. Choose the **Package Type** and enter the **Quantity**. Both are required.
4. Click **Create**. The row is saved at once.

Each row has **Edit** and **Delete** links.

Example: a pallet rack holds 4 **Pallet** packages.

### Capacity by products

1. Open the **Capacity By Products** tab.
2. Click **Add Product Capacity**. The **Create Storage Category Capacity** window opens.
3. Choose the **Product** and enter the **Quantity**. Both are required.
4. Click **Create**. The row is saved at once.

Each row has **Edit** and **Delete** links.

Example: a bin holds at most 40 **Vitamin C Tablets 500mg**.

<ImagePopup src="/images1/inventory/wh_storage_category_capacity.png" alt="Capacity By Products page listing Vitamin C Tablets 500mg with quantity 40" />

### Locations tab

The **Locations** tab lists the locations that use this category. Click **Create Location** to add one with the category already set. You can also pick the category on any internal location. See [Locations](locations.md).

## Use it with putaway rules

A putaway rule can name a storage category. When goods arrive, the system sends them to a location of that category. See [Putaway rules](../routes/putaway-rules.md).

::: tip
Start with weight only. Add package or product capacity once the basic flow works.
:::

## See also

- [Locations](locations.md)
- [Putaway rules](../routes/putaway-rules.md)
- [Packages](../tracking/packages.md)
