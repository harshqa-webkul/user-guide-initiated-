# Create a task

A task records one piece of work: what it is, who does it, when it is due and how many hours it should take. You create tasks inside a project, or on their own as private tasks. Every task sits in a stage and has a State.

> **In simple words:** Fill in a title, pick a project, add people and a deadline, then save.

Open `Project → Tasks`, then click **New Task**.

::: warning Prerequisite
The project must already have task stages. The stage bar stays empty until you pick a project, and you cannot save without a stage. Add stages first. See [Task stages and states](task-stages-and-states.md).
:::

## Create a task

The example creates **Prepare launch announcement** in the project **Website Revamp**.

1. Open `Project → Tasks` and click **New Task**.

   <ImagePopup src="/images1/project/tk_new_task_button.png" alt="Tasks list with the New Task button" />

2. Click **Website Revamp** in the **Project** field. The stage bar now lists the stages of that project. The first one, **New**, is selected for you.

   <ImagePopup src="/images1/project/tk_form_project_stage.png" alt="Create Task form with project Website Revamp and the stage bar showing New selected" />

### General

3. Fill in the fields of the **General** section.

   - **_Title:_** (required) Name the work, for example **Prepare launch announcement**.
   - **_State:_** (required) Choose how the work is going. The default is **In Progress**. See [Task stages and states](task-stages-and-states.md).
   - **_Tags:_** Pick one or more labels, for example **Client Work**. You can create a new tag from here. See [Tags](../configuration/tags.md).
   - **_Description:_** Add details, links or a checklist.

   <ImagePopup src="/images1/project/tk_form_general.png" alt="General section filled with title Prepare launch announcement, state In Progress and tag Client Work" />

### Settings

4. Fill in the fields of the **Settings** section on the right.

   - **_Project:_** The project that owns the task. Leave it empty to make a private task.
   - **_Milestone:_** The target this task helps to reach, for example **Go Live**. It shows only when **Enable Milestones** is on and the project has **Allow Milestones** on.
   - **_Customer:_** Fills in from the project. You can change it.
   - **_Assignees:_** One or more users who do the work, for example **Ava Lewis**.
   - **_Deadline:_** The date and time the task is due, for example 21 Sep 2026.
   - **_Allocated Hours:_** The planned effort, for example 10. It shows only when **Enable Timesheets** is on. Use decimals, so 1.5 means 1 hour 30 minutes.

   <ImagePopup src="/images1/project/tk_form_settings.png" alt="Settings section with project Website Revamp, assignee Ava Lewis, deadline 21 Sep 2026 and allocated hours 10" />

5. Click **Create**. Click **Create & create another** to save and start a new form.

   <ImagePopup src="/images1/project/tk_task_created.png" alt="View page of the new task Prepare launch announcement" />

The system fills in the creator for you.

::: info
Changing the project clears the **Milestone**, resets the stage to the first one of the new project and copies the project customer.
:::

## Private tasks

**Project** is optional. A task without a project is private. It appears under the **Private Tasks** tab. The project column shows **Private Task**.

## Star a task

Priority is a star. In the task list, click the star icon in the **Priority** column. A filled star means high priority. Click again to remove it.

<ImagePopup src="/images1/project/tk_priority_star.png" alt="Task list with the Priority star filled on one task" />

## View, edit and archive

Click a task to open its view page. The page shows these parts:

- **General:** title, State, tags, priority and description.
- **Project Information:** project, milestone, customer, assignees, deadline and stage.
- **Time Tracking:** allocated time, time spent, time remaining and progress.
- **Statistics:** number of sub-tasks and timesheet entries.

The sub navigation at the top has **View**, **Edit** and **Sub Tasks**. **Edit** opens the same form. Scroll to the bottom of the **View** page to find the **Timesheets** and **Sub Tasks** tabs. The **Timesheets** tab shows when timesheets are on for the project, or for a private task.

<ImagePopup src="/images1/project/tk_view_page.png" alt="Task view page with the sub navigation View, Edit and Sub Tasks, and the Timesheets and Sub Tasks tabs at the bottom" />

## Actions and statuses

| Action | What it does |
| --- | --- |
| **Chatter** | Opens messages, notes, activities and followers. Activity plans can be started here. |
| **Delete** | Archives the task. It leaves the main lists. |
| **Restore** | Brings an archived task back. |
| **Force delete** | Removes the task for good. |

Find archived tasks under the **Archived Tasks** tab. See [Task list views and filters](task-list-views-and-filters.md).

::: tip
Stage and State are different. The stage is the column of your workflow. The State is how the work is going. Change either one at any time.
:::

## See also

- [Task stages and states](task-stages-and-states.md)
- [Sub-tasks](sub-tasks.md)
- [Task list views and filters](task-list-views-and-filters.md)
- [Log time](../../timesheets/log-time.md)
- [Chatter](../../../getting-started/chatter.md)
- [Activities](../../../getting-started/activities.md)
- [Manage users](../../../general-settings/users/manage-users.md)
