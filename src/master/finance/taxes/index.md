# Taxes

Taxes are the percentages or fixed amounts you add to what you sell and buy, such as sales tax or VAT. In Aureus ERP you define each tax once. You then attach it to products, and it is calculated for you on every invoice and bill line and posted to the right accounts.

> **In simple words:** Create the tax once, attach it to a product, and Aureus adds it to every invoice line for you.

## What is in this group

- [Taxes](taxes.md): create and manage taxes, including percentage, fixed, group and formula taxes.
- [Tax groups](tax-groups.md): the headings under which taxes are shown together.
- [Fiscal positions](fiscal-positions.md): rules per customer type or region. Accounting app only.
- [Tax settings](tax-settings.md): default taxes, rounding, and whether prices include tax. Accounting app only.

## Where to find taxes

| Screen | Invoices app | Accounting app |
| --- | --- | --- |
| Taxes | `Invoices → Configurations → Taxes` | `Accounting → Configurations → Accounting → Taxes` |
| Tax Groups | `Invoices → Configurations → Tax Groups` | `Accounting → Configurations → Accounting → Tax Groups` |
| Fiscal Positions | - | `Accounting → Configurations → Accounting → Fiscal Positions` |
| Manage Taxes | - | `Accounting → Settings → Manage Taxes` |

## Set up in this order

1. Run [Set up accounting](../get-started/accounting-setup.md). It creates a first sales tax and purchase tax of 15 % in the sample set-up.
2. Review the **Prices** setting in [Tax settings](tax-settings.md) before you create your first invoice. It is locked after that.
3. Create or adjust your [Tax groups](tax-groups.md).
4. Create your [Taxes](taxes.md). Make one for Sale and one for Purchase for each rate.
5. Add the taxes to your products. See [Manage products](../../sales/products-prices/manage-products.md).
6. If you serve customers in different regions, add [Fiscal positions](fiscal-positions.md).

## How taxes reach an invoice

1. A product has **Customer Taxes** for sales and vendor taxes for purchases.
2. When you add the product to an invoice line, those taxes fill the **Taxes** field of the line.
3. Aureus calculates the tax and shows it in the invoice totals.
4. When you confirm the invoice, the tax amount is posted to the account set on the tax.

::: tip
You can change the **Taxes** field on a single line, for example to remove the tax for one exempt item.
:::

## See also

- [Create an invoice](../customer-invoices/create-invoice.md)
- [Create a vendor bill](../vendor-bills/create-bill.md)
- [Chart of accounts](../get-started/chart-of-accounts.md)
- [Finance overview](../index.md)
