# Stages

Stages are the steps of your hiring process. Every applicant sits in one stage at a time. You move the applicant forward as the hiring goes on. Each stage also carries labels for the applicant state, and a flag that marks the stage as hired.

> **In simple words:** A stage is one step in your hiring process, such as First Interview or Contract Signed.

Open `Recruitments → Configuration → Stages`.

::: info Prerequisite
Job positions are optional on a stage. If you want to link them, create them first. See [Job positions](../job-positions/job-positions.md).
:::

## Overview

The list shows the columns **Stage Name**, **Job Positions**, **Default Stage**, **Folded** and **Hired Stage**. Yes and No tell you each flag. The list shows the last stage first. The stage bar on an applicant shows the true order from left to right: **New**, **First Interview**, **Initial Qualification**, **Second Interview**, **Document Verification**, **Contract Proposal**, **Contract Signed**.

Drag a row to change the order. Use the filter to find a stage by name or job position. Group the list by name or label.

<ImagePopup src="/images1/recruitment/set_stages_list.png" alt="Stages list with columns Stage Name, Job Positions, Default Stage, Folded and Hired Stage" />

## Create a stage

This example adds a stage named **Background Check**.

1. Open `Recruitments → Configuration → Stages`.
2. Click **New Stage**. A full page opens.
3. Fill in the fields below.
4. Click **Create**.

<ImagePopup src="/images1/recruitment/set_stage_create_form.png" alt="Create Stage form filled for Background Check with the three tooltip labels and the Hired Stage toggle off" />

### General Information

- **_Stage Name:_** (required) the name shown on the stage bar.
- **_Requirements:_** a short note about what must happen in this stage.

### Tooltips

These three labels name the states an applicant can have in this stage. They show as the tooltip text on the **State** button.

- **_Gray Label:_** (required) starts as **In Progress**.
- **_Red Label:_** (required) starts as **Blocked**.
- **_Green Label:_** (required) starts as **Ready for Next Stage**.

You can rename them per stage. For example, use **Waiting for documents** in a verification stage.

### Additional Information

- **_Job Positions:_** link the stage to the positions that use it.
- **_Hired Stage:_** a toggle. When on, an applicant who enters this stage is marked **Hired**.
- **_Default Stage:_** a toggle. When on, new applicants start in this stage.

::: warning
In the sample data, **New** is the default stage and **Contract Signed** is the hired stage. If you turn **Hired Stage** off on **Contract Signed**, applicants who reach it are no longer marked hired.
:::

## Actions

Each row has **View**, **Edit** and **Delete**. Use the select boxes to delete many rows at once. Move the applicants out of a stage before you delete it.

On the view page you also see **Sequence Order**, the position of the stage in the pipeline.

<ImagePopup src="/images1/recruitment/set_stage_view.png" alt="View page of a stage with the tooltip labels and the Sequence Order" />

## Behind the scenes

When you click a stage on the stage bar of an applicant, Aureus saves the move at once. If the stage has **Hired Stage** on, the applicant is marked **Hired**. Leaving it reopens the application. The state returns to the first label, **In Progress**.

## See also

- [Process an applicant](../applicants/process-applicant.md)
- [Refuse reasons](refuse-reasons.md)
- [Setup overview](index.md)
