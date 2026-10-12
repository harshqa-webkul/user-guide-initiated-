# Create a quotation

A quotation is the offer you send to a customer before they buy. It lists what you sell, how many, at what price, with which taxes, and how long the offer stays open. You create one every time a customer asks "how much would this cost?". When the customer says yes, the same record becomes a sales order, so you never type the data twice.

> **In simple words:** A quotation is a draft order. You can change it freely until the customer agrees.

Throughout this page we use one example. Your customer **Azure Interiors** asks for 5 Camping Hammocks. You will build the quotation for them step by step.

## Settings that change this page

Some fields appear only when you turn on a setting. If you cannot see a field mentioned here, check `Sales → Settings` first. See [Settings](../configuration/settings.md) for the full list.

- **_Default Quotation Validity:_** Sets how many days a new quotation stays valid. It fills the **Expiration** date for you.
- **_Lock Confirm Sales:_** Locks an order after you confirm it, so nobody changes it by mistake.
- **_Discount:_** Adds a **Discount (%)** column to the order lines.
- **_Margins:_** Adds margin columns and a **Margin** total, so you can see your profit.
- **_Unit of Measure:_** Adds the **UOM** column.
- **_Packagings:_** Adds the **Packaging Quantity** and **Packaging** columns.
- **_Price Lists:_** Adds the **Price List** field in the General section.
- **_Variants:_** Lets you pick a product by its variant, such as size or colour.

## The quotation list

Go to `Sales → Orders → Quotations`. This page lists every quotation and order. Use it to find a record, check its status, or start a new quotation.

<ImagePopup src="/images1/sales/quotation_list.png" alt="Quotations list with view tabs, Group by, search box and the Total Amount summary row" />

### Views

The tabs above the list are ready-made views:

- **_Default:_** All quotations and orders.
- **_My Quotations:_** Only records where you are the sales person.
- **_Quotations:_** Records that are still quotations and not yet confirmed.
- **_Sales Orders:_** Confirmed orders.
- **_Archived:_** Deleted records. You can restore them from here.

### Columns

The list shows **Number**, **Creation Date**, **Customer**, **Sales Person**, **Amount Total** and **Status**. Number is the reference, such as SO/1.

Some columns are hidden at first. Open the column toggle icon to show them: **Untaxed Amount**, **Amount Tax**, **Expected Date**, **Sales Team**, **Delivery Status**, **Invoice Status** and **Customer Reference**.

At the bottom, a summary row adds up the **Total Amount** of the records you see. Use it to check, for example, how much value is waiting in open quotations.

### Search, filter and group

- **_Group by:_** Folds the list into groups. Choose from **Medium**, **Source**, **Team**, **Sales Person**, **Currency**, **Company**, **Customer**, **Quotation Date** or **Commitment Date**.
- **Filters:** Click the filter icon, then **Add rule**. Each rule picks a field, a condition and a value. Fields include **Sales Person**, **UTM Source**, **Company**, **Customer**, **Payment Term**, **Currency**, **Created At** and **Updated At**. Click **Apply filters** to see the result.

See [Search, filter and group records](../../getting-started/search-filter-group.md) for the general method.

### Row actions

- Click the clock icon on a row to schedule an activity, such as "call the customer on Friday". See [Activities](../../getting-started/activities.md).
- Use the row menu to **View**, **Edit** or **Delete** a record. Confirmed orders cannot be deleted.
- Tick several rows to delete them together. In the **Archived** view, tick rows to restore them.

## Create a quotation

1. Go to `Sales → Orders → Quotations`.
2. Click **New Quotation**.

<ImagePopup src="/images1/sales/quotation_list.png" alt="Quotations list with the New Quotation button at the top right" />

The state bar at the top shows **Quotation**, **Quotation Sent** and **Sales Order**. It tells you where the record is in its life. A new record starts as **Quotation**. You cannot click the bar. It moves by itself when you send or confirm.

### General

This section holds the basics. Fill it first.

- **_Customer:_** The person or company you are quoting. Required. Pick one from the list, or click the plus icon to create a new customer without leaving the page. Picking a customer also fills in the **Sales Person**, **Payment Term** and **Price List** saved on their contact.
- **_Expiration:_** The last day the offer is valid. Required. It is filled from **Default Quotation Validity** in the settings. For example, with 30 days you get a date one month away. Change it for a customer who needs more time. Once the quotation is saved, you see this date on the view page.
- **_Quotation Date:_** The date you make the offer. Required. It starts as today. After you confirm, the label changes to **Order Date**.
- **_Payment Term:_** The rule for when the customer must pay the invoice. Required. For example, **Immediate Payment** means the invoice is due at once. Another term might give 30 days. This is only a rule for the invoice. No money is taken on the quotation.
- **_Price List:_** A set of prices for a group of customers, for example wholesale. It shows only when **Price Lists** is on. If you choose one, the unit price of each line follows it. The price list can also set the currency.

**Example:** Choose **Azure Interiors**. Keep today as the **Quotation Date**. Keep **Immediate Payment** and the default **Expiration**.

### Order Line

This tab lists what you sell. Each line is one product.

1. Click **Add Product**.
2. Choose the **Product**. Aureus fills the rest of the line for you.
3. Change anything that is different for this customer.
4. Repeat for each product.

<ImagePopup src="/images1/sales/quotation_order_line.png" alt="Create Quotation page, Order Line tab with one product line filled in and the totals below" />

The columns are:

