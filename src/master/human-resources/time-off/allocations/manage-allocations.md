# Manage allocations

Management lists the allocations of all employees. Here a manager creates allocations for others, approves or refuses requests for days, and edits existing ones. Use it at the start of each year to give every employee their days.

> **In simple words:** Create the allocation for the employee, then approve it. The days then count in their balance.

Open `Time Off → Management → Allocation`.

::: info Before you start
- The employee exists. See [Employees](../../employees/employees/add-employee.md).
- The leave type has **Requires Allocation** set to **Yes**. See [Time off types](../setup/time-off-types.md).
:::

## Overview

The page is titled **Allocations**. It opens on the **Waiting For Me** tab.

- **Tabs:** **Default**, **Waiting For Me**, **Second Approval** and **Approved**.
- **Kebab menu (three dots):** preset views **Currently Valid**, **My Team**, **My Department** and **Refused**.
- **_Columns:_** **Employee**, **Time Off Type**, **Amount**, **Allocation Type**, **Status**.
- **Group by:** **Employee Name**, **Time Off Type**, **Allocation Type**, **Status**, **Start Date**.

Click **Default** to see every allocation. A row opens the **View** page.

<ImagePopup src="/images1/time-off/alloc_mgt_list.png" alt="Allocations list on the Default tab with columns Employee, Time Off Type, Amount, Allocation Type and Status" />

## Create an allocation

Priya Sharma has no days yet. Give her 12 days of **Paid Time Off**.

1. Open `Time Off → Management → Allocation`. Click **New Allocation**.

<ImagePopup src="/images1/time-off/alloc_mgt_create_empty.png" alt="Create Allocation form with the State bar on To Approve and empty fields" />

### Allocation details

2. Choose **Priya Sharma** in **Employee Name**.
3. Type **Paid Time Off 2026** in **Name**.
4. Choose **Paid Time Off** in **Time Off Type**.
5. Keep **Allocation Type** on **Regular**.

- **_Name:_** Required. A label for the allocation.
- **_Time Off Type:_** Required. The leave type that receives the days.
- **_Employee Name:_** Required. The person who receives the days.
- **_Allocation Type:_** Required. Keep **Regular**.

### Validity period

6. Set **Date From** to **2026-10-01**.
7. Leave **Date To** empty. It shows **No Limit**, so the allocation is open ended.

### Days and reason

8. Type **12** in **Allocation**. The field shows **Number of Days**.
9. Type **Annual leave 2026** in **Reason**.

<ImagePopup src="/images1/time-off/alloc_mgt_create_filled.png" alt="Filled Create Allocation form: Priya Sharma, Paid Time Off 2026, Paid Time Off, Regular, from 2026-10-01 with no end, 12 days, reason Annual leave 2026" />

10. Click **Create**. The allocation starts as **To Approve**.

## Approve the allocation

11. Open `Time Off → Management → Allocation`. Click the **Default** tab.
12. Open the **Actions** menu on the row of Priya Sharma. Click **Approve**.

<ImagePopup src="/images1/time-off/alloc_mgt_row_actions.png" alt="Actions menu on the Priya Sharma allocation row showing Approve, Refuse, View, Edit and Delete" />

13. Check that the **Status** column shows **Approved**.

<ImagePopup src="/images1/time-off/alloc_mgt_approved.png" alt="Allocations list showing the Priya Sharma Paid Time Off 2026 allocation of 12 days with status Approved" />

The days now count. Priya can request leave of this type. The [My Time](../requests/my-time.md) cards show the balance of the logged in employee. When Priya signs in, her **Paid Time Off** card shows **12.0**.

## Actions and statuses

- **Approve** (row **Actions** menu): sets the status to **Approved**. The row menu hides it when the allocation is already approved.
- **Refuse** (row **Actions** menu): sets the status to **Refused**. The days never count.
- **View**, **Edit**, **Delete**: open, change or remove the allocation.

The **View** and **Edit** pages show a **State** bar with **To Approve** and **Approved**. The edit page header can show **Approved**, **Refuse** and **Mark as Ready to Confirm**. **Mark as Ready to Confirm** returns a refused allocation to **To Approve**. **Refuse** is hidden once an allocation is refused.

::: warning
Only approved allocations add to the balance. Refuse an allocation if it was entered by mistake, or delete it.
:::

## See also

- [Time off allocations](index.md)
- [My allocation](my-allocation.md)
- [Manage requests](../requests/manage-requests.md)
- [Time off types](../setup/time-off-types.md)
- [By Employees report](../reporting/by-employees.md)
