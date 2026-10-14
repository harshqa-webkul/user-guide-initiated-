# Warehouses

A warehouse is the site where you keep stock. Each warehouse has a name, a short name and an optional address. It also decides how many steps goods take when they arrive and when they leave. Your first warehouse already exists, so you only add one when you run a second site.

> **In simple words:** A warehouse is a building with its own code, plus a choice of how many handling steps receipts and deliveries use.

Open `Inventory → Configurations → Warehouse Management → Warehouses`.

## Settings

The **Settings** block on the warehouse form needs a setting turned on.

1. Go to `Inventory → Settings → Manage Warehouses`.
2. Turn on **Multi Steps Routes**.
3. Click **Save changes**.

Turn on **Locations** on the same page. Creating a new warehouse also turns it on. See [Inventory settings](../get-started/inventory-settings.md).

## Overview

The list shows the columns **Name**, **Short Name**, **Company** and **Address**. The dev database has one warehouse: **My Company**, short name **WH**.

<ImagePopup src="/images1/inventory/wh_list.png" alt="Warehouses list with My Company, short name WH, tabs All and Archived" />

Two tabs sit above the list:

- **All:** every active warehouse.
- **Archived:** warehouses you deleted. Deleting only archives the record. Open the tab to restore a warehouse or remove it for good.

You can group the list by **Company**, **Created At** or **Updated At**, and filter by **Company**.

## Create a warehouse

1. Click **New Warehouse**.
2. Fill the **General** section.
3. Choose the reception and delivery steps in the **Settings** section.
4. Click **Create**.

<ImagePopup src="/images1/inventory/wh_create.png" alt="Create Warehouse form with name Central Warehouse, short name CW and One step selected for both incoming and outgoing shipments (not yet saved)" />

### General

- **_Name:_** The full name, for example **Central Warehouse**. Required.
- **_Short Name:_** A code such as **CW**. Required.
- **_Company:_** Fixed to your current company. You cannot change it here.
- **_Address:_** The contact record for the site. Click **+** to create a contact on the spot.

::: warning
The short name becomes the first part of every location and document name, such as **CW/Stock** and **CW/IN/1**. Choose it with care before you start moving stock.
:::

### Settings

The **Shipment Management** fieldset has two radio lists.

**_Incoming Shipments:_** the default route for goods that arrive.

| Option | Label | What happens |
|---|---|---|
| One step | Receive and Store (One step) | Goods go straight to **Stock**. |
| Two steps | Receive then Store (Two steps) | Goods go to **Input**, then to **Stock**. |
| Three steps | Receive, Quality Control, then Store (Three steps) | Goods go to **Input**, then **Quality Control**, then **Stock**. |

**_Outgoing Shipments:_** the default route for goods that leave.

| Option | Label | What happens |
|---|---|---|
| One step | Deliver (One step) | Goods leave straight from **Stock**. |
| Two steps | Pick then Deliver (Two steps) | Goods move to **Output**, then leave. |
| Three steps | Pick, Pack, then Deliver (Three steps) | Goods move to **Packing Zone**, then **Output**, then leave. |

The default for both lists is **One step**, as the create form shows. Extra steps add extra locations and extra documents, but give you more control.

A third fieldset, **Resupply Management**, appears when the Manufacturing app is installed. Its **Manufacturing** radio sets how many steps manufacturing uses. See [Manufacturing orders](../../manufacturing/workflows/manufacturing-orders.md).

::: tip
The example warehouse uses three steps for reception, delivery and manufacturing. That is why you see documents such as **WH/PICK**, **WH/PACK** and **WH/QC**. See [Three-step flow](../routes/three-step-flow.md).
:::

## View a warehouse

Open a warehouse to see three tabs at the top: **View**, **Edit** and **Routes**. **View** shows the warehouse name, code, company, address and chosen steps. **Routes** opens a page titled **Manage My Company Routes**. It lists the routes the warehouse created for those steps and has an **Add Route** button. See [Routes](../routes/index.md).

<ImagePopup src="/images1/inventory/wh_view_routes.png" alt="Manage My Company Routes page listing Pick components/manufacture, Deliver in 3 steps and Receive in 3 steps" />

## Actions and statuses

- **Edit:** change the name, address or steps. Existing documents keep working.
- **Delete:** a button on the **Edit** tab. It archives the warehouse and moves it to the **Archived** tab.
- **Restore** and **Force delete:** available on archived rows.

## See also

- [Locations](locations.md)
- [Operation types](operation-types.md)
- [One-step flow](../routes/one-step-flow.md)
- [Two-step flow](../routes/two-step-flow.md)
