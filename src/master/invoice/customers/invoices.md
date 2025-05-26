# Invoices

The Invoice module in AureusERP allows users to generate professional invoices with detailed control over billing, product lines, accounting standards, and marketing insights. Below is the **step-by-step** guide to creating an invoice.

## Invoice Creation

### Steps to Create a New Invoice

1.  Click on **Invoices >> Customers >> New Invoice** as shown in the below image.

    ![Create Invoice](../../../images/invoice_create_1.png)

2.  Filling up fields as per the **section** defeind below :

    ### 🧾 General Section

    This section captures the basic invoice metadata.

    - **_Customer:_** Select the customer to whom the invoice will be issued.
    - **_Invoice Date:_** Choose the date of invoice generation.
    - **_Due Date:_** Set the deadline for payment.
    - **_Payment Term:_** Select a predefined payment term (e.g., Net 30, Immediate).

      > 🛈 When a payment term is selected, the **Due Date** field will be automatically replaced with the calculated date based on the selected term.

      ![Create Invoice](../../../images/invoice_create_general.png)

    ### 📦 Invoice Lines

    Use this section to add products or services being billed.

    - **_➕ Add Product:_** Click to add a new invoice line. The following fields will appear:

      - **_Product:_** Select the product or service.
      - **_Quantity:_** Enter the number of units or dozens.
      - **_Unit:_** **Units** or **Dozens**.
      - **_Taxes_**: Specify applicable tax rates.
      - **_Discount Percentage:_** Apply discount if applicable.
      - **_Unit Price:_** Input price per unit.
      - **_Subtotal:_** Automatically calculated as `(Quantity x Unit Price - Discount) + Taxes`.

      ![Create Invoice](../../../images/invoice_create_invoicelines.png)

    ### 📝 Other Information

    - **Invoice Subsection**

      - **_Sales Person:_** Select a user acting as the sales representative.
      - **_Customer Reference:_** Enter customer’s internal reference (if any).
      - **_Recipient Bank:_** Select the customer’s receiving bank account.
      - **_Payment Reference:_** Add a payment transaction or reference code.
      - **_Delivery Date:_** Mention the expected or actual delivery date.

      ![Create Invoice](../../../images/invoice_create_other_1.png)

    - **Accounting Subsection**

      - **_Incoterm:_** Select international commercial terms (e.g., FOB, CIF).
      - **_Incoterm Location:_** Specify the geographical location tied to the Incoterm.
      - **_Payment Method:_** Define how the customer intends to pay (e.g., Credit Card, Wire Transfer).
      - **_Auto Post:_** Enable to automatically post this invoice upon creation.
      - **_Checked:_** Use for internal review or verification before processing.

      ![Create Invoice](../../../images/invoice_create_other_2.png)

    - **Additional Information Subsection**

      - **_Company:_** Select the company issuing the invoice (multi-company support).
      - **_Currency:_** Choose the currency for the invoice. USD is selected by default.

      ![Create Invoice](../../../images/invoice_create_other_3.png)

    - **Marketing Subsection**

      - **_Campaign:_** Tag this invoice with an associated marketing campaign.
      - **_Medium:_** Identify the medium (e.g., Email, Social Media).
      - **_Source:_** Specify the source (e.g., Google, Referral).

      ![Create Invoice](../../../images/invoice_create_other_4.png)

3.  Action Buttons

    At the bottom of the form, you will find:

    - **Create**: Saves and creates the invoice.
    - **Create & Create Another**: Saves current invoice and opens a new invoice form.
    - **Cancel**: Discards the changes and exits the invoice creation screen.

## Invoice View (Post-Creation)

After clicking **Create**, the system redirects to the **Invoice View** page.

### 🛠️ Initial Actions (When Invoice is in Draft)

- **Edit**: Modify invoice fields.
- **Confirm**: Finalize the invoice and change its status from **Draft** to **Posted**.
- **Cancel**: Mark the invoice as cancelled.
- **Delete**: Permanently remove the invoice.

![Create Invoice](../../../images/invoice_view.png)

## Invoice After Confirmation

Once the invoice is **Confirmed** (status becomes Posted), the following actions become available:

- **Pay**: Opens a modal window with the following fields:

  - **Amount\***: The invoice amount to be paid.
  - **Payment Date\***: Date of payment.
  - **Partner Bank Account\***: Select bank account from dropdown.
  - **Payment Method\***: Choose from available methods.
  - **Communication\***: Auto-filled invoice number (e.g., INV/2025/05/13).

  > 🛈 Clicking **Submit** updates invoice status to **Paid**.
  > ![Create Invoice](../../../images/invoice_pay.png)

- **Reset to Draft**: Revert the invoice back to **Draft** state.
- **Preview**: Display a printable version of the invoice.
- **Credit Note**: Create a credit note with **Reason** and **Date**.
- **Delete**: Remove the invoice if needed.

![Create Invoice](../../../images/invoice_confirm.png)

---
