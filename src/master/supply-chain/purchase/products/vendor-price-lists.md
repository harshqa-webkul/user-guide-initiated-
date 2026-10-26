# Vendor price lists

A vendor price list records what each vendor charges for a product. You can store different prices for different quantities, dates and currencies. When you add the product to an RFQ, Aureus reads the list and fills the price for you.

> **In simple words:** A price sheet for each vendor, kept next to the product.

You can reach the same rows in two places.

1. `Purchase → Configurations → Vendor Price Lists` shows every row for every product. The page header shows **Product Suppliers**. It is the same list.
2. The **Vendors** tab of a product shows only the rows for that product.

No setting is needed. The menu is always there.

## Overview

The list has the columns **Vendor**, **Product**, **Company**, **Unit Price** and **Currency**. Use **Group by** to group by **Vendor**, **Product**, **Created At** or **Updated At**.

<ImagePopup src="/images1/purchase/vp_list.png" alt="Vendor Price Lists page with three rows for FreshFoods Wholesale showing product, unit price and currency" />

## Create a vendor price

1. Go to `Purchase → Configurations → Vendor Price Lists`.
2. Click **New Vendor Price**.
3. Fill the **General** section.

<ImagePopup src="/images1/purchase/vp_form_general.png" alt="New vendor price form General section with vendor FreshFoods Wholesale and product name SSD 512GB 2.5in" />

### General

- **_Vendor:_** The company that sells it. Required.
- **_Vendor Product Name:_** The name the vendor uses. It prints on the RFQ. Leave it blank to use your own name.
- **_Vendor Product Code:_** The vendor's code. It prints on the RFQ. Leave it blank to use your own code.
- **_Delivery Lead Time (Days):_** Days from order confirmation to goods in your warehouse. The default is 1.

4. Fill the **Prices** section.

<ImagePopup src="/images1/purchase/vp_form_prices.png" alt="Prices section with product SSD 512GB, quantity 10, unit price 3300, validity dates and discount" />

### Prices

- **_Product:_** The product this price applies to. On a product's **Vendors** tab this field is hidden, because the product is known. With variants, you choose the variant.
- **_Quantity:_** The minimum quantity that earns this price. The default is 0.
- **_Unit Price:_** Price for one unit, in the unit of measure of the product.
- **_Currency:_** The currency of the vendor price. Required. It defaults to your company currency.
- **_Valid From:_** and **_Valid Until:_** The dates of the price period. Leave both empty for a price with no end.
- **_Discount (%):_** An optional percentage off this price.
- **_Company:_** The company that owns the row. It defaults to the current company.

5. Click **Create**.

::: tip
Fill **Valid From** and **Valid Until** for seasonal deals. They tell your team when the quote ends.
:::

## Price tiers by quantity

Add one row per tier. Each row sets the lowest quantity for its price.

| Vendor | Product | Quantity | Unit Price |
| --- | --- | --- | --- |
| FreshFoods Wholesale | SSD 512GB | 1 | 3500 |
| FreshFoods Wholesale | SSD 512GB | 10 | 3300 |
| FreshFoods Wholesale | SSD 512GB | 50 | 3100 |

## How a line price is picked

When you choose a product on an order line, Aureus follows these steps.

1. It looks at the price rows of that product.
2. If you chose a vendor on the order, it keeps only that vendor's rows.
3. It keeps rows whose **Quantity** is at or below the line quantity.
4. It takes the best matching row and uses its **Unit Price**, converted to the order currency.
5. If no row matches, it uses the product **Cost**, or the product **Price** when cost is empty.

```text
Product + Vendor + Quantity  →  matching price rows  →  Unit Price on the line
                                   no match         →  Cost (then Price)
```

Change the line **Quantity** and the price is checked again. With 15 units of SSD 512GB, the row for 10 units applies.

<ImagePopup src="/images1/purchase/vp_rfq_line.png" alt="RFQ line for SSD 512GB with quantity 15 and unit price 3300 taken from the 10 unit tier" />

::: warning
You can always type over the **Unit Price** on a line. The vendor price list only gives the starting value.
:::

## Edit or delete a price

1. Open the row from the list or from the product **Vendors** tab.
2. Click **Edit**, change the values and save.
3. To remove a row, use the delete action on the row.

**Behind the scenes:** Price rows are stored per product and vendor. The list in Configurations and the product tab show the same records.

## See also

- [Configure a product](configure-product.md)
- [Quotations](../orders/quotations.md)
- [Product configuration](product-configuration.md)
