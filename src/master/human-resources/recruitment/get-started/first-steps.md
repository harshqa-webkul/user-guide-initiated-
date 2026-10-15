# First steps: hire your first employee

This tutorial follows one applicant from first contact to employee. You check the setup, add the applicant, move him through the stages and create his employee profile. Then you refuse a second applicant and bring her back. The example is a hire for the job position **Warehouse Supervisor**.

> **In simple words:** You move each applicant through stages until you hire or refuse them.

Two words matter here. A **candidate** is the person, with name and contact details. An **applicant** is that person applying for one job. You create the candidate first.

::: info Prerequisite
The stages exist in the sample data. The job position **Warehouse Supervisor** exists if you followed [First steps with Employees](../../employees/get-started/first-steps.md). If not, create it in [Job positions](../job-positions/job-positions.md). You need a user to act as recruiter. This tutorial uses **ERP Admin**, or use any user in your system.
:::

## Step 1: Check the stages

Stages are the steps every applicant passes through.

1. Open `Recruitments → Configuration → Stages`.
2. Read the **Stage Name** column. The list may show the stages in a different order. The stage bar on an applicant uses this order:
   1. **New**
   2. **First Interview**
   3. **Initial Qualification**
   4. **Second Interview**
   5. **Document Verification**
   6. **Contract Proposal**
   7. **Contract Signed**
3. Find **Contract Signed**. Its **Hired Stage** column shows a green tick. An applicant who reaches this stage counts as hired.

<ImagePopup src="/images1/recruitment/gs_stages_list.png" alt="Stages list with a green tick in the Hired Stage column for Contract Signed and red crosses for the other stages" />

See [Stages](../setup/stages.md) to add or change them.

## Step 2: Check the job position

1. Open `Recruitments → Applications → Job Positions`.
2. Type **Warehouse Supervisor** in the search box.
3. Read the card. The blue button shows how many applicants are in the **New** stage. The three dots menu shows **To Recruitment** and **Applications**.

<ImagePopup src="/images1/recruitment/gs_jobpos_card.png" alt="Warehouse Supervisor card with Sarah Mitchell and My Company, the 1 New Applications button and the open menu showing 2 To Recruitment and 1 Applications" />

See [Job positions](../job-positions/job-positions.md) for the card details.

## Step 3: Add the applicant

1. Open `Recruitments → Applications → Applicants`.
2. Click **New Applicant**. A **Create Applicant** window opens.
3. Click the **+** button beside the **Candidate** field to add a new person.
4. Type **Rahul Verma** as **Full Name**. Add the email **rahul.verma@example.com** and a phone number.
5. Click **Create** in the candidate form. Choose **Rahul Verma** in the **Candidate** field, then click **Create**.

<ImagePopup src="/images1/recruitment/gs_new_applicant_modal.png" alt="Candidate form opened from the Create Applicant window, filled for Rahul Verma" />

The edit page of the applicant opens. The applicant starts in the stage **New**, because that stage is the default.

<ImagePopup src="/images1/recruitment/gs_applicant_new_stage.png" alt="Edit Applicant header and stage bar with New highlighted in blue" />

## Step 4: Fill in the applicant

1. Set **Job Positions** to **Warehouse Supervisor**.
2. Set **Recruiter** to **ERP Admin**. You can also pick an **Interviewer**.
3. Add a **Tags** value such as `Warehouse Management`, a **Degree** such as `Bachelor`, an **Availability Date** two weeks from today and the **Department** `Operations`.
4. Enter **Expected Salary** **40000**.
5. Choose **Source** `Referral` and **Medium** `Email`, or any pair from your lists.
6. Click **Save changes**. Then click the stars to rate the applicant. The rating saves at once.

<ImagePopup src="/images1/recruitment/gs_applicant_filled.png" alt="Edit Applicant form for Rahul Verma with job position, recruiter, interviewer, tags, degree, department, salary, source, medium and two stars filled in" />

Each field is explained in [Add an applicant](../applicants/add-applicant.md).

