# Manage products

A product is any good or service you sell. You pick products when you build a quotation. The product holds the price, the cost, the taxes and the invoice policy that the order line uses.

> **In simple words:** A product is a record of what you sell and what it costs.

## Settings

Some fields depend on settings. Go to `Sales → Settings → Manage Products` and turn on the options you need:

- **Variants:** Allow products to have multiple variants.
- **Unit of Measure:** Allow products to have a unit of measure.
- **Packagings:** Allow products to have multiple packagings.
- **Price Lists:** Allow products to be sold at prices set by a price list.


<ImagePopup src="/images1/sales/set_products.png" alt="Manage Products settings page showing Variants, Unit of Measure, Packagings and Price Lists" />

## Overview

Go to `Sales → Products`. The list has these views:

- **Default:** All products.
- **Goods:** Products of type **Goods**.
- **Services:** Products of type **Service**.
- **Favorites:** Products you marked as favorite.
- **Archived:** Archived products.
- **Inventory Management** and **Components:** Extra views for stock and component products.

The list shows **Favorite**, **Images**, **Name**, **Variants**, **Reference**, **Tags**, **Price**, **Cost**, **On Hand** and **Forecasted**. Use **Group by** for **Type**, **Category** or **Created At**.

<ImagePopup src="/images1/sales/products_list.png" alt="Products list with the Default, Goods, Services, Favorites and Archived views and the New Product button" />

## Create a product

1. Go to `Sales → Products`.
2. Click **New Product**.
3. Fill in the form, as described below.
4. Click **Create**, or **Create & create another** to save and start a new product.

<ImagePopup src="/images1/sales/product_form.png" alt="New Product form, full page" />

### General

- **_Name:_** Enter the product name. This field is required.
- **_Description:_** Add a description with the text editor.
- **_Tags:_** Choose one or more tags. See [Tags](../configuration/tags.md).
- **_Images:_** Drag and drop files, or click **Browse**.

### Inventory

This section shows for products of type **Goods**.

- **_Track Inventory:_** Turn on to track stock for this product.
- **_Track By:_** Choose **By Unique Serial Number**, **By Lots** or **By Quantity**. It shows only when lots and serial numbers are enabled in Inventory.

### Operations

- **_Routes:_** Choose how the product is supplied, for example by purchasing or manufacturing. The routes depend on the modules you installed.

### Logistics

- **_Responsible:_** Choose the user who is responsible for the product.
- **_Weight:_** Enter the weight.
- **_Volume:_** Enter the volume.
- **_Customer Lead Time (Days):_** Enter the promised days between order confirmation and delivery.

### Invoice policy

- **_Invoice Policy:_** Choose **Ordered Quantities** or **Delivered Quantities**. See [Invoicing policies](../invoicing/invoicing-policies.md).

### Account properties

- **_Income Account:_** The account used when you validate a customer invoice. The default is **Product Sales**.
- **_Expense Account:_** The account used for the cost of the product. The default is **Expenses**.

### Settings

- **_Type:_** Choose **Goods** or **Service**.
- **_Reference:_** Enter an internal code for the product.
- **_Barcode:_** Enter the barcode.
- **_Category:_** Choose a category. This field is required. The default is **All**. See [Product categories](../configuration/product-categories.md).
- **_Company:_** Choose a company, or keep **All Companies**.

### Pricing

- **_Price:_** The selling price. This field is required.
- **_Uom id:_** The unit of measure for the price. The default is **Units**.
- **_Cost:_** The purchase cost. This field is required.
- **_Uom po id:_** The unit of measure for purchasing. The default is **Units**.
- **_Product taxes:_** Choose the taxes that apply when you sell.
- **_Supplier taxes:_** Choose the taxes that apply when you buy.

<ImagePopup src="/images1/sales/product_form_pricing.png" alt="Product form, Settings and Pricing sections" />

::: tip
Units of measure are covered in [UoM categories](../configuration/uom-categories.md).
:::

## Actions and statuses

After you click **Create**, the app opens the product. From there you can:

- **Edit:** Change the product details.
- **Print Labels:** Enter **Number of Labels** and choose a **Format**, such as **2x7 with price** or **4x12**.
- **Delete:** Remove the product.

If **Variants** is on, the product also has **Attributes** and **Variants** pages. See [Product variants](product-variants.md).

## See also

- [Product variants](product-variants.md)
- [Price lists](price-lists.md)
- [Invoicing policies](../invoicing/invoicing-policies.md)
- [Create a quotation](../quotations-orders/create-quotation.md)
