# 👥 Customer

The **Customer** module in **AureusERP** allows users to manage their clients by capturing all relevant personal, financial, and invoicing details. This guide walks you through the process of creating and managing customers.

## Customer Creation

### Steps to Create a Customer

1. Navigate to **Invoices >> Customers >> Customer >> New Customer**.

   ![Create Customer](../../../images/customer_create_1.png)

2. Fill out the form with the following details:

   ### 🧾 General Section

- **Individual or Company** (Toggle Button):
  - Switch between individual and company type.
  - If **Company** is selected, the **Company** field disappears.
- **Name**
- **Company:** (Dropdown or ➕ Create New)
- **Tax ID**
- **Job Title**
- **Phone**
- **Mobile**
- **Email**
- **Website**
- **Title:** (Dropdown or ➕ Create New)
- **Tags:** (Dropdown or ➕ Create New)
- **Address:** Street, City, Zip, State, Country

---

### 🛒 Sales and Purchase Section

#### Sales Subsection

- **Sales Person:** Dropdown to select any user.
- **Payment Terms:** Select predefined payment terms.
- **Payment Method:** Define preferred method for sales transactions.

#### Purchase Subsection

- **Payment Terms:** Set purchase-side payment terms.
- **Payment Method:** Define purchase payment method.

---

### 🧾 Fiscal Information Subsection

- **Fiscal Position:** (Dropdown)

---

### 📂 Others Subsection

- **Company ID**
- **Reference**
- **Industry:** (Dropdown)

---

### 🧾 Invoicing Section

#### Customer Invoices Subsection

- **Invoice Sending Method:** Options like **Download**, **Email**, or **Post**
- **eInvoice Format:** (Dropdown)

#### Automation Subsection

- **Auto Post Bills:** Options include:
  - Always
  - Ask after 3 validations without edit
  - Never
- **Ignore Abnormal Invoice Amount:** (Toggle Button)
- **Ignore Abnormal Invoice Date:** (Toggle Button)

---

## ✅ After Customer Creation

Clicking **Create** redirects to the **View Partner** page.

---

### 🛠️ Available Actions:

#### ✏️ Edit Partner

Update existing customer details.

---

### 👥 Manage Contacts

- Click **Contacts** to go to the **Manage Contacts** page.
- Click **Add Contact** to open a modal with the same form as above for new contact creation.

---

### 🗺️ Manage Address

- Click **Address** to open the **Manage Address** page.
- Click **Add Address** to open a modal form with:

  - **Toggles:** Permanent, Present, Invoice, Delivery, Other
  - **Fields:** Name, Email, Phone, Mobile, Address fields

---

### 🏦 Manage Bank Accounts

- Click **Bank Account** to go to the **Manage Bank Accounts** page.
- Click **New Bank Account** to open a modal with:

  - **Account Number\***:
  - **Can Send Money:** (Toggle Button)
  - **Bank\***: (Dropdown or ➕ Create)
  - **Account Holder\***: (Dropdown showing existing customers)

---

That completes the **Customer Creation and Management** process in **AureusERP**.
