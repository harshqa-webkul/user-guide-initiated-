# Customer

The **Customer** module in the **Sales** plugin of **AureusERP** allows users to manage their clients by capturing all relevant personal, financial, and sales-related details. This guide walks you through the process of creating and managing customers within the Sales context.

## Customer Creation

### Steps to Create a Customer

1. Navigate to **Sales >> Orders >> Customers >> New Customer**.

   ![Create Customer](../../../images/sale_customer_create.png)

2. Fill out the form with the following details:

   ### General Section

   - **Individual or Company** (Toggle Button):
     - Choose whether the customer is an individual or a business entity.
     - If **Company** is selected, the **Company** field disappears to avoid redundancy.
   - **Name:** Full name of the individual or contact person.
   - **Company:** Select or create the associated company, if applicable.
   - **Tax ID** Enter the official tax identification number for regulatory compliance.
   - **Job Title** Job designation of the individual (if applicable).
   - **Phone** Primary landline contact number.
   - **Mobile** Mobile number for direct or urgent contact.
   - **Email** Email address for communication and invoicing.
   - **Website** Official website of the customer or company.
   - **Title:** Select or create a prefix like Mr., Ms., Dr., etc.
   - **Tags:** Use predefined or custom tags to categorize or label the customer.
   - **Address:** Enter the complete physical address including Street, City, Zip Code, State, and Country.

   ![Create Customer](../../../images/sale_customer_create_1.png)

   ### Sales and Purchase Section

   - **Sales Subsection**

     - **_Sales Person:_** Select the internal user responsible for this customer.
     - **_Payment Terms:_** Defines how long the customer has to pay after being invoiced (e.g., Net 30, Immediate).
     - **_Payment Method:_** Preferred method for receiving payments from this customer (e.g., bank transfer, cheque).

   - **Purchase Subsection**

     - **_Payment Terms:_** Sets default payment timeline when buying from this customer.
     - **_Payment Method:_** Indicates how your company intends to pay this customer if they’re also a vendor.

   ![Create Customer](../../../images/sale_customer_create_purchase.png)

   - **Fiscal Information Subsection**

     - **_Fiscal Position:_** Determines the applicable tax and accounting rules for the customer, often based on location or legal entity type.

   - **Others Subsection**

     - **_Company ID:_** Internal reference code or identifier used for tracking this customer.
     - **_Reference:_** A secondary identifier such as a vendor/customer code.
     - **_Industry:_** Select the business sector the customer operates in; helpful for reporting and segmentation.

   ![Create Customer](../../../images/sale_customer_create_others.png)

   ### Invoicing Section

   - **Customer Invoices Subsection**

     - **_Invoice Sending Method:_** Choose how invoices will be sent—**Download**, **Email**, or **Post**
     - **_eInvoice Format:_** Specify the electronic invoicing format used for compliance with legal or regional requirements.

   - **Automation Subsection**

     - **_Auto Post Bills:_** Controls whether the system should automatically post bills. Options:
       - **_Always:_** Automatically post bills.
       - **_Ask after 3 validations without edit:_** Semi-automatic mode after verification.
       - **_Never:_** Manual posting only.
     - **_Ignore Abnormal Invoice Amount:_** Toggles a rule to bypass validation warnings for unusually high or low invoice values.
     - **_Ignore Abnormal Invoice Date:_** Ignores validations triggered by suspicious or mismatched invoice dates.

   ![Create Customer](../../../images/sale_customer_create_invoicing.png)

## After Customer Creation

Once you click **Create**, you will be redirected to the **View Partner** page. This page provides a centralized overview of the customer's information and offers tools to manage contacts, addresses, and bank accounts.

![Create Customer](../../../images/sale_customer_create_view.png)

### Edit Partner

Update the customer’s personal, company, or fiscal details by clicking the Edit Partner button. Ideal for making corrections or updating records over time.

### Contacts

- Click on the **Contacts** tab to open the **Manage Contacts** page.
- Use the **Add Contact** button to launch a modal form.
- This form replicates the customer creation format, allowing you to:
  - Add multiple points of contact for a customer.
  - Capture details like name, email, phone, title, etc.

![Create Customer](../../../images/sale_customer_create_contact.png)

> 📌 **_Use Case:_** Helpful for organizations with multiple contact persons.

### Address

- Click the **Address** tab to navigate to the **Manage Address** page.
- Click **Add Address** to open a modal form with:

  - **Toggles:** Define the type of address — Permanent, Present, Invoice, Delivery, or Other.
  - **Fields:** Name, Email, Phone, Mobile, and full Address Details (Street, City, Zip Code, State, Country)

![Create Customer](../../../images/sale_customer_create_address.png)

### Bank Accounts

- Navigate to the **Bank Account** section to manage financial details.
- Click **New Bank Account** to open a modal form with the following fields:

  - **Account Number\***: Unique identifier of the customer’s bank account.
  - **Can Send Money:** Enable if this account can be used for outbound payments.
  - **Bank\***: Choose from existing banks or click ➕ to create a new one.
  - **Account Holder\***: Select the relevant customer from the dropdown.

![Create Customer](../../../images/sale_customer_create_bank.png)

> 📌 **_Use Case:_** Manage multiple financial accounts for the customer, control access, and define payment channels.

---
