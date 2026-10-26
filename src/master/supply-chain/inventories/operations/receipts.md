# Receipts

A receipt records goods that arrive from a vendor. When you validate it, the quantities are added to your stock. Most receipts are created for you when you confirm a purchase order, so your job is to check the delivery and click **Validate**.

> **In simple words:** A receipt says "the vendor delivered this". Validate it and the products appear in your stock.

Open `Inventory → Operations → Transfers → Receipts`.

## Worked scenario: receive PO/00014

Consolidated Components sent the goods of purchase order **PO/00014**: 10 **Smart LED Desk Lamp**.

1. Confirm the purchase order. See [Purchase orders](../../purchase/orders/purchase-orders.md).
2. Open `Inventory → Operations → Transfers → Receipts`. The receipt **WH/IN/00024** is in the list with **Source Document** **PO/00014**.

<ImagePopup src="/images1/inventory/rcpt_list_ready.png" alt="Receipts list on the Ready tab showing WH/IN/00024 with source document PO/00014" />

You can also reach it from the order. Open the purchase order. The switcher at the top shows **View**, **Edit**, **Vendor Bills** and **Receipts**. Click **Receipts** to open the sub page **Manage PO/00014 Receipts**.

<ImagePopup src="/images1/inventory/rcpt_from_po.png" alt="Manage PO/00014 Receipts sub page of purchase order PO/00014 listing WH/IN/00024" />

3. Click **WH/IN/00024**. The state bar shows **Draft**, **Waiting**, **Ready**, **Done** and **Canceled**, and **Ready** is highlighted.
4. Check the **Operations** tab. The **Demand** column is what you ordered.

<ImagePopup src="/images1/inventory/rcpt_view_ready.png" alt="Receipt WH/IN/00024 in Ready state with the Operations tab showing Smart LED Desk Lamp demand 10" />

5. Count the goods. If the truck matches, open the **Edit** tab of the **View** / **Edit** / **Moves** switcher. Turn on the **Picked** toggle on each line, or set **Quantity**. Click **Save changes**.
6. Click **Validate**.

<ImagePopup src="/images1/inventory/rcpt_validate.png" alt="Receipt WH/IN/00024 header with the blue Validate button and the state bar on Ready" />

7. The state changes to **Done**. The **Return**, **Print** and **Next Transfer** buttons replace **Validate**. The screenshot below shows **WH/IN/12**, a receipt that is **Done**, while **WH/IN/00024** is still **Ready** in the steps above.

<ImagePopup src="/images1/inventory/rcpt_done.png" alt="Receipt WH/IN/12 in Done state with Return, Print and Next Transfer buttons" />

8. Check stock. Open `Inventory → Reporting` and search **Smart LED Desk Lamp**. See [Stock report](../reporting/stock-report.md).

## Fields

On the **Edit** page:

- **_Receive From:_** The vendor. The purchase order fills it in.
- **_Operation Type:_** Required. Usually **Receipts**.
- **_Destination Location:_** Required. The default is **WH/Input**.
- **_Responsible:_** The person in charge. The default is you.
- **_Scheduled At:_** The expected arrival. Setting it here applies it to all lines.
- **_Source Document:_** The order number, such as **PO/00014**.
- **Description** (**Note** tab): Free text for the team.

Table columns: **_Product_**, **Packaging**, **_Demand_**, **_Quantity_**, **_Unit_**, **Picked**. Click **Add to moves** to add a line.

To start a receipt by hand, click **New Receipt**. Fill the vendor and the lines. The form has three buttons: **Create**, **Create & create another** and **Cancel**. Click **Create**.

::: info
After **Create** you stay on the **Edit** page of the new receipt. You are not sent to the **View** page.
:::

A new receipt starts in **Draft**. Click **Mark as Todo** to confirm it. The **Quantity** of each line then defaults to the full **Demand**.

::: warning
If the product tracks lots or serial numbers, Aureus asks you to supply them before you can validate. See [Stock moves and lots](stock-moves-and-lots.md).
:::

## Behind the scenes

Validation moves stock from **Partners/Vendors** to the destination, here **WH/Input**. The document name uses the **IN** prefix, such as **WH/IN/00024**. The state goes from **Ready** to **Done**. The **Received** column on the purchase order updates.

If you receive less than the demand, a window asks about a backorder. See [Backorders and returns](backorders-and-returns.md).

## Multi-step warehouses

The example warehouse uses three steps. After **WH/IN/12** is done, the goods are not in stock yet. **Next Transfer** opens the follow-up documents: **WH/QC** (quality control) and then **WH/STOR** (storage to **WH/Stock**). Validate each one in turn.

With one step, goods go straight to **WH/Stock** and no extra document appears. See [One-step flow](../routes/one-step-flow.md), [Two-step flow](../routes/two-step-flow.md) and [Three-step flow](../routes/three-step-flow.md).

## Actions and statuses

- **Mark as Todo:** confirms a **Draft** receipt. Only **Draft** receipts show it.
- **Validate:** processes the receipt and sets it to **Done**. Click **Save changes** first if you edited the lines.
- **Cancel:** stops it before any stock arrives.
- **Delete:** removes a **Draft** or **Ready** receipt.
- **Return:** sends goods back after **Done**.
- **Print:** see [Print documents](print-documents.md).

A **Draft** or **Ready** receipt shows **Validate**, **Cancel**, **Print** and **Delete**. A **Draft** receipt also shows **Mark as Todo**. A **Done** receipt shows **Return**, **Print** and **Next Transfer**.

## See also

- [Transfers](index.md)
- [Deliveries](deliveries.md)
- [Backorders and returns](backorders-and-returns.md)
- [Purchase orders](../../purchase/orders/purchase-orders.md)
