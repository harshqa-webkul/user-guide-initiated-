# Timesheet list and filters

The Timesheets page lists every entry in one table. Use it to check who logged what, add up hours for a period and remove wrong entries. Grouping and filters help you answer questions such as how many hours a project took this month.

> **In simple words:** One table of all entries, with a total at the bottom and tools to slice it.

Open `Project → Timesheets`.

## Overview

<ImagePopup src="/images1/timesheets/ts_list_overview.png" alt="Timesheets list with columns and Sum row" />

### Columns

- **_Date:_** The day of the work. You can sort by it.
- **_Employee:_** The user who did the work.
- **_Project:_** The project of the entry.
- **_Task:_** The task of the entry.
- **_Description:_** The note typed on the entry.
- **_Time Spent:_** The hours of the entry.
- **_Created At:_** When the entry was saved. Hidden at first.
- **_Updated At:_** When the entry last changed. Hidden at first.

Click the column toggle in the table toolbar to show **Created At** and **Updated At**. Click a column title to sort. You can search the **Employee**, **Project**, **Task** and **Description** columns.

### Time Spent shows hours and minutes

You type decimal hours, but the list shows hours and minutes.

| Typed | Shown |
| --- | --- |
| 3 | 3:0 |
| 1.5 | 1:30 |
| 1.25 | 1:15 |
| 0.5 | 0:30 |

### Sum row

The last row of the table is labelled **Time Spent**. It adds up the hours of the entries in view. Filters and groups change what it adds.

<ImagePopup src="/images1/timesheets/ts_sum_row.png" alt="Sum row at the bottom of the Time Spent column" />

## Group entries

1. Click **Group** in the toolbar.
2. Choose one option.

<ImagePopup src="/images1/timesheets/ts_group_by.png" alt="Group menu with Date, Employee, Project, Task and Creator" />

| Group by | Use it to |
| --- | --- |
| **Date** | See each day's hours. |
| **Employee** | See hours per person. |
| **Project** | See hours per project. |
| **Task** | See hours per task. |
| **Creator** | See who typed the entries. |

Each group shows its own total.

## Filter entries

1. Click **Filter** in the toolbar.
2. Set one or more filters.
3. Close the panel. The table updates.

- **_Date From:_** Show entries on or after this day.
- **_Date Until:_** Show entries up to this day.
- **_Employee:_** Pick one or more people.
- **_Project:_** Pick one or more projects.
- **_Task:_** Pick one or more tasks.
- **_Creator:_** Pick who created the entries.

<ImagePopup src="/images1/timesheets/ts_filters.png" alt="Filter panel with Date From, Date Until, Employee and Project" />

### Example

To see Ava Lewis's hours on **Website Revamp** in October 2026:

1. Set **Date From** to 01 Oct 2026 and **Date Until** to 31 Oct 2026.
2. Set **Employee** to Ava Lewis.
3. Set **Project** to Website Revamp.
4. Read the **Time Spent** total.

For more on these tools, see [Search, filter and group records](../../getting-started/search-filter-group.md).

## Edit or delete a row

Use **Edit** or **Delete** at the end of a row. See [Log time](log-time.md).

## Delete several entries

1. Tick the boxes at the start of the rows.
2. Click the bulk **Delete** action.
3. Confirm. A message confirms **Timesheets deleted**.

::: warning
Deleting entries lowers the hours on their tasks. Task **Progress** and **Remaining Time** change straight away.
:::

## See also

- [Log time](log-time.md)
- [Timesheet settings](timesheet-settings.md)
- [Timesheets overview](index.md)
