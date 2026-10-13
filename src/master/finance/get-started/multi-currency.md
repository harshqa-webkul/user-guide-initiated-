# Foreign currencies

You may sell to a customer in euros while your books are in US dollars. Aureus lets you choose a currency on every invoice, bill and payment. It converts the amounts with your exchange rates and keeps your books in the company currency.

> **In simple words:** Pick the currency on the document. Keep the exchange rate up to date. Aureus does the converting.

## What you need

1. The currency is **active**.
2. The currency has an **exchange rate** with a date on or before the document date.
3. The **Exchange Difference** journal and the gain and loss accounts are set in [Default accounts](default-accounts.md).

Activate currencies and add rates under `Invoices → Configurations → Currencies` or `Accounting → Configurations → Accounting → Currencies`. The steps are the same as in [Sell in other currencies](../../sales/sales/products-prices/sell-in-other-currencies.md). The base currency and the other currency fields are in [Currency](../../general-settings/companies/currency.md).

## Currency on an invoice or a bill

The **Currency** field is in the **General** section of an invoice or bill. It is required. It starts as your company currency, and only active currencies are offered.

1. Create the invoice. See [Create an invoice](../customer-invoices/create-invoice.md).
2. Choose the customer.
3. Choose the **Currency**, for example `INR`, before you add products.
4. Add the products.

When you add a product to a line, Aureus converts the product's price from the company currency into the invoice currency. The conversion uses the rate valid on the **Invoice Date**. If you leave the date empty, it uses today.

::: tip
Choose the currency first. A line takes its price when you pick the product, so choose the currency before you add products.
:::

::: warning
After an invoice is posted, the currency can no longer be changed. Fix mistakes while the document is in **Draft**.
:::

The company currency amount is kept on the invoice together with the rate used, and your reports show the company currency.

## How a rate is picked

Aureus takes the latest rate that is dated on or before the document date. If a currency has no rate, Aureus treats the rate as 1, so nothing is converted. Add a rate before you create documents.

## Currency on a payment

The payment form has a **Currency** field. It starts as the company currency. Use it when the customer pays in a different currency from the invoice. See [Register a payment](../payments/register-payment.md).

## Exchange differences

Rates move between the day you invoice and the day you are paid. Suppose you invoiced 8,300 INR when 1 USD was 83 INR, which is 100 USD. The customer pays when 1 USD is 80 INR, which is 103.75 USD. The 3.75 USD difference is a **gain**.

When the payment is matched to the invoice and a difference remains, Aureus posts an entry in the **Journal** from **Exchange Difference Entries**. A gain goes to the **Gain** account and a loss to the **Loss** account. The entry is posted and matched on its own.

## Check your set-up

- Prices do not change: the currency has no rate, or the rate is dated in the future.
- Error about the exchange difference journal: fill in **Exchange Difference Entries** in [Default accounts](default-accounts.md).
- The currency is missing in the picker: turn on its **Status**.

## See also

- [Sell in other currencies](../../sales/sales/products-prices/sell-in-other-currencies.md)
- [Currency](../../general-settings/companies/currency.md)
- [Default accounts](default-accounts.md)
- [Create an invoice](../customer-invoices/create-invoice.md)
