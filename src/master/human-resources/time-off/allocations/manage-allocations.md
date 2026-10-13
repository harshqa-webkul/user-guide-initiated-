# Manage allocations

Management lists the allocations of all employees. Here a manager creates allocations for others, approves or refuses requests for days, and edits existing ones. Use it at the start of each year to give every employee their days.

> **In simple words:** Create the allocation for the employee, then approve it. The days then count in their balance.

Open `Time Off → Management → Allocation`.

::: info Before you start
- The employee exists. See [Employees](../../employees/employees/add-employee.md).
- The leave type exists. See [Time off types](../setup/time-off-types.md).
:::

## Overview

The page is titled **Allocations**. It opens on the **Waiting For Me** tab.

- **Tabs:** **Default**, **Waiting For Me**, **Second Approval** and **Approved**.
- **Kebab menu (three dots):** preset views **Currently Valid**, **My Team**, **My Department** and **Refused**.
- **_Columns:_** **Employee**, **Time Off Type**, **Amount**, **Allocation Type**, **Status**.
- **Group by:** **Employee Name**, **Time Off Type**, **Allocation Type**, **Status**, **Start Date**.

Click **Default** to see every allocation. A row opens the **View** page. With 25 rows per page, all 14 allocations show.

<ImagePopup src="/images1/time-off/alloc_mgt_list.png" alt="Allocations list on the Default tab with 14 rows and columns Employee, Time Off Type, Amount, Allocation Type and Status, including Priya Sharma with 12.0000 Paid Time Off and 5.0000 Sick Time Off" />

## Create an allocation

Priya Sharma has no days yet. Give her 12 days of **Paid Time Off**.

1. Open `Time Off → Management → Allocation`. Click **New Allocation**.

<ImagePopup src="/images1/time-off/alloc_mgt_create_empty.png" alt="Create Allocation form with the State bar on To Approve, empty Name, Time Off Type and Employee Name, Regular selected, Date From Oct 13 2026, Date To No Limit and Allocation 0" />

### Allocation details

2. Type **Paid Time Off 2026** in **Name**. Aureus does not fill it in.
3. Choose **Paid Time Off** in **Time Off Type**.
4. Choose **Priya Sharma** in **Employee Name**.
5. Keep **Allocation Type** on **Regular**.

- **_Name:_** Required. A label for the allocation.
- **_Time Off Type:_** Required. The leave type that receives the days.
- **_Employee Name:_** Required. The person who receives the days.
- **_Allocation Type:_** Required. Keep **Regular**.

### Validity period

6. Set **Date From** to **Oct 1, 2026**. It starts on today's date.
7. Leave **Date To** empty. It shows **No Limit**, so the allocation is open ended.

### Days and reason

8. Type **12** in **Allocation**. The field shows **Number of Days**.
9. Type **Annual leave 2026** in **Reason**.

<ImagePopup src="/images1/time-off/alloc_mgt_create_filled.png" alt="Filled Create Allocation form: Name Paid Time Off 2026, Paid Time Off, Priya Sharma, Regular, Date From Oct 1 2026, Date To No Limit, 12 Number of Days, reason Annual leave 2026" />

10. Click **Create**. A **Time Off created** message appears. The app opens the allocation **View** page. The allocation starts as **To Approve**.

## Approve the allocation

11. Open `Time Off → Management → Allocation`. Click the **Default** tab.
12. Click the three-dot icon on the row of Priya Sharma. Click **Approve**.

<ImagePopup src="/images1/time-off/alloc_mgt_row_actions.png" alt="Row menu on the Priya Sharma allocation, 12.0000, To Approve, with View, Edit, Delete, Approve and Refuse in that order" />

13. Check that the **Status** column shows **Approved**.

<ImagePopup src="/images1/time-off/alloc_mgt_approved.png" alt="Allocations list filtered by Priya showing Priya Sharma, Paid Time Off, 12.0000, Regular, status Approved" />

The days now count. Priya can request leave of this type. The [My Time](../requests/my-time.md) cards show the balance of the logged in employee. When Priya signs in, her **Paid Time Off** card shows **12.0**.

## Actions and statuses

- **Approve** (row menu): sets the status to **Approved**. The row menu hides it when the allocation is already approved.
- **Refuse** (row menu): sets the status to **Refused**. The days never count.
- **View**, **Edit**, **Delete**: open, change or remove the allocation.

The row menu lists them in this order: **View**, **Edit**, **Delete**, **Approve**, **Refuse**.

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
