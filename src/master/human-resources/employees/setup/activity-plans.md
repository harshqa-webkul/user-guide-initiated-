# Activity plans

An activity plan is a checklist of tasks that you start for an employee in one click. A new hire needs the same steps each time: set up a laptop, plan training, hold a session. A plan stores those steps once. Each step is an activity template with a type, a person and a due time.

> **In simple words:** A plan is a saved to-do list that you launch for an employee.

Open `Employees → Configurations → Activity Plans`.

::: info Prerequisite
Each template uses an **Activity Type** such as To-Do or Meeting. Activity types are managed in `Settings → General → Manage Activities`, under the **Activity Types** link. Aureus already includes Meeting, Exception, To-Do and Call. For how activities work, see [Activities](../../../getting-started/activities.md).
:::

## Overview

The list has two tabs: **All** and **Archived**. Columns are **Name**, **Department**, **Manager**, **Company** and **Status**.

<ImagePopup src="/images1/employees/set_plans_list.png" alt="Activity Plans list with All and Archived tabs showing the four plans, including Onboarding and Offboarding" />

Aureus includes four plans: **Offboarding**, **Onboarding**, **Verification** and **Review Candidate**. **Offboarding** has no department or company. Group the list by **Name**, **Created By**, **Status**, **Created At** or **Updated At**. Filter by **Status**.

## Create a plan

1. Open `Employees → Configurations → Activity Plans`.
2. Click **New Activity Plan**. A window opens.
3. Fill in **General Information**.

- **_Name:_** Required. For example `Warehouse Onboarding`.
- **_Department:_** Optional. Link the plan to one department.
- **_Company:_** Fills with your company.
- **_Status:_** On means the plan can be launched.

<ImagePopup src="/images1/employees/set_plan_form.png" alt="Create Activity Plan window with the name Warehouse Onboarding, the department Operations, the company and Status on" />

4. Click **Create**.

## Add activity templates

A plan does nothing until it has templates. The **View** page shows the templates table without a create button. Click **Edit** on the plan. Under the form, find **Activity Plan Templates**. Click **New activity plan template**. **Activity Type** starts as **Meeting**.

<ImagePopup src="/images1/employees/set_template_new.png" alt="Create Activity Plan Template window with activity details, assignment and delay sections" />

### Activity Details

- **_Activity Type:_** Required. Pick To-Do, Meeting and so on.
- **_Summary:_** A short title for the task.
- **_Note:_** Longer instructions.

### Assignment

- **_Assignment:_** Required. It decides who gets the task. The default is **Ask at launch**. Other options are **Other**, **Coach**, **Manager** and **Employee**.
- **_Assignee:_** Appears only when **Assignment** is **Other**. Pick a user.

### Delay Information

- **_Delay Count:_** A number, 0 by default.
- **_Delay Unit:_** **Minutes**, **Hours**, **Days** or **Weeks**. Days by default.
- **_Delay From:_** **Before Plan Date** or **After Plan Date**.

Click **Create** to save the template.

## Example: the Onboarding plan

The **Onboarding** plan belongs to the Management department. It has three templates. All use the **To-Do** type, are assigned to the **Manager**, and have a delay of 0 days before the plan date.

| Summary | Type | Assignment |
|---|---|---|
| Setup IT Materials | To-Do | Manager |
| Plan Training | To-Do | Manager |
| Training | To-Do | Manager |

<ImagePopup src="/images1/employees/set_plan_templates.png" alt="Onboarding activity plan listing the templates Setup IT Materials, Plan Training and Training" />

Click **View** on a plan to see these templates with their **Assigned To**, **Interval**, **Delay Unit** and **Delay From**. The table shows raw values such as `Assignment manager`, `days` and `before_plan_date`. **Assigned To** is blank.

## Launch a plan for an employee

1. Open the employee. See [Employee profile](../employees/employee-profile.md).
2. Click the blue **Chatter** icon button with the count badge in the page header. A side panel opens.
3. Click **Schedule Activity**. A window opens.
4. Choose the plan in **Activity Plan**.
5. Check the other fields: **Activity Type** (required), **Due Date**, **Summary**, **Assigned To** (required) and **Body**.
6. Click **Schedule**, or **Cancel** to leave.

::: tip
Create one plan per situation, such as onboarding and leaving. Keep each plan short.
:::

## Edit, archive and restore

Click **Edit** to change a plan or its templates. Click **Delete** to archive it. Use **Restore** on the **Archived** tab to bring it back.

## See also

- [Skill types](skill-types.md)
- [Employee profile](../employees/employee-profile.md)
- [Chatter](../../../getting-started/chatter.md)
