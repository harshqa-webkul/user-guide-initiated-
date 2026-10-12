# Invoicing policies

The invoice policy decides when you can invoice a customer for an order line. You can invoice by the quantity that was ordered, or by the quantity that was delivered. You set a default for all products, and you can override it on a single product.

> **In simple words:** The invoice policy answers one question: do you invoice before delivery or after it?

## Settings

Set the default policy for all products.

1. Go to `Sales → Settings → Manage Invoice`.
2. Under **Invoice Policy**, choose one option:

   - **Ordered Quantities:** You can invoice the quantity on the order as soon as it is confirmed. The goods do not need to be delivered first.
   - **Delivered Quantities:** You invoice only what has been delivered.

3. Click **Save changes**.

   <ImagePopup src="/images1/sales/set_manage_invoice.png" alt="Manage Invoice settings page with the Invoice Policy options" />

The page shows this help text: **Define how invoices are generated from sales orders.**

## Set the policy on a product

A product can have its own policy. It overrides the default from the settings.

1. Go to `Sales → Products` and open a product, or click **New Product**.
2. In the **Invoice Policy** section, choose **Ordered Quantities** or **Delivered Quantities**.
3. Click **Save changes**, or **Create** on a new product.

The form shows this help text: **You can invoice goods before they are delivered.** It describes the **Ordered Quantities** choice.

<ImagePopup src="/images1/sales/product_invoice_policy.png" alt="Product form, Invoice Policy section with Ordered Quantities and Delivered Quantities" />

## Which policy applies

For each order line, the app checks in this order:

1. The **Invoice Policy** on the product.
2. The **Invoice Policy** on the parent product, if the line uses a variant.
3. The default policy in **Manage Invoice**.

## How the policy changes the invoice status

- With **Ordered Quantities**, a confirmed order line is ready to invoice at once. The order shows in **Orders To Invoice**.
- With **Delivered Quantities**, a line is ready to invoice when its goods are delivered.

::: tip
Use **Delivered Quantities** when you want to invoice only what you shipped. Use **Ordered Quantities** for services or prepaid goods.
:::

## See also

- [Orders to invoice](order-to-invoice.md)
- [Manage products](../products-prices/manage-products.md)
- [Sales settings](../configuration/settings.md)
