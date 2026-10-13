# Preventive maintenance

Preventive maintenance is planned work that stops a machine from breaking. You service it on a schedule, such as greasing every month. A preventive request can repeat on its own, so you create it once and Aureus makes the next one each time you finish.

> **In simple words:** Set the request to repeat. When you close one, the next one appears with a new date.

Open `Maintenance → Maintenance Requests` and click **New Maintenance Request**.

::: info Before you start
You need a [team](../setup/maintenance-teams.md), [stages](../setup/stages.md) and [equipment](../equipment/add-equipment.md). Read [Create a maintenance request](create-request.md) for the main form.
:::

## Make a request repeat

The example is **Monthly lubrication, Hydraulic Press 200T**. It must happen once a month.

1. Type **Monthly lubrication, Hydraulic Press 200T** in **Request**.
2. Choose **Hydraulic Press 200T** in **Equipment**.
3. Under **Maintenance Type**, click **Preventive**. A **Recurrent** checkbox appears.

<ImagePopup src="/images1/maintenance/prev_type_preventive.png" alt="Monthly lubrication request with Maintenance Type set to Preventive and the Recurrent checkbox visible" />

4. Tick **Recurrent**. The **Repeat Every** field appears.
5. Type **1** in the number box. Choose **Months** in the unit list. Leave the last list on **Forever**.

<ImagePopup src="/images1/maintenance/prev_repeat_every.png" alt="Repeat Every set to 1 Months Forever on the Hydraulic Press 200T request" />

6. In **Settings**, set **Scheduled Date** to `Oct 20, 2026 09:00` and **Duration** to `01:00`. This date starts the cycle.
7. Click **Create**. You land on the **View** page of the request.

<ImagePopup src="/images1/maintenance/prev_filled_request.png" alt="Completed Monthly lubrication request with Preventive, Recurrent, Repeat Every 1 Months Forever, scheduled Oct 20, 2026 09:00" />

- **_Recurrent:_** Tick it to repeat the job. It shows only for **Preventive**. If you switch back to **Corrective**, the box disappears and is cleared.
- **_Repeat Every:_** Required. A whole number of at least 1.
- **Unit:** **Days**, **Weeks**, **Months** or **Years**. The default is **Weeks**.
- **Forever:** The request repeats without an end. This is the default.

## What happens when you close it

The request repeats when you save it in a stage with the **Done** flag, such as **Repaired**.

1. A technician finishes the job, chooses **Repaired** on the **Edit** page and clicks **Save changes**. See [Process a request](process-request.md).
2. Aureus makes a copy in the first stage, **New Request**.
3. The copy has a new **Scheduled Date**: the original date plus the interval. It keeps the time and duration.
4. An activity is created for the **Responsible** person on the copy.

### Dates in the example

| Step | Scheduled Date |
| --- | --- |
| First request, scheduled | 20 Oct 2026 09:00 |
| You save it in **Repaired** | |
| Copy appears in **New Request** | 20 Nov 2026 09:00 |
| You save the copy in **Repaired**, and the next copy appears | 20 Dec 2026 09:00 |

The new date is the old **Scheduled Date** plus the interval, not today plus the interval. Closing late does not shift the cycle.

<ImagePopup src="/images1/maintenance/prev_copy_created.png" alt="Request list showing the Repaired Monthly lubrication request for 20 Oct 2026 and its new copy in New Request for 20 Nov 2026" />

## Behind the scenes

The copy keeps the same equipment, team, responsible person, duration, priority, notes and instructions. The activity for the copy appears in the request's [Chatter](../../../getting-started/chatter.md) and in [Activities](../../../getting-started/activities.md). The old request stays in **Repaired** as your history.

Corrective requests never create a copy.

::: tip
Keep the repeating request assigned to someone. The next activity goes to the **Responsible** person, so an empty field leaves the new job without an owner.
:::

::: tip
A scheduled date makes the request appear on the [Maintenance calendar](../calendar/maintenance-calendar.md). You see each month's job ahead of time.
:::

## See also

- [Maintenance requests](index.md)
- [Create a maintenance request](create-request.md)
- [Process a request](process-request.md)
- [Stages](../setup/stages.md)
