# First steps with Time Off

This tutorial walks through the whole leave flow with one example. You check a balance, ask for three days, approve them and see the balance change. Then you meet a new employee with no days, fix that with an allocation and try a refusal and a half day.

> **In simple words:** You will book leave for Sarah Mitchell, then set up and test leave for Priya Sharma.

Each step ends with a short note on what Aureus does behind the scenes. Links point to the pages that explain each screen. The dates are in 2026. If they are in the past, pick any future Monday to Wednesday.

::: info Prerequisite
Sarah Mitchell is the employee of the admin user, and she has 20 days of **Paid Time Off**. Priya Sharma is the employee from [First steps with Employees](../../employees/get-started/first-steps.md). Sample data includes the seven leave types.
:::

## The map

```text
Check balance  >  Request 3 days  >  Approve  >  Check balance again (17)
Priya: request denied  >  Allocation  >  Approve  >  Request accepted
Sick allocation  >  Refuse a Sick Time Off request  >  Half day  >  Calendar
```

## Step 1: Check your balance

1. Open `Time Off → My Time → Dashboard`.
2. Find the card **Paid Time Off**. It shows `20.0` and the line **Valid until 2026-12-31**.
3. Find the card **Pending Requests**. It shows `0` and the line **Time Off Requests**.

<ImagePopup src="/images1/time-off/to_fs_dashboard_balance.png" alt="My Time dashboard with the Paid Time Off card showing 20.0, other types showing 0.0 and the Pending Requests card showing 0" />

**Behind the scenes:** Aureus adds up the approved allocations of the type. Then it subtracts the days of every request that is not refused. See [My Time](../requests/my-time.md).

## Step 2: Request three days of Paid Time Off

1. On the dashboard calendar, click the green **New Time Off** button. A window titled **Create Leave** opens.
2. Fill in the form.

- **_Time Off Type:_** Required. Choose **Paid Time Off**.
- **_Request Date From:_** Required. Pick Monday, 19 October 2026.
- **_To Date:_** Required. Pick Wednesday, 21 October 2026.
- **_Description:_** Type `Family function`.

The **Duration** line reads `3 working days`.

<ImagePopup src="/images1/time-off/to_fs_request_form.png" alt="Create Leave window with Paid Time Off, Request Date From Oct 19 2026, To Date Oct 21 2026, Duration 3 working days and description Family function" />

3. Click **Create**. The request appears on the calendar as a bar from Monday to Wednesday.

<ImagePopup src="/images1/time-off/to_fs_request_calendar.png" alt="My Time calendar for October 2026 with a Paid Time Off bar titled Paid Time Off ERP Admin (3d) from 19 to 21 October" />

The bar title is the leave type, then the name of the logged in user, then the length. You are signed in as the user **ERP Admin**, whose employee is Sarah Mitchell. So the title reads `Paid Time Off ERP Admin (3d)`.

4. Open `Time Off → My Time → Dashboard` again. The **Paid Time Off** card already shows `17.0` and **Pending Requests** shows `1`.

**Behind the scenes:** Aureus counts weekdays only. It also checks that the dates do not overlap another request. The saved request has the status **To Approve**. See [Request time off](../requests/request-time-off.md).

## Step 3: Approve the request

1. Open `Time Off → Management → Time off`.
2. Find the row of Sarah Mitchell. Click the three-dot icon at the end of the row.
3. Click **Approve**. The status badge changes to **Approved**. A **Time Off approved** message appears.

<ImagePopup src="/images1/time-off/to_fs_approve_menu.png" alt="Management Time Offs list on the Waiting For Me tab with the row menu open on Sarah Mitchell's request showing Approve, Refuse, View, Edit and Delete" />

::: tip
The list opens on the tab **Waiting For Me**. Click **Default** to see every request.
:::

## Step 4: Check the balance again

1. Open `Time Off → My Time → Dashboard`.
2. The **Paid Time Off** card still shows `17.0`. **Pending Requests** is back to `0`.

<ImagePopup src="/images1/time-off/to_fs_balance_17.png" alt="Dashboard with the Paid Time Off card showing 17.0 and Pending Requests showing 0 after the approval" />

**Behind the scenes:** A pending request already lowers the balance. An approval keeps it lowered. A refusal gives the days back.

## Step 5: A request from Priya without days

Priya has no **Paid Time Off** allocation yet. Try to book two days for her.

1. Open `Time Off → Management → Time off`.
2. Click **New Time off**. The page is titled **Create Time Off**.
3. Fill in the form.

- **_Employee Name:_** Required. Choose **Priya Sharma**. **Department Name** fills in by itself.
- **_Time Off Type:_** Required. Choose **Paid Time Off**.
- **_Request Date From:_** Pick 22 October 2026.
- **_To Date:_** Pick 23 October 2026.
- **_Description:_** Type `Annual leave request`.

