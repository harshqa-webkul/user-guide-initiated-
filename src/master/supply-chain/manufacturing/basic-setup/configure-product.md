# Configure a product

Every manufacturing order makes one product from several components. The finished item and each component are ordinary products. This page shows what a product needs so it can be built, consumed and tracked.

> **In simple words:** Use a goods product, turn on stock tracking, then attach a recipe in the **Bills of Materials** tab.

Open products from `Manufacturing → Products → Products`. This is the same product form as in Inventory.

## Settings

A product can only be built or consumed when **Type** is **Goods** and **Track Inventory** is on. A service has no stock. Choosing **Track By** needs `Inventory → Settings → Manage Traceability → Lots & Serial Numbers` to be on. See [Inventory settings](../../inventories/get-started/inventory-settings.md).

## Overview

The list shows every product with its price and stock. Use it to find finished goods and components.

<ImagePopup src="/images1/manufacturing/prod_list.png" alt="Manufacturing Products list filtered to Laptop, showing Business Laptop, Laptop Battery and Laptop Chassis with On Hand values" />

## Create the finished product

1. Go to `Manufacturing → Products → Products` and click **New Product**.
2. Enter the **Name** **Business Laptop**.
3. Set **Type** to **Goods**.
4. Fill **Price** and **Cost**.
5. In the **Inventory** section turn on **Track Inventory**.
6. Click **Create**.

<ImagePopup src="/images1/manufacturing/prod_create_finished.png" alt="New product form for Business Laptop with Type Goods, Price, Cost and Track Inventory on" />

### Fields that matter for manufacturing

- **_Name:_** The name shown on orders and work orders.
- **_Type:_** Choose **Goods**. Manufacturing needs stock.
- **_Track Inventory:_** Turn on so Aureus counts the stock of components and finished goods.
- **_Track By:_** **By Quantity**, **By Lots** or **By Unique Serial Number**. Use lots or serial numbers when you must trace each batch or unit.
- **_Unit of Measure:_** The unit used on the recipe and the order, such as Units.
- **_Cost:_** Used to work out the cost of components and the finished unit. See [Manufacturing order costs](manufacturing-order-costs.md).

::: warning
Choose **Track By** before the first stock arrives. Changing it later can leave old quantities without a lot or serial number. See [Lots and serial numbers](../workflows/lots-and-serial-numbers.md).
:::

## Create the components

Create each component the same way. For the Business Laptop these are Motherboard, RAM 16GB, SSD 512GB, Laptop Battery, LCD Screen 14-inch and Laptop Chassis. Load opening stock with **Update Quantity** or a receipt. See [Configure a product for inventory](../../inventories/products/configure-product.md).

## The Bills of Materials tab

Open a saved product. The sub tabs next to **View** and **Edit** include **Bills of Materials**. It lists every recipe that builds this product.

1. Open **Business Laptop**.
2. Click **Bills of Materials** in the switcher at the top.
3. Click **Create Bill of Material**. The product is already filled in.

<ImagePopup src="/images1/manufacturing/prod_bom_tab.png" alt="Business Laptop product page, Bills of Materials tab listing BOM-MC-LAPTOP" />

See [Bill of materials](bill-of-materials.md) for every field.

## Behind the scenes

Stock lives as a quantity per product and location. A manufacturing order reserves component quantities, then moves them out when you produce. The finished product is added to stock at the end.

## See also

- [Bill of materials](bill-of-materials.md)
- [Configure a product for inventory](../../inventories/products/configure-product.md)
- [Manage products in Sales](../../../sales/sales/products-prices/manage-products.md)
- [Lots and serial numbers](../../inventories/tracking/lots-and-serial-numbers.md)
