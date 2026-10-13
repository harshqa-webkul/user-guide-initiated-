# Log time

Logging time means adding a timesheet entry. You can do it from the main Timesheets page, where you pick the project and task yourself. You can also do it from inside a task, where the project and task are already known.

> **In simple words:** Pick who worked, on what, on which day and for how many hours. Save, and the task totals update.

Open `Project → Timesheets`.

::: warning Prerequisite
**Enable Timesheets** must be on, and the project needs **Allow Timesheets**. See [Timesheet settings](timesheet-settings.md). The project also needs at least one task.
:::

## Add a timesheet from the Timesheets page

1. Open `Project → Timesheets`.
2. Click **Add Timesheet**. A form opens.

<ImagePopup src="/images1/timesheets/ts_add_timesheet_button.png" alt="Timesheets page with the Add Timesheet button" />

3. Fill in the form.

- **_Date:_** The day the work was done. Required.
- **_Employee:_** The person who did the work. Required. This list holds user accounts. Choose it yourself.
- **_Project:_** The project the work belongs to. Required. Only projects of your company are listed.
- **_Task:_** The task that received the work. Required. Choose a project first, because the list shows only tasks of that project.
- **_Description:_** A short note on what was done.
- **_Time Spent:_** Hours as a decimal number. Required.

<ImagePopup src="/images1/timesheets/ts_add_timesheet_form.png" alt="Add Timesheet form filled for Website Revamp and Migrate CMS content" />

::: info Project then task
The **Task** list depends on the **Project**. If you change the project, the task is cleared. Pick the task again.
:::

4. Click **Create**. A message confirms **Timesheet created**.

### Enter hours as decimals

Type time in hours. A quarter hour is 0.25. Half an hour is 0.5.

| You want | Type |
| --- | --- |
| 1 hour 30 minutes | 1.5 |
| 2 hours 15 minutes | 2.25 |
| 45 minutes | 0.75 |

### Example

Ava Lewis imported 40 articles on 14 Oct 2026. Enter these values:

- **_Date:_** 14 Oct 2026
- **_Employee:_** Ava Lewis
- **_Project:_** Website Revamp
- **_Task:_** Migrate CMS content
- **_Description:_** Imported 40 articles
- **_Time Spent:_** 3

Aureus sets the **Creator** to you. This is useful when you log time for someone else.

## Add a timesheet from a task

1. Open `Project → Tasks` and open the task, for example **Migrate CMS content**.
2. Scroll down the **View** page and click the **Timesheets** tab.

<ImagePopup src="/images1/timesheets/ts_task_timesheets_tab.png" alt="Timesheets tab of the task Migrate CMS content" />

3. Click **Add Timesheet**.
4. Fill in **Date**, **Employee**, **Description** and **Time Spent**. Aureus fills the project and task from this task.

<ImagePopup src="/images1/timesheets/ts_task_add_timesheet_form.png" alt="Add Timesheet form opened from a task" />

5. Click **Create**.

The tab lists **Date**, **Employee**, **Description** and **Time Spent**. Rows at the bottom show the totals. See [Timesheet settings](timesheet-settings.md).

::: info
The **Timesheets** tab appears only when **Enable Timesheets** is on and the project has **Allow Timesheets**. A task with no project also shows it.
:::

## Edit an entry

1. Find the entry in the list or in the task's **Timesheets** tab.
2. Click **Edit** at the end of the row.
3. Change the values and save. A message confirms **Timesheet updated**.

Task totals are recalculated after the save.

## Delete an entry

1. Click **Delete** at the end of the row.
2. Confirm. A message confirms **Timesheet deleted**.

Task totals are recalculated after the delete. To remove many entries at once, see [Timesheet list and filters](timesheet-list-and-filters.md).

## See your own time

On the Timesheets page, click the **My Timesheets** tab. It shows only entries where **Employee** is you. A number on the tab counts those entries.

<ImagePopup src="/images1/timesheets/ts_my_timesheets_tab.png" alt="My Timesheets tab showing only the logged in user's entries" />

## Actions and statuses

| Action | Result |
| --- | --- |
| **Add Timesheet** | Creates an entry and adds its hours to the task. |
| **Edit** | Changes an entry and recalculates the task. |
| **Delete** | Removes an entry and recalculates the task. |

Timesheet entries have no status. They are saved as soon as you click **Create**.

## See also

- [Timesheet list and filters](timesheet-list-and-filters.md)
- [Timesheet settings](timesheet-settings.md)
- [Sub tasks](../project/task-management/sub-tasks.md)
- [Create a task](../project/task-management/create-task.md)
