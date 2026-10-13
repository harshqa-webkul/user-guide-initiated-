# Manage deals

Deals are the heart of Purchase. An order is the document you build to buy goods from a vendor. It starts as a request for quotation (RFQ), becomes a purchase order when you confirm it, and ends as a received and billed deal.

> **In simple words:** One document, one life. You draft it, send it, confirm it, receive the goods and pay the bill.

Open `Purchase → Orders`. The menu shows **Request for Quotation**, **Purchase Orders**, **Purchase Agreements** and **Vendors**.

## The deal flow

```text
RFQ → RFQ Sent → Purchase Order → Locked
 │        │            │
 │        │            └→ To Approve (big orders, when approval is on)
 └────────┴→ Canceled → Set to Draft → RFQ
```

1. **Draft the request.** Create an RFQ with a vendor and products. See [Requests for quotation](quotations.md).
2. **Send it.** Email the vendor or print the PDF. The status becomes **RFQ Sent**.
3. **Confirm it.** Click **Confirm Order**. The RFQ becomes a purchase order. See [Purchase orders](purchase-orders.md).
4. **Receive the goods.** The receipt waits in Inventory. See [Receipts](../../inventories/operations/receipts.md).
5. **Pay the bill.** Create the vendor bill from what you received. See [Vendor bills](vendor-bills.md).

The same record changes status. You never copy data from one document to the next.

## Statuses

| Status | What it means |
| --- | --- |
| **RFQ** | A draft. Nothing is sent. You can edit everything. |
| **RFQ Sent** | The vendor received the request by email or you printed it. |
| **To Approve** | The order is above the approval amount and waits for an approver. |
| **Purchase Order** | The order is confirmed. The receipt is planned. |
| **Locked** | The order is confirmed and protected from changes. |
| **Canceled** | The order is stopped. You can set it back to draft. |

## Two extra statuses on every order

Each order also tracks two side statuses, shown as list columns and filters.

- **Receipt status:** **Nothing To Receive**, **Pending**, **Partially Received**, **Fully Received**.
- **Billing status:** nothing to bill yet, waiting for bills, or fully billed.

## Behind the scenes

Every order gets a number with the **PO/** prefix, such as **PO/3**. RFQs and purchase orders share the same numbers.

When you confirm an order, Aureus plans a receipt in the Inventory app, for example **WH/IN/11**. Only products of the goods type create a receipt. When you create a bill, Aureus bills the quantity you received, minus what you already billed.

::: info
Receipts need the Inventory app. Without it, orders still work, but no receipt is planned.
:::

## Settings that change the flow

| Setting | Effect |
| --- | --- |
| **Purchase Order Approval** | Big orders stop at **To Approve**. |
| **Lock Confirmed Orders** | Confirmed orders go straight to **Locked**. |
| **Purchase Agreements** | Adds the **Purchase Agreements** menu and the **Agreement** field. |

Change them in `Purchase → Settings → Manage Orders`. See [Purchase settings](../get-started/purchase-settings.md).

## Pages in this section

- [Requests for quotation](quotations.md): create, send and confirm an RFQ.
- [Purchase orders](purchase-orders.md): approval, lock, cancel and quantity rules.
- [Receipts](../../inventories/operations/receipts.md): the goods that arrive (in the Inventory guide).
- [Vendor bills](vendor-bills.md): billing what you received.
- [Blanket orders](blanket-orders.md): agree a total quantity and price with a vendor.
- [Purchase templates](purchase-templates.md): reuse the same lines on new RFQs.
- [Purchase agreements](purchase-agreements.md): how both kinds share one list.
- [Contacts](../../../getting-started/contacts/contacts.md): create vendors and set their purchase terms.

## See also

- [Purchase overview](../index.md)
- [First steps](../get-started/first-steps.md)
- [Inventory receipts](../../inventories/operations/receipts.md)
