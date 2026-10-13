# Products in Inventory

Inventory only tracks a product when you tell it to. A product that tracks inventory is called storable. It gets a stock quantity, appears in receipts and deliveries, and shows in the stock report. This group covers the inventory side of products.

> **In simple words:** A product becomes part of your stock when you turn on **Track Inventory**.

Open the list with `Inventory → Products → Products`. The same products also show in Sales, Purchase and Manufacturing. The **On Hand** and **Forecasted** columns come from Inventory.

## Pages in this group

| Page | What you learn |
| --- | --- |
| [Configure a product](configure-product.md) | Track Inventory, Track By, Routes, Logistics, Update Quantity |
| [Product categories](product-categories.md) | Group products and set routes per category |
| [Attributes and packagings](attributes-and-packagings.md) | Variants and pack sizes |
| [Units of measure](units-of-measure.md) | Units and unit categories |

## How the pieces fit

```text
Category  →  Product  →  Variants (attributes)
                │
                ├── Packagings (pack of 10)
                ├── Unit of measure (kg, dozen)
                └── Tracking (lot or serial)
```

Lots, serial numbers and packages have their own group. See [Tracking](../tracking/index.md).

::: info
The base product form (name, price, taxes) belongs to Sales. See [Manage products](../../../sales/sales/products-prices/manage-products.md).
:::

## See also

- [Inventory overview](../index.md)
- [First steps](../get-started/first-steps.md)
- [Tracking](../tracking/index.md)
