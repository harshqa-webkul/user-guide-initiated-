# Request time off

A time off request asks for one or more days away from work. You choose the leave type, the dates and an optional reason. Aureus counts the working days, checks your balance and saves the request for approval.

> **In simple words:** Pick the type and dates, check the duration, and save. The request waits as **To Approve**.

Menu: `Time Off → My Time → Dashboard` (click **New Time Off**), or `Time Off → My Time → My Time off` (click **New My Time off**). Managers can also use `Time Off → Management → Time off` and click **New Time off**.

::: info Before you start
- The [time off type](../setup/time-off-types.md) exists.
- If that type requires an allocation, the employee has an approved balance. See [Allocations](../allocations/index.md).
:::

## Worked example

Sarah Mitchell needs next Monday to Wednesday off for a family function.

1. Open `Time Off → My Time → Dashboard`. Click **New Time Off**. A window titled **Create Leave** opens.

<ImagePopup src="/images1/time-off/request_new_modal_empty.png" alt="Create Leave window opened from the My Time calendar with empty Time Off Type, Request Date From, To Date, Half Day, Duration and Description" />

2. Choose **Paid Time Off** in **Time Off Type**.
3. Set **Request Date From** to next Monday and **To Date** to next Wednesday.
4. Check **Duration**. It reads **3 working day(s)**.
5. Type **Family function** in **Description**.

<ImagePopup src="/images1/time-off/request_new_modal_filled.png" alt="Create Leave window filled with Paid Time Off, Monday to Wednesday dates, Duration 3 working days and description Family function" />

6. Click **Create**. Aureus saves the request with the status **To Approve**.

<ImagePopup src="/images1/time-off/request_saved_calendar.png" alt="My Time calendar showing Sarah Mitchell's saved Paid Time Off request for three days" />

Use **Create & create another** to save and open a blank form. Click **Cancel** to close without saving.

## Fields

- **_Employee Name:_** Required. Shown only in `Management → Time off`. Choose who the leave is for. On My Time the employee is you.
- **_Department Name:_** Required in Management. Choose the employee's department.
- **_Time Off Type:_** Required. The kind of leave, for example **Paid Time Off** or **Sick Time Off**.
- **_Request Date From:_** Required. The first day away.
- **_To Date:_** Required, unless **Half Day** is on. The last day away. On the full page form it unlocks after you pick **Request Date From**.
- **_Half Day:_** A toggle. Turn it on for one half day.
- **_Period:_** Required when **Half Day** is on. Choose **Morning** or **Afternoon**.
- **_Duration:_** Read only. Aureus calculates it from your dates.
- **_Description:_** Optional. A short reason for your manager.

### Half Day

Turn on **Half Day** to reveal **Period** and hide **To Date**. A half day is for a single day only.

<ImagePopup src="/images1/time-off/request_half_day.png" alt="Create Leave window with Half Day on, Period set to Morning for Priya Sharma Sick Time Off, Duration 0.5 day" />

Example: Priya Sharma takes the morning of one day as **Sick Time Off**. **Duration** shows **0.5 day**.

### How Duration is counted

Aureus counts weekdays only. Weekend days inside your dates are listed beside the total but are not deducted.

Example: you ask for Friday to the next Tuesday. That is Friday, Monday and Tuesday, so **Duration** shows **3 working day(s)** with **(+ 2 weekend days)**. Your balance drops by 3.

Until you choose both dates, **Duration** shows **Please select the request date from and to.**

## Two ways to start

- **Button:** click **New Time Off** on the calendar, or **New My Time off** on the **My Time off** list.
- **Calendar date:** click a day on the calendar. The same window opens with both dates filled in and **Duration** set to **1 working day**.

<ImagePopup src="/images1/time-off/request_date_click.png" alt="Create Leave window opened by clicking a day on the calendar with both dates already filled" />

## What Aureus checks when you save

- **Overlapping dates.** You cannot save a request that overlaps another request of yours. Choose different dates.
- **Allocation and balance.** If the leave type requires an allocation, you need an approved one. Your days must also fit in the remaining balance.
- **Half day.** A half day request must cover one day.

If a check fails, Aureus shows a message and does not save the request. Priya Sharma has no allocation yet, so her first Paid Time Off request is refused with a balance message.

<ImagePopup src="/images1/time-off/request_balance_error.png" alt="Notification shown when Priya Sharma requests Paid Time Off without a balance" />

::: tip
Create the [allocation](../allocations/index.md) first. Then Priya's 2 day request is accepted as **To Approve**.
:::

## Actions and statuses

A saved request is **To Approve**. A manager then uses [Manage requests](manage-requests.md) to approve or refuse it. If you have no employee record, Aureus asks you to add one to your profile first.

## See also

- [Time off requests](index.md)
- [My Time](my-time.md)
- [Manage requests](manage-requests.md)
- [Time off types](../setup/time-off-types.md)
- [Allocations](../allocations/index.md)
