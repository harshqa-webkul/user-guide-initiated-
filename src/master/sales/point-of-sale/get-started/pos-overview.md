# POS overview

Point of Sale has an admin side for managers and a terminal side for cashiers. This page is a map of both. You learn what each menu does, how retail and restaurant registers differ, and which numbers POS creates for sessions, orders and receipts.

> **In simple words:** Managers set things up in the admin app. Cashiers sell on the terminal. Both read the same data.

## The admin app

Open the **Point of Sale** app. The top menu has six entries.

<ImagePopup src="/images1/pos/pos_admin_menu.png" alt="Point of Sale admin top menu: Dashboard, Orders, Products, Reporting, Configurations and Settings" />

### Dashboard

The **Dashboard** shows one card for each register. A card tells you the register name, its type (restaurant or retail) and whether a session is open. Click **Continue Selling** to go back to an open session. Click **Open Register** to start a new one.

A second screen shows filters (**Terminals**, **Date Range**, **Products**, **POS Categories**, **Salespersons**, **Customers**), the figures **Open Sessions**, **Orders**, **Revenue** and **Failed Operations**, and a **Top Products** chart. See [Dashboard](../reporting/dashboard.md).

### Orders

The **Orders** menu groups five pages:

- **_Orders:_** Every POS order, with tabs **Default**, **Settled**, **Ongoing** and **Refunds**. See [Orders](../orders-payments/orders.md).
- **_Sessions:_** Every shift, with tabs **Default**, **Open**, **Closing Control** and **Closed**. You can run **Cash In/Out** and **Close Session** here. See [Sessions](../sessions/index.md).
- **_Payments:_** Every payment taken at the till. See [Payments](../orders-payments/payments.md).
- **_Preparation Printers:_** Printers that send kitchen or bar tickets. See [Preparation printers](../payments-setup/preparation-printers.md).
- **_Customers:_** The people who bought at your registers. See [Customers](../orders-payments/customers.md).

### Products

The **Products** page lists items you can sell at the till. Tabs include **Goods**, **Services**, **Favorites**, **Archived**, **Inventory Management**, **Components** and **POS**. See [Products](../products-pricing/products.md).

### Reporting

**Reporting** holds three reports: **Orders**, **Sales Details** and **Session Report**. See [Reporting](../reporting/index.md).

### Configurations

**Configurations** is where you build the setup:

- **Payment Methods**, **Coins/Bills**, **Point of Sale** (your registers), **Floors**, **Note Models**.
- **Taxes**.
- **Products**: **PoS Product Categories** and **Attributes**.

### Settings

**Settings** holds module-wide rules on three pages: **Manage Accounts**, **Manage Products** and **Manage Inventory**. See [POS settings](pos-settings.md).

## The cashier terminal

The terminal is a separate full-screen app with three pages in its top bar.

- **_Registers:_** Lists your registers. Each one shows its name, short code and state. Click **Resume** on an open register or **Open register** on a closed one.
- **_Home:_** The start page of one register. A restaurant register shows the floor plan.
- **_Orders:_** All active orders of this register, with their status. You refund, invoice and reprint receipts here.

<ImagePopup src="/images1/pos/pos_terminal_registers.png" alt="Terminal Registers page listing Spice Route Kitchen & Bar and TechNest Electronics, each with a Resume button" />

## Retail and restaurant mode

Each register is either retail or restaurant. You choose this with the **Is a Bar/Restaurant** toggle on the register form.

| | Retail | Restaurant |
| --- | --- | --- |
| Example | TechNest Electronics | Spice Route Kitchen & Bar |
| Start screen | Order screen with product grid | Floor plan with tables |
| Tables | No | Yes, grouped by floor |
| Split bill, early receipt, eat in or take out | No | Optional |
| Actions button | Cancel order | Guests, Transfer / Merge, Cancel order |

See [Set up a register](set-up-a-register.md) for each option.

## Numbers POS creates

POS numbers things for you.

- **_Short code:_** The prefix you type on the register form, for example **TNE**.
- **_Session number:_** Short code plus `SESSION` plus five digits, such as `TNE/SESSION/00002`.
- **_Order number:_** Short code plus five digits, such as `TNE/00001`. A refund order shows the original number with **REFUND**.
- **_Receipt number:_** Three groups, such as `00004-009-0001`. They are the register number, the session number and the order number inside that session.
- **_Tracking number:_** A short number on the order. Cashiers use it to call out an order.

::: tip
Search orders on the terminal by order number, receipt number or customer name.
:::

## See also

- [Set up a register](set-up-a-register.md)
- [Terminal overview](../selling/terminal-overview.md)
- [Point of Sale](../index.md)
