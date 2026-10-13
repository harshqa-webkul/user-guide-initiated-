# Fiscal positions

A fiscal position is a set of rules for a type of customer or a region. Customers in another country, or businesses that are tax exempt, may need different accounts or different taxes than your usual customers. You describe those rules once and attach the position to a customer or a document.

> **In simple words:** A fiscal position says: for this kind of customer, swap these accounts and these taxes.

This screen exists only in the **Accounting** app.

## When to use this page

- You sell to customers in another country.
- You need a different income account for exports.
- You want to record that a customer follows a special tax rule.

## Open the page

`Accounting → Configurations → Accounting → Fiscal Positions`

<ImagePopup src="/images1/finance/fiscal_positions_list.png" alt="Fiscal Positions list with the Export Customers position" />

## Overview

The list shows **Name**, **Company**, **Country**, **Country Group**, **Created By**, **Zip From**, **Zip To** and **Detect Automatically**. A new database has no fiscal positions.

## Create a fiscal position

1. Go to the Fiscal Positions page.
2. Click **New Fiscal Position**.
3. Fill in the fields below.
4. Click **Create**.

<ImagePopup src="/images1/finance/fiscal_position_form.png" alt="New Fiscal Position form with Name Export Customers, Country Germany, Company My Company, and one Account Mapping row" />

### General

- **_Name:_** A name you will recognise, such as `Export Customers`. Required.
- **_Foreign VAT:_** The tax number to use for this position. Required.
- **_Country:_** The country the position is meant for.
- **_Country Group:_** A group of countries, instead of a single country.
- **_Zip From_ and _Zip To:_** A range of postal codes the position covers. Both are required.
- **_Company:_** The company that owns the position. Required. Mappings can only use taxes and accounts of this company.
- **_Detect Automatically:_** Mark the position as one that fits customers by their country or postal code.
- **_Notes:_** Free text for your team.

### Tax Mapping tab

Click **Add Tax Mapping** and fill in:

- **_Tax Source:_** The tax you normally use. Required.
- **_Tax Destination:_** The tax to use instead. Leave it empty to mean "no tax".

### Account Mapping tab

Click **Add Account Mapping** and fill in:

- **_Source Account:_** The account Aureus would normally use. Required.
- **_Destination Account:_** The account to use instead. Required.

## Where a fiscal position is used

- On a customer, in the **Sales & Purchases** tab, **Fiscal Position**. See [Customers](../../sales/sales/quotations-orders/manage-customers.md).
- On an invoice or bill, in **Other Information**, under **Accounting**, **Fiscal Position**. The field hint says: "Fiscal positions are used to adapt taxes and accounts based on the customer location." You cannot change it after the document is posted.
- On a journal entry, in **Other Information**.

When Aureus builds the lines of a document that has a fiscal position, it swaps accounts using the **Account Mapping**. This works for the receivable and payable accounts and for the income and expense accounts of products.

::: info
The taxes on a line come from the **Taxes** field of the line. After you choose a fiscal position, check the **Taxes** column and change a tax by hand if needed.
:::

## Example

Create `Export Customers`, **Country** `Germany`. In **Account Mapping**, set **Source Account** `Product Sales` and **Destination Account** `Export Sales`. Choose this position on a customer from Germany. Invoices for that customer book their product income to `Export Sales`.

## See also

- [Taxes](taxes.md)
- [Chart of accounts](../get-started/chart-of-accounts.md)
- [Customers](../../sales/sales/quotations-orders/manage-customers.md)
- [Create an invoice](../customer-invoices/create-invoice.md)
