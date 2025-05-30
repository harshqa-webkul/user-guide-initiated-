# Bills

The **Bills** module in **AureusERP** is designed to help businesses accurately record and manage vendor expenses and obligations. It enables finance teams to track purchases, validate vendor bills, and prepare for timely payments.

## Bill Creation

### Steps to Create a New Bill

1. Navigate to **Invoices >> Vendors >> Bills >> New Bill** as shown in the image below.

   ![Create Bill](../../../images/bill_create_1.png)

2. Fill in the fields according to the following sections:

   ### 🧾 General Section

   This section captures essential metadata for the vendor bill:

   - **_Vendor:_** Select the supplier who issued the bill.
   - **_Bill Date:_** The date on which the bill was issued by the vendor.
   - **_Bill Reference:_** Vendor’s invoice number or reference ID.
   - **_Accounting Date:_** Date for financial recognition of the bill.
   - **_Payment Reference:_** Add a reference string or transaction ID for internal tracking.
   - **_Recipient Bank:_** Choose the vendor's bank account for payment.
   - **_Due Date:_** Set the payment deadline manually or calculate automatically based on payment terms.
   - **_Payment Term:_** Select a pre-defined duration for when the bill should be paid (e.g., Net 30, Immediate).
     > 🛈 When a payment term is selected, the **Due Date** field will be automatically replaced with the calculated date based on the selected term.

   ![Create Bill](../../../images/bill_create_general.png)

   ### 📦 Invoice Lines

   Use this section to enter purchased goods or services from the vendor.

   - **_➕ Add Product:_** Click to add a bill line item. The following fields will appear:

     - **_Product:_** Choose the purchased item or service.
     - **_Quantity:_** Specify the number of units or amount.
     - **_Unit:_** Define the unit of measure (e.g., Units, Dozens).
     - **_Taxes:_** Add applicable vendor-side taxes.
     - **_Discount Percentage:_** Apply negotiated discounts.
     - **_Cost:_** unit price of the product.
     - **_Subtotal:_** Auto-calculated as `(Quantity × Cost - Discount) + Taxes`.

   ![Create Bill](../../../images/vendor_create_invoicelines.png)

   ### 📝 Other Information

   - **Accounting Subsection**

     - **_Incoterm:_** Select applicable international trade terms (e.g., FOB, CIF).
     - **_Incoterm Location:_** Define the location tied to the selected Incoterm.

   - **Secured Subsection**

     - **_Payment Method:_** Specify the method of vendor payment (e.g., Wire Transfer).
     - **_Auto Post:_** Enable to automatically post the bill upon creation.
     - **_Checked:_** Toggle for internal review or approval.

   - **Additional Information Subsection**

     - **_Company:_** Select the company paying the bill (for multi-company setup).
     - **_Currency:_** Choose the currency of the bill.

   ![Create Bill](../../../images/bill_create_other.png)

3. Action Buttons

   At the bottom of the form, the following actions are available:

   - **Create**: Saves and creates the bill.
   - **Create & Create Another**: Saves current bill and opens a fresh form.
   - **Cancel**: Discards any entries and exits the bill creation screen.

## Bill View (Post-Creation)

After clicking **Create**, the system opens the **Bill View** page.

### 🛠️ Initial Actions (When Bill is in Draft)

- **Edit**: Open and modify bill fields.
- **Confirm**: Finalize the bill and and change its status from **Draft** to **Posted**.
- **Cancel**: Mark the bill as cancelled.
- **Delete**: Remove the bill permanently.

![View Bill](../../../images/bill_view.png)

## Bill After Confirmation

Once the bill is **Confirmed** (status becomes Posted), the following actions become available:

- **Pay**: Opens a modal window with the following fields:

  - **Amount\***: The bill amount to be paid.
  - **Payment Date\***: Date of payment.
  - **Partner Bank Account\***: Select bank account from dropdown.
  - **Payment Method\***: Choose from available methods.
  - **Communication\***: Auto-filled Bill number (e.g., BILL/2025/05/13).

  > 🛈 Clicking **Submit** updates bill status to **Paid**.
  > ![Create Invoice](../../../images/bill_pay.png)

- **Reset to Draft**: Revert the bill back to **Draft** state.
- **Credit Note**: Create a credit note with **Reason** and **Date**.
- **Delete**: Remove the bill if needed.

![Create Invoice](../../../images/bill_confirm.png)

---

<!-- <video controls style="max-width: 100%; height: auto;">
  <source src="../../../videos/1.webm" type="video/webm" allow="accelerometer; autoplay;">
  Your browser does not support the video tag.
</video> -->
