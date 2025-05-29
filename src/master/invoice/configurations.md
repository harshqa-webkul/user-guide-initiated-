# Configurations

The **Configurations** section of the **Invoices** plugin in **AureusERP** allows you to define and customize key parameters that affect how customer and vendor invoices are managed. These settings streamline payment processing, taxation, categorization, and bank details for a more efficient and accurate invoicing workflow.

## 🏦 Bank Accounts

> **Why it's used:** Bank accounts are essential for recording and processing payments to and from customers or vendors. They enable reconciliation and help track financial transactions in the system.

### Bank Account Creation

To set up a bank account:

- Navigate to **Invoices >> Configurations >> Bank Accounts >> New Bank Account**.
  ![Create Bank](../../../images/bank_create.png)
- A modal will open with the following fields:
  - **Account Number:** Enter the full bank account number.
  - **Bank:** Choose from the dropdown or click the ➕ icon to create a new bank.
    - A new modal appears with fields:
      - **Name**
      - **Bank Identifier Code**
      - **Email**
      - **Phone**
      - **Address**
  - **Account Holder:** Select from registered **Customers** or **Vendors**.

![Create Bank](../../../images/bank_create_1.png)

> These accounts will be used for payment reconciliation during invoice or bill processing.

## 🌐 Incoterms

> **Why it's used:** Incoterms define responsibilities for shipping, insurance, and tariffs between buyers and sellers—important for international transactions.

### Incoterms Creation

Define international commercial terms (Incoterms):

- Navigate to **Invoices >> Configurations >> Incoterms >> New Incoterms**.
  ![Create Bank](../../../images/incoterms_create.png)
- A modal will open with fields:

  - **Code:** (3 characters only, e.g., CIF, FOB)
  - **Name:** Full name or description of the term

![Create Bank](../../../images/incoterms_create_1.png)

> Incoterms help in setting payment responsibilities and shipment terms in both vendor and customer transactions.

## 📅 Payment Terms

> **Why it's used:** Payment terms define when invoices or bills are due and allow for discounts on early payments, improving cash flow and clarity in business transactions.

### Payment Terms Creation

To configure when payments are due:

- Navigate to **Invoices >> Configurations >> Payment Terms >> New Payment Terms**.
  ![Create Bank](../../../images/payment_term_create.png)
- Enter the following:

  - **Payment Term:** Name of the term (e.g., Net 30, Immediate)
  - **Early Discount:** Toggle to enable early payment discounts
    - If enabled:
      - **Discount Percentage**
      - **Number of Days to Pay**
  - **Reduced Tax:** Options: `On Early Payment`, `Never`, `Always (upon Invoice)`

    ![Create Bank](../../../images/payment_terms_create_1.png)

Once created, you are redirected to the **View Payment Term** page where you can manage **Due Terms**.

### Manage Payment Due Terms

Clicking **Manage Due Terms** redirects to a dedicated management screen:
![Create Bank](../../../images/due_terms_create_1.png)

- One default due term with 100% value is already present.
- Click **New Payment Due Term** to open a modal with fields:

  - **Value:** Enter percentage or fixed value
  - **Due:** Description or label
  - **Delay Type:** Options include:
    - Day After
    - Day After End of Month
    - Day After End of Next Month
    - Days End of Month On
  - **Days on the Next Month:** Applicable for monthly delay types
  - **Days:** Enter number of days for the delay
  - **Payment Term:** Select from all existing payment terms

![Create Bank](../../../images/due_terms_create.png)

> Payment terms determine the due dates for invoices and bills—automatically calculating deadlines and discounts where applicable.

## 🗂️ Categories

> **Why it's used:** Categories organize invoice items such as products or services into logical groups, improving reporting, filtering, and item management.

### Category Creation

Organize your invoice line items into categories:

- Navigate to **Invoices >> Configurations >> Categories >> New Categories**.
  ![Create Bank](../../../images/category.png)
- Fill the fields:

  - **Name:** e.g., Women's Clothing
  - **Parent:** e.g., All > Clothing (select from dropdown)

![Create Bank](../../../images/category_create_1.png)

> Categories help in product segmentation for both purchases and sales, improving tracking and reporting.

## 🏷️ Attributes

> **Why it's used:** Attributes allow you to define variations for invoice items (e.g., size, color), which influence pricing and provide flexibility in product/service invoicing.

### Attribute Creation

Define product/service attributes for invoicing:

- Navigate to **Invoices >> Configurations >> Attribute >> New Attribute**.

![Create Bank](../../../images/attribute_create.png)

#### General Section

- **Name:** Label of the attribute (e.g., Size, Fabric)
- **Type:** Select one of the following:
  - **Radio**
  - **Select**
  - **Color**

#### Options Section

Depending on the type selected, the fields vary:

- **Name:** Option name (e.g., Medium, Blue)
- **Extra Price:** Additional cost added to base product price

![Create Bank](../../../images/attribute_create_1.png)

> Useful in customizing invoices by associating variants with products or services.

## 📊 Tax Groups

> **Why it's used:** Tax groups bundle multiple tax rates into a single entity, simplifying the application of compound taxes (e.g., GST + CESS).

### Tax Group Creation

Group similar taxes together:

- Navigate to **Invoices >> Configurations >> Tax Groups >> New Tax Groups**.
  ![Create Bank](../../../images/tax_group_create.png)
- Fill in the fields:

  - **Company:** Select company for which the group is created
  - **Country:** Specify the applicable country
  - **Name\***: Tax group name
  - **Preceding Subtotal:** Reference value before tax calculation

![Create Bank](../../../images/tax_group_create_1.png)

> Tax groups are used in invoices and bills to apply grouped taxes efficiently.

## 🧾 Tax

> **Why it's used:** Taxes define how prices are calculated with or without tax, based on country, region, and item type. They're vital for accurate billing and compliance.

### Tax Creation

Define individual tax rules and formulas:

- Navigate to **Invoices >> Configurations >> Tax >> New Tax**.
  ![Create Bank](../../../images/tax_create.png)
- Fill in the general fields:

  - **Name:** Label for the tax (e.g., Tax 15%)
  - **Tax Type\***: `Sale`, `Purchase`, `None`
  - **Tax Computation\***:
    - Percent
    - Fixed
    - Group
    - Division
    - Custom Formula
  - **Tax Scope:** e.g., goods
  - **Status:** Enable or disable tax

![Create Bank](../../../images/tax_create_1.png)

#### Advanced Options

- **Invoice Label:** Display name on invoices
- **Tax Group:** Select from existing groups or create new
- **Country:** Specify applicable country
- **Included in Price:** Options:
  - Default
  - Included
  - Excluded
- **Affect Base of Subsequent Taxes:** Toggle
- **Base Affected by Previous Taxes:** Toggle
- **Description:** Internal use
- **Legal Notes:** Regulatory details

![Create Bank](../../../images/tax_create_2.png)

> Taxes affect how totals are calculated for both customer invoices and vendor bills.

These configurations are the backbone of the invoicing system in **AureusERP**. They ensure that your accounting, billing, and payment operations are consistent, localized, and compliant with internal policies and external regulations.
