# Configuration

Configuration holds the one-time setup of finance. **Settings** switch features on and set defaults. **Configurations** are the lists that invoices, bills and payments use, such as taxes and payment terms.

> **In simple words:** Settings switch features on. Configurations fill them with data.

## Settings pages

| Page | App | Menu path | What it controls |
| --- | --- | --- | --- |
| Manage Products | Invoices | `Invoices → Settings → Manage Products` | **Unit of Measure** |
| Manage Products | Accounting | `Accounting → Settings → Manage Products` | **Variants** and **Unit of Measure** |
| Manage Taxes | Accounting | `Accounting → Settings → Manage Taxes` | Default taxes, rounding and price display. See [Tax settings](../taxes/tax-settings.md) |
| Manage Customer Invoice | Accounting | `Accounting → Settings → Manage Customer Invoice` | **Cash Rounding** and **Default Incoterm** |
| Manage Default Accounts | Accounting | `Accounting → Settings → Manage Default Accounts` | Exchange difference, bank transfer and product accounts. See [Default accounts](../get-started/default-accounts.md) |

Click **Save changes** after you change a setting.

### Manage Products

- **_Variants:_** Set product attributes such as colour or size to manage variants. Accounting app only.
- **_Unit of Measure:_** Sell and purchase products in different units of measure.

### Manage Customer Invoice

- **_Default Incoterm:_** Choose the incoterm that new invoices use by default. See [Incoterms](../customer-invoices/incoterms.md).
- **_Cash Rounding:_** A toggle for the lowest currency denomination accepted for cash payments.

::: info
Until the company is set up, the Accounting settings pages show a **Set up accounting** message. See [Accounting setup](../get-started/accounting-setup.md).
:::

## Configuration pages

| Page | Invoices app | Accounting app | Guide |
| --- | --- | --- | --- |
| Payment Terms | `Invoices → Configurations → Invoicing → Payment Terms` | `Accounting → Configurations → Invoicing → Payment Terms` | [Payment terms](../customer-invoices/payment-terms.md) |
| Incoterms | `Invoices → Configurations → Invoicing → Incoterms` | `Accounting → Configurations → Invoicing → Incoterms` | [Incoterms](../customer-invoices/incoterms.md) |
| Bank Accounts | `Invoices → Configurations → Bank Accounts` | - | [Bank accounts](../payments/bank-accounts.md) |
| Currencies | `Invoices → Configurations → Accounting → Currencies` | `Accounting → Configurations → Accounting → Currencies` | [Multi-currency](../get-started/multi-currency.md) |
| Chart of Accounts | - | `Accounting → Configurations → Accounting → Chart of Accounts` | [Chart of accounts](../get-started/chart-of-accounts.md) |
| Journals | - | `Accounting → Configurations → Accounting → Journals` | [Journals](../get-started/journals.md) |
| Fiscal Positions | - | `Accounting → Configurations → Accounting → Fiscal Positions` | [Fiscal positions](../taxes/fiscal-positions.md) |
| Tax Groups | `Invoices → Configurations → Accounting → Tax Groups` | `Accounting → Configurations → Accounting → Tax Groups` | [Tax groups](../taxes/tax-groups.md) |
| Taxes | `Invoices → Configurations → Accounting → Taxes` | `Accounting → Configurations → Accounting → Taxes` | [Taxes](../taxes/taxes.md) |
| Attributes | `Invoices → Configurations → Products → Attributes` | `Accounting → Configurations → Products → Attributes` | [Product attributes](../../sales/configuration/product-attributes.md) |
| Categories | `Invoices → Configurations → Products → Categories` | `Accounting → Configurations → Products → Categories` | [Product categories](../../sales/configuration/product-categories.md) |

::: tip
Work through the pages in the order given in [Finance](../index.md#set-up-in-this-order).
:::

## See also

- [Finance overview](../index.md)
- [Get started](../get-started/index.md)
- [Taxes](../taxes/index.md)
