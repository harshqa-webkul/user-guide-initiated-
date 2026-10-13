# Project stages and milestones

Project stages describe the phase of a whole project. Milestones are key points inside one project, such as a sign off. Stages are shared by every project. Milestones belong to one project.

> **In simple words:** Stages say where a project is. Milestones say which big goals are reached.

::: info Three different things
A project stage is not a task stage and not a task **State**. Task stages and states are explained in [Task stages and states](../task-management/task-stages-and-states.md).
:::

## Project stages

Needs **Enable Project Stages** in [Project settings](../get-started/project-settings.md). Without it the stage bar is hidden on the project form.

Open `Project → Configurations → Project Stages`.

1. Click **New Project Stage**. A window opens.
2. Type a **Name**, for example **To Do**.
3. Click **Create**.

<ImagePopup src="/images1/project/cf_project_stage_form.png" alt="Create Project Stage window with the name Review typed in" />

- **_Name:_** Required and unique. Up to 255 characters.

Add **To Do**, **In Progress**, **Done** and **Cancelled** for the example. Drag the rows to set the order. The first stage in the list is the default for a new project.

<ImagePopup src="/images1/project/cf_project_stages_list.png" alt="Project Stages list with To Do, In Progress, Done and Cancelled" />

Each row has **Edit**, **Delete**, **Restore** and **Force delete**. **Delete** archives the stage. You can group the list by **Created At**.

## Milestones

Needs **Enable Milestones** in settings and **Allow Milestones** on the project. Open the project and click **Milestones** in the top links.

1. Open **Website Revamp** and click **Milestones**.
2. Click **Add Project Milestone**. A window opens.
3. Fill the form and click **Create**.

<ImagePopup src="/images1/project/pj_milestone_form.png" alt="Create Milestone window with Name Go Live, a Deadline and Is Completed off" />

- **_Name:_** Required. Example: **Phase 1 Complete**.
- **_Deadline:_** The date and time to reach it.
- **_Is Completed:_** Required toggle. Off until the goal is reached.
- **_Project:_** Required. Hidden when you add the milestone inside a project.

The list shows **Name**, **Deadline**, **Is Completed** and **Completed At**. Switch **Is Completed** in the row when the goal is done. **Completed At** fills automatically.

<ImagePopup src="/images1/project/pj_milestones_list.png" alt="Milestones list of Website Revamp with Phase 1 Complete and Go Live" />

You can also reach all milestones at `Project → Configurations → Milestones`. Filter by **Is Completed**, **Project** or **Creator**.

### Completed count

The project card shows milestones as completed over total. With **Phase 1 Complete** done and **Go Live** open, it reads 1/2. The **View** page shows the same under **Milestones Progress**.

### Use on tasks

When a project allows milestones, the task form has a **Milestone** field. Link a task to a milestone there. See [Create a task](../task-management/create-task.md).

## Actions and statuses

- **Edit:** changes a stage or a milestone.
- **Delete:** archives a stage. Restore it from the list filter.
- **Force delete:** removes a stage for good.
- A milestone is **Completed** when **Is Completed** is on.

## See also

- [Create a project](create-project.md)
- [Project settings](../get-started/project-settings.md)
- [Task stages and states](../task-management/task-stages-and-states.md)
- [Project management](index.md)
