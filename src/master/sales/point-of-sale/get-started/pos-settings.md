# POS settings

POS settings are rules shared by every register. They cover default accounts, price lists and when stock is updated. A register can override some of them on its own form. Set these once, before your first session.

> **In simple words:** Settings are the defaults for all registers. A register can change some of them for itself.

Go to `Point of Sale → Settings`. Three pages are listed: **Manage Accounts**, **Manage Products** and **Manage Inventory**. Each page has its own **Save changes** button.

<ImagePopup src="/images1/pos/settings_menu.png" alt="Point of Sale Settings sidebar listing Manage Accounts, Manage Inventory and Manage Products" />

## Manage Accounts

Open `Point of Sale → Settings → Manage Accounts`. These accounts are used when a register has no account of its own.

- **_Default Receivable Account:_** Holds the money from POS sales until the session closes. A register can use its own **Intermediary Account** instead.
- **_Stock Output Account:_** The account that receives the cost of items you sell. Used when **Post Cost of Goods Sold** is on.
- **_Default Balancing Account:_** Takes the small gap when counted cash differs from expected cash at closing.
- **_Post Cost of Goods Sold:_** Posts a cost entry for sold items from the product cost.
- **_Allow Balancing Line:_** Lets a closing entry include a balancing line for a cash difference.

<ImagePopup src="/images1/pos/settings_manage_accounts.png" alt="Manage Accounts page with Default Receivable Account, Stock Output Account and Default Balancing Account selected and the toggles shown" />

::: tip
Choose accounts that belong to your company. A register can still pick its own accounts on the **Accounting** tab. See [Set up a register](set-up-a-register.md).
:::

## Manage Products

Open `Point of Sale → Settings → Manage Products`.

- **_Price Lists:_** Allows products to be sold at prices set by a price list. Turn it on if you want different prices for groups of customers, or time limited offers.

After you turn it on, open a register and use the **Pricing** tab to choose **Flexible Pricelists**, **Available Pricelists** and a **Default Pricelist**.

<ImagePopup src="/images1/pos/settings_manage_products.png" alt="Manage Products page with the Price Lists toggle turned on" />

## Manage Inventory

Open `Point of Sale → Settings → Manage Inventory`.

- **_Inventory Management:_** Choose when stock quantities drop.
  - **In real time:** Stock moves each time an order is paid. Use it when you must see accurate stock all day.
  - **At the session closing:** Stock moves once, when you close the session. Use it for busy tills where speed matters.

<ImagePopup src="/images1/pos/settings_manage_inventory.png" alt="Manage Inventory page with In real time and At the session closing options and one selected" />

The choice is copied to each new session. Changing it later affects only sessions you open afterwards.

::: info
Orders whose stock move needs attention show up as **Failed Operations** on the [Dashboard](../reporting/dashboard.md).
:::

## Example

TechNest Electronics sells the Glide Wireless Mouse all day. The manager picks **In real time** so the stock count stays right. The manager also turns on **Price Lists** so staff can give a loyalty price list to regular customers such as Sofia Rossi.

## See also

- [Set up a register](set-up-a-register.md)
- [Close a session](../sessions/close-session.md)
- [Fiscal positions](../../../finance/taxes/fiscal-positions.md)
