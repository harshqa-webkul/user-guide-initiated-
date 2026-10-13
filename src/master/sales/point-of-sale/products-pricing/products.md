# Products

A product is anything you sell at the till. It can be a physical item, such as a Glide Wireless Mouse, or a service. The POS Products page is the normal product list with the extra settings that decide whether a product shows in POS.

> **In simple words:** Products are the items on your shelf. Switch on **Available in POS** and they appear on the till.

## Overview

Go to `Point of Sale → Products`.

<ImagePopup src="/images1/pos/products_list_pos_tab.png" alt="Point of Sale → Products list on the POS tab with Glide Wireless Mouse and BudsAir Wireless Earbuds" />

The page opens on the **POS** tab. It has these tabs:

- **Goods:** Physical products.
- **Services:** Products of type service.
- **Favorites:** Products you starred.
- **Archived:** Products you archived.
- **Inventory Management:** Products that track stock.
- **Components:** Products used as parts of other products.
- **POS:** Products with **Available in POS** switched on.

### Columns

- **_Favorite:_** A star you can click.
- **_Images:_** The product picture.
- **_Name:_** The product name.
- **_Variants:_** The number of variants.
- **_Reference_** and **_Tags_**.
- **_Price:_** The sale price with its unit, such as 1,299.00 per Units.
- **_Cost:_** What the product costs you.
- **_On Hand_** and **_Forecasted_:** Stock now and expected stock.

Use **Group by** for **Type**, **Category** or **Created At**.

## Make a product show in POS

1. Go to `Point of Sale → Products`.
2. Click a product, for example **Glide Wireless Mouse**, then click **Edit**.
3. Find the **Point of Sale** section.
4. Switch on **Available in POS**. The hint reads "Make this product available in the Point of Sale terminals".
5. In **PoS Product Categories**, pick one or more categories, for example **Accessories**. This field shows only when **Available in POS** is on.

   <ImagePopup src="/images1/pos/product_form_pos_section.png" alt="Glide Wireless Mouse edit form with Available in POS on and PoS Product Categories set to Accessories" />

6. Click **Save changes**.

The product now appears on the terminal under its category tile.

::: info
Products without a PoS category still sell. Cashiers find them with search instead of a tile.
:::

## Create a product

1. Click **New Product**.
2. Fill in the main fields.

   - **_Name\:_** Required. For example **Butter Chicken**.
   - **_Description_**, **_Tags_** and **_Images_**.
   - **_Type:_** **Goods** or **Service**.
   - **_Reference_** and **_Barcode_:** A barcode lets cashiers scan the item.
   - **_Category\:_** Required. The product category used by Inventory and Sales.
   - **_Price\:_** Required. The selling price.
   - **_Cost\:_** Required. What the product costs you.
   - **_Product taxes_** and **_Supplier taxes_:** The taxes on sale and purchase.

3. Fill in the **Inventory** section if you track stock. Choose **Track Inventory**, then **Track By** unique serial number, lots or quantity.
4. In **Point of Sale**, switch on **Available in POS** and pick **PoS Product Categories**.

<ImagePopup src="/images1/pos/product_form_new.png" alt="New product form for Butter Chicken with Type Goods, Price 450, Product taxes and Available in POS on" />

5. Click **Create**.

The other sections cover logistics (**Responsible**, **Weight**, **Volume**, **Customer Lead Time (Days)**), **Invoice Policy** and **Account Properties** (**Income Account**, **Expense Account**). See [Manage products](../../sales/products-prices/manage-products.md) for them.

## View a product

Open a product to see its details. The view page shows the **Point of Sale** section, with **Available in POS** and the categories. The header buttons are **Update Quantity**, **Print Labels** and **Delete**.

<ImagePopup src="/images1/pos/product_view_pos.png" alt="Product view page showing the Point of Sale section with Available in POS and PoS Product Categories" />

## Example

TechNest Electronics sells **Glide Wireless Mouse** at 1,299 with a cost of 650. The shop switched on **Available in POS** and picked **Accessories**. At the till, the cashier taps the **Accessories** tile and then the mouse. Phones such as the **Nova X5 Smartphone** sit under **Mobiles & Tablets**.

::: tip
Use the **POS** tab to check your till catalogue. Every product in that list is sellable at the till.
:::

## See also

- [Categories and attributes](./categories-and-attributes.md)
- [Pricing and taxes](./pricing-and-taxes.md)
- [Manage products in Sales](../../sales/products-prices/manage-products.md)
- [Products in Inventory](../../../supply-chain/inventories/products/configure-product.md)
