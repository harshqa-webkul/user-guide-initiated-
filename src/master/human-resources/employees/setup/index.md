# Employees setup

Setup is the set of small lists that feed the employee form. They give you the choices for a job, a work place, a tag or a reason for leaving. You create each list once, then pick from it whenever you add or edit an employee.

> **In simple words:** Setup lists are the drop-down choices that employees, departments and positions use.

Open `Employees → Configurations`. The left menu has three parts:

- No heading: **Activity Plans**
- **Employee**: **Departure Reasons**, **Tags**, **Work Locations**, **Skill Types**
- **Recruitment**: **Employment Types**, **Job Positions**

## How the records relate

```text
Department ──►  Job Position  ◄── Employment Type
                      │
                      ▼
 Work Location ──► Employee ◄── Tags
                      │
          Skill Type ─┤
                      ▼
              Departure Reason (when the person leaves)
```

- A **job position** belongs to a department and can name an employment type.
- An **employee** picks a department, a job position, a work location and tags.
- **Skill types** hold the skills and levels you add to an employee.
- A **departure reason** is chosen when the person leaves.
- **Activity plans** are checklists of tasks, such as onboarding.

## Pages in this group

| Page | What it covers |
| --- | --- |
| [Job positions](job-positions.md) | Roles in your company, with department and description |
| [Employment types](employment-types.md) | Labels such as Full-Time or Intern |
| [Work locations](work-locations.md) | Office, home or other places people work from |
| [Tags](tags.md) | Coloured labels you attach to employees |
| [Departure reasons](departure-reasons.md) | Why a person left |
| [Skill types](skill-types.md) | Groups of skills and their levels |
| [Activity plans](activity-plans.md) | Task checklists for onboarding and offboarding |

## Suggested order

1. Check the sample lists. Many companies can use them as they are.
2. Create your departments. See [Departments](../departments/departments.md).
3. Create job positions for each role.
4. Add the tags and work locations you need.
5. Add employees.

::: tip
Most simple lists open in a window. Click **Create & create another** to add several records quickly.
:::

## Common list features

Every list has a search box, a filter button, a column manager and a **Group** option. Rows have **View**, **Edit** and **Delete**. You can select rows to act on several at once.

## See also

- [Employees overview](../index.md)
- [First steps](../get-started/first-steps.md)
