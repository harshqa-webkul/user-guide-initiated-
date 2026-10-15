# Stages

A stage is one step in the life of a maintenance request. The stages show as a bar on top of every request, so you see at once where the work stands. A flag called **Done** tells Aureus which stages mean the job is finished.

> **In simple words:** Stages are the steps of a job. The Done flag marks the last steps.

Other modules, such as projects and recruitment, also use stages. The idea is the same everywhere. See [Stages in Getting started](../../../getting-started/stages.md).

Open `Maintenance → Configurations → Stages`.

## The seeded stages

| Stage | Done | What it means |
| --- | --- | --- |
| **New Request** | No | A problem is reported. Work has not started |
| **In Progress** | No | A technician is working on it |
| **Repaired** | Yes | The job is finished |
| **Scrap** | Yes | The equipment cannot be fixed and is you stop using it |

<ImagePopup src="/images1/maintenance/set_stages_list.png" alt="Maintenance Stages list with New Request, In Progress, Repaired and Scrap, with green Done ticks on Repaired and Scrap" />

The list has a **Name** column and a **Done** column. A green tick means Yes. A red cross means No.

## What the Done flag does

A request counts as closed when its stage has **Done** switched on. Then:

- It leaves the **To Do** tab and appears on the **Done** tab of the request list.
- It shows in green on the calendar. Open jobs show in blue.
- If it is a recurring preventive request, Aureus creates the next copy when you save it in this stage.

## Create a stage

1. Open `Maintenance → Configurations → Stages`.
2. Click **New Stage**. A window opens.
3. Fill in the form.

- **_Name:_** Required. For example `Waiting for Parts`.
- **_Done:_** Switch on only if the job is finished at this stage. It starts off.

<ImagePopup src="/images1/maintenance/set_stage_form.png" alt="New Stage window with the name Waiting for Parts and the Done toggle off" />

4. Click **Create**.

## Change the order

The order of the list is the order of the bar on each request. To change it:

1. Click the reorder button at the left of the toolbar.
2. Drag a row up or down.
3. Click the button again to finish.

New requests always start in the first stage. Keep the done stages last.

## Edit, group and delete

Click **Edit** to rename a stage or change its Done flag. Use **Group by** to group the list by **Done**. Click **Delete** to remove a stage.

::: warning
Do not delete a stage while requests use it. Move those requests to another stage first.
:::

::: tip
Keep the list short, three to five stages. A long bar is hard to read.
:::

## See also

- [Maintenance teams](maintenance-teams.md)
- [Process a request](../requests/process-request.md)
- [Preventive maintenance](../requests/preventive-maintenance.md)
- [Stages in Getting started](../../../getting-started/stages.md)
