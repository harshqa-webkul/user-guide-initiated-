# Companies

A **company** is a legal entity that you run in Aureus ERP. Each company has its own details, address, currency, logo and optional branches. Users are given access to companies, and records are kept per company. Your system starts with one company. Add another for a separate legal entity. Add a branch for a site that reports to a company. You manage companies from the **Companies** tab of the Settings app.

> **In simple words:** A company holds the identity of your business: name, address, currency, logo and branches.

## Overview

Open `Settings → Companies` to see the list of companies.

<ImagePopup src="/images1/general-settings/companies_list.png" alt="Company list with the All Companies and Archived Companies tabs and the New Company button" />

The list has two tabs:

- **All Companies:** Active companies, with a count badge.
- **Archived Companies:** Deleted companies, with a count badge.

The list shows these columns:

- **_Logo:_** The company logo.
- **_Company Name:_** The name.
- **_Branches:_** The names of the branches, as badges.
- **_Email:_** The company email.
- **_Currency:_** The currency of the company.
- **_Status:_** A tick or cross icon.
- **_City, Country, Created By, Created At, Updated At:_** Hidden at first. Show them from the column menu.

Use the filters **Status** and **Country** to narrow the list. You can also group rows by name, city, country, state, email, phone, currency and other fields.

## Create a company

1. Go to `Settings → Companies`.
2. Click **New Company**.

   <ImagePopup src="/images1/general-settings/company_create_form.png" alt="New Company form filled with company, address, branding and contact details" />

3. Fill in the form as described below.
4. Click **Create**. A company-created message appears.

### Company Information

- **_Company Name:_** The name. It must be unique. Required.
- **_Registration Number:_** The number in the government register, for example `U12345KA2010PTC000001`.
- **_Company ID:_** Your own code for the company, for example `CMP-001`.
- **_Tax ID:_** The tax number, for example `29ABCDE1234F1Z5`. It must be unique.
- **_Website:_** The web address. It must be a valid URL and unique.

### Address Information

<ImagePopup src="/images1/general-settings/company_address_section.png" alt="Address Information section" />

- **_Street 1:_** The first address line.
- **_Street 2:_** The second address line.
- **_City:_** The city.
- **_Zip Code:_** The postal code.
- **_Country:_** Choose a country. You can search the list.
- **_State:_** Choose a state of the selected country. Use the plus icon to create a state with **State Name**, **State Code** and **Country**.

### Additional Information

- **_Default Currency:_** The currency of this company's books. Required. The system-wide **Base Currency** is set in [Manage currency](./currency.md). Use the plus icon to create a currency with **Currency Name**, **Currency Full Name**, **Currency Symbol**, **Currency ISO Numeric**, **Currency Decimal Places**, **Currency Rounding** and **Currency Status**.
- **_Company Foundation Date:_** The date the company was founded.

Your installed modules or custom fields may add more fields here. See [Custom fields](../customization/custom-fields.md).

### Branding

<ImagePopup src="/images1/general-settings/company_branding_section.png" alt="Create Company form with the Branding and Contact Information sections on the right side" />

- **_Company Logo:_** Upload an image.
- **_Color:_** Pick a color. It is stored as a hex code.

### Contact Information

- **_Phone Number_** (first field): The main phone.
- **_Phone Number_** (second field): The mobile phone. The form uses this label twice.
- **_Email Address:_** The company email.

## Add a branch

A branch is a company that belongs to another company. You add it on the parent company.

1. Open `Settings → Companies`, then edit a company. Scroll to the **Branches** table.
2. Click **New company** at the top right of the table. A **Create Company** window opens.

   <ImagePopup src="/images1/general-settings/company_branch_form.png" alt="Create Company window for a branch, filled in on the General Information tab, with the Address Information and Contact Information tabs next to it" />

3. Fill in the three tabs.
4. Click **Create**. The branch appears in the table.

The branch form has these tabs:

- **General Information:** **Company Name**, **Registration Number**, **Company ID**, **Tax ID**, **Color** and **Branch Logo**.
- **Address Information:** the address fields, **Default Currency** and **Status**.
- **Contact Information:** **Email Address** and **Phone Number**.

::: info
A branch name must be unique across all companies.
:::

## Actions and statuses

Click the three dots on a row to open these actions:

- **View:** Opens a read-only page.
- **Edit:** Opens the form. A **Company edited** message appears.
- **Delete:** Moves the company to **Archived Companies**.
- **Restore:** Shown on archived companies. Brings the company back.
- **Force delete:** Shown on archived companies. Removes the company for good.

::: warning
You cannot delete a company that is the default company of a user. Change that user's **Default Company** first.
:::

::: warning
**Force delete** fails when other records still use the company. The system shows **Company force deletion failed**.
:::

To give users access to a company, use **Allowed Companies** on the user form. See [Users](../users/users.md).

## See also

- [Users](../users/users.md)
- [Currency](./currency.md)
- [Branding](../customization/branding.md)
- [Custom fields](../customization/custom-fields.md)
