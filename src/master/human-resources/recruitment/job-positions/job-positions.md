# Job positions

A job position is a role you hire for, such as Warehouse Supervisor. In Recruitment, each position appears as a card that shows how many applicants wait in the first stage and how many people you want to hire. The same positions are shared with the Employees app, so one record serves both.

> **In simple words:** A job position is an open role. Its card is your shortcut to the applicants for that role.

Open `Recruitments → Applications → Job Positions` to see the cards. Open `Recruitments → Configuration → Job Positions` to create or edit them. In the left menu, this page sits under the group **Job Positions**.

::: info Prerequisite
Create the department first, for example **Operations**. See [Departments](../../employees/departments/departments.md). The Employees guide also covers positions: [Job positions in Employees](../../employees/setup/job-positions.md).
:::

## Overview: the cards page

The page shows two cards per row. Each card has the position name in bold. A manager line and a company line appear when the position has them. For example, **Warehouse Supervisor** shows **Sarah Mitchell** and **My Company**.

- The blue button **N New Applications** counts applicants in the **New** stage. Click it to open the applicants of that job in that stage.
- The three dots menu holds **N To Recruitment** and **N Applications**. **To Recruitment** is the recruitment target and opens the edit page. **Applications** is the total of applicants and opens the applicant list for that job.

<ImagePopup src="/images1/recruitment/jp_cards.png" alt="Job Positions cards page with the Default, My Department and Archived tabs, a search box, the Sort by menu and cards with New Applications buttons" />

### Preset tabs, search and sort

- **Default:** all positions.
- **My Department:** positions in your own department.
- **Archived:** archived positions.

A three dots menu sits next to the tabs.

Type in the search box to find a card. Use **Sort by** to order cards by **Name** or **Manager**. Choose how many cards show per page at the bottom. Each page shows 10 cards.

## Card actions

Follow these steps for the example position **Warehouse Supervisor**.

1. Find the card. Search for it if it is not on the first page.
2. Click **New Applications** to see applicants waiting in **New**.
3. Open the three dots menu.
4. Click **Applications** to see all its applicants, or **To Recruitment** to edit the target.

<ImagePopup src="/images1/recruitment/jp_card_menu.png" alt="Warehouse Supervisor card with Sarah Mitchell and My Company, the 1 New Applications button and the open menu showing 2 To Recruitment and 1 Applications" />

## Create a job position

The cards page has no create button. Use the setup page.

1. Open `Recruitments → Configuration → Job Positions`.
2. Click **Job Position** in the page header. A full page titled **Create Job Position** opens.
3. Fill in the form, using the glossary below.
4. Click **Create**. You can also click **Create & create another** or **Cancel**.

<ImagePopup src="/images1/recruitment/jp_create_form.png" alt="Employment Information card filled for Warehouse Supervisor in Operations with Sarah Mitchell as manager, ERP Admin as recruiter and HR Admin as interviewer" />

This example creates **Warehouse Supervisor** in **Operations**. A sample record with this name already exists, but it has fewer details filled in than the form shown here.

### Employment Information

- **_Job Position Title:_** (required) the official name, for example **Warehouse Supervisor**. Click the question mark icon for a hint.
- **_Department:_** pick **Operations**. You can create a department from the field. This fills **Manager** and **Company** when they are empty.
- **_Manager:_** the department manager. Picking **Operations** fills it with **Sarah Mitchell**.
- **_Company:_** starts as your current company. Changing it clears a department or manager from another company.
- **_Recruiter:_** the user in charge of hiring, for example **ERP Admin**. You can create a user from the field.
- **_Interviewers:_** one or more users who interview applicants, for example **HR Admin**.
- **_Job Location:_** an address, for example **My Company**. You can create one from the field.
- **_Industry:_** the industry of the role. The list starts empty. Click the plus button to create one.

A second card holds **_Job Description_** and **_Job Requirements:_** two text editors. Describe the role and what a person needs to do it.

### Side column

The first card holds **_Date From_** and **_Date To:_** the period the position is open.

The second card holds these fields.

- **_Recruitment Target:_** how many people you want to hire. It starts at **0**. This number is the **To Recruitment** value on the card.
- **_No of employee_**, **_Expected employees_** and **_No of hired employee:_** greyed out. Aureus calculates them.
- **_Expected Skills:_** pick the skills the role needs, for example **Adaptability**.
- **_Employment Type:_** for example **Full-Time**. See [Employment types](../../employees/setup/employment-types.md).
- **_Status:_** a toggle. It starts **off** when you create a position. Turn it **on** for an open role.

::: warning
Turn **Status** on before you save. A new position starts with **Status** off.
:::

<ImagePopup src="/images1/recruitment/jp_create_side_column.png" alt="Side column of the job position form with Date From Oct 19, 2026, Date To Oct 30, 2026, Recruitment Target 2, Expected Skills Adaptability, Employment Type Full-Time and Status on" />

## View a position

Click **View** on a position in the list. The page is titled **View Job Position**. It shows the same details. The **Workforce Planning** card holds **Expected Employees**, **Current Employees**, **Recruitment Target**, **Employment Type**, **Status** and **Expected Skills**. **Date From** and **Date To** sit in a card above it. The descriptions sit in a card titled **Job Description**. Click **Edit** to change them.

The sample **Warehouse Supervisor** record is in **Operations** and **My Company**. It is **Full-Time** and its **Status** shows a green tick. Its description reads "Leads the warehouse team and keeps stock records accurate." Its **Manager**, **Recruiter**, **Interviewers**, **Job Location**, **Industry** and dates are empty. The card on the cards page shows **Sarah Mitchell**, because the manager comes from the department.

<ImagePopup src="/images1/recruitment/jp_view_page.png" alt="View Job Position page for Warehouse Supervisor with Employment Information, Job Description, Date From, Date To and Workforce Planning cards" />

## Behind the scenes

The list at `Recruitments → Configuration → Job Positions` has the columns **Job Position**, **Department**, **Company** and **Status**. It can be grouped by company, department or employment type. Edits you make here show in the Employees app too.

## See also

- [Job positions in Employees](../../employees/setup/job-positions.md)
- [Add an applicant](../applicants/add-applicant.md)
- [Stages](../setup/stages.md)
- [Recruitment dashboard](../dashboard/recruitment-dashboard.md)