- **_Product:_** What you sell. Required. With **Variants** on, you pick the exact variant.
- **_Quantity:_** How many the customer wants. Required. It starts at 1.
- **_UOM:_** The unit of measure, meaning the unit you count in, such as Units or Dozens. Shows only when **Unit of Measure** is on.
- **_Packaging Quantity:_** How many packs. Shows only when **Packagings** is on.
- **_Packaging:_** The pack type, such as a box of 6. Aureus suggests the best fit for your quantity.
- **_Unit Price:_** The price of one unit. It comes from the product, or from the price list. You can type a different price for this line.
- **_Taxes:_** The sales taxes of the product. You can add or remove taxes on the line.
- **_Discount (%):_** A percentage taken off the line. Shows only when **Discount** is on.
- **_Amount:_** The line total. Aureus calculates it, so you cannot edit it.

A **Lead Time** column also exists. It is hidden at first. Use the column toggle to show it.

**Example:** Click **Add Product** and choose **Camping Hammock**. Set **Quantity** to 5. Unit Price shows $65.00 and Taxes shows 15 %. The Amount is $325.00.

Below the lines, Aureus shows the totals:

- **_Untaxed Amount:_** The sum of the lines before tax.
- **_Amount Tax:_** The tax on all lines.
- **_Amount Total:_** What the customer pays.
- **_Margin:_** Your profit on the quotation. Shows only when **Margins** is on.

::: tip
To remove a line, click its delete icon and confirm.
:::

See [Discounts and margins](../products-prices/discounts-margins.md) and [Packagings](../configuration/packagings.md).

### Optional Products

Use this tab for extras you want to suggest, such as a carry bag with the hammock. They do not change the total. See [Optional products](./optional-products.md).

### Other Information

This tab holds details that are good to have but not required.

**Sales**

- **_Sales Person:_** The user in charge of this sale. It is filled from the customer.
- **_Customer Reference:_** The number your customer uses on their side, such as their purchase request number.
- **_Tags:_** Labels that help you search later. See [Tags](../configuration/tags.md).

**Shipping**

- **_Warehouse:_** The warehouse that ships the goods. It appears when the Inventory plugin is installed.
- **_Delivery Date:_** The date you promise to deliver.

**Tracking**

- **_Source Document:_** The document this quotation came from, for example a customer email number.
- **_Campaign:_** The marketing campaign behind the sale.
- **_Medium:_** The channel, such as email or social media.
- **_Source:_** Where the customer found you, such as a website or a trade show.

These fields feed the **Group by** and filter options on the list, so fill them if you want sales reports by channel.

**Additional Information**

- **_Company:_** The company that issues the quotation. It starts as your current company.
- **_Currency:_** The currency of the quotation. It starts from your company and can follow the price list.

<ImagePopup src="/images1/sales/quotation_other_info.png" alt="Other Information tab with the Sales, Shipping, Tracking and Additional Information sections" />

### Terms & Conditions

Write the **Note** the customer should read, such as delivery terms or the validity of the price. Use the text editor to make it clear.

<ImagePopup src="/images1/sales/quotation_terms.png" alt="Terms & Conditions tab with a note for the customer" />

### Save the quotation

- Click **Create** to save and open the quotation.
- Click **Create & create another** to save and start a blank one.
- Click **Cancel** to leave without saving.

## Edit a quotation

Open the quotation and click the **Edit** tab. Change the fields, then click **Save changes**. You can edit a quotation until it is confirmed. After confirmation, the customer and the dates are locked. With **Lock Confirm Sales** on, the lines are locked too.

## Payment

A quotation does not take payment. Payment comes later, on the invoice. The steps are:

1. **Payment Term:** You choose it on the quotation. It sets the due date of the invoice. Terms are created in the Invoices app. See [Payment terms](../../finance/customer-invoices/payment-terms.md).
2. **Invoice:** After you confirm the order, you create the invoice from it. See [Create an invoice](../../finance/customer-invoices/create-invoice.md).
3. **Register payment:** When the customer pays, you record the payment on the invoice. See [Register a payment](../../finance/payments/register-payment.md).

To follow the money on an order, open it and click the **Invoices** tab. It shows each invoice with its **Payment State** and **Amount Due**. See [Manage orders](./manage-orders.md).

**Example:** Azure Interiors pays with **Immediate Payment**. Their invoice for $603.75 is due on the invoice date. When they pay, you register the payment and **Amount Due** drops to zero.

## Actions and statuses

A saved quotation has the status **Quotation**. Click **Send By Email** to move it to **Quotation Sent**. Click **Confirm** to make it a **Sales Order**. A quotation can also be cancelled. See [Send and confirm a quotation](./send-and-confirm-quotation.md).

::: tip
Use **Chatter** on the quotation to write notes, log messages or plan an activity. See [Chatter](../../getting-started/chatter.md).
:::

::: warning
Check the **Expiration** date before you send. An old date makes the offer look expired.
:::

## Worked example

1. Click **New Quotation**.
2. Choose **Azure Interiors** as the **Customer**.
3. Keep **Immediate Payment** as the **Payment Term**.
4. On **Order Line**, add 5 **Camping Hammock** at $65.00.
5. In **Terms & Conditions**, write "Delivery within 7 days".
6. Click **Create**.
7. Click **Send By Email**, then **Confirm** when they agree.

## See also

- [Optional products](./optional-products.md)
- [Send and confirm a quotation](./send-and-confirm-quotation.md)
- [Manage orders](./manage-orders.md)
- [Manage customers](./manage-customers.md)
- [Product prices](../products-prices/index.md)
