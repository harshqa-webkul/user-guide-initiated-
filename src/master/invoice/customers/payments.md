# Payments

The **Payments** section in AureusERP enables you to efficiently record and manage customer payments, handle invoice settlements, and monitor transaction states just like a standard ERP workflow. Below is the **step-by-step** guide to creating an Payment.

## Payment Creation

### Steps to Create a New Payment

1. Navigate to **Invoices >> Customers >> Payments >> New Payment** as shown in the below image.

![Create Payment](../../../images/payment_create_1.png)

2.  Filling up fields as per the **section** defeind below :

### Payment Form Fields

- **Payment Type** (**Send** / **Receive**)
  - **_Receive:_** Record incoming payments from customers (e.g., invoice payments).
  - **_Send:_** Record outgoing payments (e.g., refunds to customers).
- **Customer:** Choose from the list of existing customers.
- **Amount:** Enter the total amount being sent or received.
- **Customer Bank Account:** Select the bank account associated with the customer.
- **Payment Method:** Choose how the payment is made (Bank, Cash, Cheque, etc.).
- **Date:** The date of the transaction.
- **Memo:** Add optional notes or references for internal use.

![Create Payment](../../../images/payment_create_form.png)

## Payment Lifecycle & States

Once you click **Create**, the payment record is saved and redirects to the **View Payment** page. The payment enters the **`Draft`** state.

### 🎯 Payment States

- **Draft** – The initial state when the payment is created.
- **In Process** – After clicking **Confirm**, the payment starts processing.
- **Paid** – Indicates that the payment was successfully completed and matched to an invoice.
- **Not Paid** – Used if the payment fails or is marked as unpaid.
- **Cancelled** – The payment was intentionally cancelled before completion.
- **Rejected** – The payment was declined or failed system validation.

## Available Actions (Post-Creation)

From the **View Payment** page, you can perform the following actions:

- **Edit** – Modify payment details (available in `Draft` state only).
- **Delete** – Remove the payment entry before confirmation.
- **Confirm** – Move the payment to `In Process` and begin settlement.
- **Cancel** – Cancel the payment at any time before it becomes `Paid`.

![Create Payment](../../../images/payment_create_view.png)

## 🧾 Invoice Settlement Logic

If a payment is linked to a customer invoice, the system attempts to automatically reconcile the payment with any open invoices associated with the selected customer.

- **Full Payment**: If the payment amount matches the invoice total, the invoice is marked as **Paid**.
- **Partial Payment**: If less than the total is paid, the invoice shows as **Partially Paid**. You can settle the remaining balance with another payment later.

Reconciliation happens automatically based on customer and open invoice matching. Manual reconciliation can be handled separately if needed.

## Example Flow

1. **Create Payment**

   - Type: `Receive`
   - Amount: `$1,000`
   - Linked to: `INV/2025/05/101`

2. **Confirm Payment**

   - State changes to `In Process`

3. **Automatic Invoice Matching**

   - The system finds `INV/2025/05/101` and applies the payment.

4. **Settlement Complete**
   - Invoice marked as `Paid`
   - Payment status updated to `Paid`
