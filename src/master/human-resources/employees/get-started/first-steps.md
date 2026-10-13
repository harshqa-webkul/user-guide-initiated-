# First steps with Employees

This tutorial takes you through the whole Employees flow with one example. You create a department, a job position and an employee. Then you add private details, a skill and two resumé lines. At the end you find the employee on the list.

> **In simple words:** You will add a new warehouse supervisor, Priya Sharma, from nothing to a full profile.

Each step ends with a short note on what Aureus does for you. Links point to the pages that explain each screen in depth.

::: info Prerequisite
The manager and coach must already be employees. The Time Off approver must be a user. The sample data includes the employees **Sarah Mitchell** and **Rachel Kim** and the user **HR Admin**. The tags **Operations** and **Senior** and the work location **Building 1, Second Floor** are also included.
:::

## Step 1: Create the department Operations

A department groups employees and gives them a manager. Create it first so the job position and the employee can use it.

1. Open `Employees → Departments`.
2. Click **New Department**. A full page opens.
3. Fill in the form.

- **_Name:_** Required. Type `Operations`.
- **_Parent Department:_** Leave empty. Use it only for a sub-team.
- **_Manager:_** Choose **Sarah Mitchell**.
- **_Company:_** Fills with **My Company**.
- **_Color:_** Optional. Leave it empty. The card then shows no colour.

<ImagePopup src="/images1/employees/emp_fs_department_form.png" alt="Create Department page filled with Operations, manager Sarah Mitchell and company My Company" />

4. Click **Create**. A **Department created** notification says **The department has been created successfully.** Aureus opens the department. Open `Employees → Departments` to see its card.

<ImagePopup src="/images1/employees/emp_fs_department_card.png" alt="Departments card grid showing the new Operations card with the manager avatar and name Sarah Mitchell" />

**Behind the scenes:** The list of managers only shows employees of the company you chose. If you change the company, the manager clears. See [Departments](../departments/departments.md).

## Step 2: Create the job position Warehouse Supervisor

A job position is a role that exists in your company, such as an open or filled post. The employee form lets you pick it.

1. Open `Employees → Configurations → Job Positions`.
2. Click **Job Position**. A full page opens.
3. Fill in the form.

- **_Job Position Title:_** Required. Type `Warehouse Supervisor`.
- **_Department:_** Choose **Operations**.
- **_Company:_** Fills with **My Company**.
- **_Job Description:_** Type `Leads the warehouse team and keeps stock records accurate.`
- **_Recruitment Target:_** Type `2`.
- **_Employment Type:_** Choose **Full-Time**.
- **_Status:_** Turn it on.

<ImagePopup src="/images1/employees/emp_fs_jobposition_form.png" alt="Create Job Positions page with Warehouse Supervisor, department Operations, Recruitment Target 2, Full-Time and Status on" />

4. Click **Create**.

The form also shows read-only **No of employee** and **Expected employees** in the right-hand panel. You do not fill them in.

See [Job positions](../setup/job-positions.md) for every field.

## Step 3: Add the employee

1. Open `Employees → Employees`.
2. Click **New Employee**. The form opens with a top block and three tabs.

### Top block

- **_Name:_** Required. Type `Priya Sharma`.
- **_Job Title:_** Type `Warehouse Supervisor`.
- **_Work Email:_** Type `priya.sharma@mycompany.com`.
- **_Department:_** Choose **Operations**.
- **_Job Position:_** Choose **Warehouse Supervisor**.
- **_Work Mobile:_** Type `9876543210`.
- **_Work Phone:_** Type `0221234567`.
- **_Manager:_** Choose **Sarah Mitchell**.
- **_Coach:_** Choose **Rachel Kim**.
- **_Employee Tags:_** Choose **Operations** and **Senior**.

<ImagePopup src="/images1/employees/emp_fs_employee_top.png" alt="Create Employees form top block filled for Priya Sharma with job, department, manager, coach and tags" />

::: tip
Choosing a department does not fill the manager or job position. Pick each one yourself.
:::

### Work Information tab

This tab opens first.

- **_Work Location:_** Choose **Building 1, Second Floor**.
- **_Time Off:_** Under **Approver**, choose the user **HR Admin**. This user approves Priya's leave. The list shows users, not employees.
- **_Working Hours:_** Leave it empty.
- **_Time Zone:_** Keep **UTC**.
- **_Company:_** Keeps **My Company**.

<ImagePopup src="/images1/employees/emp_fs_work_tab.png" alt="Work Information tab with Building 1 Second Floor, Time Off approver HR Admin and My Company" />

### Private Information tab

