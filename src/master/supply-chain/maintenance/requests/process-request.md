# Process a request

Processing a request means moving it through its stages until the work is finished. You also keep notes, send messages and plan follow-up tasks on the same page. Everything about one job stays in one place.

> **In simple words:** Click the next stage when the work moves on. Use the chat panel to talk about the job.

Open `Maintenance → Maintenance Requests` and click the request, for example **Hydraulic press oil leak**.

::: info Before you start
Create the request first. See [Create a maintenance request](create-request.md).
:::

## Move a request through the stages

The request page has two tabs at the top: **View** and **Edit**. The **View** tab shows the stage bar but is read only. Use the **Edit** tab to change the stage.

1. Open the **Edit** tab of **Hydraulic press oil leak**.
2. Click **In Progress** in the stage bar. The stage does not save by itself. Click **Save changes**. The notification **Maintenance request updated** appears with the text "The maintenance request has been updated successfully." You stay on the **Edit** page with the new stage highlighted.

<ImagePopup src="/images1/maintenance/req_process_in_progress.png" alt="Edit page of Hydraulic press oil leak with In Progress highlighted in the stage bar" />

3. When the work is done, click **Repaired**. Click **Save changes**.

<ImagePopup src="/images1/maintenance/req_process_repaired.png" alt="Edit page of Hydraulic press oil leak with Repaired highlighted in the stage bar" />

The current stage is blue. The other stages are white outlines. Each change is logged in **Chatter**, for example "Stage :: New Request -> In Progress".

### Repaired and Scrap

Both stages carry the **Done** flag. This flag closes the request.

- **Repaired:** the equipment works again.
- **Scrap:** the equipment cannot be fixed and is written off.

A closed request leaves the **To Do** tab and appears in **Done**. On the calendar it turns green. See [Maintenance request list](request-list.md).

## What you can edit

The **Request** title is locked after creation. You can still change the equipment, the dates, the team, the responsible person, the priority, the notes and the instructions. Click **Save changes** to keep your edits or **Cancel** to leave.

## Chatter panel

Click the blue **Chatter** button at the top of the request. A side panel opens with a **Close** button.

<ImagePopup src="/images1/maintenance/req_process_chatter.png" alt="Chatter panel of Hydraulic press oil leak with the Send Message, Log Note and Schedule Activity buttons, and the File, Follower and Filters icons" />

- **Send Message:** write a message to the followers.
- **Log Note:** write a note for your team.
- **Schedule Activity:** plan a task, such as a call to the supplier.
- **File** (paperclip icon with a count): attach a file.
- **Follower** (person icon with a count): choose who follows the request.
- **Filters** (funnel icon): narrow the list of **Messages**.

The badge on the button counts the entries. Read more in [Chatter](../../../getting-started/chatter.md).

## Activities on the list

Each row in the request list has a clock icon with the tooltip **Schedule Activity**. Click it to plan a task without opening the request. The row in the screenshot is an example of the icon. It is in **In Progress**.

<ImagePopup src="/images1/maintenance/req_process_list_activity.png" alt="Request list row for Hydraulic press oil leak in In Progress, with the clock icon for Schedule Activity" />

See [Activities](../../../getting-started/activities.md).

## Delete and restore

Click the red **Delete** button on the request page, or use the row menu in the list. Aureus does not erase the request. It moves to the **Cancelled** view.

To bring it back, open the **Cancelled** view, tick the request and click **Restore selected**. **Force delete selected** removes it for good.

::: warning
Force delete cannot be undone.
:::

## See also

- [Create a maintenance request](create-request.md)
- [Preventive maintenance](preventive-maintenance.md)
- [Maintenance request list](request-list.md)
- [Stages](../setup/stages.md)
