# Manage currency

The **Manage Currency** page sets the **Base Currency** of your system. Product prices are stored in this currency. They are converted to the company currency when you make a sale or purchase.

> **In simple words:** The base currency is the one your product prices are kept in.

## Set the base currency

1. Go to `Settings → Settings`.
2. In the left menu, under **General**, click **Manage Currency**.
3. In **Base Currency**, choose a currency. Type to search the list.
4. Click **Save changes**.

<ImagePopup src="/images1/general-settings/manage_currency_page.png" alt="Manage Currency page with the Base Currency field" />

::: info
The list shows only active currencies. If yours is missing, activate it first. See [Manage currencies](#manage-currencies).
:::

## Manage currencies

The currency list is not in the Settings menu. It appears in the Configuration menu of modules that use money, for example Invoices, Sales, Purchases and Accounting. The menu item is **Currencies**.

1. Open the **Configurations** tab of one of these modules, for example `Accounting → Configurations`.
2. In the left menu, click **Currencies**.

<ImagePopup src="/images1/general-settings/currencies_list.png" alt="Currencies list with the Status toggle column" />

### Overview

The list shows these columns:

- **Currency Name**, **Symbol**, **Full Name**, **ISO Code**, **Decimal Places**, **Rounding**.
- **Status:** A toggle that shows if the currency is active.
- **Created At** and **Updated At:** Hidden by default. Use the column menu to show them.

The tabs **All**, **Active** and **Inactive** show a count. Active currencies are listed first. You can search, sort, group by **Name**, **Status** or **Decimal Places**, and filter by **Status**.

### Create or edit a currency

1. Click **New Currency**, or open a row and click **Edit**.
2. Fill in **Currency Information**:
   - **_Currency Name:_** The official name. Required.
   - **_Currency Symbol:_** The sign, for example `$`.
   - **_Full Name:_** The long name.
   - **_ISO Numeric Code:_** A number from 1 to 999.
3. Fill in **Format Configuration**:
   - **_Decimal Places:_** From 0 to 6. The default is 2.
   - **_Rounding Precision:_** The rounding used in calculations.
4. In **Status & Configuration**, use **_Status_** to turn the currency on or off. It is on by default.
5. Save the record.

<ImagePopup src="/images1/general-settings/currency_form.png" alt="New currency form with currency, format and status sections" />

### Enable or archive a currency

Use the **Status** toggle in the list, or on the form. Off means the currency is archived and cannot be chosen.

::: warning
A currency used by a company cannot be deactivated. You see **Currency cannot be deactivated**. A currency in use also cannot be deleted.
:::

### Set currency rates

The **Currency Rates** section keeps past exchange rates against the base currency.

1. Open the currency and click **Edit**.
2. In **Currency Rates**, click **Add Rate**.
3. Fill in the row:
   - **_Date:_** The day the rate starts. Today by default.
   - **_Unit Per [base currency]:_** The rate. The minimum is 1.
   - **_[Base currency] Per Unit:_** Filled in for you. It is the inverse of the rate.
4. Save the record.

You need at least one rate row. Use the clone icon to copy a row. Deleting a row asks you to confirm.

<ImagePopup src="/images1/general-settings/currency_rates.png" alt="Currency Rates section with the Add Rate button and one rate row" />

## See also

- [Companies](./companies.md)
- [General settings overview](../index.md)
