# Departments

A department is a part of your company, such as Sales or Operations. You give each employee a department so you can see who works where. A department can sit inside another one, for example Quality Check Department inside Research & Development. It can also have a manager.

> **In simple words:** A department is a team box that holds employees, with an optional boss and an optional parent box.

Open `Employees → Departments`.

::: info Prerequisite
The **Manager** is an existing employee, so create that person first. See [Add an employee](../employees/add-employee.md). The company must also exist. See [Companies](../../../general-settings/companies/companies.md).
:::

## Overview

The page shows departments as cards, not as a table. Each card shows the manager's picture and name (if one is set), the department name and the company.

<ImagePopup src="/images1/employees/dep_list_cards.png" alt="Departments page showing department cards with a checkbox on each card and the Default and Archived Departments tabs" />

- **Default:** departments in use.
- **Archived Departments:** departments you deleted. You can restore them from here. The tab is empty (**No departments**) until you archive one.
- **Search:** type a name to narrow the cards.
- **Sort by:** order the cards by **Name** or **Manager**.
- **Group by:** group cards by **Name**, **Company**, **Manager**, **Created At** or **Updated At**.
- **Filter:** build rules on **Name**, **Manager**, **Company**, **Created At** or **Updated At**.

Each card has a checkbox and **View**, **Edit** and **Delete** links.

## Create a department

This example creates the **Operations** department, managed by Sarah Mitchell. Skip this step if **Operations** already exists.

1. Open `Employees → Departments`.
2. Click **New Department**. A full page opens.

<ImagePopup src="/images1/employees/dep_new_button.png" alt="Departments page with the New Department button highlighted" />

3. Fill in the **General Information** section.

- **_Name:_** Required. Type `Operations`.
- **_Parent Department:_** Optional. Pick the department that contains this one. Leave it empty for a top level department.
- **_Manager:_** Optional. Pick **Sarah Mitchell**.
- **_Company:_** Fills with your company. Change it only if you run several companies.
- **_Color:_** Optional. Pick a colour from the circle picker, or type a hex code such as `#f97316` for orange. It is blank by default. A colour marks the department in the organization tree. The card does not show it, but the **View** tab shows the swatch.

<ImagePopup src="/images1/employees/dep_create_form.png" alt="Create Department form titled General Information, filled with Operations as name and Sarah Mitchell as manager, with Create, Create & create another and Cancel" />

4. Click **Create**. The other buttons are **Create & create another** and **Cancel**. A **Department created** notification says **The department has been created successfully.** Aureus opens the new department.

::: tip
Click **Create & create another** to add several departments in a row.
:::

::: warning
If you change **Company**, Aureus clears **Parent Department** and **Manager** when they belong to another company. Pick them again. The lists only show records of the chosen company.
:::

## The department page

Click **View** on a card. Three tabs sit at the top: **View**, **Edit** and **Manage Employees**.

The **View** tab shows a **General** section with **Name**, **Manager**, **Company** and **Color**. An empty manager shows a dash. The header has a **Delete** button and a chat-comments button.

<ImagePopup src="/images1/employees/dep_view_operations.png" alt="View tab of the Operations department with the General section (name, manager, company and an orange colour swatch), the Delete button and the chat-comments button in the header" />

### Department Organization

This tree is headed **Department Organization** with the sub-heading **Hierarchy**. It appears only when the department has a parent. It lists the departments from the top one down. Each line shows the name and a member count. The manager follows the name when one is set. The current department is bold, and red when its colour is red.

For example, Quality Check Department sits under Research & Development. Its page shows Research & Development (2 members) first, then Quality Check Department (0 members) indented below it. Quality Check Department has a red colour.

<ImagePopup src="/images1/employees/dep_view_tree.png" alt="Department Organization tree showing Research & Development with Quality Check Department below it" />

::: info
The member count is a quick hint. Open the **Manage Employees** tab for the exact list. A top level department such as Operations shows no tree.
:::

## Manage the employees of a department

Open the **Manage Employees** tab. It lists the people in this department as cards. Each card shows the name, job title, work email, work phone and badges.

1. Open the **Operations** department.
2. Click **Manage Employees**.
3. Click **New Employee** to add someone straight into this department.

<ImagePopup src="/images1/employees/dep_manage_employees.png" alt="Manage Employees tab of a department with the New Employee button and employee cards" />

Use **Group by**, **Sort by** and search here as you do on the main employee list. See [Employee list](../employees/employee-list.md).

## Edit, archive and restore

Click **Edit** on a card, or open the **Edit** tab. The form is the same as for creating. Click **Save changes** to keep your edits.

Click **Delete** to archive a department. It moves to **Archived Departments**. There, use **Restore** to bring it back.

## Chatter

The department page has a **Chatter** button. Use it to send messages and log notes about the department. See [Chatter](../../../getting-started/chatter.md).

## See also

- [Add an employee](../employees/add-employee.md)
- [Job positions](../setup/job-positions.md)
- [Activity plans](../setup/activity-plans.md)
