# Purchase

Purchase is where you buy goods and services from vendors. You ask a vendor for a price, agree on an order, receive the goods and pay the bill. Aureus keeps every step in one record, so you always know what you ordered, what arrived and what you owe.

> **In simple words:** Ask the vendor, order, receive, pay.

## The whole flow

One document carries the deal from start to end. It is a **Request for Quotation** (RFQ) until you confirm it. After that it is a **Purchase Order**. Both use the prefix `PO/`.

```text
Need  →  RFQ  →  Send to vendor  →  Confirm order  →  Receive goods  →  Vendor bill  →  Pay
          PO/1     RFQ Sent         Purchase Order    Inventory         Finance
```

- **Need:** You run low on a product or a customer order needs it.
- **RFQ:** You list the products, quantities and prices you want.
- **Send:** You email the RFQ to the vendor as a PDF.
- **Confirm:** You accept the deal. Aureus plans a receipt in Inventory.
- **Receive:** The warehouse validates the receipt and stock goes up.
- **Bill:** You create the vendor bill from what arrived. Finance handles payment.

## Settings that switch features on

Some menus and fields appear only after you turn on a setting. Go to `Purchase → Settings`.

| Setting | Page | What it adds |
| --- | --- | --- |
| **Purchase Order Approval** | **Manage Orders** | Large orders wait for a manager |
| **Lock Confirmed Orders** | **Manage Orders** | Confirmed orders become read only |
| **Purchase Agreements** | **Manage Orders** | The **Purchase Agreements** menu and the **Agreement** field |
| **Variants** | **Manage Products** | **Attributes** menu and product variants |
| **Unit of Measure** | **Manage Products** | The **Unit** column on order lines |
| **Packagings** | **Manage Products** | **Packagings** menu and packaging columns |

::: info
Receipts need the Inventory app. Without it, an order still works, but no receipt is planned. Vendor bills need the Invoices or Accounting app and a purchase journal.
:::

## Where to go next

**Get started**

- [Get started](get-started/index.md): the first-time path.
- [Purchase settings](get-started/purchase-settings.md): every option and what it turns on.
- [First steps](get-started/first-steps.md): one tutorial from a new vendor to a vendor bill.

**Products**

- [Products](products/index.md): the purchase side of a product.
- [Configure a product](products/configure-product.md): the Vendors tab and purchase fields.
- [Vendor price lists](products/vendor-price-lists.md): prices by vendor and quantity.
- [Product configuration](products/product-configuration.md): currencies, categories, attributes, packagings, units.

**Orders**

- [Orders](orders/index.md): the deal flow and statuses.
- [Contacts](../../getting-started/contacts/contacts.md): create vendors and set their purchase terms.
- [Quotations](orders/quotations.md): create and send an RFQ.
- [Purchase orders](orders/purchase-orders.md): confirm, approve, lock and cancel.
- [Receipts](../inventories/operations/receipts.md): bring the goods in (in the Inventory guide).
- [Vendor bills](orders/vendor-bills.md): bill what you received.
- [Purchase agreements](orders/purchase-agreements.md): blanket orders and templates.

## See also

- [Inventory](../inventories/index.md) for receipts and stock.
- [Vendor bills in Finance](../../finance/vendor-bills/index.md) for payment.
- [Contacts](../../getting-started/contacts/contacts.md) for vendor master data.
