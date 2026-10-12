# Pricing and taxes

The price a customer pays at the till depends on the product price, the taxes, any price list and any discount. You control each of these. This page shows where, and how they add up on an order.

> **In simple words:** Pick whether shelf prices include tax, choose the taxes, then decide who may give a discount.

## Taxes

Go to `Point of Sale → Configurations → Taxes`.

<ImagePopup src="/images1/pos/pos_taxes_list.png" alt="Point of Sale → Configurations → Taxes list with the 15 % Sale tax of My Company" />

The list shows **Name**, **Company**, **Tax Group**, **Tax Type**, **Invoice Label** and **Status**. Use the tabs for **Sale** and **Purchase**. The filters cover **Tax Scope**, **Goods** and **Active** or inactive taxes.

Click **New Tax** to add one. The form asks for:

- **_Name\*:_** For example **15 %**.
- **_Tax Type\*:_** **Sale** or **Purchase**.
- **_Tax Computation\*:_** How the amount is worked out.
- **_Tax Scope:_** Goods or services.
- **_Amount\*:_** The rate in percent.
- **_Advanced Options:_** **Invoice label**, **Tax Group\***, **Country** and **Included in Price**.

The Finance module owns taxes. Read [Taxes](../../../finance/taxes/taxes.md) for every field and the repartition lines.

### Attach taxes to a product

Open the product and choose **Product taxes**. Every sale of that product at the till uses them. See [Products](./products.md).

## Tax excluded or tax included

Each register decides how it shows prices.

1. Go to `Point of Sale → Configurations → Point of Sale` and open a register.
2. Open the **Pricing** tab.
3. Set **Product Prices\*** to **Tax Excluded** or **Tax Included**.

<ImagePopup src="/images1/pos/register_pricing_tab.png" alt="Register Pricing tab with Product Prices set to Tax Excluded and line discounts switched on" />

- **Tax Excluded:** The grid shows the price before tax. The tax is added at the total.
- **Tax Included:** The grid shows the price the customer pays.

### Example

A product has a price of 1,000 and a 15 % tax. With **Tax Excluded**, the line shows 1,000, the tax is 150 and the total is 1,150. With **Tax Included**, the line shows 1,150.

## Price lists

A price list gives a product a different price for a group of customers or a time. It is optional.

1. Go to `Point of Sale → Settings → Products`.
2. Switch on **Price Lists** ("Allow products to be sold at prices set by a price list").
3. Click **Save changes**.

Now `Point of Sale → Products → Price Lists` appears. Each price list has a **Price List Name**, **Currency**, **Company**, an **Active** switch and price rules. The first matching rule decides the price, and more specific rules win.

Then open the register, tab **Pricing**:

- **_Flexible Pricelists:_** Lets cashiers switch price lists at the till.
- **_Default Pricelist:_** The list applied to every order on this register.
- **_Available Pricelists:_** The lists cashiers may choose. It shows when flexible pricelists are on.

<ImagePopup src="/images1/pos/register_pricing_pricelists.png" alt="Register Pricing tab with Flexible Pricelists on and Default Pricelist selected" />

Price rules work as in Sales. See [Price lists](../../sales/products-prices/price-lists.md).

## Discounts

Two switches on the register **Pricing** tab control discounts.

- **_Line Discounts:_** Cashiers can set a discount on one line. Use the **%** mode on the numpad.
- **_Global Discounts:_** A button gives a discount on the whole order. After you switch it on, set the **Discount Product** and **Discount %**, the default percent the button offers.
- **_Price Control:_** Only managers may change a price.

The discount shows on the order in the **Discount (%)** column. See [Discounts and margins](../../sales/products-prices/discounts-margins.md).

::: warning
**Global Discounts** is locked while a session is open. Close the session first, then change it.
:::

## See also

- [Taxes in Finance](../../../finance/taxes/taxes.md)
- [Fiscal positions](../../../finance/taxes/fiscal-positions.md)
- [Price lists in Sales](../../sales/products-prices/price-lists.md)
- [Set up a register](../get-started/set-up-a-register.md)
