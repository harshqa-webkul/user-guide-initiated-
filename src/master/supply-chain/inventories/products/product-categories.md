# Product categories

A category groups similar products, such as Office Furniture or Pharma. Categories sit in a tree, so one can hold smaller ones. In Inventory a category can also carry routes, so every product inside follows the same path.

> **In simple words:** A category is a folder for products. A route on the folder applies to everything inside.

Open it with `Inventory → Configurations → Products → Categories`. The same records appear in Sales. See [Product categories in Sales](../../../sales/sales/configuration/product-categories.md).

## Overview

The list shows **Name**, **Full Name**, **Parent Path**, **Parent** and **Creator**. Use **Group by** to group by **Parent** or **Creator**.

<ImagePopup src="/images1/inventory/prod_categories_list.png" alt="Product categories list with Name, Full Name, Parent Path and Parent columns" />

## Create a category

1. Go to `Inventory → Configurations → Products → Categories`.
2. Click **New Category**.

<ImagePopup src="/images1/inventory/prod_category_create.png" alt="Create category form with Name Pharma, Parent All and a route selected under Inventory" />

### General

- **_Name\*:_** The category name, such as **Pharma**.
- **_Parent:_** The category above this one, such as **All**. Aureus builds the full path from it.

### Inventory

- **_Routes:_** Pick the routes that apply to products in this category. Example: **My Company: Cross-Dock**.

3. Click **Create**.

::: info
A route set on a category applies only if the route is marked as applicable on product categories. See [Routes and rules](../routes/routes-and-rules.md).
:::

## View a category

The view page shows **General Information** (Name, Parent Category, Full Category Name, Category Path) and, under Inventory, the **Warehouse Routes**.

## Actions and statuses

- **Edit:** Change the name, parent or routes.
- **Delete:** Removes the category from the list. Check that no product still needs it.

## See also

- [Configure a product](configure-product.md)
- [Routes and rules](../routes/routes-and-rules.md)
- [Product categories in Sales](../../../sales/sales/configuration/product-categories.md)
