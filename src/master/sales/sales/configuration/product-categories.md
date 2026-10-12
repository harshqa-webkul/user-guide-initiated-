# Product categories

Categories group your products in a tree, so you can find and sort them. Each category can sit under a parent category. Aureus builds the full path for you.

> **In simple words:** A category is a folder for products. A parent category holds smaller ones.

## Overview

Go to `Sales → Configurations → Categories`.

<ImagePopup src="/images1/sales/cfg_categories_list.png" alt="Sales → Configurations → Categories list with New Category button" />

The list shows these columns:

- **_Name:_** The category name.
- **_Full Name:_** The name with its parents, such as All / Saleable / Services.
- **_Parent Path:_** The ID path of the parents.
- **_Parent:_** The category above this one.
- **_Creator:_** The user who created it.

Use **Group by** to group rows by **Parent**, **Creator**, **Created At** or **Updated At**. You can also filter by **Parent** and **Creator**.

## Create a category

1. Go to `Sales → Configurations → Categories`.
2. Click **New Category**.
3. Fill in the **General** section.

   - **_Name\*:_** Enter the category name.
   - **_Parent:_** Select a parent to make this a subcategory. Leave it empty for a top level category.

   <ImagePopup src="/images1/sales/category_form.png" alt="Category form with Name and Parent fields" />

4. Click **Create**. Click **Create & create another** to add more.

## Actions

- **View:** Open the category to see its details and products.
- **Edit:** Change the name or parent.
- **Delete:** Remove the category. Aureus blocks this if the category is in use.

::: warning
You cannot delete a category that products still use. Move the products first.
:::

## See also

- [Manage products](../products-prices/manage-products.md)
- [Product attributes](./product-attributes.md)
- [Configuration overview](./index.md)
