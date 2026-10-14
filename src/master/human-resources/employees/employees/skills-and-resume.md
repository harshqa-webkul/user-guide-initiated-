# Skills and resume

Skills say what a person can do. Resume lines say where they have worked and studied. Both are kept on the employee record, so you can search for the right person later and see their background on the profile.

> **In simple words:** Skills are abilities with a level. Resume lines are jobs and studies with dates.

Open `Employees → Employees`, click **View** on an employee, then **Manage Skills** or **Manage Resumes**.

::: info Prerequisite
Skills come from [Skill types](../setup/skill-types.md). A skill type holds skills and levels. Set them up before you add a skill to an employee.
:::

## Manage skills

The page title is "Manage {Name} Skills", for example **Manage Priya Sharma Skills**. The table is not grouped at first. **Group by** offers **Skill Type** and **Skill**. The **Add Skill** button is at the top right.

Columns are **Skill Type**, **Skill**, **Skill Level**, **Level Percent** and **Created By**. Each row has **View**, **Edit** and **Delete** on the right. Select rows to use **Delete selected**.

<ImagePopup src="/images1/employees/emp_skills_table.png" alt="Manage skills table grouped by Skill Type, with the group Skill Type: Soft Skills, the columns, and a yellow 50.00% bar for Communication" />

### Add a skill

1. Click **Add Skill**. The **Create Employee Skill** window opens.
2. Choose a **Skill Type** from the radio list. **Languages** is selected first.
3. Choose a **Skill**. The list shows only skills of that type.
4. Choose a **Skill Level**. The list shows only levels of that type.
5. Click **Create**, or **Create & create another** for more. A **Skill created** notification says **The skill has been created successfully.**

**Skill** and **Skill Level** are dropdowns that change with the **Skill Type**. All three fields are required.

Example with **Languages**: pick **English** and level **B2**. Levels run **A1**, **A2**, **B1**, **B2**, **C1**, **C2**.

Example for Priya Sharma with **Soft Skills**: pick **Communication** and level **Intermediate**. Soft Skills levels run **Beginner** (15%), **Elementary** (25%), **Intermediate** (50%), **Advanced** (80%) and **Expert** (100%).

<ImagePopup src="/images1/employees/emp_skills_add.png" alt="Create Employee Skill window with Soft Skills, Communication and Intermediate chosen" />

### Level and proficiency bar

Every level has a percent, set in the skill type. **Intermediate** is 50.00%. The bar is yellow and reads 50.00%. The profile shows it next to the level badge. A higher level fills more of the bar.

## Manage resumes

The page title is "Manage {Name} Resumes". A search box finds lines by text.

Columns are **Title**, **Start Date**, **End Date**, **Display Type**, **Description**, **Attachments** and **Created By**. There is no **Type** column. Dates in the table look like **Jan 1, 2020**.

<ImagePopup src="/images1/employees/emp_resumes_table.png" alt="Manage resumes table with the Stock Controller and B.Com lines, showing title, dates and display type" />

### Add a resume line

1. Click **Add Resume**. The **Create Employee Resume** window opens.
2. Choose a **Type** from the searchable list: **Education** or **Experience**. A plus button next to it adds a type.
3. Type the **Title**. This is required.
4. Pick **Start Date** in the date picker. This is required. Pick **End Date** if the line has ended. You cannot type a date.
5. Leave **Display Type** as **Classic**. It is the only option.
6. Write a short **Description**.
7. Click **Add Attachment** to upload a certificate or letter. Each attachment needs a file.
8. Click **Create**. A **Resume created** notification says **The resume has been created successfully.**

Example: Type **Experience**, Title **Stock Controller at Metro Traders**, 2020 to 2024. Then add Type **Education**, Title **B.Com, Pune University**, 2016 to 2019.

<ImagePopup src="/images1/employees/emp_resumes_add.png" alt="Create Employee Resume window filled with Stock Controller at Metro Traders" />

## How the profile shows them

On the profile, open the **Resume** tab.

- The left card lists the resume lines.
- Each line shows its dates as **01/2020 - 12/2024**, title and description. A line with no end date shows **Present** as the end.
- The right card lists skills with a level badge and bar.

<ImagePopup src="/images1/employees/emp_resume_tab_result.png" alt="Resume tab of Priya Sharma with Experience and Education lines and the Communication skill" />

## Skills across the company

To see every employee's skills in one table, open `Employees → Reportings → Skills`. See [Skills report](../reporting/skills-report.md). The employee list also has a **Skills** filter.

## See also

- [Skill types](../setup/skill-types.md)
- [Employee profile](employee-profile.md)
- [Employee list](employee-list.md)
- [Skills report](../reporting/skills-report.md)
