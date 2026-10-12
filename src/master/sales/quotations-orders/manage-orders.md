# Manage orders

An order is a quotation that the customer accepted. The Orders page lists every order, so you can see what is delivered, what is invoiced and what is still open. From an order you can create an invoice, lock it, or cancel it.

This page explains the list, the order page, the buttons, and how an order ends with an invoice and a payment.

> **In simple words:** Orders are the quotations your customers said yes to. Use this page to follow them, invoice them and get paid.

## Before you start

An order comes from a confirmed quotation. See [Send and confirm a quotation](./send-and-confirm-quotation.md). We use the same example here: order **SO/1** for Azure Interiors, with 5 Camping Hammocks and 10 Smart LED Desk Lamps. The total is $603.75.

## The Orders list

Open `Sales → Orders → Orders`. Each row is one order.

<ImagePopup src="/images1/sales/orders_list.png" alt="Orders list with the tabs Default, My Orders, To Invoice, Up Selling and Archived" />

### Columns

- **_Number:_** The order number, for example `SO/1`.
- **_Creation Date:_** The day the record was created.
- **_Customer:_** Who ordered.
- **_Sales Person:_** The user who owns the order.
- **_Amount Total:_** The total with tax.
- **_Status:_** The state, for example **Sales Order** or **Cancelled**.

More columns are hidden by default. Open the column toggle on the list to show them:

- **_Delivery Status:_** How much has been delivered. The values are **Nothing To Deliver**, **Pending**, **Started**, **Partially Delivered** and **Fully Delivered**.
- **_Invoice Status:_** How much has been invoiced. The values are **Nothing to Invoice**, **To Invoice**, **Fully Invoiced** and **Upselling Opportunity**.
- **_Untaxed Amount_**, **_Amount Tax_**, **_Expected Date_**, **_Sales Team_** and **_Customer Reference_**.

### Views

The tabs above the list are saved filters:

- **_Default:_** All orders.
- **_My Orders:_** Orders where you are the sales person.
- **_To Invoice:_** Orders with the invoice status **To Invoice**. Start here when you bill.
- **_Up Selling:_** Orders with the **Upselling Opportunity** invoice status. See [Sell more to the same customer](../invoicing/order-to-upsell.md).
- **_Archived:_** Deleted orders.

### Search, group and filter

- Type in the search box to find an order.
- Click **Group by** to group rows, for example by **Customer**, **Sales Person**, **Sales Team**, **Currency** or **Company**.
- Click the filter button to filter by sales person, customer, payment term, currency and more.

See [Search, filter and group records](../../getting-started/search-filter-group.md).

::: tip
Open the **To Invoice** view every morning. Every order in it is waiting for an invoice.
:::

## Open an order

Click a row to open the order. The state bar shows **Sales Order**. The page has four tabs: **View**, **Edit**, **Invoices** and **Deliveries**.

### The View tab

The top part shows the **Customer**, **Expiration**, **Quotation Date** and **Payment Term**. Below it you find these sections:

- **Order Line:** The products you sell.
- **Other Information** and **Terms & Conditions:** Extra details of the order.

The **Order Line** table has the usual columns: **Product**, **Quantity**, **UOM**, **Unit Price**, **Taxes** and **Amount**. A confirmed order adds two more:

- **_Delivered:_** How many units were delivered to the customer.
- **_Invoiced:_** How many units were already invoiced.

For SO/1, both columns start at 0. They grow as you deliver and invoice.

At the bottom you see the **Untaxed Amount**, **Amount Tax**, **Amount Total** and **Margin**.

<ImagePopup src="/images1/sales/order_view_lines.png" alt="Confirmed order with Delivered and Invoiced columns on the order lines" />

### The Edit tab

Click **Edit** to change the order. On this page the delivery and invoice columns are named **Quantity Delivered** and **Quantity Invoiced**.

Once an order is confirmed, the main fields and the order lines are read only. A locked order is read only too.

## Buttons on an order

- **_Cancel:_** Cancels the order. A window lets you email the customer at the same time.
- **_Create Invoice:_** Opens the **Create Invoice** window.
- **_Preview:_** Shows the document as the customer sees it.
- **_Lock_** / **_Unlock_:** Locks the order, or opens it again.

**Create Invoice** only shows while the **Invoice Status** is **To Invoice**. **Lock** and **Unlock** only show on a confirmed order. **Send By Email** and **Confirm** no longer show, because the quotation stage is over.

