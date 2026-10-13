# First steps: hire your first employee

This tutorial follows one applicant from first contact to employee. You check the setup, add the applicant, move him through the stages and create his employee profile. Then you refuse a second applicant and bring her back. The example is a hire for the job position **Warehouse Supervisor**.

> **In simple words:** An applicant is a person who applies for a job. You move that person through stages until you hire or refuse them.

::: info Prerequisite
The stages and the job position **Warehouse Supervisor** exist in the sample data. You need a user to act as recruiter. This tutorial uses **ERP Admin**.
:::

## Step 1: Check the stages

Stages are the steps every applicant passes through.

1. Open `Recruitments → Configuration → Stages`.
2. Read the **Stage Name** column. The list shows the last stage first. The applicant screen shows the real order: **New**, **First Interview**, **Initial Qualification**, **Second Interview**, **Document Verification**, **Contract Proposal**, **Contract Signed**.
3. Find **Contract Signed**. Its **Hired Stage** column says **Yes**. An applicant who reaches this stage counts as hired.

<ImagePopup src="/images1/recruitment/gs_stages_list.png" alt="Stages list with Contract Signed marked Yes in the Hired Stage column" />

See [Stages](../setup/stages.md) to add or change them.

## Step 2: Check the job position

1. Open `Recruitments → Applications → Job Positions`.
2. Go to page 2 of the cards, or type **Warehouse Supervisor** in the search box.
3. Read the card. The blue button shows how many applicants are in the **New** stage. The three dots menu shows **To Recruitment** and **Applications**.

<ImagePopup src="/images1/recruitment/gs_jobpos_card.png" alt="Job position card for Warehouse Supervisor with the New Applications button and the three dots menu" />

See [Job positions](../job-positions/job-positions.md) for the card details.

## Step 3: Add the applicant

1. Open `Recruitments → Applications → Applicants`.
2. Click **New Applicant**. A **Create Applicant** window opens.
3. Open the **Candidate** field and use the create option to add a new person.
4. Type **Rahul Verma** as **Full Name**. Add the email **rahul.verma@example.com** and a phone number.
5. Save the candidate, then click **Create**.

<!-- TODO-SCREENSHOT: /images1/recruitment/gs_new_applicant_modal.png | Create Applicant window with the Candidate field open and the new candidate form filled for Rahul Verma -->

The edit page of the applicant opens. The applicant starts in the stage **New**, because that stage is the default.

<!-- TODO-SCREENSHOT: /images1/recruitment/gs_applicant_new_stage.png | Edit Applicant page for Rahul Verma with the stage bar showing New -->

## Step 4: Fill in the applicant

1. Set **Job Positions** to **Warehouse Supervisor**.
2. Set **Recruiter** to **ERP Admin** and add an **Interviewer**.
3. Add a **Tags** value, a **Degree** and an **Availability Date**.
4. Enter **Expected Salary** **40000**.
5. Choose **Source** and **Medium**, for example **LinkedIn**.
6. Click the stars to rate the applicant. Click **Save changes**.

<!-- TODO-SCREENSHOT: /images1/recruitment/gs_applicant_filled.png | Edit Applicant form for Rahul Verma filled with job position, recruiter, tags, degree, salary, source and medium -->

Each field is explained in [Add an applicant](../applicants/add-applicant.md).

## Step 5: Set the state and move through the stages

The state tells your team how an applicant is doing inside a stage.

1. Click the **State** icon button in the page header.
2. Choose **Ready for next stage** and click **Submit**.

<!-- TODO-SCREENSHOT: /images1/recruitment/gs_state_modal.png | State window with In Progress, Ready for next stage and Blocked options -->

3. Click **First Interview** in the stage bar. The stage changes at once.
4. Keep clicking the next stage as the hiring goes on, up to **Contract Proposal**.

<!-- TODO-SCREENSHOT: /images1/recruitment/gs_stage_first_interview.png | Stage bar with First Interview selected for Rahul Verma -->

::: tip
Moving to a new stage resets the state to **In Progress**.
:::

## Step 6: Hire the applicant

1. Click **Contract Signed** in the stage bar.
2. Check the **Application status** pill. It now says **Hired**.

<!-- TODO-SCREENSHOT: /images1/recruitment/gs_stage_contract_signed.png | Stage bar on Contract Signed with the Hired status pill -->

## Step 7: Create the employee

1. Click **Create Employee** in the page header.
2. The employee page opens. Review the profile and save it.
3. Go back to the applicant. The button is now **Go to Employee**. Click it to open the profile.

<!-- TODO-SCREENSHOT: /images1/recruitment/gs_create_employee.png | Applicant header with the Create Employee button before hiring is finished -->
<!-- TODO-SCREENSHOT: /images1/recruitment/gs_employee_created.png | New employee profile for Rahul Verma opened from the applicant -->
<!-- TODO-SCREENSHOT: /images1/recruitment/gs_go_to_employee.png | Hired applicant header with the Go to Employee icon button -->

See [Employee profile](../../employees/employees/employee-profile.md) for what to fill in next.

## Step 8: Refuse and restore an applicant

Add a second applicant, **Meera Nair**, for **Warehouse Supervisor** the same way.

1. Open Meera's applicant page and click **Refuse**.
2. Choose the reason **Refused by applicant: salary**.
3. Leave **Notify** on. **Email To** shows her email address. Click **Submit**.

<!-- TODO-SCREENSHOT: /images1/recruitment/gs_refuse_modal.png | Refuse Reason window with Refused by applicant: salary chosen, Notify on and Email To filled -->

4. Check the applicant. The status is **Refused** and the stage bar is hidden.

<!-- TODO-SCREENSHOT: /images1/recruitment/gs_refused_applicant.png | Refused applicant page for Meera Nair with the Restore button -->

5. To bring her back, click **Restore** and confirm.

<!-- TODO-SCREENSHOT: /images1/recruitment/gs_restore_confirm.png | Restore confirmation window for Meera Nair -->

See [Refuse and reopen](../applicants/refuse-and-reopen.md) for the details.

## Step 9: Find the applicants on the list

1. Open `Recruitments → Applications → Applicants`.
2. The list is grouped by stage. Find the group of each applicant.
3. Open the three dots menu and apply the **Hired** view to see hired people.

<!-- TODO-SCREENSHOT: /images1/recruitment/gs_applicant_list.png | Applicants list grouped by stage showing Rahul Verma and Meera Nair -->

## See also

- [Process an applicant](../applicants/process-applicant.md)
- [Applicant list](../applicants/applicant-list.md)
- [Recruitment dashboard](../dashboard/recruitment-dashboard.md)
- [Employees overview](../../employees/index.md)
