# My Time

My Time is your personal Time Off page. It shows how many days you have left for each leave type, how many requests wait for a decision, and a calendar of your requests. You can also start a new request from here.

> **In simple words:** Look here to see your balance and your booked days, then click a date to ask for time off.

Menu: `Time Off → My Time → Dashboard`. The left sub-menu also has **My Time off** and **My Allocation**.

::: info Before you start
Your user needs an employee record. Create it in [Employees](../../employees/index.md). Balances come from approved [allocations](../allocations/index.md).
:::

## Balance cards

The **Time Off Analysis** block shows one card per leave type that has **Show on Dashboard** turned on. Each card has the type name, your balance and **Valid until** with the end of the current year, for example **Valid until 2026-12-31**. **Valid until** always shows the end of the current year. Cards use the colour of the leave type.

Sarah Mitchell has **Paid Time Off 20.0** and **0.0** for the other types.

<ImagePopup src="/images1/time-off/mytime_dashboard_cards.png" alt="Time Off Analysis cards for Paid Time Off, Parental Leaves and Training Time Off, each valid until 2026-12-31, and the Pending Requests card with the line Time Off Requests" />

The last card, **Pending Requests**, counts your requests that are **To Approve**. It carries the line **Time Off Requests**. A request that waits for approval adds 1 here and also lowers the balance of its type at once.

Choose which types appear in [Leave types](../setup/time-off-types.md) with **Show on Dashboard**.

## Calendar

Below the cards is your calendar. It shows your own requests, coloured by leave type. A title shows the leave type, the name of the logged in user and the length, for example **Paid Time Off ERP Admin (3d)**. Here **ERP Admin** is the user name.

- **Toolbar:** previous and next arrows, **Today**, and the title, for example **October 2026**.
- **Views:** **Month** (default), **Week** and **List**. The week starts on Monday and weekends are shaded.
- **List view:** shows **No events to display** when the week is empty.

<ImagePopup src="/images1/time-off/mytime_calendar_month.png" alt="My Time calendar for October 2026 with a Paid Time Off ERP Admin (3d) bar from 19 to 21 October, the Holidays button, the New Time Off button, arrows, Today and the Month, Week and List buttons" />

### Holidays panel

Click the blue icon at the top right of the calendar, next to **New Time Off**. The **Holidays** panel slides in from the right with:

- **Public Holidays:** names with dates, for example **Gandhi Jayanti** and **Christmas Day**.
- **Mandatory Holidays:** company days such as **Company Anniversary**, shown with their date range.

<ImagePopup src="/images1/time-off/mytime_holidays_window.png" alt="Holidays panel on the right listing Public Holidays with their dates" />

Manage these lists in [Public holidays](../setup/public-holidays.md) and [Mandatory days](../setup/mandatory-days.md).

## Create from the calendar

1. Click the green **New Time Off** button, or click a date.
2. A click on a date fills both date fields and shows **Duration** as `1 working day`.
3. Complete the form. See [Request time off](request-time-off.md).

## Open a request

Click an event on the calendar. The **View** window has the subtitle **View Time Off Request** and a **Time Off Details** section. It shows **Time Off Type**, **Status**, **Request Date From**, **Request Date To**, **Duration** (`3 working days`) and **Description**. It has three buttons.

- **Edit:** (yellow button) change the request.
- **Delete:** remove it.
- **Cancel:** close the window.

<ImagePopup src="/images1/time-off/mytime_event_view.png" alt="View window for the Paid Time Off request from October 19 to October 21, 2026, status Approved, Duration 3 working days, description Family function, with Edit, Delete and Cancel buttons" />

## My Time off list

Open `Time Off → My Time → My Time off`. The page is titled **My Time Offs**. Click **New My Time off** to start a request.

The list shows the requests of all employees, not only yours.

- **Columns:** **Employee**, **Time Off Type**, **Description**, **Date From**, **Date To**, **Duration**, **Status**.
- **Group by:** Employee, Time Off Type, Status, Start Date, End Date.
- **Search** box and a **Delete selected** bulk action.

<ImagePopup src="/images1/time-off/mytime_my_time_off_list.png" alt="My Time Offs list with 10 requests, including Sarah Mitchell 3 working days Approved, Priya Sharma 2 working days To Approve, a Refused Sick Time Off day and a 0.5 day half day with no Date To" />

## See also

- [Request time off](request-time-off.md)
- [Manage requests](manage-requests.md)
- [Overview calendar](overview-calendar.md)
- [Time off requests](index.md)
