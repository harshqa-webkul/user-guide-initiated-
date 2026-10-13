# First steps with Time Off

This tutorial walks through the whole leave flow with one example. You check a balance, ask for three days, approve them and see the balance drop. Then you meet a new employee with no days, fix that with an allocation and try a refusal and a half day.

> **In simple words:** You will book leave for Sarah Mitchell, then set up and test leave for Priya Sharma.

Each step ends with a short note on what Aureus does behind the scenes. Links point to the pages that explain each screen.

::: info Prerequisite
Sarah Mitchell is the employee of the admin user, and she has 20 days of **Paid Time Off**. Priya Sharma is the employee from [First steps with Employees](../../employees/get-started/first-steps.md). Sample data includes the seven leave types.
:::

## The map

```text
Check balance  >  Request 3 days  >  Approve  >  Balance 17
Priya: request refused  >  Allocation  >  Approve  >  Request accepted
Refuse a Sick Time Off request  >  Half day  >  Calendar
```

## Step 1: Check your balance

1. Open `Time Off → My Time → Dashboard`.
2. Find the card **Paid Time Off**. It shows `20.0` and the line **Valid until** the end of the year.
3. Find the card **Pending Requests**. It shows `0`.

<ImagePopup src="/images1/time-off/to_fs_dashboard_balance.png" alt="My Time dashboard with the Paid Time Off card showing 20.0 and the Pending Requests card showing 0" />

**Behind the scenes:** Aureus adds up the approved allocations of the type. Then it subtracts the days of every request that is not refused. See [My Time](../requests/my-time.md).

## Step 2: Request three days of Paid Time Off

1. On the dashboard calendar, click the green **New Time Off** button. A window opens.
2. Fill in the form.

- **_Time Off Type:_** Required. Choose **Paid Time Off**.
- **_Request Date From:_** Required. Pick next Monday.
- **_To Date:_** Required. Pick the Wednesday of that week.
- **_Description:_** Type `Family function`.

The **Duration** line reads `3 working day(s)`.

<ImagePopup src="/images1/time-off/to_fs_request_form.png" alt="Create Leave window with Paid Time Off, Monday to Wednesday dates, Duration 3 working days and description Family function" />

3. Click **Create**. The request appears on the calendar with the status **To Approve**.

<ImagePopup src="/images1/time-off/to_fs_request_calendar.png" alt="My Time calendar showing a Paid Time Off bar for Sarah Mitchell with 3 days" />

**Behind the scenes:** Aureus counts weekdays only. It also checks that the dates do not overlap another request. See [Request time off](../requests/request-time-off.md).

## Step 3: Approve the request

1. Open `Time Off → Management → Time off`.
2. Find the row of Sarah Mitchell. Click **Actions** at the end of the row.
3. Click **Approve**. The status badge changes to **Approved**.

<ImagePopup src="/images1/time-off/to_fs_approve_menu.png" alt="Management Time Offs list with the Actions menu open on Sarah Mitchell's row showing Approve and Refuse" />

::: tip
The list opens on the tab **Waiting For Me**. Click **Default** to see every request.
:::

## Step 4: See the balance 17

1. Open `Time Off → My Time → Dashboard`.
2. The **Paid Time Off** card now shows `17.0`.

<ImagePopup src="/images1/time-off/to_fs_balance_17.png" alt="Dashboard with the Paid Time Off card showing 17.0 after the approved request" />

**Behind the scenes:** A pending request already lowers the balance. An approval keeps it lowered. A refusal gives the days back.

## Step 5: A request from Priya without days

Priya has no **Paid Time Off** allocation yet. Try to book two days for her.

1. Open `Time Off → Management → Time off`.
2. Click **New Time off**.
3. Fill in the form.

- **_Employee Name:_** Required. Choose **Priya Sharma**.
- **_Time Off Type:_** Required. Choose **Paid Time Off**.
- **_Request Date From_** and **_To Date:_** Pick two weekdays.

4. Click **Create**. A **Leave Request Denied** message appears and nothing is saved.

<ImagePopup src="/images1/time-off/to_fs_priya_denied.png" alt="Leave Request Denied notification after creating a Paid Time Off request for Priya Sharma without an allocation" />

**Behind the scenes:** A type with **Requires Allocation: Yes** needs approved days first. See [Leave types](../setup/time-off-types.md).

## Step 6: Allocate days to Priya

1. Open `Time Off → Management → Allocation`.
2. Click **New Allocation**.
3. Fill in the form.

- **_Employee Name:_** Choose **Priya Sharma**.
- **_Time Off Type:_** Choose **Paid Time Off**.
- **_Allocation Type:_** Keep **Regular**.
- **_Date From:_** Pick `2026-10-01`. Leave **Date To** empty for no end.
- **_Allocation:_** Type `12`.
- **_Reason:_** Type `Annual leave 2026`.

<ImagePopup src="/images1/time-off/to_fs_allocation_form.png" alt="Create Allocation form for Priya Sharma with Paid Time Off, Regular, 12 days and reason Annual leave 2026" />

4. Click **Create**. The state is **To Approve**.
5. In the list, click **Actions** on the row and click **Approve**.

<ImagePopup src="/images1/time-off/to_fs_allocation_approved.png" alt="Allocations list showing Priya Sharma, Paid Time Off, 12 days, status Approved" />

**Behind the scenes:** Only approved allocations add to a balance. See [Manage allocations](../allocations/manage-allocations.md).

## Step 7: Request again and get accepted

1. Repeat Step 5 with the same values.
2. Click **Create**. The request is saved with the status **To Approve**.

<ImagePopup src="/images1/time-off/to_fs_priya_accepted.png" alt="Management Time Offs list with Priya Sharma's Paid Time Off request of 2 days and status To Approve" />

## Step 8: Refuse a Sick Time Off request

1. Click **New Time off**. Choose **Priya Sharma** and **Sick Time Off**.
2. Pick one weekday and click **Create**. Sick Time Off has no limit, so it is saved.
3. Click **Actions** on its row and click **Refuse**. The badge shows **Refused**.

<ImagePopup src="/images1/time-off/to_fs_refused.png" alt="Management list with Priya Sharma's Sick Time Off request showing the Refused status" />

## Step 9: Book a half day

1. Open `Time Off → Management → Time off` and click **New Time off**.
2. Choose **Priya Sharma** and **Sick Time Off**.
3. Pick one day. Turn on **Half Day**. The **To Date** field hides and **Period** appears.
4. Set **Period** to **Morning**. **Duration** reads `0.5 day`.

<ImagePopup src="/images1/time-off/to_fs_half_day.png" alt="Request form with Half Day on, Period Morning and Duration 0.5 day" />

5. Click **Create**.

## Step 10: See the calendar

1. Open `Time Off → Overview`. A calendar of the whole year opens.
2. Find the coloured bars. Each bar is a request, coloured by leave type.
3. Click a bar to view it.

<ImagePopup src="/images1/time-off/to_fs_overview_calendar.png" alt="Overview year calendar with coloured bars for the requests created in this tutorial" />

## See also

- [Time off overview](../index.md)
- [Setup](../setup/index.md)
- [Request time off](../requests/request-time-off.md)
- [Manage requests](../requests/manage-requests.md)
- [Overview calendar](../requests/overview-calendar.md)
