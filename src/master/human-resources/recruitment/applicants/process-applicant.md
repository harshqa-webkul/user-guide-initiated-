# Process an applicant

The applicant page is where you do the hiring work. You move the person through stages, rate them, assign people to the application, record salary and notes, and finally hire them. Everything happens on one page, in the **View Applicant** and **Edit Applicant** modes.

> **In simple words:** Open the applicant, fill in the details, click the stages as the person progresses, and create the employee when they sign.

Open `Recruitments → Applications → Applicants` and click an applicant. **View** shows the record. Click **Edit** to change it, then **Save changes**.

::: info Before you start
- The applicant exists. See [Add an applicant](add-applicant.md).
- The [job position](../job-positions/job-positions.md), [stages](../setup/stages.md), [tags and degrees](../setup/tags-degrees.md) and [sources and mediums](../setup/sources-and-mediums.md) you want to choose are created.
:::

## Worked example

Rahul Verma applies for **Warehouse Supervisor**. You follow him from **New** to hired.

### Details you fill in

1. Open Rahul's applicant page in edit mode. The **New** stage is blue on the stage bar.

<!-- TODO-SCREENSHOT: /images1/recruitment/applicant_edit_overview.png | Edit Applicant page for Rahul Verma showing the stage bar, General Information card, right column cards and Save changes button -->

2. In **General Information**, choose **Warehouse Supervisor** in **Job Positions**.
3. Set **Recruiter** to **ERP Admin**. Add an **Interviewer**. Add one or more **Tags**.

<!-- TODO-SCREENSHOT: /images1/recruitment/applicant_general_information.png | General Information card with Rahul Verma, Warehouse Supervisor, recruiter ERP Admin, interviewer and tags filled in -->

- **_Candidate name:_** Required. Choose the candidate. **Emails**, **Phone** and **Linkedin Profile** load from the candidate.
- **_Job Positions:_** The job applied for. The first time you choose one, Aureus puts the applicant in the first default stage. Later changes copy the recruiter, interviewers and department from the position.
- **_Hired Date:_** Read only. It appears once the applicant is hired.
- **_Recruiter:_** The person who owns this application.
- **_Interviewer:_** One or more users who interview the person. You can create a user from the field.
- **_Tags:_** Labels such as skills or areas. If you leave it empty, Aureus shows the candidate's tags.
- **_Notes:_** A text box for your own remarks.

4. Use the right column. Choose a **Degree** and an **Availability Date** under **Education & Availability**. Set **Department** if needed.

<!-- TODO-SCREENSHOT: /images1/recruitment/applicant_education_availability.png | Education and Availability card with a degree chosen and an availability date set -->

5. Under **Expected & Proposed Salary**, type `40000` in **Expected Salary**. Fill **Proposed Salary** when you make an offer. Each salary has an **Other Benefit** field for extras. All values are numbers from 0.

<ImagePopup src="/images1/recruitment/applicant_salary.png" alt="Expected and Proposed Salary card with Expected Salary 40000" />

6. Under **Source & Medium**, choose where the application came from, for example **LinkedIn** as **Source**. Choose how it reached you in **Medium**.

<!-- TODO-SCREENSHOT: /images1/recruitment/applicant_source_medium.png | Source and Medium card with a source and a medium selected -->

7. Click **Save changes**.

::: tip
**Degree** and **Availability Date** are saved on the candidate. They show on every application of that person.
:::

### Rate the applicant

8. Click the stars at the top of **General Information**. The tooltips are **Good**, **Very Good** and **Very Excellent**. Click the active star again to clear the rating.

<!-- TODO-SCREENSHOT: /images1/recruitment/applicant_stars.png | Three star rating at the top of General Information with two stars selected -->

### Move through the stages

9. Click the next stage on the bar, for example **First Interview**. The change saves at once. You can click any stage, forward or back.

<!-- TODO-SCREENSHOT: /images1/recruitment/applicant_stage_stepper.png | Stage bar with First Interview highlighted in blue after Rahul Verma moved from New -->

10. Click the icon button **State**. Choose **In Progress**, **Ready for next stage** or **Blocked**, then click **Submit**.

<!-- TODO-SCREENSHOT: /images1/recruitment/applicant_state_modal.png | State window with In Progress, Ready for next stage and Blocked options and Submit button -->

When you change the stage, the state goes back to **In Progress**.

::: warning
A **Blocked** applicant disappears from the main applicant list. Open the **Blocked** preset to find them. See [Applicant list](applicant-list.md).
:::

### Hire the applicant

11. Click **Contract Signed** on the stage bar. This stage is a **Hired Stage**. Aureus sets the **Application status** to **Hired** and fills **Hired Date**.

<!-- TODO-SCREENSHOT: /images1/recruitment/applicant_hired_stage.png | Applicant page with Contract Signed highlighted and the Application status shown as Hired with a Hired Date -->

12. Click **Create Employee**. Aureus creates the employee from the applicant and opens the employee page. Check it and save. See [Add an employee](../../employees/employees/add-employee.md).

<!-- TODO-SCREENSHOT: /images1/recruitment/applicant_create_employee_button.png | Hired applicant page header with the Create Employee button -->

13. Back on the applicant, click the **Go to Employee** icon to open the employee later.

<!-- TODO-SCREENSHOT: /images1/recruitment/applicant_go_to_employee.png | Applicant header showing the Go to Employee icon button with its tooltip -->

If you click another stage that is not a hired stage, the applicant is no longer hired.

## Actions and statuses

- **Create Employee:** creates an employee from the applicant. It disappears once the applicant is hired or linked to an employee.
- **Go to Employee:** opens the linked employee. It replaces **Create Employee**.
- **Refuse:** turns the applicant down. See [Refuse and reopen](refuse-and-reopen.md).
- **Restore:** brings a refused applicant back.
- **Delete:** removes the applicant after you confirm.
- **Application status:** **Hired**, **Refused** or **Archived**. An ongoing applicant shows no status.

## Chatter and activities

The chatter button in the header opens **Chatter** with **Send Message**, **Log Note** and **Schedule Activity**. Use it for talks with the team and follow-up tasks. The clock icon on a list row opens the same activity action. See [Chatter](../../../getting-started/chatter/introduction.md), [Log a note](../../../getting-started/chatter/actions/log-note.md) and [Schedule an activity](../../../getting-started/chatter/actions/activity.md).

## Skills

The **Skills** table at the bottom of the **View** page lists the skills of the person. They come from the candidate. See [Candidates](candidates.md#skills).

## See also

- [Refuse and reopen](refuse-and-reopen.md)
- [Applicant list](applicant-list.md)
- [Add an employee](../../employees/employees/add-employee.md)
- [Stages](../setup/stages.md)
