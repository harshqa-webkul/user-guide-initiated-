# Configure a product for inventory

A product form has a section named **Inventory**. It decides whether the product has stock, how it is tracked and how it moves. This page covers that section and the stock tabs of a product. The base fields (name, price, taxes) are in the Sales guide.

> **In simple words:** Switch on **Track Inventory** and Aureus starts counting this product.

Open a product with `Inventory → Products → Products`, then **New Product** or **Edit**.

## Settings

The **Inventory** section shows only when **Type** is **Goods**. A service has no stock. **Track By** needs `Inventory → Settings → Manage Traceability → Lots & Serial Numbers` to be on. See [Inventory settings](../get-started/inventory-settings.md).

## Overview

The product list has the tabs **Default**, **Goods**, **Services**, **Favorites**, **Archived**, **Inventory Management**, **Components** and **POS**.

<ImagePopup src="/images1/inventory/prod_list.png" alt="Inventory products list with On Hand and Forecasted columns" />

- **On Hand:** Quantity sitting in your internal locations now.
- **Forecasted:** What you expect to hold after incoming and outgoing orders.

Both columns show a dash for products that do not track inventory.

## Set up the Inventory section

1. Go to `Inventory → Products → Products` and open a product in **Edit**.
2. Scroll to the **Inventory** section.

<ImagePopup src="/images1/inventory/prod_inventory_section.png" alt="Product edit page Inventory section with Track Inventory on, Track By, Routes and Logistics filled" />

### Tracking

- **_Track Inventory:_** Turn on to manage stock for this product. A storable product is one that needs inventory management.
- **_Track By:_** Choose how you identify stock. Shows when Track Inventory and the lots setting are on.
  - **By Quantity:** Stock is counted in numbers only.
  - **By Lots:** Units share a batch number.
  - **By Unique Serial Number:** Each unit has its own number.

::: warning
Choose **Track By** before the first stock arrives. Changing it later while stock exists can leave old quantities without a lot or serial number. See [Lots and serial numbers](../tracking/lots-and-serial-numbers.md).
:::

### Operations

- **_Routes:_** Tick the routes this product follows, such as Cross-Dock. Routes appear based on your installed apps and settings.

### Logistics

- **_Responsible:_** The user in charge of this product's stock.
- **_Weight:_** Weight of one unit.
- **_Volume:_** Volume of one unit.
- **_Customer Lead Time (Days):_** The promised time between confirming a sales order and delivery.

3. Click **Save changes**.

## Update the quantity

The **Update Quantity** button sits in the header of a storable product. It sets how much you hold.

<ImagePopup src="/images1/inventory/prod_update_quantity_button.png" alt="Product view header with Update Quantity, chatter, Print Labels and Delete buttons" />

- With **Locations** or **Packages** on, the button opens the **Quantities** tab. Click **Add Quantity**, then fill **Location** (default WH/Stock), **Package** and **On Hand Quantity**. Click **Create**.
- Without those settings, it opens a window titled **Update Product Quantity** with **On Hand Quantity**. Click **Update**.
- With tracked lots and **Track By** not set to By Quantity, the button also opens **Quantities**.

<ImagePopup src="/images1/inventory/prod_add_quantity_modal.png" alt="Create Product Quantity window with Location WH/Stock and On Hand Quantity filled" />

If a quantity already exists for the same place, you get a warning. Edit the existing line instead.

::: tip
Use **Update Quantity** only to load opening stock. For counts, use [Inventory adjustments](../adjustments/inventory-adjustments.md).
:::

## Product tabs

A product record has sub tabs next to **View** and **Edit**.

| Tab | What it shows |
| --- | --- |
| **Attributes** | Attributes that create variants. Click **Add Attribute**. |
| **Variants** | Each variant with price, **On Hand** and **Forecasted** |
| **Bills of Materials** | Recipes that use this product. Needs Manufacturing. |
| **Vendors** | Supplier prices. Click **Add Vendor**. Needs Purchase. |
| **Quantities** | Stock per location, package and reserved quantity |
| **IN/OUT** | Every move of this product |

The **Quantities** tab has the tabs **Internal Locations**, **Transit Locations**, **On Hand**, **To Count** and **To Apply**. The **IN/OUT** tab has **To Do**, **Done**, **Incoming**, **Outgoing** and **Internal**.

<ImagePopup src="/images1/inventory/prod_quantities_tab.png" alt="Product Quantities tab showing locations with on hand and reserved quantity" />

## Print labels

Click **Print Labels** in the header. Enter **Number of Labels** and choose **Format**. Options are Dymo, 2x7 with price, 4x7 with price, 4x12 and 4x12 with price. Click **Submit**.

## Behind the scenes

Stock lives as a quantity per product and location. Receipts add to it, deliveries remove from it, and counts correct it.

## See also

- [Manage products in Sales](../../../sales/sales/products-prices/manage-products.md)
- [Product categories](product-categories.md)
- [Lots and serial numbers](../tracking/lots-and-serial-numbers.md)
- [Inventory adjustments](../adjustments/inventory-adjustments.md)
