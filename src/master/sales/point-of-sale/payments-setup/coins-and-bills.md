# Coins and bills

Coins and bills are the cash denominations your cashiers count. When a session opens or closes, the cashier counts how many of each coin and note is in the drawer. This list tells the counter which values to offer.

> **In simple words:** It is the list of coins and notes in your cash drawer, such as 5, 10 and 20.

## Overview

Go to `Point of Sale → Configurations → Coins/Bills`.

<ImagePopup src="/images1/pos/coins_bills_list.png" alt="Coins/Bills list with denominations 0.05 to 20.00, For All PoS ticked" />

The list shows these columns:

- **_Name:_** The label, such as **10.00**.
- **_Coin/Bill Value:_** The numeric value.
- **_For All PoS:_** **Yes** when every register uses it.
- **_Point of Sales:_** The registers that use it, when it is not for all.

The list is sorted by value. It has 13 denominations, from 0.05 up.

## Create a coin or bill

1. Go to `Point of Sale → Configurations → Coins/Bills`.
2. Click **New Coin/Bill**. A window opens.
3. Fill in the **General** section.

   - **_Name\*:_** For example **50.00**.
   - **_Coin/Bill Value\*:_** The value, such as 50.
   - **_For All PoS:_** On by default. When on, every register offers it.
   - **_Point of Sales:_** Pick the registers when **For All PoS** is off. The field is greyed out while it is on.

   <ImagePopup src="/images1/pos/coin_bill_form.png" alt="New Coin/Bill window with Name 50.00, Coin/Bill Value 50 and For All PoS switched on" />

4. Click **Create**.

Use **Edit** or **Delete** on a row to change or remove one.

## Where the list is used

### Coins/Notes counter

When a cashier opens a register, the **Opening Control** window has a coin counter icon. It opens the **Coins/Notes** window with a stepper for each value. The total fills **Opening cash**. The same window is used when you close the session. See [Open a register](../sessions/open-register.md) and [Close a session](../sessions/close-session.md).

<ImagePopup src="/images1/pos/coins_notes_counter.png" alt="Coins/Notes counter window at the till with steppers for each value and a Total" />

### Register setup

Open a register in `Point of Sale → Configurations → Point of Sale`. On the **Bills & Receipts** tab, the **Coins/Bills** field shows the values for this register. The hint says "Denominations offered when counting the cash at opening and closing".

### Cash rounding

On the **Payment** tab, switch on **Cash Rounding** to define the smallest coin used to pay by cash. Then pick the **Rounding Method**. **Only apply rounding on cash** keeps other methods exact.

<ImagePopup src="/images1/pos/register_cash_rounding.png" alt="Register Payment tab with Cash Rounding on and Rounding Method selected" />

::: tip
Add only the denominations you really hold. A short list makes counting faster.
:::

## See also

- [Payment methods](./payment-methods.md)
- [Cash in and out](../sessions/cash-in-and-out.md)
- [Set up a register](../get-started/set-up-a-register.md)
