# Product configuration

Product configuration holds the shared lists that products and orders draw from. They are currencies, categories, attributes, packagings and unit categories. You set them up once, then pick them from drop-down lists when you work on products and orders.

> **In simple words:** The small lists that describe your products and your money.

Find them under `Purchase → Configurations`. Some entries depend on a setting.

## Settings

| Entry | Menu group | Needs |
| --- | --- | --- |
| **Currencies** | Purchase Orders | Nothing |
| **Categories** | Products | Nothing |
| **Attributes** | Products | **Variants** on |
| **Packagings** | Products | **Packagings** on |
| **UOM Categories** | Units of Measure | Nothing to open. Order lines show **Unit** only with **Unit of Measure** on |

Switch these on in `Purchase → Settings → Manage Products`. See [Purchase settings](../get-started/purchase-settings.md).

<ImagePopup src="/images1/purchase/cfg_menu.png" alt="Configurations menu listing Vendor Price Lists, Currencies, Categories, Attributes, Packagings and UOM Categories" />

## Currencies

A currency lets you buy in the money your vendor uses. The order **Currency** field lists the active ones.

1. Go to `Purchase → Configurations → Currencies`.
2. Open a currency, or click the create button to add one.

<ImagePopup src="/images1/purchase/cfg_currency_form.png" alt="Currency form with Currency Information, Format Configuration, Status and a Currency Rates table" />

- **_Currency Name:_** The official code, for example EUR. Required.
- **_Currency Symbol:_** The sign shown with amounts.
- **_Full Name:_** The long name, for example Euro.
- **_ISO Numeric Code:_** The international number of the currency.
- **_Decimal Places:_** How many decimals amounts show. The default is 2.
- **_Rounding Precision:_** The step used to round amounts.
- **_Status:_** Active currencies appear in lists. Inactive ones do not.

The **Currency Rates** table holds dated exchange rates against the base currency. Click to add a rate with a **Date** and a rate value.

::: tip
Add a rate before you confirm an order in a foreign currency. Aureus converts vendor prices with it.
:::

## Categories

A category groups similar products, such as Laptops or Storage. Categories can be nested.

1. Go to `Purchase → Configurations → Products → Categories`.
2. Click the create button.
3. Enter the **Name** and an optional **Parent**.

<ImagePopup src="/images1/purchase/cfg_category_form.png" alt="Category form with name Storage and parent All" />

4. Click **Create**.

Pick the category in the **Category** field of a product.

## Attributes

An attribute describes a product by a choice, such as size or colour. Each value you add can make a variant.

1. Go to `Purchase → Configurations → Products → Attributes`.
2. Click the create button.
3. Enter the **Name**, for example Capacity. Choose a **Type**.
4. In **Options**, add each value with its **Name**. Colour attributes also have a **Color**.
5. Enter an **Extra Price** if a value costs more.

<ImagePopup src="/images1/purchase/cfg_attribute_form.png" alt="Attribute Capacity with options 256GB, 512GB and 1TB and extra prices" />

6. Click **Create**.

Attach attributes to a product on its **Attributes** page. See [Configure a product](configure-product.md).

## Packagings

A packaging is a standard pack of a product, such as a box of 10. It helps you order whole packs.

1. Go to `Purchase → Configurations → Products → Packagings`.
2. Click the create button. A window opens.
3. Fill the fields.

<ImagePopup src="/images1/purchase/cfg_packaging_form.png" alt="Packaging window with name Box of 10, product Laptop Battery and quantity 10" />

- **_Name:_** The packaging name. Required.
- **_Barcode:_** The barcode printed on the pack.
- **_Product:_** The product it packs. Required.
- **_Qty:_** Units per pack. Required.
- **_Company:_** The company that owns it.

4. Click **Create**.

On an order line, **Packaging Qty** and **Packaging** appear. Aureus can match a line quantity to a pack, such as 20 units as 2 boxes of 10.

## Units of measure

A unit category groups units that convert into each other, such as length or weight. Each unit has a ratio to the reference unit.

1. Go to `Purchase → Configurations → Units of Measure → UOM Categories`.
2. Click the create button.
3. Enter the category **Name**.
4. Under **Units of Measure**, click **Add Unit** for each unit.

<ImagePopup src="/images1/purchase/cfg_uom_form.png" alt="UOM category Weight with units Kilogram as reference and Gram as smaller" />

- **_Unit of Measure:_** The unit name.
- **_Type:_** **Reference**, **Bigger** or **Smaller**. Each category needs exactly one **Reference** unit.
- **_Ratio:_** How the unit compares to the reference. It must be above zero.
- **_Rounding Precision:_** The step for rounding quantities. It must be above zero.

::: warning
A category without a reference unit, or with two, cannot be saved.
:::

## See also

- [Purchase settings](../get-started/purchase-settings.md)
- [Configure a product](configure-product.md)
- [Units of measure in Inventory](../../inventories/products/units-of-measure.md)
- [Attributes and packagings in Inventory](../../inventories/products/attributes-and-packagings.md)
