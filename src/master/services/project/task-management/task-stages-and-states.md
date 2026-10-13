# Task stages and states

Two things describe where a task stands. The stage is its step in your workflow, such as **New** or **Review**. The State is a short status of how the work is going, such as **In Progress** or **Done**. Do not mix them up.

> **In simple words:** The stage is where the task sits in your process. The State is how it is going.

## Three different things

| Concept | What it describes | Where you set it |
| --- | --- | --- |
| Project stage | The step of a whole project, such as **To Do** or **Done** | `Project → Configurations → Project Stages` |
| Task stage | The step of one task inside one project | `Project → Configurations → Task Stages` |
| Task State | How the work is going | The **State** field of the task |

Project stages are shared by all projects. See [Project stages and milestones](../project-management/project-stages-and-milestones.md). This page covers the other two.

## Task stages

A task stage belongs to one project. Each project has its own list. The list starts empty, so you add the stages yourself.

::: warning Prerequisite
Add task stages before you create the first task. The stage bar on the task form lists only the stages of the chosen project.
:::

### Add a task stage

1. Open `Project → Configurations → Task Stages` and click **New Task Stage**.

   <ImagePopup src="/images1/project/tk_task_stages_list.png" alt="Task Stages list showing stages of Website Revamp" />

2. Fill in the modal.

   - **_Name:_** (required) The stage name, for example **Review**.
   - **_Project:_** (required) The project that uses it, for example **Website Revamp**.

   <ImagePopup src="/images1/project/tk_task_stage_form.png" alt="Task stage modal with name Review and project Website Revamp" />

3. Click **Create**. Repeat for **New**, **In Progress** and **Done**.

You can also add stages from the **Task Stages** tab of a project. The **Project** field is then hidden.

Drag the rows to change the order. The first stage is the default for new tasks. The row menu has **Edit**, **Delete**, **Restore** and **Force delete**.

## The five States

Choose one State on every task. The default is **In Progress**.

| State | Colour | Use it when |
| --- | --- | --- |
| **In Progress** | Grey | Work is under way |
| **Change Requested** | Orange | Someone asked for changes |
| **Approved** | Blue | The work is accepted |
| **Cancelled** | Red | The task will not be done |
| **Done** | Green | The work is finished |

<ImagePopup src="/images1/project/tk_state_buttons.png" alt="State buttons on the task form with In Progress selected" />

### Change the State from the list

In the task list, click the State icon of a row. The **Update State** modal opens. Pick the new State and save.

<ImagePopup src="/images1/project/tk_update_state_modal.png" alt="Update State modal on the task Migrate CMS content" />

::: tip
The **Open Tasks** tab hides tasks whose State is **Cancelled** or **Done**. The **Closed Tasks** view shows them.
:::

## Example

In **Website Revamp**, **Launch checklist and QA** has the State **Approved** and the stage **Review**. **Design new homepage mockups** has the State **Done** and the stage **Done**.

## See also

- [Create a task](create-task.md)
- [Task list views and filters](task-list-views-and-filters.md)
- [Project stages and milestones](../project-management/project-stages-and-milestones.md)
- [Create a project](../project-management/create-project.md)
