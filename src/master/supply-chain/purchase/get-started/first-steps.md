# First steps with Purchase

This tutorial walks one purchase from start to end. You set up a vendor and a product, ask for a price, send the request, confirm it, receive the goods and create the vendor bill. Each step links to a deeper page, so treat this as a map.

> **In simple words:** Add a vendor, ask for a price, order, receive, bill.

```text
Vendor  →  Product + price  →  RFQ  →  Send  →  Vendor answers  →  Confirm  →  Receipt  →  Vendor bill
```

You need the Inventory app for step 7. The examples use vendor **FreshFoods Wholesale** and the product **SSD 512GB**.

## Step 1: Add the vendor

A vendor is a contact you buy from. You keep their name, email and address once, then pick them on every order.

1. Go to `Purchase → Orders → Vendors` and click **New Vendor**.
2. Enter the name **FreshFoods Wholesale** and an email address.
3. Click **Create**.

<ImagePopup src="/images1/purchase/first_vendor.png" alt="New vendor form for FreshFoods Wholesale with name and email filled" />

**Behind the scenes:** A vendor is a normal contact. Master data steps are in [Contacts](../../../getting-started/contacts/contacts.md). See also [Vendors](../../../getting-started/contacts/contacts.md).

## Step 2: Add the product and its vendor price

1. Go to `Purchase → Products → Products` and click **New Product**.
2. Enter the **Name** **SSD 512GB** and set **Type** to Goods. Fill **Price** and **Cost**, then click **Create**.

<ImagePopup src="/images1/purchase/first_product.png" alt="New product form for SSD 512GB with Type Goods and Cost filled" />

3. Open the product and click **Vendors** in the switcher at the top.
4. Click **Add Vendor Price**. Choose **FreshFoods Wholesale**, enter **Unit Price** 3500 and click **Create**.

<ImagePopup src="/images1/purchase/first_vendor_price.png" alt="Add Vendor Price window with FreshFoods Wholesale, minimum quantity 1 and unit price 3500" />

**Behind the scenes:** This row fills the price on an order line later. See [Configure a product](../products/configure-product.md) and [Vendor price lists](../products/vendor-price-lists.md).

## Step 3: Create the RFQ

An RFQ is a request for a price. It is a draft, so the vendor owes you nothing yet.

1. Go to `Purchase → Orders → Request for Quotation` and click **New RFQ**.
2. Choose the **Vendor** **FreshFoods Wholesale**. Check **Currency** and **Order Deadline**.
3. On the **Products** tab click **Add Product**. Choose **SSD 512GB** and enter **Quantity** 15.

<ImagePopup src="/images1/purchase/first_rfq_form.png" alt="New RFQ with vendor FreshFoods Wholesale and one line SSD 512GB quantity 15 at unit price 3500" />

4. Click **Create**. The order gets a number like `PO/00012` and the status **RFQ**.

**Behind the scenes:** The unit price came from the vendor price row. See [Quotations](../orders/quotations.md).

## Step 4: Send it to the vendor

1. Click **Send By Email**. Check **To**, **Subject** and the message.
2. Click **Send**.

<ImagePopup src="/images1/purchase/first_send_email.png" alt="Send By Email window with the vendor address, subject Purchase Order and the message with Accept and Decline links" />

The status changes to **RFQ Sent**. The vendor receives a PDF and can accept or decline from the email.

## Step 5: The vendor answers

The vendor can answer from the email or from the vendor portal. In the portal the vendor signs in, opens the RFQ and clicks **Accept**.

<ImagePopup src="/images1/purchase/vp_rfq_accept_decline.png" alt="Vendor portal RFQ page with the Accept, Decline and Download/Print buttons" />

Aureus adds a comment to the order chatter. Open the chatter on the order to read it.

<ImagePopup src="/images1/purchase/vp_chatter_accepted.png" alt="Order chatter with the comment The RFQ has been acknowledged by vendor" />

The status stays **RFQ Sent**. The answer is only a note for you. See [Vendor portal](../orders/vendor-portal.md).

## Step 6: Confirm the order

1. Click **Confirm Order** when the vendor agrees.

<ImagePopup src="/images1/purchase/first_confirm.png" alt="Purchase order in Purchase Order status with Create Bill, Lock and Cancel buttons" />

The status becomes **Purchase Order**. With approval on and a total above the minimum, it shows **To Approve** first. See [Purchase orders](../orders/purchase-orders.md).

**Behind the scenes:** Aureus plans a receipt in Inventory for the goods on the order.

## Step 7: Receive the goods

1. Open the order and click **Receipts** in the switcher at the top.
2. Open the receipt, for example **WH/IN/00022**, and click **Validate**.

<ImagePopup src="/images1/purchase/first_receipt_validate.png" alt="Receipt WH/IN/00022 in Ready status with the Validate button" />

The receipt becomes **Done** and stock goes up. See [Receipts](../../inventories/operations/receipts.md).

## Step 8: Create the vendor bill

1. Go back to the order and click **Create Bill**.
2. Click **Vendor Bills** in the switcher. The new bill is listed.

<ImagePopup src="/images1/purchase/first_bill_created.png" alt="Manage PO/00012 Bills page listing the new vendor bill with its total and payment state" />

The bill is a draft. Open it in Finance, click **Confirm**, then register the payment.

**Behind the scenes:** The bill uses received minus billed quantity. Open it in Finance to post and pay. See [Vendor bills](../orders/vendor-bills.md) and [Create a vendor bill](../../../finance/vendor-bills/create-bill.md).

## What you learned

| Step | Result |
| --- | --- |
| Vendor and product | Master data and a price row |
| RFQ and send | Status **RFQ**, then **RFQ Sent** |
| Vendor answers | A chatter comment, status unchanged |
| Confirm | **Purchase Order** and a planned receipt |
| Receive | Stock goes up |
| Bill | A vendor bill for the received quantity |

## See also

- [Purchase settings](purchase-settings.md)
- [Purchase overview](../index.md)
- [Vendor portal](../orders/vendor-portal.md)
- [Purchase agreements](../orders/purchase-agreements.md)