## Step 5: Set the state and move through the stages

The state tells your team how an applicant is doing inside a stage.

1. Click the round **State** icon button in the page header.
2. Choose **Ready for next stage** and click **Submit**.

<ImagePopup src="/images1/recruitment/gs_state_modal.png" alt="State window with Ready for next stage selected next to In Progress and Blocked" />

3. Click **First Interview** in the stage bar. The stage saves at once.
4. Keep clicking the next stage as the hiring goes on, up to **Contract Proposal**.

<ImagePopup src="/images1/recruitment/gs_stage_first_interview.png" alt="Stage bar with First Interview highlighted in blue and the State and Go to Employee icon buttons in the header" />

::: tip
Clicking another stage resets the state to **In Progress**.

A stage is a step of hiring. The state is how the applicant is doing inside that step. The status is the end result: **Hired** or **Refused**.
:::

## Step 6: Hire the applicant

1. Click **Contract Signed** in the stage bar.
2. Check the **Application status** pill. It now says **Hired**. The **Edit** page also shows a read only **Hired Date**.

<ImagePopup src="/images1/recruitment/gs_stage_contract_signed.png" alt="Edit Applicant page with Contract Signed highlighted, the Hired status pill and the Hired Date" />

## Step 7: Open the employee

1. Look at the page header. **Create Employee** is hidden for a hired applicant. The **Go to Employee** icon button takes its place.
2. Click **Go to Employee**. The employee profile of Rahul opens. It holds his work email, work mobile and job position.
3. Add the rest of the details on the employee.

<ImagePopup src="/images1/recruitment/gs_go_to_employee.png" alt="Header of a hired applicant with the Go to Employee icon button and its tooltip" />

<ImagePopup src="/images1/recruitment/gs_employee_created.png" alt="Employee profile of Rahul Verma with his work email, work mobile and the job position Warehouse Supervisor" />

Before an applicant is hired, the header shows **Create Employee**. Use it to create the employee early.

<ImagePopup src="/images1/recruitment/gs_create_employee.png" alt="Header of an applicant who is not hired yet with the Create Employee, Delete and Refuse buttons" />

See [Employee profile](../../employees/employees/employee-profile.md) for what to fill in next.

## Step 8: Refuse and restore an applicant

Add a second applicant the same way. Use the full name `Meera Nair`, the email `meera.nair@example.com` and the job position **Warehouse Supervisor**.

1. Open Meera's applicant page and click **Refuse**.
2. Click the reason **Refused by applicant: salary**.
3. Leave **Notify** on. **Email To** shows her email address. Click **Submit**.

<ImagePopup src="/images1/recruitment/gs_refuse_modal.png" alt="Refuse Reason window with Refused by applicant: salary chosen, Notify on and Email To showing meera.nair@example.com" />

4. Check the applicant. The status is **Refused**, the stage bar is hidden and the header shows **Restore**.

<ImagePopup src="/images1/recruitment/gs_refused_applicant.png" alt="Meera Nair applicant page after refusing, with the Refused status, no stage bar and the Restore button" />

5. To bring her back, click **Restore** and click **Confirm**.

<ImagePopup src="/images1/recruitment/gs_restore_confirm.png" alt="Restore Applicant from refuse window with the Cancel and Confirm buttons" />

See [Refuse and reopen](../applicants/refuse-and-reopen.md) for the details.

## Step 9: Find the applicants on the list

1. Open `Recruitments → Applications → Applicants`.
2. The list is grouped by stage. Find the group of each applicant.
3. Open the three dots menu and apply the **Hired** view to see hired people.

<ImagePopup src="/images1/recruitment/gs_applicant_list.png" alt="Applicants list grouped by stage with Rahul Verma under Contract Signed and Meera Nair under New" />

## See also

- [Process an applicant](../applicants/process-applicant.md)
- [Applicant list](../applicants/applicant-list.md)
- [Recruitment dashboard](../dashboard/recruitment-dashboard.md)
- [Employees overview](../../employees/index.md)
