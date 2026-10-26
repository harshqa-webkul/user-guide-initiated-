# Deliveries

A delivery records goods that leave for a customer. When you validate it, the quantities leave your stock. Most deliveries are created when you confirm a sales order, so your job is to reserve the goods, pack them and click **Validate**.

> **In simple words:** A delivery says "we shipped this to the customer". Validate it and the products leave your stock.

Open `Inventory → Operations → Transfers → Deliveries`.

## Worked scenario: ship SO/3

Sales order **SO/3** sells 3 **Digital Drawing Tablet** and 6 **Stay Warm Electric Warm Blankets**.

1. Confirm the sales order. See [Manage orders](../../../sales/sales/quotations-orders/manage-orders.md).
2. Open the order. Click **Deliveries** in the switcher at the top to open the sub page **Manage SO/3 Deliveries**. It lists the delivery documents with **Source Document** **SO/3**.

<ImagePopup src="/images1/inventory/delv_from_so.png" alt="Manage SO/3 Deliveries sub page listing the delivery documents for sales order SO/3" />

3. Open the delivery from `Inventory → Operations → Transfers → Deliveries`.

<ImagePopup src="/images1/inventory/delv_list.png" alt="Deliveries list searched for WH/OUT with Ready and Done deliveries" />

4. If the state is **Draft**, click **Mark as Todo**. With no stock in the source location (for example **WH/Output**), the state becomes **Waiting** and the buttons are **Check Availability**, **Validate**, **Cancel**, **Print** and **Delete**. Click **Check Availability** to reserve stock. With stock available (for example in **WH/Stock**), the state goes straight to **Ready**.
5. Check the **Operations** table. **Demand** is what the customer ordered. A **Ready** delivery has no **Check Availability** button.

<ImagePopup src="/images1/inventory/delv_view_ready.png" alt="Delivery WH/OUT/00045 in Ready state with source WH/Stock, the Validate, Cancel, Print and Delete buttons and the Operations table" />

6. Turn on **Picked** or fill **Quantity** for what you hand to the carrier. Click **Save changes** if you edited the lines.
7. Click **Validate**. The state becomes **Done**. Only **Return** and **Print** remain.

<ImagePopup src="/images1/inventory/delv_done.png" alt="Delivery WH/OUT/42 in Done state with contact My Company and only the Return and Print buttons" />

8. Open the sales order. The **Delivered** column now shows the quantities.

## Fields

- **_Delivery Address:_** The customer. The order fills it in.
- **_Operation Type:_** Required. Usually **My Company: Delivery Orders**.
- **_Source Location:_** Required. With one step, goods leave **WH/Stock**. With three steps, the delivery takes them from **WH/Output** after Pick and Pack.
- **_Responsible_**, **_Scheduled At_** and **_Source Document_** work as on a receipt.

To start by hand, click **New Delivery**, fill the customer and the lines, then click **Create**. You can also click **Create & create another** or **Cancel**.

::: info
After **Create** you stay on the **Edit** page of the new delivery.
:::

## Cancel a delivery

Click **Cancel**. Aureus asks "Are you sure you would like to do this?". Click **Confirm** to cancel, or **Cancel** to go back. The state bar then highlights **Canceled** and only **Print** and **Delete** remain.

## Check Availability

Stock is reserved when you confirm the order if the operation type's reservation method is **At Confirm**. If it is **Manual**, or stock arrived later, click **Check Availability**. The button shows on **Waiting** documents. It does not show on **Ready** ones.

If you validate with nothing reserved, Aureus shows **No quantities are reserved**.

## Behind the scenes

Validation moves stock from your outgoing location to **Partners/Customers**. The prefix is **OUT**, such as **WH/OUT/42**. In the example warehouse the chain is **WH/PICK** from **WH/Stock** to **WH/Packing Zone**, **WH/PACK** to **WH/Output**, and **WH/OUT** to the customer. For **SO/3** these are **WH/PICK/1**, **WH/PACK/41** and **WH/OUT/42**. See [Three-step flow](../routes/three-step-flow.md).

## Actions and statuses

- **Mark as Todo:** confirms a **Draft** delivery.
- **Check Availability:** reserves stock on a **Waiting** delivery.
- **Validate:** ships the goods and sets **Done**.
- **Cancel:** stops the delivery after you confirm.
- **Print:** always shown. **Delete:** shown while the delivery is not **Done**.
- **Return:** brings goods back after **Done**. See [Backorders and returns](backorders-and-returns.md).

## See also

- [Receipts](receipts.md)
- [Transfers](index.md)
- [Print documents](print-documents.md)
- [Manage orders](../../../sales/sales/quotations-orders/manage-orders.md)
