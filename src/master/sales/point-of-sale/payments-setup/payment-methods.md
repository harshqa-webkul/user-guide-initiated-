# Payment methods

A payment method is a way for a customer to pay at the till, such as cash or a bank card. Each method is linked to an accounting journal, so every payment lands in the right account. You attach the methods to a register to offer them on the payment screen.

> **In simple words:** A payment method is a button on the payment screen. Behind it sits a journal that records the money.

## Overview

Go to `Point of Sale → Configurations → Payment Methods`.

<ImagePopup src="/images1/pos/payment_methods_list.png" alt="Payment Methods list with Cash for Spice Route Kitchen & Bar and TechNest Electronics" />

The list has the tabs **All**, **Cash** and **Bank**.

### Columns

- **_Name:_** The method name, such as **Cash**.
- **_Type:_** **Cash**, **Bank** or **Customer Account**. Aureus sets it from the journal.
- **_Journal:_** The journal that records the payments, such as **Cash Transactions**.
- **_POS:_** The registers that use the method.
- **_Cash Drawer:_** **Yes** when the method counts as cash in the drawer.

Use **Group by** for **Type** or **Company**.

## How the type is set

You do not pick the type. Aureus reads it from the journal.

- A cash journal makes the method **Cash**. It is counted in the cash drawer.
- A bank or credit card journal makes it **Bank**.
- No journal makes it **Customer Account**. The sale stays on the customer receivable.

## Create a payment method

1. Go to `Point of Sale → Configurations → Payment Methods`.
2. Click **New Payment Method**.
3. Fill in the **General** section.

   - **_Name\:_** Required. For example **Cash**.
   - **_Company:_** The company the method belongs to.
   - **_Integration\:_** Required. Choose **None**, **Payment Terminal** or **QR Code**. Use **None** for cash.
   - **_Identify Customer:_** Switch it on to post one journal item per payment on the customer receivable.

4. Fill in the **Accounting** section.

   - **_Journal\:_** Required. Pick the journal, for example **Cash Transactions**. Leave it empty only when **Identify Customer** is on.
   - **_Intermediary Account:_** Leave it empty to use the default account from the company settings.

   <ImagePopup src="/images1/pos/payment_method_form.png" alt="Payment method form with Name Cash, Company My Company, Integration None and Journal Cash Transactions" />

5. Click **Create**.

## Attach a method to a register

1. Go to `Point of Sale → Configurations → Point of Sale` and open a register.
2. Open the **Payment** tab.
3. In **Payment Methods**, pick the methods. For example, pick **Cash** for **TechNest Electronics**.
4. Click **Save changes**.

<ImagePopup src="/images1/pos/register_payment_tab.png" alt="Register Payment tab with Payment Methods set to Cash" />

The field locks while a session is open. At the till, the payment screen lists the methods you picked. See [Pay and receipt](../selling/pay-and-receipt.md).

## Actions

- **Edit:** Change a method.
- **Delete:** Archive the method. You can restore it later.
- **Delete permanently:** Possible only when the method has no payments.

::: warning
You cannot change or archive a method that a register uses while its session is open.
:::

## Example

TechNest Electronics takes cash only. The method **Cash** uses the journal **Cash Transactions**. When Sofia Rossi pays 7,000 for order **TNE/00001**, the payment goes to that journal, and the change of 403 is booked as a negative line.

## See also

- [Payments](../orders-payments/payments.md)
- [Coins and bills](./coins-and-bills.md)
- [Finance configuration](../../../finance/configuration/index.md)
