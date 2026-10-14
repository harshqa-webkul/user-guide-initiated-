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

<ImagePopup src="/images1/recruitment/applicant_edit_overview.png" alt="Edit Applicant page for Rahul Verma showing the stage bar, General Information card and the right column cards" />

2. In **General Information**, choose **Warehouse Supervisor** in **Job Positions**.
3. Set **Recruiter** to **ERP Admin**. Add one or more **Tags**. You can also pick an **Interviewer**.

<ImagePopup src="/images1/recruitment/applicant_general_information.png" alt="General Information card with Rahul Verma, Warehouse Supervisor, recruiter ERP Admin, interviewer HR Admin and a tag filled in" />

- **_Candidate name:_** Required. Choose the candidate. **Emails**, **Phone** and **Linkedin Profile** load from the candidate.
- **_Job Positions:_** The job applied for. The first time you choose one, Aureus puts the applicant in the first default stage. Later changes copy the recruiter, interviewers and department from the position. This replaces values you typed before.
- **_Hired Date:_** Read only. It appears once the applicant is hired.
- **_Recruiter:_** The person who owns this application.
- **_Interviewer:_** One or more users who interview the person. The **+** button beside the field creates a user.
- **_Tags:_** Labels such as skills or areas. If you leave it empty, Aureus shows the candidate's tags.
- **_Notes:_** A text box for your own remarks.

4. Use the right column. Choose a **Degree** and an **Availability Date** under **Education & Availability**. Set **Department**, for example **Operations**.

<ImagePopup src="/images1/recruitment/applicant_education_availability.png" alt="Education and Availability card with the degree Bachelor and an availability date" />

5. Under **Expected & Proposed Salary**, type `40000` in **Expected Salary**. Fill **Proposed Salary** when you make an offer. Each salary has an **Other Benefit** field for extras. All values are numbers from 0.

<ImagePopup src="/images1/recruitment/applicant_salary.png" alt="Expected and Proposed Salary card with Expected Salary 40000" />

6. Under **Source & Medium**, choose where the application came from, for example **LinkedIn** as **Source**. Choose how it reached you in **Medium**.

<ImagePopup src="/images1/recruitment/applicant_source_medium.png" alt="Source and Medium card with LinkedIn chosen as source and as medium" />

7. Click **Save changes**.

::: tip
**Degree** and **Availability Date** are saved on the candidate. They show on every application of that person.
:::

### Rate the applicant

1. Click a star at the top of **General Information**. Hover over a star to see its rating, for example **Evaluation: Very Good**. The rating saves at once. Click the active star again to clear it.

<ImagePopup src="/images1/recruitment/applicant_stars.png" alt="Three star rating at the top of General Information with two stars selected" />

### Move through the stages

1. Click the next stage on the bar, for example **First Interview**. The change saves at once, without **Save changes**. You can click any stage, forward or back.

<ImagePopup src="/images1/recruitment/applicant_stage_stepper.png" alt="Stage bar with First Interview highlighted in blue after Rahul Verma moved from New" />

2. Click the round **State** icon button in the header. Its tooltip shows the current state. Choose **In Progress**, **Ready for next stage** or **Blocked**, then click **Submit**. A notification says **Applicant state updated**.

<ImagePopup src="/images1/recruitment/applicant_state_modal.png" alt="State window with In Progress, Ready for next stage and Blocked options and the Submit button" />

When you click another stage, the state goes back to **In Progress**.

::: warning
A **Blocked** applicant disappears from the applicant list. Set the state back to **In Progress** to bring the applicant back. See [Applicant list](applicant-list.md).
:::

### Hire the applicant

1. Click **Contract Signed** on the stage bar. This stage is a **Hired Stage**. Aureus sets the **Application status** to **Hired**. On the **Edit** page a read only **Hired Date** appears beside it.

<ImagePopup src="/images1/recruitment/applicant_hired_stage.png" alt="Edit Applicant page with Contract Signed highlighted, the Hired status pill and the Hired Date" />

2. While the applicant is not hired and has no employee, the header shows **Create Employee**. Click it to create the employee from the applicant. Once the applicant is hired, **Create Employee** is hidden and the **Go to Employee** icon takes its place.

<ImagePopup src="/images1/recruitment/applicant_create_employee_button.png" alt="Header of an applicant who is not hired yet with the Create Employee button" />

3. Click the **Go to Employee** icon. The employee profile opens. It already holds the work email, the work mobile and the job position of the applicant. Add the rest on the employee. See [Add an employee](../../employees/employees/add-employee.md).

<ImagePopup src="/images1/recruitment/applicant_go_to_employee.png" alt="Header of a hired applicant with the Go to Employee icon button and its tooltip" />

If you click another stage that is not a hired stage, the applicant is no longer hired.

## Actions and statuses

- **Create Employee:** creates an employee from the applicant. It is hidden once the applicant is hired or linked to an employee.
- **Go to Employee:** opens the linked employee. It replaces **Create Employee**.
- **Refuse:** turns the applicant down. See [Refuse and reopen](refuse-and-reopen.md).
- **Restore:** brings a refused applicant back.
- **Delete:** removes the applicant. Use **Refuse** to keep the record and the reason.

| Application status | When it shows |
| --- | --- |
| **Hired** | The applicant reached a hired stage. |
| **Refused** | You refused the applicant with a reason. |
| **Archived** | The applicant is inactive. A tab in the list shows these. |

An ongoing applicant shows no status.

## Chatter and activities

The chatter button in the header opens **Chatter** with **Send Message**, **Log Note** and **Schedule Activity**. Use it for talks with the team and follow-up tasks. The clock icon on a list row opens the same activity action. See [Chatter](../../../getting-started/chatter/introduction.md), [Log a note](../../../getting-started/chatter/actions/log-note.md) and [Schedule an activity](../../../getting-started/chatter/actions/activity.md).

## Skills

The **Skills** table at the bottom of the **View** page lists the skills of the person. They come from the candidate. See [Candidates](candidates.md#skills).

## See also

- [Refuse and reopen](refuse-and-reopen.md)
- [Applicant list](applicant-list.md)
- [Add an employee](../../employees/employees/add-employee.md)
- [Stages](../setup/stages.md)
