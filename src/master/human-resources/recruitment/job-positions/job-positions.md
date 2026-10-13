# Job positions

A job position is a role you hire for, such as Warehouse Supervisor. In Recruitment, each position appears as a card that shows how many applicants wait in the first stage and how many people you want to hire. The same positions are shared with the Employees app, so one record serves both.

> **In simple words:** A job position is an open role. Its card is your shortcut to the applicants for that role.

Open `Recruitments → Applications → Job Positions` to see the cards. Open `Recruitments → Configuration → Job Positions` to create or edit them.

::: info Prerequisite
Create the department first, for example **Operations**. See [Departments](../../employees/departments/departments.md). The Employees guide also covers positions: [Job positions in Employees](../../employees/setup/job-positions.md).
:::

## Overview: the cards page

The page shows two cards per row. Each card has the position name in bold. A company line and a manager line appear when the position has them.

- The blue button **N New Applications** counts applicants in the **New** stage. Click it to open the applicants of that job in that stage.
- The three dots menu holds **N To Recruitment** and **N Applications**. **To Recruitment** is the recruitment target and opens the edit page. **Applications** is the total of applicants and opens the applicant list for that job.

<ImagePopup src="/images1/recruitment/jp_cards.png" alt="Job Positions cards page with the Default, My Department and Archived tabs, search box and Sort by menu" />

### Preset tabs, search and sort

- **Default:** all positions.
- **My Department:** positions in your own department.
- **Archived:** archived positions.

Type in the search box to find a card. Use **Sort by** to order cards by **Name** or **Manager**. Choose how many cards show per page at the bottom.

## Card actions

Follow these steps for the example position **Warehouse Supervisor**.

1. Find the card. Search for it if it is not on the first page.
2. Click **New Applications** to see applicants waiting in **New**.
3. Open the three dots menu.
4. Click **Applications** to see all its applicants, or **To Recruitment** to edit the target.

<ImagePopup src="/images1/recruitment/jp_card_menu.png" alt="Warehouse Supervisor card with the three dots menu open showing To Recruitment and Applications" />

## Create a job position

The cards page has no create button. Use the setup page.

1. Open `Recruitments → Configuration → Job Positions`.
2. Click **Job Position** in the page header. A full page opens.
3. Fill in the form, using the glossary below.
4. Click **Create**.

<ImagePopup src="/images1/recruitment/jp_create_form.png" alt="Create Job Position form filled for Warehouse Supervisor in Operations" />

This example creates **Warehouse Supervisor** in **Operations**. It comes with the sample data, so open it to compare with your own.

### Employment Information

- **_Job Position Title:_** (required) the official name, for example **Warehouse Supervisor**.
- **_Department:_** pick **Operations**. You can create a department from the field. This fills **Manager** and **Company** when they are empty.
- **_Manager:_** the department manager. It follows the department.
- **_Company:_** starts as your current company. Changing it clears a department or manager from another company.
- **_Recruiter:_** the user in charge of hiring. You can create a user from the field.
- **_Interviewers:_** one or more users who interview applicants.
- **_Job Location:_** an address. You can create one from the field.
- **_Industry:_** the industry of the role. You can create one from the field.
- **_Job Description_** and **_Job Requirements:_** two text editors. Describe the role and what a person needs to do it.

### Side column

- **_Date From_** and **_Date To:_** the period the position is open.
- **_Recruitment Target:_** how many people you want to hire. It starts at **0**. This number is the **To Recruitment** value on the card.
- **_No of employee_**, **_Expected employees_** and **_No of hired employee:_** greyed out. Aureus calculates them.
- **_Expected Skills:_** pick the skills the role needs.
- **_Employment Type:_** for example **Full-Time**. See [Employment types](../../employees/setup/employment-types.md).
- **_Status:_** a toggle. It starts **off** when you create a position. Turn it **on** for an open role.

::: warning
Turn **Status** on before you save. A new position starts with **Status** off.
:::

<ImagePopup src="/images1/recruitment/jp_create_side_column.png" alt="Side column of the job position form with Recruitment Target 2, Expected Skills, Employment Type Full-Time and Status on" />

## View a position

Click **View** on a position in the list. The page shows the same details, plus a **Workforce Planning** card with **Expected Employees**, **Current Employees** and **Recruitment Target**. Click **Edit** to change them.

<ImagePopup src="/images1/recruitment/jp_view_page.png" alt="View page of the Warehouse Supervisor job position with the Workforce Planning card" />

## Behind the scenes

The list at `Recruitments → Configuration → Job Positions` has the columns **Job Position**, **Department**, **Company** and **Status**. It can be grouped by company, department or employment type. Edits you make here show in the Employees app too.

## See also

- [Job positions in Employees](../../employees/setup/job-positions.md)
- [Add an applicant](../applicants/add-applicant.md)
- [Stages](../setup/stages.md)
- [Recruitment dashboard](../dashboard/recruitment-dashboard.md)
