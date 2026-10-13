# Maintenance requests

A maintenance request is a job card for one piece of equipment. It says what needs attention, who does it, and when. You use requests to report problems, plan regular check-ups, and keep a record of every repair.

> **In simple words:** A request is a to-do item for a machine. It moves from **New Request** to **Repaired** (or **Scrap**) as people work on it.

Open `Maintenance → Maintenance Requests`.

## Corrective and preventive requests

Every request has a **Maintenance Type**. The type tells you why the work exists.

- **Corrective:** Something is already wrong and needs a fix. Example: the **Hydraulic Press 200T** leaks oil, so you raise **Hydraulic press oil leak**.
- **Preventive:** Nothing is broken. You plan the work to stop a failure later. Example: **Monthly lubrication, Hydraulic Press 200T**, repeated every month.

A preventive request can repeat on its own. See [Preventive maintenance](preventive-maintenance.md).

## The life of a request

<ImagePopup src="/images1/maintenance/req_lifecycle_stage_bar.png" alt="Stage bar of the Hydraulic press oil leak request showing New Request, In Progress, Repaired and Scrap" />

```
New Request  →  In Progress  →  Repaired
                            ↘  Scrap
```

1. Someone reports the problem. The request starts in **New Request**.
2. A technician takes the job. Choose **In Progress** on the **Edit** page and click **Save changes**.
3. The work ends in **Repaired** or **Scrap**. These two stages carry the **Done** flag, so they close the request.

You can add or rename stages. See [Stages](../setup/stages.md).

## Who does what

- **The reporter** creates the request and picks the equipment.
- **The responsible person** (the technician) does the work and moves the request along.
- **The team** groups technicians. See [Maintenance teams](../setup/maintenance-teams.md).

## In this section

- [Create a maintenance request](create-request.md): fill the form and save.
- [Process a request](process-request.md): move stages, add notes and activities, delete or restore.
- [Preventive maintenance](preventive-maintenance.md): repeat a job every few days, weeks, months or years.
- [Maintenance request list](request-list.md): tabs, search, group by and bulk actions.

::: tip
Before you start, set up a [team](../setup/maintenance-teams.md), the [stages](../setup/stages.md) and your [equipment](../equipment/add-equipment.md).
:::

## See also

- [Maintenance calendar](../calendar/maintenance-calendar.md)
- [Equipment](../equipment/index.md)
