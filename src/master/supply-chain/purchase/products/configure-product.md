# Configure a product for purchase

A product is anything you buy or sell. The Purchase app opens the same product record as Sales and Inventory, with the tabs a buyer needs. The most useful one is **Vendors**, where you record who sells the product and at what price.

> **In simple words:** Open the product from Purchase and tell Aureus which vendors sell it.

Open the list with `Purchase → Products → Products`. This page covers what a buyer needs. The base fields (name, price, taxes) are in the Sales guide. See [Manage products](../../../sales/sales/products-prices/manage-products.md).

## Settings

Some tabs depend on settings and apps.

| Tab or field | Needs |
| --- | --- |
| **Attributes** and **Variants** | `Purchase → Settings → Manage Products → Variants` |
| **Unit of Measure** on lines | `Manage Products → Unit of Measure` |
| **Packagings** | `Manage Products → Packagings` |
| Stock tabs (quantities and moves) | The Inventory app |
| Bill of materials tab | The Manufacturing app |

See [Purchase settings](../get-started/purchase-settings.md).

## Overview

The product list has the tabs **Default**, **Goods**, **Services**, **Favorites**, **Archived**, **Inventory Management**, **Components** and **POS**. Columns include **Name**, **Variants**, **Reference**, **Price**, **Cost**, **On Hand** and **Forecasted**.

<ImagePopup src="/images1/purchase/prod_list.png" alt="Purchase products list on the Goods tab with Name, Variants, Reference, Price and Cost columns" />

- **_Price:_** What you sell it for.
- **_Cost:_** What it costs you. Aureus uses it as the order line price when no vendor price row matches.

::: tip
Use the **Goods** tab for things you receive and the **Services** tab for work you buy.
:::

## Open a product

1. Go to `Purchase → Products → Products`.
2. Click a product, for example **SSD 512GB**.
3. Use the switcher at the top: **View**, **Edit**, **Attributes**, **Variants**, **Vendors**. With Inventory installed you also see quantities and moves.

<ImagePopup src="/images1/purchase/prod_switcher.png" alt="Product SSD 512GB with the switcher showing View, Edit, Attributes, Variants, Vendors and other pages" />

## Purchase fields on the product

- **_Type:_** Goods or Service. Only goods create a receipt.
- **_Category:_** Groups products. Pick one from your category list.
- **_Cost:_** Your standard cost. It is the fallback order line price when no vendor price matches.
- **_Reference and Barcode:_** Codes your team uses to find the product.

Set **Cost** to a realistic number. If **Cost** is empty, Aureus falls back to **Price**.

## Add a vendor to the product

1. Open the product and click **Vendors** in the switcher.
2. Click **Add Vendor Price**.
3. Choose the **Vendor**. Enter **Quantity** and **Unit Price**.

<ImagePopup src="/images1/purchase/prod_vendors_tab.png" alt="Vendors tab of SSD 512GB listing three FreshFoods Wholesale price rows with unit prices 3500, 3300 and 3100" />

4. Click **Create**.

Every field is explained in [Vendor price lists](vendor-price-lists.md).

**Behind the scenes:** The row is stored with the product. The same row also appears in `Purchase → Configurations → Vendor Price Lists`.

## Variants

With **Variants** on, a product can have attributes such as size or colour. Each combination becomes a variant with its own price rows. On a product with variants, **Add Vendor Price** asks you to choose the **Product** variant.

1. Click **Attributes** in the switcher and add an attribute with its values.
2. Click **Variants** to see the generated combinations.

<ImagePopup src="/images1/purchase/prod_variants.png" alt="Variants page of Big Vision 4K Action Camera listing four variants generated from the Lense Type attribute" />

Create the attributes first. See [Product configuration](product-configuration.md).

## Link to other guides

- Prices, taxes and sales fields: [Manage products](../../../sales/sales/products-prices/manage-products.md).
- Tracking, routes and stock: [Configure a product for inventory](../../inventories/products/configure-product.md).

## See also

- [Vendor price lists](vendor-price-lists.md)
- [Product configuration](product-configuration.md)
- [Quotations](../orders/quotations.md)
