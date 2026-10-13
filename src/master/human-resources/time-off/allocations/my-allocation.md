# My allocation

My Allocation lists the day balances granted to you and lets you ask for more days. You use it when a leave type needs an allocation and you want to request days yourself. Aureus fills in the employee for you.

> **In simple words:** Open My Allocation, fill a short form, and wait for approval. Approved days appear on your balance cards.

Open `Time Off → My Time → My Allocation`.

::: info Before you start
The leave type must have **Requires Allocation** set to **Yes**. See [Time off types](../setup/time-off-types.md). Your user also needs a linked employee.
:::

## Overview

The page is titled **My Allocations**. Each row shows one allocation.

- **_Time Off Type:_** The kind of leave, for example **Paid Time Off**.
- **_Amount:_** The number of days, for example `20.0000`.
- **_Allocation Type:_** Shows **Regular**.
- **_Status:_** **To Approve**, **Approved** or **Refused**.

Use **Group by** to group rows by **Employee Name**, **Time Off Type**, **Allocation Type**, **Status** or **Start Date**. Type in the search box to find a row.

<ImagePopup src="/images1/time-off/alloc_my_list.png" alt="My Allocations list with one row for Paid Time Off, amount 20.0000, Regular, Approved" />

## Request an allocation

1. Open `Time Off → My Time → My Allocation`. Click **New My Allocation**.

<ImagePopup src="/images1/time-off/alloc_my_create_empty.png" alt="Create My Allocation form with the State bar showing To Approve and empty fields" />

2. Look at the **State** bar. It starts on **To Approve**. You cannot change it.

### Allocation details

3. Type a **Name**. Write **Annual leave 2026 top-up**.
4. Choose a **Time Off Type**. Choose **Paid Time Off**.
5. Leave **Allocation Type** on **Regular**.

- **_Name:_** Required. A short label for the allocation.
- **_Time Off Type:_** Required. The leave type that receives the days.
- **_Allocation Type:_** Required. Keep **Regular**.

### Validity period

6. Check **Date From**. It is today by default. Change it if the days start later.
7. Leave **Date To** empty for an open ended allocation. The field shows **No Limit**.

- **_Date From:_** Required. The first day the allocation is valid.
- **_Date To:_** Optional. The last valid day. Leave it empty to keep the allocation open ended.

### Days and reason

8. Type the number of days in **Allocation**. The field shows **Number of Days**. Write **5**.
9. Explain the request in **Reason**.

- **_Allocation:_** Required. The number of days. The default is 0.
- **_Reason:_** Optional. Tell the approver why you need the days.

<ImagePopup src="/images1/time-off/alloc_my_create_filled.png" alt="Filled Create My Allocation form with Paid Time Off, Regular, Date From Oct 13 2026, Date To empty, 5 days" />

10. Click **Create**. Click **Create & create another** to add a second one.

## Actions and statuses

A new allocation gets the status **To Approve**. It adds nothing to your balance yet. When a manager approves it in [Manage allocations](manage-allocations.md), the status becomes **Approved**. The days then count on your balance card.

A manager can also refuse it. A refused allocation never adds days.

::: tip
Your user must be linked to an employee. Without one, Aureus asks you to contact your administrator.
:::

## See also

- [Time off allocations](index.md)
- [Manage allocations](manage-allocations.md)
- [My Time dashboard](../requests/my-time.md)
- [Time off types](../setup/time-off-types.md)
