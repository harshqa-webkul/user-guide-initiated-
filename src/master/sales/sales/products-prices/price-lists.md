# Price lists

A price list holds pricing rules for a currency. Use price lists to sell the same product at different prices, for example to wholesale and retail customers. You can pick a price list on a quotation.

> **In simple words:** A price list is a set of rules that decide the selling price.

## Settings

The **Price Lists** page shows only when the feature is on.

1. Go to `Sales → Settings → Manage Products`.
2. Turn on **Price Lists** (Allow products to be sold at prices set by a price list).
3. Click **Save changes**.

<ImagePopup src="/images1/sales/set_products.png" alt="Manage Products settings with the Price Lists option turned on" />

## Overview

Go to `Sales → Products → Price Lists`. The list shows **Price List**, **Currency**, **Company**, **Rules** and **Active**. You can filter by **Active** and **Currency**. When nothing exists, it shows **No Price Lists**.

<ImagePopup src="/images1/sales/pricelists.png" alt="Price Lists list showing India Price List (INR) with its currency and company" />

## Create a price list

1. Go to `Sales → Products → Price Lists`.
2. Click **New Price List**.
3. Fill in **General Information**:

   - **_Price List Name:_** Enter a name. This field is required.
   - **_Currency:_** Choose an active currency. This field is required.
   - **_Company:_** Choose the company.
   - **_Active:_** Turn on to make the list available. It is on by default.

4. Add rules under **Price Rules**, as described below.
5. Click **Create**.

<ImagePopup src="/images1/sales/pricelist_form.png" alt="New Price List form with General Information and Price Rules" />

## Add a price rule

The first rule that matches a product decides its price. More specific rules win over broader ones.

1. Under **Price Rules**, click **Add Rule**.
2. Fill in the rule window:

   - **_Apply To:_** Choose **All Products**, **Category**, **Product** or **Variant**. Then choose the category, product or variant.
   - **_Min Qty:_** Set the smallest quantity for the rule.
   - **_Validity Period_** and **_End Date:_** Set when the rule is active.
   - **_Price Type:_** Choose **Fixed Price**, **Discount** or **Formula**.

3. Complete the fields for the price type:

   - **Fixed Price:** Enter the **Fixed Price**.
   - **Discount:** Enter the **Discount** percentage and choose what it is based on. Use a negative value to apply a mark-up.
   - **Formula:** Choose the **Based price**: **Sales Price**, **Cost** or **Other Price List**. Then set **Discount** or **Markup**, **Round off to**, **Extra Fee**, **Min. Margin** and **Max. Margin**.

4. Save the rule.

The rules table shows **Apply On**, **Applies To**, **Min. Quantity**, **Compute Price**, **Price** and **Period**. Click **Edit Rule** on a row to change it.

::: tip
To end prices at 9.99, set **Round off to** 10.00 and set **Extra Fee** to -0.01.
:::

<ImagePopup src="/images1/sales/pricelist_rule_window.png" alt="Add Rule window with product, fixed price, minimum quantity and validity dates" />

## Use a price list on a quotation

On a quotation, choose the list in **Price List**. The field shows only when **Price Lists** is on. When you choose a customer, Aureus fills the price list that is saved on that customer, if there is one.

The quotation then takes the **currency of the price list**. Every product line is priced again at once, so you do not have to change anything by hand. If you change the price list later, the lines are priced again.

### How the price on a line is worked out

Products always keep their **Price** in your company's base currency, for example USD. For each line, Aureus looks at the price list rules:

1. **A rule matches the product.** The rule decides the price.
   - **Fixed Price:** The price you typed in the rule is used as it is. Type it in the currency of the price list.
   - **Discount** or **Formula:** The percentage or formula is applied to the sales price (or cost, or another price list) after it has been converted to the price list currency.
2. **No rule matches.** Aureus converts the product's normal sales price to the price list currency with the exchange rate.

To sell in another currency, set the currency of the price list and add an exchange rate. The full steps, with an example and screenshots, are in [Sell in other currencies](./sell-in-other-currencies.md).

## See also

- [Sell in other currencies](./sell-in-other-currencies.md)
- [Create a quotation](../quotations-orders/create-quotation.md)
- [Discounts and margins](./discounts-margins.md)
