# Sub-tasks

A sub-task is a smaller task that belongs to a parent task. Use it when one task has several parts, or when different people do different parts. Sub-tasks do not show in the main task list. You reach them from the parent.

> **In simple words:** A sub-task is a task inside a task. Its hours add up on the parent.

Open the parent task and click **Sub Tasks** in the links at the top of the page.

::: warning Prerequisite
The parent task must exist and its project needs task stages. See [Task stages and states](task-stages-and-states.md).
:::

::: info
The time totals need **Enable Timesheets**. See [Timesheet settings](../../timesheets/timesheet-settings.md).
:::

## Create a sub-task

The example adds **Draft email copy** under **Prepare launch announcement**.

1. Open `Project → Tasks`, click **Prepare launch announcement**, then click **Sub Tasks**.

   <ImagePopup src="/images1/project/tk_sub_tasks_tab.png" alt="Sub Tasks tab of the parent task with the Add Sub Task button" />

2. Click **Add Sub Task**. A large form opens with the same fields as a task.

   <ImagePopup src="/images1/project/tk_sub_task_modal.png" alt="Add Sub Task form with values copied from the parent task" />

3. The form opens with values copied from the parent. Type **Draft email copy** in **Title**. Set **Allocated Hours** to 6. Change any copied value if needed.

   - **_Stage:_** The first stage of the project, **New**.
   - **_State:_** **In Progress**.
   - **_Project:_**, **_Milestone:_**, **_Customer:_** and **_Assignees:_** The same as the parent.

   <ImagePopup src="/images1/project/tk_sub_task_filled.png" alt="Sub task form filled with title Draft email copy and allocated hours 6" />

4. Click **Create**. The sub-task appears in the table. Check `Project → Tasks`: the sub-task is not in the main list. Only the parent shows.

   <ImagePopup src="/images1/project/tk_sub_task_created.png" alt="Sub Tasks tab listing Draft email copy" />

The table has the same columns as the task list and a **Trashed** filter. Use the row menu for **Delete**, **Restore** and **Force delete**.

## How time rolls up

Log time on the sub-task like on any task. On the parent, scroll down the **View** page. The **Timesheets** tab then shows these totals.

| Total | Meaning |
| --- | --- |
| **Time Spent** | Hours logged on the parent itself |
| **Time Spent on Subtasks** | Hours logged on all its sub-tasks |
| **Total Time Spent** | The two added together |
| **Remaining Time** | Allocated hours minus the total |

**Migrate CMS content** has 20 allocated hours. People logged 13 hours on it. Its two sub-tasks, **Export legacy articles** and **Import and re-format media**, hold 6 hours each. Those 12 hours count toward the parent. The totals are 13 hours, 12 hours, 25 hours and minus 5 hours remaining.

<ImagePopup src="/images1/project/tk_parent_timesheets_totals.png" alt="Timesheets tab of Migrate CMS content with Time Spent 13, Time Spent on Subtasks 12, Total Time Spent 25 and Remaining Time minus 5" />

The **Statistics** block on the parent view page shows how many sub-tasks it has.

::: tip
Give the sub-tasks their own assignees and deadlines. Each person then finds their part under **My Tasks**.
:::

## See also

- [Create a task](create-task.md)
- [Task list views and filters](task-list-views-and-filters.md)
- [Log time](../../timesheets/log-time.md)
- [Timesheets overview](../../timesheets/index.md)
