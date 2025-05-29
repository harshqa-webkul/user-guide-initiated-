# Vendor Payments

The **Vendor Payments** section in AureusERP allows you to efficiently manage outgoing payments to vendors, settle bills, and maintain accurate records of vendor transactions. Below is the **step-by-step** guide to creating a Vendor Payment.

## Payment Creation

### Steps to Create a New Payment

1. Navigate to **Invoices >> Vendors >> Payments >> New Payment** as shown in the image below.

   ![Create Vendor Payment](../../../images/vendor_payment_create_1.png)

2. Fill in the fields according to the following section:

### Payment Form Fields

- **Payment Type** (**Send** / **Receive**)
  - **_Send:_** Record outgoing payments to vendors (e.g., bill settlements).
  - **_Receive:_** Record refunds or payment returns from vendors.
- **Vendor:** Choose from the list of registered vendors.
- **Amount:** Enter the total amount being sent or received.
- **Vendor Bank Account:** Select the bank account associated with the vendor.
- **Payment Method:** Choose how the payment is made (Bank, Cash, Cheque, etc.).
- **Date:** The date of the transaction.
- **Memo:** Add optional notes or internal references.

![Vendor Payment Form](../../../images/vendor_payment_create_form.png)

## Payment Lifecycle & States

Once you click **Create**, the vendor payment record is saved and redirects to the **View Payment** page. The payment enters the **`Draft`** state.

### 🎯 Payment States

- **Draft** – The initial state when the payment is created.
- **In Process** – After clicking **Confirm**, the payment begins processing.
- **Paid** – Indicates the payment was successfully made and reconciled with a bill.
- **Not Paid** – Indicates payment failed or remains unpaid.
- **Cancelled** – Payment was intentionally cancelled before processing.
- **Rejected** – The payment failed system checks or was declined.

## Available Actions (Post-Creation)

From the **View Payment** page, you can perform the following actions:

- **Edit** – Modify payment details (only available in the `Draft` state).
- **Delete** – Remove the payment before it is confirmed.
- **Confirm** – Move the payment to `In Process` and initiate payment settlement.
- **Cancel** – Cancel the payment at any point before completion.

  ![Vendor Payment View](../../../images/vendor_payment_create_view.png)

## 🧾 Bill Settlement Logic

If a payment is linked to a vendor bill, AureusERP attempts to automatically reconcile it with open bills for the selected vendor.

- **Full Payment**: If the payment amount matches the bill total, the bill is marked as **Paid**.
- **Partial Payment**: If the payment is less than the total bill, the bill will be marked as **Partially Paid**. Additional payments can be added to complete the settlement.

Reconciliation is automatic based on vendor and open bill matching. Manual matching is also available if needed.

## Example Flow

1. **Create Vendor Payment**

   - Type: `Send`
   - Amount: `$2,500`
   - Linked to: `BILL/2025/05/207`

2. **Confirm Payment**

   - State changes to `In Process`

3. **Automatic Bill Matching**

   - The system matches the payment to `BILL/2025/05/207`.

4. **Settlement Complete**
   - Bill is marked as `Paid`
   - Payment status updated to `Paid`
