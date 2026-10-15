# Internal transfers

An internal transfer moves stock from one location to another inside your company. Use it to restock a picking shelf, move goods to a quality area or tidy a warehouse. It changes where stock sits, not how much you own.

> **In simple words:** An internal transfer is "take these from shelf A and put them on shelf B".

Open `Inventory → Operations → Transfers → Internal Transfers`.

## Settings

The menu needs **Locations** on. Go to `Inventory → Settings → Manage Warehouses`, turn on **Locations** and click **Save changes**. See [Locations](../warehouses/locations.md).

## Create an internal transfer

Example: move 20 **Camping Hammock** from **WH/Stock** to **WH/Packing Zone**.

1. Click **New Internal Transfer**.
2. Fill **Contact** if needed. Choose the **Operation Type**. The default is **My Company: Pick**. The list also has **Receipts**, **Delivery Orders**, **Pack**, **Quality Control**, **Storage** and **Internal Transfers**. **Internal Transfers** (prefix **INT**) is the plain choice. With the default **Pick** type, the number looks like **WH/PICK/00010**, not **INT**.
3. Set **Source Location** and **Destination Location**. Defaults are **WH/Stock** and **WH/Packing Zone**.

<ImagePopup src="/images1/inventory/int_create.png" alt="Create Internal Transfer form with Camping Hammock quantity 20 from WH/Stock to WH/Packing Zone" />

4. In the **Operations** tab, click **Add to moves**. Pick the **Product**, set **Demand** to 20 and check the **Unit**.
5. Click **Create**. The form also offers **Create & create another** and **Cancel**. You stay on the **Edit** page, and the **Packaging** column fills in by itself, for example **Pack Of → 20**.
6. Click **Mark as Todo**. With stock available, the state goes straight to **Ready**. If the state is **Waiting**, click **Check Availability**.
7. When the state is **Ready**, click **Validate**. The buttons on a **Ready** transfer are **Validate**, **Cancel**, **Print** and **Delete**.

<ImagePopup src="/images1/inventory/int_validate.png" alt="Internal transfer in Ready state with Validate button" />

The state becomes **Done** and the hammocks now sit in **WH/Packing Zone**.

## Fields

- **_Contact:_** Optional partner.
- **_Operation Type_**, **_Source Location_**, **_Destination Location_**: required.
- **_Responsible_**, **_Scheduled At_**, **_Source Document_**: on the **Additional** tab.
- Table columns match receipts. See [Receipts](receipts.md).

## Automatic internal transfers

Warehouses with extra steps create internal documents for you. The example warehouse produces **WH/PICK**, **WH/PACK**, **WH/QC**, **WH/STOR**, **WH/PC** and **WH/SFP** records. They behave like any internal transfer. Open them from the same list. Click **Next Transfer** on a done document to jump to the one that follows.

::: info
Moving stock never changes the total on hand. Use [Inventory adjustments](../adjustments/inventory-adjustments.md) to change quantities.
:::

## Actions and statuses

Buttons follow the common table in [Transfers](index.md): **Mark as Todo**, **Check Availability** (on **Waiting** only), **Validate**, **Cancel**, **Print**, **Delete**, **Return** and **Next Transfer**.

## See also

- [Transfers](index.md)
- [Locations](../warehouses/locations.md)
- [Putaway rules](../routes/putaway-rules.md)