To cancel an order, use the same window as for a quotation. See [Cancel a quotation](./send-and-confirm-quotation.md#cancel-a-quotation).

### Set an order back to a quotation

A cancelled order shows **Set as Quotation**. Click it to make the record a quotation again. The invoice status is reset to **Nothing to Invoice**.

## Create an invoice

An invoice is the bill you send to the customer. Create it from the order, so the lines and prices come across by themselves.

1. Open the order.
2. Click **Create Invoice**.
3. In the **Create Invoice** window, keep **Regular invoice**. It is the only option.
4. Click **Submit**. Click **Cancel** to close the window without creating anything.

<ImagePopup src="/images1/sales/create_invoice_window.png" alt="Create Invoice window with the Regular invoice option, Submit and Cancel buttons" />

Aureus creates a draft invoice for the quantities your invoicing policy allows. A policy can say "invoice what was ordered" or "invoice what was delivered". See [Invoicing policies](../invoicing/invoicing-policies.md) and [Create an invoice from an order](../invoicing/order-to-invoice.md).

If nothing can be invoiced yet, Aureus shows a warning and creates no invoice.

## Invoices tab

The **Invoices** tab lists every invoice made from this order. The number on the tab counts them. You can **Export** the list and use **Group by**.

- **_Number:_** The invoice number.
- **_State:_** Whether the invoice is a draft, posted or cancelled.
- **_Created By:_** The user who made it.
- **_Customer:_** Who gets billed.
- **_Invoice Date_** and **_Due Date_:** When it was issued and when it must be paid.
- **_Tax Excluded_**, **_Tax_** and **_Total_:** The amounts.
- **_Amount Due:_** How much the customer still owes.
- **_Payment State:_** Whether the invoice is paid.

Click an invoice to open it. For SO/1, expect one row with a total of $603.75.

<ImagePopup src="/images1/sales/order_invoices_tab.png" alt="Invoices tab of an order with a draft invoice, Amount Due and Payment State Not paid" />

A new invoice starts as **Draft** with a **Payment State** of **Not paid**. The **Amount Due** equals the **Total** until a payment is recorded.

## Deliveries tab

This tab only shows when the Inventories plugin is installed. It lists the stock moves that send the goods to the customer. The number on the tab counts them.

- **_Favorite:_** Marks a delivery you want to keep in view.
- **_Reference:_** The delivery number, for example `WH/OUT/42`.
- **_Contact:_** The customer.
- **_Scheduled At:_** The planned date.
- **_Source Document:_** The order that asked for the delivery, for example `SO/3`.
- **_Company:_** The company that ships.
- **_State:_** For example **Done**.

An order can have more than one row, for example a pick, a pack and an out delivery. When they are all **Done**, the **Delivery Status** is **Fully Delivered** and the **Delivered** column is filled.

<ImagePopup src="/images1/sales/order_deliveries_tab.png" alt="Deliveries tab of an order" />

## Payment

Payment is the last step. Aureus does not take money on the order. You record it on the invoice. Here is the path from order to cash.

1. **Payment Term.** On the order, the **Payment Term** field says when the customer must pay, for example **Immediate Payment**. The invoice copies this term to work out its **Due Date**. You set it when you [create the quotation](./create-quotation.md).
2. **Create the invoice.** Click **Create Invoice** on the order, as shown above.
3. **Post the invoice.** Open it from the **Invoices** tab and confirm it. See [Create an invoice](../../finance/customer-invoices/create-invoice.md).
4. **Register the payment.** When the money arrives, open the invoice and register it. See [Register a payment](../../finance/payments/register-payment.md).

After the payment, look at the **Invoices** tab again. The **Amount Due** goes down. When it reaches 0, the **Payment State** shows the invoice as paid.

For SO/1, the **Amount Due** starts at $603.75. A full payment of $603.75 brings it to $0.00.

::: info
Part payments work too. The **Amount Due** shows what is left until the invoice is paid in full.
:::

## Lock an order

Lock stops people from changing a confirmed order by mistake.

1. Open a confirmed order.
2. Click **Lock**. The button now reads **Unlock**, and the order lines can no longer be edited.
3. Click **Unlock** when a change is needed.

To lock every order the moment you confirm it, turn on **Lock Confirm Sales** in the Sales settings. See [Settings](../configuration/settings.md).

::: tip
Lock an order once the customer has agreed. It keeps the price and quantities safe while you deliver and invoice.
:::

## Order status at a glance

| Step | Where you see it | Typical value |
| --- | --- | --- |
| Customer accepts | **Status** | **Sales Order** |
| Ready to bill | **Invoice Status** | **To Invoice** |
| Goods shipped | **Delivery Status** | **Fully Delivered** |
| Bill sent | **Invoices** tab | A row with **Amount Due** |
| Money received | **Payment State** | Paid |

## See also

- [Send and confirm a quotation](./send-and-confirm-quotation.md)
- [Create an invoice from an order](../invoicing/order-to-invoice.md)
- [Sell more to the same customer](../invoicing/order-to-upsell.md)
- [Invoicing policies](../invoicing/invoicing-policies.md)
- [Create an invoice](../../finance/customer-invoices/create-invoice.md)
- [Register a payment](../../finance/payments/register-payment.md)
- [Settings](../configuration/settings.md)
