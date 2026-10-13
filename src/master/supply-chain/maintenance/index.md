# Maintenance

Maintenance keeps your machines, vehicles and office devices working. You list each piece of equipment once. When something breaks, or when it needs regular care, you raise a maintenance request and give it to a team. The request moves through stages until the job is done.

> **In simple words:** Maintenance answers three questions: what do we own, what is wrong with it, and who is fixing it.

## The whole maintenance flow

Every job follows the same path. Read it once, then use the tutorial to try it.

```text
1. Set up  →  2. Add equipment  →  3. Report a problem  →  4. Assign and process  →  5. Close
                                                                  ↑                       |
                                                                  └── Preventive copy ←───┘
```

1. **Set up.** Check the stages, create a maintenance team and an equipment category. See [Setup](setup/index.md).
2. **Add equipment.** Record the machine with its category, team, technician, vendor and warranty. For example, **Hydraulic Press 200T**.
3. **Report a problem.** Create a maintenance request, such as **Hydraulic press oil leak**, and pick the equipment.
4. **Assign and process.** Set the team, the responsible person, a scheduled date and a duration. Open the request, click **Edit**, choose **In Progress** on the stage bar and click **Save changes**.
5. **Close.** Choose **Repaired** and click **Save changes**. This stage is flagged as done, so the request counts as closed.

**The preventive loop.** Some work repeats, such as a monthly oil change. Create a **Preventive** request and tick **Recurrent**. When you save it in a done stage, Aureus opens the next copy for you, so the care never gets forgotten.

::: tip
New to the module? Follow [First steps](get-started/first-steps.md). It takes you from an empty setup to a repaired machine in about ten steps.
:::

## Menus

The top bar of the Maintenance app has three menus.

| Menu | What it holds |
| --- | --- |
| **Maintenance** | **Maintenance Requests** (the list of jobs) and **Maintenance Calendar** (jobs by scheduled date) |
| **Equipment** | Every machine or device you track, with vendor, serial number, cost and warranty |
| **Configurations** | **Stages**, **Teams** and **Categories**, the building blocks of your setup |

## Data that comes ready to use

A new installation includes this data, so you can start right away.

- One team: **Internal Maintenance**. New requests use it until you pick another team.
- Four stages, in this order:

| Stage | Done flag | Meaning |
| --- | --- | --- |
| **New Request** | No | The problem is reported, nobody has started |
| **In Progress** | No | Someone is working on it |
| **Repaired** | Yes | The job is finished |
| **Scrap** | Yes | The equipment cannot be repaired |

You can rename, add or reorder stages later. See [Stages](setup/stages.md).

## Groups in this guide

| Group | What you learn |
| --- | --- |
| [Get started](get-started/index.md) | A complete first tutorial, from setup to a repaired machine |
| [Setup](setup/index.md) | Teams, equipment categories and stages |
| [Equipment](equipment/index.md) | Add, find and archive equipment |
| [Requests](requests/index.md) | Create, process and repeat maintenance jobs |
| [Calendar](calendar/maintenance-calendar.md) | Plan and review scheduled jobs by date |

## See also

- [First steps](get-started/first-steps.md)
- [Maintenance teams](setup/maintenance-teams.md)
- [Add equipment](equipment/add-equipment.md)
- [Create a maintenance request](requests/create-request.md)
- [Preventive maintenance](requests/preventive-maintenance.md)
