# Refuse reasons

A refuse reason explains why you turned down an application. You pick one every time you refuse an applicant. Each reason is tied to an email template, so the applicant receives the right message when you choose to notify them.

> **In simple words:** A refuse reason is the "why" behind a refusal, and it decides which email the applicant gets.

Open `Recruitments → Configuration → Refuse Reasons`.

::: info Prerequisite
None. Seven reasons come with the sample data. Add your own only if you need them.
:::

## Overview

The list has the columns **Name** and **Template**. The **Template** column shows the template code, **applicant-refuse** or **applicant-not-interested**. You can search by name, drag rows to reorder them, and open **View**, **Edit** or **Delete** on a row.

<ImagePopup src="/images1/recruitment/set_refuse_list.png" alt="Refuse Reasons list with the Name and Template columns" />

## Create a refuse reason

This example adds **Overqualified**.

1. Open `Recruitments → Configuration → Refuse Reasons`.
2. Click **New Refuse Reasons**. A **Create Refuse Reasons** window opens.
3. Type **Overqualified** in **Name**.
4. Choose **Applicant Refuse** in **Template**.
5. Click **Create**. Use **Create & create another** to add more.

<ImagePopup src="/images1/recruitment/set_refuse_create.png" alt="Create Refuse Reasons window with Name Overqualified and Template Applicant Refuse" />

- **_Name:_** (required) the reason as your team will read it.
- **_Template:_** (required) the email that goes with the reason.

### Which template to choose

- **Applicant Refuse:** use it when you turn the applicant down. The email says the profile is competitive but was not selected.
- **Applicant Not Interested:** use it when the applicant withdrew. The email thanks the person, keeps the resume on record and promises to be in touch about future roles.

You cannot edit the email text. It is fixed per template.

## Sample reasons

| Reason | Template |
| --- | --- |
| Does not fit the job requirements | Applicant Refuse |
| Job already fulfilled | Applicant Refuse |
| Duplicate | Applicant Refuse |
| Discrepancy In Documentation | Applicant Refuse |
| Refused by applicant: job fit | Applicant Not Interested |
| Refused by applicant: salary | Applicant Not Interested |
| Spam | Applicant Not Interested |

## Behind the scenes

On the **Refuse** window, **Notify** is on by default after you pick a reason. **Email To** starts with the candidate's email. When you submit, the applicant is refused and the email of the reason's template is sent.

## See also

- [Refuse and reopen](../applicants/refuse-and-reopen.md)
- [Process an applicant](../applicants/process-applicant.md)
- [Setup overview](index.md)
