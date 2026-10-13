# Applicants

An applicant is one person's application for one job position. You use applicants to follow each person from the first contact to the day they are hired or turned down. Every applicant belongs to a [candidate](candidates.md), which holds the person's own details, and to a [job position](../job-positions/job-positions.md).

> **In simple words:** A candidate is the person. An applicant is that person applying for a job. You move the applicant through stages until you hire or refuse them.

Open `Recruitments → Applications → Applicants`.

::: info Before you start
- Create the [job position](../job-positions/job-positions.md) people apply for.
- Check the [stages](../setup/stages.md). Aureus uses them as the steps of your hiring flow.
- Optional: add [tags and degrees](../setup/tags-degrees.md), [sources and mediums](../setup/sources-and-mediums.md) and [refuse reasons](../setup/refuse-reasons.md).
:::

## The hiring flow

Stages are the steps an applicant goes through. In the sample data the order is:

```
New → First Interview → Initial Qualification → Second Interview
→ Document Verification → Contract Proposal → Contract Signed
```

A new applicant starts in **New**. You move them forward by clicking the next stage on the bar at the top of the applicant page. The last stage, **Contract Signed**, is a **Hired Stage**, so reaching it hires the applicant.

Your own company can use different stages. You define them in [Stages](../setup/stages.md).

## What an applicant can be

At any moment an applicant is in one of these situations.

### In a stage

The applicant is still in the process. A small **State** tells you how they are doing in the current stage:

- **In Progress:** you are working on them. This is the default.
- **Ready for next stage:** the work in this stage is done.
- **Blocked:** something stops the process. Blocked applicants no longer show in the main applicant list.

These three names are the defaults. A stage can use its own labels. See [Stages](../setup/stages.md).

### Hired

The applicant reached a **Hired Stage**. The page shows an **Application status** of **Hired** and the **Hired Date**. You can then [create an employee](process-applicant.md#hire-the-applicant).

### Refused

You turned the applicant down and gave a reason. The page shows **Refused**. You can bring them back with **Restore**. See [Refuse and reopen](refuse-and-reopen.md).

### Archived

An applicant that is no longer active appears under the **Archived** tab of the list.

## Pages in this section

- [Add an applicant](add-applicant.md): create the application from a candidate.
- [Process an applicant](process-applicant.md): move through stages, rate, assign and hire.
- [Refuse and reopen](refuse-and-reopen.md): turn an applicant down, or bring them back.
- [Applicant list](applicant-list.md): tabs, grouping, columns and filters.
- [Candidates](candidates.md): the people behind the applications.

## See also

- [Recruitment dashboard](../dashboard/recruitment-dashboard.md)
- [Chatter](../../../getting-started/chatter/introduction.md)
- [Search, filter and group](../../../getting-started/search-filter-group.md)
