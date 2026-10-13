# Timesheets

A timesheet entry records time one person spent on one task of a project. Every entry names a date, a person, a project, a task and a number of hours. Aureus adds these hours up for you, so each task shows how much time is spent, how much is left and how far along it is.

> **In simple words:** A timesheet is a diary of who worked on what, and for how long. Aureus does the sums.

Open `Project → Timesheets` from the top bar of the Project app.

::: info Before you start
Turn on **Enable Timesheets** and, for each project, **Allow Timesheets**. See [Timesheet settings](timesheet-settings.md).
:::

## How hours roll up into a task

Each time you save or delete an entry, Aureus recalculates the task it belongs to. If that task is a sub task, the parent task is recalculated too.

| Task value | What it means |
| --- | --- |
| **Allocated Hours** | The hours you plan for the task. You type this on the task. |
| **Time Spent** | Hours logged on this task only. |
| **Time Spent on Subtasks** | Hours logged on its sub tasks. |
| **Total Time Spent** | **Time Spent** plus **Time Spent on Subtasks**. |
| **Remaining Time** | **Allocated Hours** minus **Total Time Spent**. It can go below zero. |
| **Progress** | **Total Time Spent** divided by **Allocated Hours**, as a percentage. |

### Example

The task **Migrate CMS content** in **Website Revamp** has 20 allocated hours. People logged 10 hours on it. Ava Lewis then logs 3 more hours. Its sub tasks **Export legacy articles** and **Import and re-format media** have 6 hours each.

- **Time Spent** is 13 hours.
- **Time Spent on Subtasks** is 12 hours.
- **Total Time Spent** is 25 hours.
- **Remaining Time** is minus 5 hours, because the task is over its plan.
- **Progress** is 125%.

::: tip
If **Allocated Hours** is empty or 0, **Progress** stays at 0. Set the hours on the task first.
:::

## Pages in this group

| Page | What it covers |
| --- | --- |
| [Log time](log-time.md) | Add, edit and delete entries from the Timesheets page or from a task |
| [Timesheet list and filters](timesheet-list-and-filters.md) | Columns, the total row, grouping, filters and bulk delete |
| [Timesheet settings](timesheet-settings.md) | Switches, allocated hours, summary rows and progress colours |

## Suggested order

1. Turn on timesheets in settings.
2. Allow timesheets on each project and set **Allocated Hours** on tasks.
3. Log time as people work.
4. Review the list and each task's progress.

## Where timesheets appear in the project area

- The **Timesheets** tab at the bottom of the task **View** page. See [Create a task](../project/task-management/create-task.md).
- Time columns and **Progress** in the task list.
- **Total Hours Spent** and **Top Assignees** on the [project dashboard](../project/project-management/project-dashboard.md).
- **Allocated Hours** and **Remaining Hours** on a project. See [Create a project](../project/project-management/create-project.md).

## See also

- [Sub tasks](../project/task-management/sub-tasks.md)
- [Project settings](../project/get-started/project-settings.md)
- [Manage users](../../general-settings/users/manage-users.md)
