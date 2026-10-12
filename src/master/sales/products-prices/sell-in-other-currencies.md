# Sell in other currencies

Your products keep their price in one currency, your **base currency**, for example USD. When a customer wants a quotation in another currency, such as Indian rupees, you do not have to retype any price. Aureus converts the prices for you, using an exchange rate that you keep, and shows the quotation and its totals in the new currency.

> **In simple words:** Pick a price list that is set to the customer's currency. Aureus changes every price on the quotation to that currency.

## What you need

To sell in another currency, you set up three things once:

1. The **Price Lists** feature is on.
2. The other currency is **active** and has an **exchange rate**.
3. A **price list** uses that currency.

Then you choose the price list on each quotation. The steps below show each part with an example: the **Camping Hammock** costs **65** in USD, and you want to quote it in **INR**.

## Step 1: Turn on price lists

1. Go to `Sales → Settings → Manage Products`.
2. Turn on **Price Lists** (Allow products to be sold at prices set by a price list).
3. Click **Save changes**.

<ImagePopup src="/images1/sales/set_products.png" alt="Manage Products settings with Variants, Unit of Measure, Packagings and Price Lists" />

Until you do this, the **Price List** field does not show on a quotation.

## Step 2: Make the currency active and add a rate

Only active currencies can be used on a price list. Most currencies come with the system but are switched off.

1. Go to `Sales → Configurations → Currencies`.
2. Open the **Inactive** tab, find the currency, for example **INR**, and click **Edit**.
3. In **Status & Configuration**, turn on **Status**.
4. In **Currency Rates**, click **Add Rate** and fill in the row:

   - **_Date:_** The day the rate starts. It is today by default.
   - **_Unit Per USD:_** How many units of this currency one unit of your base currency buys. For example `83` means 1 USD = 83 INR.
   - **_USD Per Unit:_** Filled in for you. It is the other way round (about 0.012 USD for 1 INR).

5. Click **Save changes**.

<ImagePopup src="/images1/sales/currency_inr_rate.png" alt="Edit INR currency with Status turned on and one rate row of 83 Unit Per USD" />

The currency now shows on the **Active** tab of the list.

<ImagePopup src="/images1/sales/cfg_currencies.png" alt="Currencies list on the Active tab with USD and INR" />

::: tip
Exchange rates change. When the rate changes, add a **new row** with a new date. Do not edit the old row. Aureus always uses the row with the latest date that is not later than today, and the older rows stay as a history.
:::

::: warning
The rate must be **1 or more**. The form does not accept a smaller number. Keep this in mind for currencies that are worth more than your base currency.
:::

For more about the base currency and the other currency fields, see [Currency](../../general-settings/companies/currency.md).

## Step 3: Create a price list in that currency

1. Go to `Sales → Products → Price Lists` and click **New Price List**.
2. Enter a **Price List Name**, for example `India Price List (INR)`.
3. Choose the **Currency**, for example INR.
4. Click **Create**.

<ImagePopup src="/images1/sales/pricelist_inr_form.png" alt="Create Price List form with the name India Price List (INR) and currency INR" />

You do not need to add rules. A price list with no rules still converts every product price. Add rules only when you want a different price for some products. See [Price lists](price-lists.md).

<ImagePopup src="/images1/sales/pricelists.png" alt="Price Lists list with India Price List (INR)" />

## Step 4: Use the price list on a quotation

1. Create a quotation and choose the customer. See [Create a quotation](../quotations-orders/create-quotation.md).
2. Add the products. At this point the lines are in your base currency. Here the Camping Hammock has a **Unit Price** of `65`, and 5 units give an **Amount** of `325`.

   <ImagePopup src="/images1/sales/pricelist_convert_usd.png" alt="Quotation with Camping Hammock, quantity 5, unit price 65 in USD" />

3. In **Price List**, choose **India Price List (INR)**.

The quotation changes to rupees at once. Every line is priced again, and the totals are in the new currency. The Camping Hammock now has a **Unit Price** of `5395` (65 x 83), and 5 units give `26975`.

<ImagePopup src="/images1/sales/pricelist_convert_inr.png" alt="The same quotation with the INR price list: unit price 5395 and total 26,975 rupees" />

You do not choose the currency anywhere else. The quotation takes the currency of the price list. If you change the price list later, Aureus prices the lines again.

::: info
When you choose a customer who already has a price list saved, Aureus fills in that price list for you.
:::

## How the price on each line is decided

For every product line, Aureus first looks at the rules of the price list.

- **A rule matches the product.** The rule decides the price.
  - **Fixed Price:** The amount you typed in the rule is used as it is. Type it in the currency of the price list. The exchange rate is not used.
  - **Discount** or **Formula:** The discount or formula is applied to the sales price, or the cost, or another price list, after that price is converted to the currency of the list.
- **No rule matches.** Aureus converts the normal sales price of the product with the exchange rate.

**Example:** you add a **Fixed Price** rule of `5000` for the Camping Hammock in the INR price list. The line then shows `5000` and not `5395`.

## Check that it works

If the prices do not change after you choose the price list, check these points:

- The currency has at least one rate row. If a currency has **no rate**, Aureus treats the rate as 1. Then 65 USD shows as 65 INR, with no conversion.
- The rate row has a date that is today or earlier.
- The currency is **active**.
- You chose the price list on the quotation, and the **Price Lists** setting is on.

## See also

- [Price lists](price-lists.md)
- [Currency](../../general-settings/companies/currency.md)
- [Create a quotation](../quotations-orders/create-quotation.md)
- [Discounts and margins](discounts-margins.md)
