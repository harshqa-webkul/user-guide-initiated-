# Maintenance calendar

The calendar shows every maintenance request that has a scheduled date. Maintenance comes in two kinds. Corrective maintenance fixes something that broke, such as an oil leak. Preventive maintenance is planned in advance, such as a monthly lubrication. The calendar lets you see both on one grid, so you can spread the work and avoid busy days.

> **In simple words:** The calendar is a wall planner. Each block is a request on its scheduled day.

Path: `Maintenance → Maintenance Calendar`

::: info Before you start
Only requests with a **Scheduled Date** show up. Stages and teams are set up in [Stages](../setup/stages.md) and [Maintenance teams](../setup/maintenance-teams.md).
:::

## Open the calendar

1. Click **Maintenance** in the top menu.
2. Click **Maintenance Calendar** in the left menu.

The calendar opens in the **Month** view. Weeks start on Monday.

<ImagePopup src="/images1/maintenance/cal_month_view.png" alt="Maintenance Calendar in Month view for October 2026 with Hydraulic press oil leak and Monthly lubrication in green on Oct 14 and Oct 20, and Quarterly safety inspection in blue on Oct 16" />

## Views and controls

The toolbar has the previous and next arrows, **Today**, the current period title, and the view buttons. The green **New Request** button sits above it at the top right. Use the arrows to move in time. Click **Today** to jump back. It stays greyed out while the current period is already shown.

- **Year:** Shows 12 small month grids. It does not show events.
- **Month:** Shows one month as a grid. This is the default view.
- **Week:** Shows seven days on an hourly grid from 12am to 11pm. Each block is one hour tall from its start time.
- **List:** Shows the week as a list of requests, each with a coloured dot. It reads "No events to display" when the week is empty.

<ImagePopup src="/images1/maintenance/cal_year_view.png" alt="Calendar in Year view for 2026 showing the first four month grids with no events" />

<ImagePopup src="/images1/maintenance/cal_week_view.png" alt="Calendar in Week view for Oct 12 to 18, 2026 with a green block on Oct 14 and a blue block on Oct 16" />

<ImagePopup src="/images1/maintenance/cal_list_view.png" alt="Calendar in List view for Oct 12 to 18, 2026 with Wed Oct 14 (green dot) and Fri Oct 16 (blue dot)" />

## Event colours

The colour shows the stage of the request:

- **Blue:** The request is in a stage that is not marked **Done**, for example **New Request** or **In Progress**.
- **Green:** The request is in a stage marked **Done**, for example **Repaired**.

Titles are cut short in month cells. The week, list and pop-up show the full title.

When a request moves to a Done stage, its block turns green. See [Stages](../setup/stages.md).

<ImagePopup src="/images1/maintenance/cal_event_colours.png" alt="Calendar showing green requests on Oct 14 and Oct 20 and a blue request on Oct 16" />

## Open a request from the calendar

1. Click an event, for example **Hydraulic press oil leak**.
2. A window with the request subject as its heading opens. It shows **Date**, **Time** (for example 09:00 - 11:00 (02:00)), **Technician**, **Priority**, **Maintenance Type** and **Stage**.
3. Click **Edit** to open the full request form. Click **Cancel**, the close button or press Escape to close the window.

<ImagePopup src="/images1/maintenance/cal_event_view_popup.png" alt="Pop-up for Hydraulic press oil leak showing Date Oct 14, 2026, Time 09:00 - 11:00 (02:00), Technician, Priority, Maintenance Type and Stage, with Edit and Cancel buttons" />

## Create a request from the calendar

Use this for a quick request. You add the details later on the full form.

1. Click an empty date, or click **New Request** at the top right. A window titled **New Maintenance Request** opens.
2. Type the **Subject**. Required. Use `Hydraulic press oil leak`.
3. If you used **New Request**, check **Scheduled At**. Required. It is filled with the current date and time, for example "Oct 13, 2026 11:04". Set it to tomorrow 09:00. If you clicked a date, the window has only **Subject**, and that date is used.
4. Click **Create**, or **Create & create another** to add more.

<ImagePopup src="/images1/maintenance/cal_click_date_modal.png" alt="New Maintenance Request window opened from a date, with only the Subject field and the Create, Create & create another and Cancel buttons" />

<ImagePopup src="/images1/maintenance/cal_new_request_modal.png" alt="New Maintenance Request window from the New Request button with the Subject and Scheduled At fields" />

The new request gets these values automatically:

- **Maintenance Type:** Corrective.
- **Stage:** The first stage, for example **New Request**.
- **Responsible:** You.
- **Team:** The first team of your company.

::: tip
Open the new request afterwards and pick the equipment. The category, team and technician then update from the equipment. See [Create a maintenance request](../requests/create-request.md).
:::

## Plan with the calendar

1. Open the **Month** view and look for days with many blocks.
2. Switch to **Week** to compare durations on a busy day.
3. Click a block, then **Edit**, and change the scheduled date to move a request to a quieter day.
4. Plan recurring work with [Preventive maintenance](../requests/preventive-maintenance.md). Each repeat shows up on its date.

## See also

- [Create a maintenance request](../requests/create-request.md)
- [Request list](../requests/request-list.md)
- [Preventive maintenance](../requests/preventive-maintenance.md)
- [Stages](../setup/stages.md)
