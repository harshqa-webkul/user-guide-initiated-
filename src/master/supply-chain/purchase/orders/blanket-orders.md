# Blanket orders

A blanket order is a long term deal with one vendor. You agree on products, a total quantity and a price for a period. Each RFQ you raise against it uses that price and counts against the total quantity.

> **In simple words:** A blanket order is a promise to buy a set quantity at a fixed price over time. Orders draw from it until it is used up.

Open `Purchase → Orders → Purchase Agreements` and click the **Blanket Orders** tab.

## Settings

The menu is hidden until you turn it on. Go to `Purchase → Settings → Manage Orders` and switch on **Purchase Agreements**. The helper text reads "Manage blanket orders and purchase templates". The same page is at `Settings → Settings → Purchase`. See [Purchase settings](../get-started/purchase-settings.md).

## Blanket order or template

Both share one form and one list. Choose **Blanket Order** in **Agreement Type** when you promise a total quantity over a period. Choose **Purchase Template** when you only want a ready-made set of lines. See [Purchase templates](purchase-templates.md).

## Overview

The list shows these columns: **Agreement**, **Vendor**, **Agreement Type**, **Buyer**, **Company**, **Valid From**, **Valid Until**, **Reference** and **Status**.

<ImagePopup src="/images1/purchase/agr_list.png" alt="Purchase Agreements list with one confirmed blanket order for FreshFoods Wholesale" />

| Tab | Shows |
| --- | --- |
| **Default** | All agreements |
| **My Agreements** | Agreements where you are the buyer |
| **Blanket Orders** | Only blanket orders |
| **Purchase Templates** | Only templates |
| **Draft** | Agreements not yet confirmed |
| **Done** | Closed agreements |
| **Archived** | Archived agreements |

Use **Group by** with **Vendor**, **State**, **Agreement Type**, **Created At** or **Updated At**.

## Create a blanket order

Example: FreshFoods Wholesale agrees to sell you 100 **SSD 512GB** at 3,200 each for the year.

1. Click **New Purchase Agreement**.

<ImagePopup src="/images1/purchase/agr_new_button.png" alt="Purchase Agreements list with the New Purchase Agreement button highlighted" />

2. Fill in the top section.

- **_Vendor:_** Required. The supplier who gave the offer.
- **_Buyer:_** The user in charge of the deal.
- **_Agreement Type:_** Required. Keep **Blanket Order**.
- **_Currency:_** Required. Starts with your company currency.
- **_Valid From_** and **_Valid Until_:** Required for a blanket order. Dates cannot be in the past.
- **_Reference:_** Your own or the vendor's reference.
- **_Company:_** Required. Starts with your current company.

<ImagePopup src="/images1/purchase/agr_form_general.png" alt="New blanket order for FreshFoods Wholesale with type, currency, dates and reference filled in" />

3. On the **Products** tab, add a line for each product.

- **_Product:_** Required. Goods products only.
- **_Quantity:_** Required. The total you commit to.
- **_Ordered:_** Read only. Shows how much is already ordered.
- **_Unit of Measure:_** Shown only when **Unit of Measure** is on in **Manage Products**.
- **_Unit Price:_** Required. The agreed price.

<ImagePopup src="/images1/purchase/agr_form_lines.png" alt="Products tab with SSD 512GB, quantity 100 and unit price 3200" />

4. Use the **Terms and Conditions** tab for notes the vendor should see.
5. Click **Create**. The agreement starts as **Draft**.

::: warning
If this vendor already has a confirmed agreement that is not closed or canceled, a window asks **Similar confirmed agreement exists**. Click to continue only if you really want a second one.
:::

## Actions and statuses

The state bar shows **Draft**, **Confirmed**, **Closed** and **Canceled**.

```text
Draft  >  Confirmed  >  Closed
   \         \
    +---------+--->  Canceled
```

| Button | What it does |
| --- | --- |
| **Confirm** | Moves Draft to Confirmed. It needs at least one line. |
| **Close** | Moves Confirmed to Closed. |
| **Cancel** | Cancels the agreement. Hidden once closed or canceled. |
| **Print** | Downloads a PDF of the agreement. |
| **Delete** | Removes the agreement. |

<ImagePopup src="/images1/purchase/agr_confirmed.png" alt="Confirmed purchase agreement with Close, Cancel and Print buttons in the header" />

Without a line, **Confirm** shows **Unable to confirm purchase agreement**. Add a product line first.

**Close** is blocked while related RFQs are still open. The message reads "You cannot close this purchase agreement because some related RFQs are not in Done or Canceled status." Finish or cancel those RFQs first.

After you confirm, vendor, buyer, type and company are locked.

## Use a blanket order on an RFQ

The **Agreement** field shows on the RFQ form only when **Purchase Agreements** is on.

1. Click **New RFQ** and pick the **Vendor**.
2. If the vendor has a confirmed agreement that is valid today, Aureus fills **Agreement**, the product lines and the **Currency** for you.
3. To choose another one, open the **Agreement** list. It offers confirmed agreements only.

<ImagePopup src="/images1/purchase/agr_rfq_filled.png" alt="RFQ for FreshFoods Wholesale with Agreement filled and the SSD 512GB line copied in" />

Lines copied from an agreement keep the agreed unit price.

## Quantity limit

You cannot order more than the quantity left. If you try, Aureus shows **Quantity Exceeds Blanket Order Limit** and says how much is available. Lower the quantity or raise it on the agreement. The **Ordered** column on the agreement shows what is used.

## RFQ's sub page

Open an agreement and click **RFQ's** in the switcher. It lists the RFQs and orders made from this agreement. Check it before you click **Close**.

<ImagePopup src="/images1/purchase/agr_rfqs.png" alt="RFQ's sub page of the agreement listing the RFQs created from it" />

## Behind the scenes

Agreements do not create stock or bills. They only feed order lines and cap blanket quantities. The order itself still follows the usual flow: confirm, receive, bill.

## See also

- [Purchase templates](purchase-templates.md)
- [Requests for quotation](quotations.md)
- [Purchase orders](purchase-orders.md)
- [Contacts](../../../getting-started/contacts/contacts.md)
- [Purchase settings](../get-started/purchase-settings.md)
