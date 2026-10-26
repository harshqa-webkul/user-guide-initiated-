# Manage customers

A customer is a person or a company you sell to. You create the customer once. After that you pick them on every quotation, and Aureus fills in their address, payment terms and salesperson for you. This saves typing and keeps your records tidy.

> **In simple words:** The customer record is the address book entry for the people you sell to.

::: info
Customers and Contacts are the same records. A customer you add here also appears in **Contacts**, and the other way round. This page covers what matters for selling. For the full contact fields, see [Contacts](../../../getting-started/contacts/contacts.md).
:::

## Overview

Open `Sales → Orders → Customers`. The list shows the name, email, phone, account type, job title and industry of each customer.

Use the tabs above the list:

- **_Default:_** All customers.
- **_Individuals:_** Customers who are people.
- **_Companies:_** Customers who are businesses.
- **_Archived:_** Customers you deleted. You can bring them back from here.

Use **Group by** to group the list by **Account Type**, **Parent**, **Title**, **Job Title** or **Industry**. For example, group by **Industry** to see all your retail customers together. For search and filter tips, see [Search, filter and group records](../../../getting-started/search-filter-group.md).

Each row has **View**, **Edit** and **Delete** actions.

## Create a customer

Example: your company sells office furniture. A new client, Brightway Offices, asks for a quote. You add Brightway as a company first. Then you add Priya, the person who orders for them.

1. Go to `Sales → Orders → Customers`.
2. Click **Create Customer**.

<ImagePopup src="/images1/sales/customers_list.png" alt="Customers list with the Customers menu and the New Customer button" />

3. Fill in the form. Only the name is needed to save. The other fields help you later.

### General

- **_Individual or Company:_** Choose the type. Pick **Company** for a business such as Brightway Offices. Pick **Individual** for a person. When you choose **Company**, the **Company** field is hidden.
- **_Name:_** The full name of the person or company.
- **_Company:_** For a person, the company they work for. Choose one from the list, or create it on the spot. Priya would get "Brightway Offices" here.
- **_Tax ID:_** The tax or VAT number. It prints on the invoice, so add it for business customers.
- **_Job Title:_** The person's role, such as Purchase Manager.
- **_Phone_** and **_Mobile:_** The numbers you call.
- **_Email:_** Where Aureus sends quotations. Check it carefully.
- **_Website:_** The customer's web address.
- **_Title:_** A form of address, such as Mr or Dr.
- **_Tags:_** Labels to group customers, such as "Wholesale". See [Tags](../configuration/tags.md).
- **_Address:_** Street, city, zip code, state and country.

<ImagePopup src="/images1/sales/customer_create_general.png" alt="Create Customer page, General section filled in" />

### Sales and Purchases

This section sets the defaults that Aureus copies onto a new quotation for this customer.

**Sales**

- **_Responsible:_** The team member who looks after this customer. Pick yourself, for example.
- **_Price List:_** The price list Aureus uses for this customer. It shows only when **Price Lists** is on.
- **_Payment Terms:_** When the customer must pay after you invoice. For example, "30 Days" means payment is due 30 days after the invoice date. You can change it on each quotation. To create new terms, see [Payment terms](../../../finance/customer-invoices/payment-terms.md).
- **_Payment Method:_** How the customer usually pays, such as bank transfer.

**Purchase**

Fill this only if you also buy from this customer.

- **_Payment Terms:_** When you pay them.
- **_Payment Method:_** How you pay them.

**Fiscal Information**

- **_Fiscal Position:_** Tax rules for this customer. Use it when taxes change by region, for example for customers abroad.

**Others**

- **_Company ID:_** Your own internal code.
- **_Reference:_** Another code, such as a customer number.
- **_Industry:_** The business sector. You can group the list by it.

<ImagePopup src="/images1/sales/customer_create_sales.png" alt="Sales and Purchases tab with Responsible, Payment Terms, Payment Method and Price List filled in" />

### Invoicing

**Customer Invoices**

- **_Invoice Sending Method:_** How invoices reach this customer: **Download**, **Email** or **Post**.
- **_eInvoice Format:_** The electronic invoice format to use, if your customer needs one.

**Accounting Entries**

- **_Account Receivable:_** The account used for what the customer owes you. It is filled for you.
- **_Account Payable:_** The account used for what you owe the customer. It is filled for you.

**Automation**

- **_Auto Post Bills:_** Choose **Always**, **Ask after 3 validations without edit** or **Never**.
- **_Ignore Abnormal Invoice Amount:_** Skips the warning for unusual invoice amounts.
- **_Ignore Abnormal Invoice Date:_** Skips the warning for unusual invoice dates.

If you are unsure, leave these on their defaults.

4. Click **Create**. Click **Create & create another** to add more customers, or **Cancel** to leave.

::: tip
You can also create a customer without leaving a quotation. Click the plus icon next to **Customer**.
:::

<ImagePopup src="/images1/sales/customer_create_invoicing.png" alt="Invoicing tab with invoice sending method, accounting entries and automation" />

## After you create a customer

Aureus opens the customer page. Click **Edit** to change the record. The tabs on this page let you add contacts, addresses and bank accounts.

### Contacts

Use this tab for the people you deal with at a company. Priya, Brightway's buyer, is one example.

1. Open the **Contacts** tab.
2. Click **Add Contact**.
3. Fill in the form. It has the same fields as a new customer.
4. Save the contact.

<ImagePopup src="/images1/sales/customer_view.png" alt="Customer page with the View, Edit, Contacts, Addresses and Bank Accounts tabs" />

### Address

Use this tab when one customer has more than one place. Brightway may want invoices sent to head office and goods sent to a warehouse.

1. Open the **Address** tab.
2. Click **Add Address**.
3. Choose the address type: **Permanent**, **Present**, **Invoice**, **Delivery** or **Other**.
4. Enter the **Name**, **Email**, **Phone**, **Mobile** and the full address.
5. Save the address.

### Bank accounts

Use this tab to keep the customer's bank details, for example to refund them later.

1. Open the **Bank Account** tab.
2. Click **New Bank Account**.
3. Fill in the form:

   - **_Account Number:_** The bank account number.
   - **_Can Send Money:_** Turn this on if you can pay money into this account.
   - **_Bank:_** Choose a bank, or create one with the plus icon.
   - **_Account Holder:_** The customer the account belongs to.

4. Save the account.

## Actions and statuses

- **Edit:** Change any field. Click **Save changes** when done.
- **Delete:** Moves the customer to the **Archived** tab. Old quotations keep their customer name.
- **Restore:** From **Archived**, bring a customer back into the active list.

::: warning
Check the **Email** and **Payment Terms** before you send the first quotation. A wrong email means the customer never gets it. Wrong terms put the wrong due date on the invoice.
:::

## See also

- [Create a quotation](./create-quotation.md)
- [Quotations and orders](./index.md)
- [Contacts](../../../getting-started/contacts/contacts.md)
- [Tags](../configuration/tags.md)
- [Payment terms](../../../finance/customer-invoices/payment-terms.md)
