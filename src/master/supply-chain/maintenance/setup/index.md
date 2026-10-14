# Maintenance setup

Setup is the small amount of work you do before the first request. You define who does maintenance, how you group equipment, and which steps a job goes through. Once these records exist, adding equipment and requests takes seconds.

> **In simple words:** Setup answers three questions: who fixes things, what kinds of equipment do we have, and what are the steps of a job.

Open `Maintenance → Configurations`. The **Configurations** menu lists **Stages**, **Teams** and **Categories**.

## How the three records relate

```text
Category  ──►  Equipment  ◄──  Team
(Responsible)      │          (members)
                   ▼
              Request  ──►  moves through Stages
```

- A **category** groups similar equipment, such as **Packaging Machines**. It names a **Responsible** person.
- A **team** is a group of technicians, such as **Electrical Maintenance Team**.
- **Equipment** points to one category and one team.
- A **request** picks equipment, then fills the category, team and responsible person from it.
- **Stages** are the steps shown on every request.

## Pages in this group

| Page | What it covers |
| --- | --- |
| [Maintenance teams](maintenance-teams.md) | Create teams and add members |
| [Equipment categories](equipment-categories.md) | Group equipment and set the default responsible person |
| [Stages](stages.md) | The steps of a request and the Done flag |

## Suggested order

1. Check the four stages. Change them only if your team works differently.
2. Create a category for each kind of equipment.
3. Create a team for each group of technicians.
4. Add your equipment. See [Add equipment](../equipment/add-equipment.md).

::: tip
Users must exist before you can name them as responsible persons or team members. See [Manage users](../../../general-settings/users/manage-users.md).
:::

## See also

- [First steps](../get-started/first-steps.md)
- [Add equipment](../equipment/add-equipment.md)
- [Create a maintenance request](../requests/create-request.md)
