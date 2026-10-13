# Categories and attributes

PoS product categories are the tiles cashiers tap on the terminal screen. Attributes describe choices such as size or colour that a product can have. Both are set up under Configurations.

> **In simple words:** Categories are the folders on your till screen. Attributes are the options inside a product.

## PoS product categories

PoS categories are separate from the normal product categories used in Inventory. They only control how products are grouped at the till.

### Overview

Go to `Point of Sale → Configurations → PoS Product Categories`.

<ImagePopup src="/images1/pos/pos_categories_list.png" alt="PoS Product Categories list with Starters, Pizza & Pasta, Main Course, Beverages, Desserts, Mobiles & Tablets and Accessories" />

The list shows **Name**, **Parent Category** and **Colour**. Use **Group by** to group by **Parent Category**.

### Create a category

1. Go to `Point of Sale → Configurations → PoS Product Categories`.
2. Click **New Category**.
3. Fill in the **General** section.

   - **_Name\:_** Required. For example **Mobiles & Tablets**.
   - **_Parent Category:_** Pick a parent to make a sub category. Leave it empty for a top tile.
   - **_Colour:_** Pick a colour for the tile.
   - **_Image:_** Upload a picture for the tile.

   <ImagePopup src="/images1/pos/pos_category_form.png" alt="PoS category form with Name Mobiles & Tablets, a colour chosen and an image uploaded" />

4. Click **Create**. Click **Create & create another** to add more.

Use **Edit** on a row to change a category. Use **Delete** to remove it.

### Where categories show

- Restaurant example: Spice Route Kitchen & Bar uses **Starters**, **Pizza & Pasta**, **Main Course**, **Beverages** and **Desserts**.
- Retail example: TechNest Electronics uses **Mobiles & Tablets**, **Laptops & Computers**, **Audio** and **Accessories**.

The register decides how they show. In `Point of Sale → Configurations → Point of Sale`, open a register. On the **PoS Interface** tab, use **Show category images** to show pictures on tiles. On the **Product & PoS categories** tab, use **Restrict Categories** and **Available PoS Product Categories** to limit which tiles the register shows.

Preparation printers also use categories. See [Preparation printers](../payments-setup/preparation-printers.md).

## Attributes

An attribute is a property with a list of values, such as **Size** with Small, Medium and Large.

### Overview

Go to `Point of Sale → Configurations → Attributes`.

<ImagePopup src="/images1/pos/pos_attributes_list.png" alt="Attributes list with Size, Material, Lense Type, Projector Lenses and Speaker Color" />

The tabs are **All** and **Archived**. Columns are **Name** and **Type**. Filter or group by **Type**, **Created At** or **Updated At**.

### Create an attribute

1. Go to `Point of Sale → Configurations → Attributes`.
2. Click **New Attribute**.
3. Fill in the **General** section.

   - **_Name\:_** Required. For example **Size**.
   - **_Type\:_** Required. Choose **Radio**, **Select** or **Color**. This sets how the choice looks.

4. In **Options**, enter an **Option Name\*** and an **Extra Price\***. Click **Add to options** for each value.

   <ImagePopup src="/images1/pos/pos_attribute_form.png" alt="Attribute form with Name Size, Type Select and options Small, Medium and Large with extra prices" />

5. Click **Create**.

Row actions are **View**, **Edit** and **Delete**.

::: tip
Use **Extra Price** for options that cost more, such as an extra large size. Use 0 for no change.
:::

## See also

- [Products](./products.md)
- [Product attributes in Sales](../../sales/configuration/product-attributes.md)
- [Set up a register](../get-started/set-up-a-register.md)
