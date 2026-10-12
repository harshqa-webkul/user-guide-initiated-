# Product attributes

Attributes describe how a product can vary, such as size, material or colour. Each attribute has a list of options, and each option can add an extra price. You use them to create product variants.

> **In simple words:** An attribute is a choice, such as Size. Its options are S, M and L.

::: info
Turn on **Variants** in [Settings](./settings.md) to use attributes on products.
:::

## Overview

Go to `Sales → Configurations → Attributes`.

<ImagePopup src="/images1/sales/cfg_attributes_list.png" alt="Sales → Configurations → Attributes list with All and Archived tabs" />

The list has two tabs: **All** and **Archived**. The columns are **Name** and **Type** (**Select**, **Radio** or **Color**). Use **Group by** to group by **Type**, **Created At** or **Updated At**. You can filter by **Type**.

## Create an attribute

1. Go to `Sales → Configurations → Attributes`.
2. Click **New Attribute**.

### General

- **_Name\*:_** Enter the attribute name, such as Size.
- **_Type\*:_** Choose **Radio**, **Select** or **Color**. The default is **Radio**.

### Options

Add one row for each value. Click **Add to options** for more rows.

- **_Name\*:_** Enter the option, such as Large.
- **_Color:_** Pick a colour. This shows only when **Type** is **Color**.
- **_Extra Price\*:_** Enter the amount added to the product price when this option is chosen. The default is 0.

<ImagePopup src="/images1/sales/attribute_form.png" alt="Attribute form with General section and Options rows" />

3. Click **Create**.

## Actions and statuses

- **View:** Open the attribute.
- **Edit:** Change the name, type or options.
- **Delete:** Move the attribute to the **Archived** tab.
- **Restore:** In the **Archived** tab, bring the attribute back.

::: warning
Aureus does not permanently delete an attribute that a product uses. It shows a message naming the product.
:::

## See also

- [Product variants](../products-prices/product-variants.md)
- [Manage products](../products-prices/manage-products.md)
- [Settings](./settings.md)
