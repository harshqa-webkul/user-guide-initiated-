# Timesheet settings

Timesheets work through three layers of switches and numbers. A global switch turns the feature on, a project switch lets that project take time, and **Allocated Hours** sets the plan. After this, Aureus shows spent time, remaining time and progress on every task.

> **In simple words:** Switch it on once, allow it per project, set the planned hours, and the task totals follow.

## Settings

### Enable Timesheets

1. Open `Project → Settings → Manage Time`.
2. Turn on **Enable Timesheets**. Its note reads "Track time spent on projects and tasks".
3. Click **Save changes**.

<ImagePopup src="/images1/timesheets/ts_enable_timesheets.png" alt="Manage Time settings page with Enable Timesheets turned on" />

This adds the time fields to projects and tasks and the time columns to the task list. See [Project settings](../project/get-started/project-settings.md).

### Allow Timesheets on a project

1. Open `Project → Projects` and open the project, then click **Edit**.
2. In the **Settings** section, find the **Time Management** group.
3. Turn on **Allow Timesheets**. Its note reads "Log time on tasks and track progress".
4. Save the project.

<ImagePopup src="/images1/timesheets/ts_allow_timesheets.png" alt="Project settings section with Allow Timesheets turned on" />

This group shows only when **Enable Timesheets** is on. Without **Allow Timesheets**, the project's tasks hide the **Timesheets** tab.

## Allocated Hours

**Allocated Hours** is the time you plan. Type it in decimal hours. For example, 1.5 means 1 hour 30 minutes.

- **On a project:** Set the total plan. **Website Revamp** has 120 hours. See [Create a project](../project/project-management/create-project.md).
- **On a task:** Set the plan for that task. **Migrate CMS content** has 20 hours. See [Create a task](../project/task-management/create-task.md).

<ImagePopup src="/images1/timesheets/ts_allocated_hours_task.png" alt="Task form Settings section with Allocated Hours set to 20" />

The field appears only when **Enable Timesheets** is on.

## Summary rows on a task

Open a task, scroll down the **View** page and click the **Timesheets** tab. The **Summary** rows under the **Time Spent** column show:

- **_Time Spent:_** Hours logged on this task.
- **_Time Spent on Subtasks:_** Hours logged on its sub tasks.
- **_Total Time Spent:_** Both added together.
- **_Remaining Time:_** **Allocated Hours** minus **Total Time Spent**. It shows only when the task has **Allocated Hours**.

<ImagePopup src="/images1/timesheets/ts_task_summary_rows.png" alt="Summary rows under the Time Spent column on a task" />

## Progress and its colours

The task view has a **Time Tracking** section with **Allocated Time**, **Time Spent**, **Time Remaining** and **Progress**. The task list also shows a **Progress** bar.

| Progress | Colour | Meaning |
| --- | --- | --- |
| Under 100% | Orange | Work is within the plan. |
| Exactly 100% | Green | The plan is used in full. |
| Over 100% | Red | The task is over its plan. |

**Progress** can pass 100%. Remaining time then shows a negative number, as in the example below.

<ImagePopup src="/images1/timesheets/ts_task_progress.png" alt="Time Tracking section of Migrate CMS content with 25 hours spent, minus 5 remaining and 125 percent progress in red" />

## What happens after each save or delete

Aureus recalculates the task after every entry you add, edit or delete.

1. It adds the task's own entries to get **Time Spent**.
2. It adds the sub task entries to get **Time Spent on Subtasks**.
3. It subtracts the total from **Allocated Hours** to get **Remaining Time**.
4. It divides the total by **Allocated Hours** to get **Progress**.
5. If the task is a sub task, it does the same for the parent.

The parent updates one level up. If you move a task to another project, its entries move with it.

::: tip
Set **Allocated Hours** before people log time. A task with no planned hours has no **Remaining Time** and 0 **Progress**.
:::

## See also

- [Timesheets overview](index.md)
- [Log time](log-time.md)
- [Timesheet list and filters](timesheet-list-and-filters.md)
- [Project settings](../project/get-started/project-settings.md)
