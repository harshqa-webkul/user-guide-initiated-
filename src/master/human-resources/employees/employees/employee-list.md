# Employee list

The employee list shows every employee as a card. You use it to find a person fast, to see your own team, and to act on several records at once. Tabs, search, filters and grouping help you narrow a long list.

> **In simple words:** The list is a wall of employee cards that you can search, filter and group.

Open `Employees → Employees`.

## Overview

The page opens on the **Default** tab. Click **New Employee** to add a person. See [Add an employee](add-employee.md).

<ImagePopup src="/images1/employees/emp_list_cards.png" alt="Employees list showing cards with name, job title, email, phone and tags. Priya Sharma's card has no photo, so a gap shows where the photo would be" />

Each card shows, from top to bottom:

- A photo, when the employee has one, and a checkbox for bulk selection. Without a photo, the card shows a gap in that place.
- The **name** in bold.
- Job title, work email and work phone. They appear only when filled.
- Coloured tag badges.
- Action buttons: a clock icon to schedule an activity, **View**, **Edit** and **Delete**.

## Tabs

- **Default:** all current employees. It opens first.
- **My Team:** employees whose **Manager** is the employee linked to your user.
- **My Department:** employees in your own department.
- **Archived:** employees you deleted. They stay stored and can be restored.
- **Newly Hired:** employees created in the last month.

The counts depend on who you are. Say your user is linked to the employee Sarah Mitchell. **My Team** then shows the people whose **Manager** is you, which is 9 employees. Someone managed by another employee, such as Robert Diaz under Rachel Kim, is not listed. **My Department** shows people in Sarah's department, which is only Sarah (Management).

In the sample data the counts are **Default** 11, **My Team** 9, **My Department** 1, **Archived** 1 and **Newly Hired** 1. **Newly Hired** shows Priya Sharma. **Archived** shows Test Leaver, whose card has a clock icon, **View**, **Edit** and **Restore**.

::: info
If your user has no linked employee, **My Team** and **My Department** are empty. Set **Related User** on the employee. See [Add an employee](add-employee.md).
:::

<ImagePopup src="/images1/employees/emp_list_tabs.png" alt="Employees tabs Default, My Team, My Department, Archived and Newly Hired with their counts" />

## Search

Type in the search box. Results update as you type. Search matches **name**, **job title**, **work email** and **work phone**. An **Active filters** bar appears under the search box with a **Search: ...** chip for your text.

- `Engineer` finds every employee whose job title contains Engineer.
- `555-0104` finds the employee with that work phone.
- A department name finds nothing. Use a filter or **Group by** for departments.

<ImagePopup src="/images1/employees/emp_list_search.png" alt="Search box with the word Engineer, the Active filters bar with a Search: Engineer chip and the matching cards" />

## Filters

Click the funnel button. The **Filters** panel opens. The panel has three buttons: **Add rule**, **Apply filters** and a red **Reset** at the top right. Click **Apply filters** to use your choices and **Reset** to clear them. A number on the button shows how many filters are on.

Three simple filters are drop-down lists, set to **All** at first.

- **Skills:** employees who have the chosen skill.
- **Resumes:** employees with the chosen resume line.
- **Timezone:** employees in the chosen time zone.

### Rules

Click **Add rule** to build your own condition. A rule has a field, an operator and a value. The **Add rule** menu lists many fields, such as **Job Title**, **Department**, **Manager**, **Company**, **Gender**, **Marital Status**, **Departure Date** and **Created At**. It also has an **OR condition** item.

Add several rules to combine them: an employee must match all of them. Click **OR condition** to add a second group. An employee matching either group is shown.

Three examples:

1. **Everyone in one department.** Add rule **Department**, choose the department, click **Apply filters**.
2. **Staff with a skill.** Open **Skills**, pick **Communication**, click **Apply filters**.
3. **Married staff in Pune or Mumbai.** Add rule **Marital Status** is **Married**. Then add an **OR condition** group for the cities.

<ImagePopup src="/images1/employees/emp_list_filters.png" alt="Filters panel with Skills, Resumes and Timezone set to All and the Add rule menu open, shown zoomed out to 75%" />

## Group by

Open **Group by** and pick a field. Cards gather under collapsible headings labelled `Department: Operations`, for example. The groups start expanded. Options are **Name**, **Company**, **Manager**, **Coach**, **Department**, **Employment Type**, **Tags**, **Departure Reason**, **Private State**, **Private Country**, **Country**, **State**, **Created At** and **Updated At**. A select next to **Group by** sets the order to **Ascending** or **Descending**.

**Sort by** orders cards by **Name**, **Job Title**, **Work Email** or **Work Phone**.

<ImagePopup src="/images1/employees/emp_list_group_by.png" alt="Group by set to Department with the Ascending or Descending select beside it and employees gathered under Department headings, all except Operations collapsed" />

## Per page

At the bottom, choose 18 (default), 36, 72 or All cards per page. A line such as "Showing 1 to 10 of 10 results" tells you the total.

## Bulk actions

1. Tick the checkbox on each card, or use the select all box.
2. Open the **Bulk actions** menu.
3. Choose **Delete selected** or **Force delete selected**.

**Delete selected** moves the employees to **Archived**. **Force delete selected** removes them for good.

::: warning
Force delete cannot be undone. Use **Delete** when you only want an employee out of the active list.
:::

## Archive and restore

Click **Delete** on a card to archive the employee. Open the **Archived** tab to see archived people. See [Leaving the company](leaving-the-company.md).

## See also

- [Add an employee](add-employee.md)
- [Employee profile](employee-profile.md)
- [Skills report](../reporting/skills-report.md)
- [Search, filter and group](../../../getting-started/search-filter-group.md)
