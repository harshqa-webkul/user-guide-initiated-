# Products in Purchase

A purchase order is only as good as the product data behind it. This group shows the purchase side of a product: who sells it, at what price and in which units. It also covers the shared lists, such as categories and currencies, that products and orders use.

> **In simple words:** Tell Aureus what you buy and what each vendor charges.

```text
Product  →  Vendors tab (price rows)  →  Order line price
   ↑
Categories, Attributes, Packagings, Units, Currencies
```

## Pages in this group

| Page | Read it to |
| --- | --- |
| [Configure a product](configure-product.md) | Open a product from Purchase and use its **Vendors** tab |
| [Vendor price lists](vendor-price-lists.md) | Record prices by vendor, quantity and date |
| [Product configuration](product-configuration.md) | Set up currencies, categories, attributes, packagings and unit categories |

## How it fits together

1. You create a product once. The Sales and Inventory guides cover its other fields.
2. You add a price row for each vendor on the **Vendors** tab, or in `Purchase → Configurations → Vendor Price Lists`.
3. When you add the product to an RFQ, Aureus reads those rows and fills the **Unit Price**.

::: info
Some lists only appear when a setting is on. **Attributes** needs **Variants**. **Packagings** needs **Packagings**. See [Purchase settings](../get-started/purchase-settings.md).
:::

## See also

- [Purchase overview](../index.md)
- [Quotations](../orders/quotations.md)
- [Manage products in Sales](../../../sales/sales/products-prices/manage-products.md)
