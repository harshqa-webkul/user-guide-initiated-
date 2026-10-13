# Attributes and packagings

Attributes and packagings describe how one product comes in different forms. An attribute makes variants, such as a lamp in red or blue. A packaging sets a pack size, such as a pack of 10. Both change how you order and move stock.

> **In simple words:** Attributes answer "which kind?". Packagings answer "how many in a pack?".

## Settings

Go to `Inventory → Settings → Manage Products` and turn on:

- **Variants** to show `Configurations → Products → Attributes`.
- **Packagings** to show `Configurations → Products → Packagings`.

See [Inventory settings](../get-started/inventory-settings.md).

## Attributes

An attribute is a choice with a list of options. Examples from the sample data are **Size** (Select), **Material** (Select), **Lense Type** (Radio) and **Speaker Color** (Color).

<ImagePopup src="/images1/inventory/prod_attributes_list.png" alt="Attributes list with Name and Type columns" />

### Create an attribute

1. Go to `Inventory → Configurations → Products → Attributes`.
2. Click **New Attribute**.
3. Fill the fields.

<ImagePopup src="/images1/inventory/prod_attribute_create.png" alt="Attribute form named Size, type Select, with options Small Medium Large and extra price" />

- **_Name\:_** Required. The attribute name, such as **Size**.
- **_Type:_** **Radio**, **Select** or **Color**. It decides how a buyer picks the option.
- **_Options:_** Click **Add to options**. For each option set **Name\***, **Color** (for the Color type) and **Extra Price\*** (default 0).

4. Click **Create**.

### Use an attribute on a product

Open the product, go to the **Attributes** tab and click **Add Attribute**. Pick the attribute and its values. Aureus creates one variant per combination. Each variant has its own **On Hand** and **Forecasted** quantity.

::: warning
Adding or deleting attributes on a product deletes and recreates its variants. Custom changes on those variants are lost. Do this before you receive stock.
:::

For the full variant walkthrough, see [Product variants](../../../sales/sales/products-prices/product-variants.md).

## Packagings

A packaging is a named pack size for one product. Stock still counts in units. The packaging helps on order lines and in scanning.

<ImagePopup src="/images1/inventory/prod_packagings_list.png" alt="Packagings list with Name, Product, Qty, Barcode, Company and Package Type columns" />

### Create a packaging

1. Go to `Inventory → Configurations → Products → Packagings`.
2. Click **New Packaging**. A window opens.

<ImagePopup src="/images1/inventory/prod_packaging_create.png" alt="New packaging window with name Pack Of 10, product Car Dash Camera, quantity 10 and barcode" />

- **_Name\:_** Required. For example **Pack Of 10**.
- **_Product\:_** Required. The product this pack belongs to, such as **Car Dash Camera**.
- **_Qty\:_** Required. Units in one pack, such as 10.
- **_Barcode:_** Scan code for the pack, such as **PACK-10**.
- **_Company:_** Owner company.
- **_Package Type:_** A box type, when Packages is on.
- **_Routes:_** Routes that apply to this pack.

3. Click **Create**.

On a receipt or delivery, the **Packaging** column on a move line lets you choose the pack. The **Demand** then follows the pack quantity.

::: tip
A packaging is not the same as a package. A packaging is a pack size. A package is a real box you can track. See [Packages](../tracking/packages.md).
:::

## See also

- [Product attributes in Sales](../../../sales/sales/configuration/product-attributes.md)
- [Packagings in Sales](../../../sales/sales/configuration/packagings.md)
- [Configure a product](configure-product.md)
- [Packages](../tracking/packages.md)
