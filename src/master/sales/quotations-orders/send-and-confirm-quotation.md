# Send and confirm a quotation

A quotation is an offer. Once the lines and prices are right, you send it to the customer. When the customer says yes, you confirm it. The quotation then becomes a sales order, and the work of delivering and invoicing can start.

This page walks through the whole path, one button at a time. For each button you will see what it is for, when to use it and what happens next.

> **In simple words:** Send the offer, wait for a yes, then click **Confirm**. The offer becomes an order.

## An example used on this page

Azure Interiors asks for a price on two products. You create quotation **SO/1** with these lines:

| Product | Quantity | Unit price | Tax |
| --- | --- | --- | --- |
| Camping Hammock | 5 | $65.00 | 15 % |
| Smart LED Desk Lamp | 10 | $20.00 | 15 % |

The untaxed amount is $525.00. The tax is $78.75. The total is **$603.75**.

To create a quotation like this, see [Create a quotation](./create-quotation.md).

## Find your quotation

1. Go to `Sales → Orders → Quotations`.
2. Click the quotation to open it.

The page has four tabs: **View**, **Edit**, **Invoices** and **Deliveries**. The **Deliveries** tab only shows when the Inventories plugin is installed. Use **View** to read the quotation. Use **Edit** to change it.

## The state bar

The **State** bar shows where the quotation is in its life:

- **_Quotation:_** The draft you are preparing. Nobody has been told yet.
- **_Quotation Sent:_** You emailed the quotation to the customer.
- **_Sales Order:_** The quotation is confirmed.

A quotation can also be **Cancelled**. You see this status in the list.

You do not move the bar by hand. It changes when you click a button. Sending moves **Quotation** to **Quotation Sent**. **Confirm** moves it to **Sales Order**.

<ImagePopup src="/images1/sales/quotation_view.png" alt="Quotation page with the Cancel, Confirm, Preview, Send By Email and Delete buttons and the state bar" />

## The buttons at the top

A quotation in **Quotation** or **Quotation Sent** state shows these buttons:

- **_Cancel:_** Stops the quotation. You can email the customer at the same time.
- **_Confirm:_** Turns the quotation into a sales order.
- **_Preview:_** Shows the quotation the way the customer sees it.
- **_Send By Email:_** Emails the quotation to the customer.
- **_Delete:_** Removes the quotation.

Some buttons hide when they no longer make sense:

- **Confirm** and **Send By Email** hide once the quotation is a sales order or is cancelled.
- **Delete** hides once the quotation is a sales order.
- **Set as Quotation** only shows on a cancelled quotation.

## Check the quotation with Preview

Click **Preview** before you send anything. A window opens with the quotation as a document. You see the same layout the customer gets.

Check the customer name, the lines, the taxes and the total. For SO/1, the total must read $603.75.

Close the window when you are done. Preview changes nothing on the quotation.

::: tip
If something looks wrong, close the window, open the **Edit** tab and fix it. Then preview again.
:::

## Send the quotation by email

Use **Send By Email** to give the customer the offer. This is the normal next step after Preview.

1. Click **Send By Email**. The **Send Quotation By Email** window opens.
2. Check **Partners**. The customer is already selected. You can add more people, for example a colleague of the customer.
3. Read the **Subject**. It is filled in for you, and it names the customer and the quotation number.
4. Read the **Description**. This is the message body. It greets the customer, names the quotation and shows the total. Edit it if you want to add a personal line.
5. Check the **Attachment**. Aureus has already made a PDF of the quotation and attached it. Click **Remove** if you do not want to send it.
6. Click **Submit** to send. Click **Cancel** to close the window without sending.

<ImagePopup src="/images1/sales/send_by_email_window.png" alt="Send Quotation By Email window with Partners, Subject, Description and the PDF attachment" />

### What happens after you click Submit

- Each selected partner gets the email with the PDF.
- Aureus shows a message that says who received it.
- The state changes from **Quotation** to **Quotation Sent**. This only happens if at least one email went out.

If some emails fail, Aureus tells you which ones and why. The quotation still moves to **Quotation Sent** when at least one email was sent.

::: warning
A partner needs an email address. If no selected partner has one, Aureus shows a warning and sends nothing. The state does not change.
:::

You can send the quotation again at any time while it is still a quotation. This is useful when you changed the lines after the first email.

## Confirm the quotation

Click **Confirm** when the customer accepts. You can also confirm straight from **Quotation**, without sending first. This is handy when the customer agreed by phone.

1. Open the quotation.
2. Click **Confirm**.
3. Aureus opens the order and shows a success message.

The state bar now reads **Sales Order**. In our example, SO/1 is now a real order for Azure Interiors.

### What Confirm sets in motion

- The **Invoice Status** becomes **To Invoice**. You can now create an invoice.
- If the Inventories plugin is installed, Aureus asks stock to prepare the delivery. You then follow it in the **Deliveries** tab.
- If **Lock Confirm Sales** is on in the settings, the order is locked at once. See [Lock an order](./manage-orders.md#lock-an-order).

If something stops the confirmation, Aureus shows an error message and the quotation stays as it was.

Read [Manage orders](./manage-orders.md) for what to do next.

## Cancel a quotation

Cancel when the customer says no, or when the offer is no longer valid.

1. Click **Cancel**. The **Cancel Quotation** window opens and asks: "Are you sure you want to cancel this Quotation?"
2. Check **Partner**, **Subject** and **Description**. They hold a ready message that tells the customer the order is cancelled.
3. Choose one button:

   - **_Send & Cancel:_** Cancels the quotation and emails the customer.
   - **_Cancel:_** Cancels the quotation and sends no email.
   - **_Close:_** Closes the window. The quotation stays as it was.

The status becomes **Cancelled**. Cancel also shows on a confirmed order. See [Manage orders](./manage-orders.md).

<ImagePopup src="/images1/sales/cancel_quotation_window.png" alt="Cancel Quotation window with Send & Cancel, Cancel and Close buttons" />

## Reopen a cancelled quotation

Changed your mind, or did the customer come back? Open the cancelled quotation and click **Set as Quotation**. The state goes back to **Quotation**. You can then edit, send and confirm it again.

## Delete a quotation

**Delete** removes the quotation from the list. The Orders list keeps deleted records in the **Archived** view.

::: warning
Use **Cancel**, not **Delete**, when you want to keep a record of the offer. A cancelled quotation stays in the list. A confirmed order cannot be deleted.
:::

## Quick reference

| You want to | Click | State afterwards |
| --- | --- | --- |
| See what the customer sees | **Preview** | No change |
| Email the offer | **Send By Email**, then **Submit** | **Quotation Sent** |
| Accept the offer | **Confirm** | **Sales Order** |
| Drop the offer | **Cancel** | **Cancelled** |
| Reopen a cancelled offer | **Set as Quotation** | **Quotation** |

## See also

- [Create a quotation](./create-quotation.md)
- [Manage orders](./manage-orders.md)
- [Settings](../configuration/settings.md)
- [Chatter](../../getting-started/chatter.md)