4. Click **Create**. A **Leave Request Denied** message appears: `You do not have any allocated leave for Paid Time Off.` Nothing is saved and the form stays open.

<ImagePopup src="/images1/time-off/to_fs_priya_denied.png" alt="Leave Request Denied notification saying You do not have any allocated leave for Paid Time Off" />

**Behind the scenes:** A type with **Requires Allocation: Yes** needs approved days first. See [Leave types](../setup/time-off-types.md).

## Step 6: Allocate days to Priya

1. Open `Time Off → Management → Allocation`.
2. Click **New Allocation**.
3. Fill in the form.

- **_Name:_** Type `Paid Time Off 2026`.
- **_Time Off Type:_** Choose **Paid Time Off**.
- **_Employee Name:_** Choose **Priya Sharma**.
- **_Allocation Type:_** Keep **Regular**. It means a fixed number of days.
- **_Date From:_** Pick 1 October 2026. Leave **Date To** empty. It shows **No Limit**.
- **_Allocation:_** Type `12`.
- **_Reason:_** Type `Annual leave 2026`.

<ImagePopup src="/images1/time-off/to_fs_allocation_form.png" alt="Create Allocation form with Name Paid Time Off 2026, Paid Time Off, Priya Sharma, Regular, Date From Oct 1 2026, 12 days and reason Annual leave 2026" />

4. Click **Create**. A **Time Off created** message appears. The app opens the allocation page with the state **To Approve**.
5. Open `Time Off → Management → Allocation` and click **Default**. On the row of Priya, click the three-dot icon and click **Approve**.

<ImagePopup src="/images1/time-off/to_fs_allocation_approved.png" alt="Allocations list filtered by Priya showing Priya Sharma, Paid Time Off, 12.0000, Regular, status Approved" />

**Behind the scenes:** Only approved allocations add to a balance. See [Manage allocations](../allocations/manage-allocations.md).

## Step 7: Request again and get accepted

1. Repeat Step 5 with the same values.
2. Click **Create**. The request is saved with the status **To Approve**. A **Time Off created** message appears.

<ImagePopup src="/images1/time-off/to_fs_priya_accepted.png" alt="Management Time Offs list filtered by Priya showing Paid Time Off, Annual leave request, 2026-10-22 to 2026-10-23, 2 working days, To Approve" />

## Step 8: Allocate Sick Time Off

Sick Time Off also needs an allocation before Aureus accepts a request. Without one, you see `You do not have any allocated leave for Sick Time Off.`

Create a **Sick Time Off** allocation for Priya as in Step 6. Type `5` in **Allocation** and approve it.

## Step 9: Refuse a Sick Time Off request

1. Open `Time Off → Management → Time off` and click **New Time off**. Choose **Priya Sharma** and **Sick Time Off**.
2. Pick 26 October 2026 for both dates. Type `Fever` in **Description**. Click **Create**. **Duration** reads `1 working day`.
3. Click the three-dot icon on its row and click **Refuse**. A **Time Off refused** message appears. The badge shows **Refused**.

<ImagePopup src="/images1/time-off/to_fs_refused.png" alt="Management list filtered by Priya with the Paid Time Off request To Approve and the Sick Time Off request for 26 October with status Refused" />

## Step 10: Book a half day

1. Open `Time Off → Management → Time off` and click **New Time off**.
2. Choose **Priya Sharma**. **Department Name** shows **Operations**. Choose **Sick Time Off**.
3. Pick 27 October 2026. Turn on **Half Day**. The **To Date** field hides and **Period** appears with **Morning** already chosen.
4. **Duration** reads `0.5 day`. Type `Doctor appointment` in **Description**.

<ImagePopup src="/images1/time-off/to_fs_half_day.png" alt="Management create form for Priya Sharma, Operations, Sick Time Off on Oct 27 2026 with Half Day on, Period Morning, Duration 0.5 day and description Doctor appointment" />

5. Click **Create**. In the list, the **Date To** cell of a half day is empty.

## Step 11: See the calendar

1. Open `Time Off → Overview`. A calendar of the whole year opens.
2. Find the coloured bars. Each bar is a request, coloured by leave type.
3. Click a bar to view it.

<ImagePopup src="/images1/time-off/to_fs_overview_calendar.png" alt="Overview year calendar 2026 with coloured bars for Paid Time Off and Sick Time Off in October and requests in other months" />

## See also

- [Time off overview](../index.md)
- [Setup](../setup/index.md)
- [Request time off](../requests/request-time-off.md)
- [Manage requests](../requests/manage-requests.md)
- [Overview calendar](../requests/overview-calendar.md)
