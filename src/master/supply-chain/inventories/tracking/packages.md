# Packages

A package is a physical container that holds products, such as a box, a pallet or a parcel. You track it by name, so you can move or ship the whole thing and know what sits inside. A package type is the template: its size and weight limits.

> **In simple words:** A package type is the kind of box. A package is one real box with a name.

## Settings

Go to `Inventory → Settings → Manage Operations` and turn on **Packages**. Click **Save changes**. This reveals `Inventory → Products → Packages` and `Inventory → Configurations → Delivery → Package Types`.

<ImagePopup src="/images1/inventory/pkg_setting_on.png" alt="Manage Operations with the Packages option switched on" />

## Create a package type

1. Go to `Inventory → Configurations → Delivery → Package Types`.
2. Click **New Package Type**. The list shows the columns **Name**, **Height**, **Width** and **Length**.

<ImagePopup src="/images1/inventory/pkg_type_create.png" alt="Package type form named Small Box with size and weight values" />

### General

- **_Name\*:_** For example **Small Box**.
- **Barcode:** Scan code of the type.
- **Company:** Owner company.

### Size

- **_Length\*, Width\*, Height\*:_** The inner size. Default 0.

### Weight

- **_Weight\*:_** Weight of the empty box.
- **_Max Weight\*:_** The most it can carry.

3. Click **Create**.

## Create a package

1. Go to `Inventory → Products → Packages` and click **New Package**.

<ImagePopup src="/images1/inventory/pkg_create.png" alt="Create package form with name PACK007, type Small Box, pack date and location WH/Stock" />

- **_Name\*:_** Package code. The field placeholder reads **eg. PACK007**.
- **_Package Type:_** Pick a type such as **Small Box**. Click **+** next to it to create a type on the spot.
- **_Pack Date:_** The date it was packed. It defaults to today.
- **_Location:_** Where the package sits, such as **WH/Stock**.

2. Click **Create**.

The list opens on the **Internal Locations** tab. The other tab is **Default**. It shows **Name**, **Package Type**, **Location** and **Company**. Group by **Package Type** or **Location**. A package in use cannot be deleted. **Delete** is in the three-dot menu at the end of each row.

<ImagePopup src="/images1/inventory/pkg_list.png" alt="Packages list with PACK007 and its type and location" />

## Put stock in a package

A package must exist before you can pick it. Create it first, as shown above. On a receipt or other transfer, click the small list icon next to **Quantity** on the product row. Its tooltip reads **Manage Stock Moves**. Each line has **Destination Package**, a searchable select. It lists existing packages only. Choose the package that receives that quantity, then click **Save**.

<ImagePopup src="/images1/inventory/pkg_destination_package.png" alt="Manage Stock Moves window with Destination Package PACK010 on a line" />

After validation, the **Quantities** tab and the **Locations** report show the **Package** column. You can also add a quantity directly with a package. See [Configure a product](../products/configure-product.md).

::: warning
A package cannot move into itself. If you see "Can not move same package content", pick a different package.
:::

## Print package labels

Tick one or more packages in the list. Choose a bulk action.

- **Print Barcode:** Prints the package name as a barcode.
- **Print Barcode With Content:** Also prints what sits inside.

On a transfer, the **Print** menu has **Packages**.

## Behind the scenes

A package is a label on stock, like a lot, but it also has a place. When you move a package, everything in it moves with it. Reports can group by **Package**.

## See also

- [Lots and serial numbers](lots-and-serial-numbers.md)
- [Attributes and packagings](../products/attributes-and-packagings.md)
- [Print documents](../operations/print-documents.md)
- [Stock report](../reporting/stock-report.md)
