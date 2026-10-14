# Create a maintenance request

A maintenance request tells your team that a machine needs work. You pick the equipment, describe the problem, choose a type and say who should do it. Aureus then fills in most of the other fields for you.

> **In simple words:** Choose the equipment, type a short title, and save. Add a date and instructions so the technician knows what to do.

Open `Maintenance → Maintenance Requests` and click **New Maintenance Request**.

::: info Before you start
Create these records first:
- A [maintenance team](../setup/maintenance-teams.md).
- The [stages](../setup/stages.md). Aureus puts a new request in the first stage.
- The [equipment](../equipment/add-equipment.md) that needs work.
:::

## Worked example

The **Hydraulic Press 200T** leaks oil. You raise a corrective request for it.

1. Open `Maintenance → Maintenance Requests`. Click **New Maintenance Request**. The page is titled **Create Maintenance Request**.

<ImagePopup src="/images1/maintenance/req_create_empty.png" alt="Empty Create Maintenance Request form with New Request highlighted in the stage bar, the Request card, tabs and Settings card" />

2. Look at the stage bar at the top. It shows **New Request**, **In Progress**, **Repaired** and **Scrap**. A new request starts in **New Request**.

### Request card

3. Type the title in **Request**. Write **Hydraulic press oil leak**.
4. Choose **Hydraulic Press 200T** in **Equipment**. Aureus fills several fields at once.

<ImagePopup src="/images1/maintenance/req_create_equipment_autofill.png" alt="Request form titled Hydraulic press oil leak after choosing Hydraulic Press 200T, with Category Packaging Machines, Team Electrical Maintenance Team and Responsible Linda Ndlovu filled automatically" />

5. Leave **Maintenance Type** on **Corrective**.

- **_Request:_** Required. A short title, up to 255 characters. You cannot change it after you save.
- **_Equipment:_** The machine that needs work. Pick it from the list.
- **_Category:_** Filled from the equipment. You cannot edit it here. Example: **Packaging Machines**.
- **_Request Date:_** Filled by Aureus. It is today. You cannot edit it.
- **_Maintenance Type:_** **Corrective** (default) or **Preventive**. Choose **Preventive** to see the **Recurrent** box. See [Preventive maintenance](preventive-maintenance.md).

### Settings card

6. Check the **Settings** card on the right. Equipment filled **Team** and **Responsible**.
7. Set **Scheduled Date** to a near future date at 09:00, for example **Oct 14, 2026 09:00**. Set **Duration** to **02:00**. Set **Priority** to **2**.

<ImagePopup src="/images1/maintenance/req_create_settings.png" alt="Settings card with Team Electrical Maintenance Team, Responsible Linda Ndlovu, Scheduled Date Oct 14, 2026 09:00:00, Duration 02:00 and Priority 2" />

- **_Team:_** Required. Filled from the equipment. Example: **Electrical Maintenance Team**.
- **_Responsible:_** The technician. Filled from the equipment. Example: **Linda Ndlovu**. Without equipment it is you.
- **_Scheduled Date:_** When the work should start. Requests with a date show on the [calendar](../calendar/maintenance-calendar.md).
- **_Duration:_** How long the job takes, as hours and minutes (`hh:mm`). Example: `02:00`.
- **_Priority:_** A number from 0 to 3. The default is 0. Use 0 for normal work and 1 to 3 for work that needs attention first. Any value above 0 appears in the **High-priority** tab.
- **_Company:_** Required. The default is your company.

### Notes tab

8. The **Notes** tab is open by default. Type extra details in **Internal Notes**. Only your team sees them.

### Instructions tab

9. Open the **Instructions** tab. **Instruction Type** is **Text** by default.

- **Text:** shows a **Description** box. Type the steps.
- **PDF:** shows a **PDF** upload. Attach a manual or checklist.
- **Google Slide:** shows a **Google Slide** field. Paste the link of the presentation.

For the example, keep **Text** and write: *Isolate the power, replace the gasket, refill oil to the marked level*.

<ImagePopup src="/images1/maintenance/req_create_instructions.png" alt="Instructions tab with Instruction Type Text and the repair steps typed in Description" />

### Save

10. Click **Create**. Click **Create & create another** to start a new form. Click **Cancel** to leave.

<ImagePopup src="/images1/maintenance/req_create_filled.png" alt="Completed Hydraulic press oil leak request for Hydraulic Press 200T, Corrective, ready to save" />

After **Create** the notification **Maintenance request created** appears with the text "The maintenance request has been created successfully." You land on the **View** page of the new request, not the list. The **Chatter** badge shows 1, for "A new Maintenance Request was created".

::: tip
Pick the equipment first. It fills **Category**, **Team** and **Responsible**, so you type less.
:::

## What happens next

The request sits in **New Request** and is assigned to **Linda Ndlovu**. Move it forward in [Process a request](process-request.md).

## See also

- [Maintenance requests](index.md)
- [Preventive maintenance](preventive-maintenance.md)
- [Maintenance request list](request-list.md)
- [Add equipment](../equipment/add-equipment.md)
