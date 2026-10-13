# First steps

This tutorial takes you through one full maintenance job. You set up a team and a category, add a machine, report a fault, repair it, and then schedule the same care to repeat each month. Every step uses the same machine, the **Hydraulic Press 200T**.

> **In simple words:** Build the press, break the press, fix the press, then make sure it is looked after every month.

Think of the tutorial as a map. Each step gives a short instruction and links to the page that explains it in depth.

```text
Setup (1-3)  →  Equipment (4)  →  Request (5-7)  →  Calendar (8)  →  Preventive (9)
```

## 1. Check the stages and the team

Open `Maintenance → Configurations → Stages`. The list shows **New Request**, **In Progress**, **Repaired** and **Scrap**. **Repaired** and **Scrap** have a green tick under **Done**. Then open `Teams`. The team **Internal Maintenance** is there.

<ImagePopup src="/images1/maintenance/ft_check_stages.png" alt="Maintenance Stages list showing New Request, In Progress, Repaired and Scrap, with green Done ticks on Repaired and Scrap" />

**Behind the scenes:** the Done flag decides when a request counts as closed. See [Stages](../setup/stages.md).

## 2. Create a category

Open `Maintenance → Configurations → Categories` and click **New Category**.

- **_Name:_** `Packaging Machines`
- **_Responsible:_** `Linda Ndlovu`

Click **Create**. The notification **Category created** appears and the category opens on its view page.

<ImagePopup src="/images1/maintenance/ft_category.png" alt="Create Equipment Category form filled with Packaging Machines and Responsible Linda Ndlovu" />

**Behind the scenes:** Linda becomes the default technician for requests on this kind of machine. See [Equipment categories](../setup/equipment-categories.md).

## 3. Create a team

Open `Maintenance → Configurations → Teams` and click **New Team**.

- **_Name:_** `Electrical Maintenance Team`
- **_Team Members:_** `Linda Ndlovu`

Click **Create**.

<ImagePopup src="/images1/maintenance/ft_team.png" alt="Create Maintenance Team window with Electrical Maintenance Team and member Linda Ndlovu" />

See [Maintenance teams](../setup/maintenance-teams.md).

## 4. Add the equipment

Open `Equipment` and click **New Equipment**. Fill in the form.

- **_Name:_** `Hydraulic Press 200T`
- **_Vendor:_** an existing vendor, such as `Consolidated Components`
- **_Model:_** `HP-200`
- **_Serial Number:_** `HP-200-2026-001`
- **_Cost:_** `18500`
- **_Warranty Expiration Date:_** `2028-06-30`
- **_Equipment Category:_** `Packaging Machines`. The **Technician** fills with the category's **Responsible**, Linda Ndlovu.
- **_Maintenance Team:_** `Electrical Maintenance Team`
- **_Technician:_** `Linda Ndlovu`
- **_Owner:_** `Sales Admin`
- **_Used in location:_** `Workshop A`
- **_Expected Mean Time Between Failure:_** `90`

Click **Create**. The equipment opens on its view page.

<ImagePopup src="/images1/maintenance/ft_equipment.png" alt="Create Equipment form filled for Hydraulic Press 200T with category Packaging Machines, team Electrical Maintenance Team, technician Linda Ndlovu and warranty 30 June 2028" />

See [Add equipment](../equipment/add-equipment.md).

## 5. Report the problem

The press is leaking oil. Open `Maintenance → Maintenance Requests` and click **New Maintenance Request**.

- **_Request:_** `Hydraulic press oil leak`
- **_Equipment:_** `Hydraulic Press 200T`

When you pick the equipment, Aureus fills **Category**, **Team**, **Responsible** and **Company** for you. **Request Date** stays on today. Leave **Maintenance Type** on **Corrective**.

<ImagePopup src="/images1/maintenance/ft_request_equipment.png" alt="Maintenance request form with Hydraulic press oil leak and Hydraulic Press 200T, Category Packaging Machines, Team Electrical Maintenance Team and Responsible Linda Ndlovu filled" />

**Behind the scenes:** the values come from the equipment. You can still change them on this request. See [Create a maintenance request](../requests/create-request.md).

## 6. Assign and schedule

In the **Settings** card on the right, set:

- **_Responsible:_** `Linda Ndlovu`
- **_Scheduled Date:_** tomorrow, `Oct 14, 2026 09:00`
- **_Duration:_** `02:00`
- **_Priority:_** `2`

Click **Create**. The notification **Maintenance request created** appears and the request opens on its view page in the stage **New Request**.

<ImagePopup src="/images1/maintenance/ft_request_settings.png" alt="Settings card with Electrical Maintenance Team, Linda Ndlovu, scheduled date Oct 14, 2026 09:00, duration 02:00 and priority 2" />

## 7. Move it to Repaired

Open the request and click **Edit**. The stage bar on the view page is read only. Click **In Progress** on the stage bar when Linda starts, then click **Save changes**. When the leak is fixed, click **Repaired**, then click **Save changes**. The notification **Maintenance request updated** appears.

<ImagePopup src="/images1/maintenance/ft_stage_repaired.png" alt="Edit page of Hydraulic press oil leak with Repaired highlighted in the stage bar" />

**Behind the scenes:** **Repaired** has the Done flag, so the request is closed. It moves from the **To Do** tab to the **Done** tab. See [Process a request](../requests/process-request.md).

## 8. See it on the calendar

Open `Maintenance → Maintenance Calendar`. The request shows on its scheduled day, 14 October 2026. It is green because its stage is done. Open jobs are blue. The request is on 14 October, so the grid shows it in the October 2026 month.

<ImagePopup src="/images1/maintenance/ft_calendar.png" alt="Maintenance Calendar October 2026 month grid with Hydraulic press oil leak in green on Oct 14" />

See [Maintenance calendar](../calendar/maintenance-calendar.md).

## 9. Set up the monthly preventive job

Fixing faults is not enough. Create a second request to look after the press before it breaks.

1. Click **New Maintenance Request**.
2. **_Request:_** `Monthly lubrication, Hydraulic Press 200T`.
3. **_Equipment:_** `Hydraulic Press 200T`.
4. **_Maintenance Type:_** **Preventive**.
5. Tick **Recurrent**.
6. **_Repeat Every:_** `1`, `Months`, `Forever`.
7. Set **Scheduled Date** to `Oct 20, 2026 09:00` and **Duration** to `01:00`. Click **Create**.

<ImagePopup src="/images1/maintenance/ft_preventive_form.png" alt="Monthly lubrication request with Preventive selected, Recurrent ticked and Repeat Every set to 1 Months Forever" />

Open the request, click **Edit**, choose **Repaired** and click **Save changes**. Aureus creates a copy in **New Request**, scheduled one month after the original: **Nov 20, 2026 09:00**.

<ImagePopup src="/images1/maintenance/ft_preventive_copy.png" alt="Request list showing the Repaired Monthly lubrication request and its new copy in New Request scheduled Nov 20, 2026 09:00" />

**Behind the scenes:** the copy keeps the time and duration, and it also creates an activity for the responsible person, so it shows up in their to-do list. See [Preventive maintenance](../requests/preventive-maintenance.md).

::: tip
You now know the full loop. Use the request list to see all jobs at a glance. See [Request list](../requests/request-list.md).
:::

## See also

- [Maintenance overview](../index.md)
- [Setup](../setup/index.md)
- [Process a request](../requests/process-request.md)
- [Manage equipment](../equipment/manage-equipment.md)