Open the **Private Information** tab. Fill a few fields to see how it works.

- **_City:_** Type `Pune`.
- **_Country:_** Choose **India**.
- **_Private Phone:_** Type `9123456780`.
- **_Contact Name:_** Under **Emergency Contact**, type `Anil Sharma`.
- **_Contact Phone:_** Type `9988776655`.
- **_Marital Status:_** Keep **Single**.
- **_Certificate Level:_** Choose **Bachelor**.
- **_Field of Study:_** Type `Logistics`.

<ImagePopup src="/images1/employees/emp_fs_private_tab.png" alt="Private Information tab with city Pune, country India, emergency contact Anil Sharma and education Bachelor in Logistics" />

3. Click **Create**. A **Employee created** notification says **The employee has been created successfully.** Aureus opens the employee on the **View** page with the **Resumé** tab open. It is empty at first.

**Behind the scenes:** The Settings tab keeps **Active Employee** on, so Priya counts as a current employee. See [Add an employee](../employees/add-employee.md) for all three tabs.

## Step 4: Add a skill

Skills sit on a separate page of the employee.

1. On Priya's page, click **Manage Skills**.
2. Click **Add Skill**. A window opens.
3. Choose the values.

- **_Skill Type:_** Required. Choose **Soft Skills**.
- **_Skill:_** Required. Choose **Communication**.
- **_Skill Level:_** Required. Choose **Intermediate**.

<ImagePopup src="/images1/employees/emp_fs_skill_modal.png" alt="Create Employee Skill window with Soft Skills, Communication and Intermediate selected" />

4. Click **Create**. A **Skill created** notification says **The skill has been created successfully.**

**Behind the scenes:** The skill and level lists change when you change the skill type. The level carries a percentage, shown on the profile as a bar. See [Skills and resumé](../employees/skills-and-resume.md).

## Step 5: Add two resumé lines

1. Click **Manage Resumes**, then **Add Resume**.
2. Fill in the first line.

- **_Title:_** Required. Type `Stock Controller at Metro Traders`.
- **_Type:_** Choose **Experience**.
- **_Start Date:_** Required. Pick 1 January 2020 in the date picker. You cannot type the date.
- **_End Date:_** Pick 31 December 2024.
- **_Display Type:_** Required. Keep **Classic**.

<ImagePopup src="/images1/employees/emp_fs_resume_modal.png" alt="Create Employee Resume window for Stock Controller at Metro Traders with type Experience" />

3. Click **Create & create another**.
4. Add the second line: **Title** `B.Com, Pune University`, **Type** **Education**, 2016 to 2019.
5. Click **Create**. A **Resume created** notification says **The resume has been created successfully.**

The **Manage Resumes** table shows the columns **Title**, **Start Date**, **End Date**, **Display Type**, **Description**, **Attachments** and **Created By**. Dates look like **Jan 1, 2020**.

<ImagePopup src="/images1/employees/emp_fs_resume_list.png" alt="Manage Resumes table showing the Stock Controller and B.Com lines for Priya Sharma with title, dates and display type columns" />

Open the **View** page and its **Resumé** tab. The resumé lines and the skill now show side by side. The tab shows dates as **01/2020 - 12/2024**.

<ImagePopup src="/images1/employees/emp_fs_profile.png" alt="Priya Sharma profile Resumé tab with two resume lines and the Communication skill at 50 percent" />

## Step 6: Find Priya on the list

1. Open `Employees → Employees`.
2. Type `Priya` in the search box. The list narrows as you type.

<ImagePopup src="/images1/employees/emp_fs_list_search.png" alt="Employees list searched for Priya showing only the Priya Sharma card" />

3. Clear the search and click the **My Team** tab. It shows the people whose manager is you. If you are signed in as the user linked to **Sarah Mitchell**, Priya is on it.

<ImagePopup src="/images1/employees/emp_fs_my_team.png" alt="Employees list on the My Team tab including the Priya Sharma card" />

::: info
Search checks name, job title, work email and work phone. It does not check the department.
:::

See [Employee list](../employees/employee-list.md) for tabs, filters and groups.

## What you built

| Record | Value |
| --- | --- |
| Department | Operations |
| Job position | Warehouse Supervisor |
| Employee | Priya Sharma |
| Skill | Soft Skills, Communication, Intermediate |
| Resumé | Experience and Education lines |

## See also

- [Employees overview](../index.md)
- [Departments](../departments/departments.md)
- [Job positions](../setup/job-positions.md)
- [Tags](../setup/tags.md)
- [Work locations](../setup/work-locations.md)
- [Leaving the company](../employees/leaving-the-company.md)
