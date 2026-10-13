# Add an applicant

An applicant records that one person applied for one job. You create it by choosing a candidate. If the person is new to Aureus, you create the candidate on the spot. Aureus then opens the full applicant page so you can add the details.

> **In simple words:** Pick the person, click **Create**, then fill in the rest on the page that opens.

Open `Recruitments → Applications → Applicants` and click **New Applicant**.

::: info Before you start
Create the [job position](../job-positions/job-positions.md) the person applies for. You choose it on the applicant page after you create the record.
:::

## Worked example

Rahul Verma applies for **Warehouse Supervisor**. He is not in Aureus yet, so you create him as a candidate while adding the applicant.

1. Open `Recruitments → Applications → Applicants`. Click **New Applicant**.

<!-- TODO-SCREENSHOT: /images1/recruitment/applicants_list_new_button.png | Applicants list with the New Applicant button in the top right corner -->

2. The **Create Applicant** window opens. It has one field, **Candidate**. Open the list and look for Rahul Verma. He is not there, so use the create option under the list.

<!-- TODO-SCREENSHOT: /images1/recruitment/applicant_create_modal_empty.png | Create Applicant window with the empty Candidate select and the Create and Cancel buttons -->

3. Fill in the candidate form that opens:
   - **Full Name:** `Rahul Verma`
   - **Email Address:** `rahul.verma@example.com`
   - **Phone Number:** a phone number.

<!-- TODO-SCREENSHOT: /images1/recruitment/applicant_create_inline_candidate.png | Inline candidate form filled with Rahul Verma, his email address and phone number -->

4. Save the candidate. The window returns to **Create Applicant** with **Rahul Verma** selected.

<!-- TODO-SCREENSHOT: /images1/recruitment/applicant_create_candidate_selected.png | Create Applicant window with Rahul Verma selected in the Candidate field -->

5. Click **Create**. Aureus opens the **Edit Applicant** page. Continue with [Process an applicant](process-applicant.md) to choose the job position and the recruiter.

<!-- TODO-SCREENSHOT: /images1/recruitment/applicant_edit_after_create.png | Edit Applicant page for Rahul Verma in the New stage, just after creation -->

## Fields

- **_Candidate:_** Required. Choose an existing candidate, or create one with the create option. The candidate form is described in [Candidates](candidates.md).

Everything else lives on the applicant page: [job position](process-applicant.md#details-you-fill-in), recruiter, interviewers, tags, salary and source.

::: tip
Search the candidate list before you create a new one. One person should have one candidate record.
:::

## Behind the scenes

If the chosen candidate already has an applicant for your company, Aureus does not create a duplicate. It reopens the old application instead. The application becomes active again, the refuse reason is cleared, and you become the recruiter.

## See also

- [Process an applicant](process-applicant.md)
- [Candidates](candidates.md)
- [Applicant list](applicant-list.md)
- [Job positions](../job-positions/job-positions.md)
