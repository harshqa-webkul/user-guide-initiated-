# Dropships

In a dropship the vendor ships goods straight to your customer. You never hold the stock. You sell the product, buy it from the vendor, and the vendor delivers. Use it for items you do not want to store.

> **In simple words:** The customer orders from you, you order from the vendor, and the vendor sends it directly.

Open `Inventory → Operations → Transfers → Dropships`.

## Settings

1. Go to `Inventory → Settings → Manage Logistics`.
2. Turn on **Dropshipping**.
3. Click **Save changes**.

Then open the product, go to its inventory settings and select the **Dropship** route. See [Configure a product](../products/configure-product.md).

## The flow

This is the general idea of a dropship.

```text
Sales order SO  ──confirm──>  Purchase quotation PO  ──confirm──>  Dropship DS
(customer)                    (vendor, customer address)           Vendors to Customers
```

1. Create and confirm a sales order for a product with the **Dropship** route. See [Manage orders](../../../sales/sales/quotations-orders/manage-orders.md).
2. A purchase request for quotation is raised for the vendor. The goods are meant to go to the customer, not to your warehouse.
3. Confirm the purchase order. See [Purchase orders](../../purchase/orders/purchase-orders.md).
4. Open `Inventory → Operations → Transfers → Dropships`. The dropship document is listed there. The list is empty until a dropship exists.

<ImagePopup src="/images1/inventory/drop_list.png" alt="Dropships list showing the dropship DS/00001" />

5. When the vendor confirms shipment, open the dropship and click **Validate**.

## Create a dropship by hand

1. Click **New Dropship**. The form has no **Contact** field.
2. Add the product lines and click **Create**. You stay on the **Edit** page.
3. The first record is numbered **DS/00001**. A hand-made dropship has no **Source Document**.
4. Click **Mark as Todo**. The state goes to **Ready**.
5. The buttons are **Validate**, **Cancel**, **Print** and **Delete**. Click **Validate** to finish.

<ImagePopup src="/images1/inventory/drop_view.png" alt="Dropship DS/00001 with Operation Type Dropship, source Partners/Vendors and destination Partners/Customers" />

## Fields

- **_Operation Type:_** Required. **Dropship**, prefix **DS**.
- **_Source Location:_** Required. **Partners/Vendors**.
- **_Destination Location:_** Required. **Partners/Customers**.
- There is no contact field. The order carries the partner details.

## Behind the scenes

Stock moves from **Partners/Vendors** straight to **Partners/Customers**. No warehouse location is touched, so your on-hand quantity does not change. The sales order shows the product as delivered and the purchase order as received.

::: tip
Invoice the customer from the sales order and pay the vendor from the purchase order as usual.
:::

## Actions and statuses

The buttons are the same as other transfers: **Mark as Todo** on a **Draft**, then **Validate**, **Cancel**, **Print** and **Delete** on a **Ready** dropship. See [Transfers](index.md).

## See also

- [Transfers](index.md)
- [Purchase orders](../../purchase/orders/purchase-orders.md)
- [Manage orders](../../../sales/sales/quotations-orders/manage-orders.md)
