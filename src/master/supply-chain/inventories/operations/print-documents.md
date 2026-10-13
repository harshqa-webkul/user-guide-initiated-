# Print documents

From any transfer you can print the papers that go with the goods: a picking list, a delivery slip, package labels and product labels. All of them sit in one **Print** menu.

> **In simple words:** Click **Print**, pick the paper you need, and Aureus makes a PDF.

Open a transfer and click **Print** in the header.

<ImagePopup src="/images1/inventory/prt_menu.png" alt="Print menu on a done receipt with Picking Operations, Delivery Slip, Packages and Labels" />

## The print menu

| Option | Use |
|---|---|
| **Picking Operations** | A list for the person who collects the goods. |
| **Delivery Slip** | A paper that travels with the parcel. |
| **Packages** | A sheet for the packages in the transfer. |
| **Labels** | Labels for products or lots. Opens the **Labels** window. |

The menu has exactly these four options.

## Display on Delivery Slips

To show lot and serial numbers on the delivery slip:

1. Go to `Inventory → Settings → Manage Traceability`.
2. Turn on **Lots & Serial Numbers**.
3. Turn on **Display on Delivery Slips**.
4. Click **Save changes**.

## Print labels

1. Click **Print**, then **Labels**. The window titled **Labels** opens.
2. If the transfer has no lot lines, the window has one step, **01 Layout Of Labels**. If it has lot lines, a **Type Of Labels** step comes first: **Product Labels** or **Lot/SN Labels**. Click next.
3. Choose **Quantity To Print** from the dropdown: **Operation Quantity** (the default) or **Custom Quantity**.
4. Choose the **Format** with the radio buttons.
5. Click **Submit**. Click **Cancel** to close the window.

<ImagePopup src="/images1/inventory/prt_labels_wizard.png" alt="Labels window at step 01 Layout Of Labels with Quantity To Print set to Operation Quantity and Format 2x7 with price selected" />

### Quantity to print

| Label type | Option | Meaning |
|---|---|---|
| Product | **Operation Quantity** | One label per unit on the transfer. |
| Product | **Custom Quantity** | You type a **Quantity**, from 1 to 100. |
| Lot/SN | **One per lot/SN** | One label per lot or serial number. |
| Lot/SN | **One per unit** | One label per unit. |

### Formats

- Product labels: **Dymo**, **2x7 with price**, **4x7 with price**, **4x12** and **4x12 with price**. The default is **2x7 with price**.
- Lot/SN labels: **4x12**.

::: info
The **Type Of Labels** step shows only when **Lots & Serial Numbers** is on and at least one line has a lot.
:::

## Actions and statuses

Printing never changes the state. You can print in any state, including **Done**.

## See also

- [Stock moves and lots](stock-moves-and-lots.md)
- [Lots and serial numbers](../tracking/lots-and-serial-numbers.md)
- [Packages](../tracking/packages.md)
- [Transfers](index.md)
