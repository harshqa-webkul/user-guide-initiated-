# Purchase templates

A purchase template is a saved set of product lines for a vendor. You build it once, then reuse it whenever you reorder the same items. It has no validity dates and no quantity limit.

> **In simple words:** A template is a ready-made shopping list for a vendor. Pick it on a new RFQ and the lines appear.

Open `Purchase → Orders → Purchase Agreements` and click the **Purchase Templates** tab.

## Settings

Templates share the **Purchase Agreements** setting with blanket orders. Go to `Purchase → Settings → Manage Orders` and switch on **Purchase Agreements**. See [Purchase settings](../get-started/purchase-settings.md).

## Template or blanket order

| | Purchase template | Blanket order |
| --- | --- | --- |
| Purpose | Reuse the same lines | Commit to a total quantity |
| **Valid From**, **Valid Until** | Hidden | Required |
| **Ordered** column | Hidden | Shows quantity already ordered |
| Quantity limit on RFQs | None | Yes |
| Reference on documents | **PT/** and a number | **BO/** and a number |

See [Blanket orders](blanket-orders.md) for the other type.

## Create a template

Example: you reorder 20 **SSD 512GB** from FreshFoods Wholesale every month.

1. Click **New Purchase Agreement**.
2. Fill the top section.

- **_Vendor:_** Required. The supplier you buy from.
- **_Buyer:_** The user in charge.
- **_Agreement Type:_** Required. Choose **Purchase Template**. The date fields disappear.
- **_Currency:_** Required. Starts with your company currency.
- **_Reference:_** Your own note.
- **_Company:_** Required. Starts with your current company.

<ImagePopup src="/images1/purchase/tmpl_form_general.png" alt="New purchase agreement with Agreement Type set to Purchase Template, vendor FreshFoods Wholesale and no date fields" />

3. On the **Products** tab, add a line for each product.

- **_Product:_** Required. Goods products only.
- **_Quantity:_** Required. The quantity you usually buy.
- **_Unit of Measure:_** Shown only when **Unit of Measure** is on in **Manage Products**.
- **_Unit Price:_** Required. The price you expect to pay.

<ImagePopup src="/images1/purchase/tmpl_form_lines.png" alt="Products tab of a purchase template with SSD 512GB, quantity 20 and unit price 3200" />

4. Click **Create**. The template starts as **Draft**.

## Confirm and use a template

1. Open the template and click **Confirm**. It needs at least one line.
2. Click **New RFQ** and pick the same **Vendor**.
3. Open the **Agreement** list and choose the template. It offers confirmed agreements only.
4. Aureus fills the product lines and the **Currency**. Change quantities if you need to.
5. Click **Create** and continue as with any [request for quotation](quotations.md).

<!-- TODO-SCREENSHOT: /images1/purchase/tmpl_rfq_filled.png | New RFQ for FreshFoods Wholesale with Agreement set to a purchase template (PT/...) and its lines copied in -->

## Actions and statuses

A template uses the same states and buttons as a blanket order: **Draft**, **Confirmed**, **Closed**, **Canceled**. The buttons are **Confirm**, **Close**, **Cancel**, **Print** and **Delete**. See [Blanket orders](blanket-orders.md#actions-and-statuses).

::: tip
Use **Close** when a template is out of date. Close is blocked while related RFQs are still open.
:::

## See also

- [Blanket orders](blanket-orders.md)
- [Requests for quotation](quotations.md)
- [Purchase orders](purchase-orders.md)
- [Purchase settings](../get-started/purchase-settings.md)
