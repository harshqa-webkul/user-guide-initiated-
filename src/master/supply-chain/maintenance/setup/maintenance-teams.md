# Maintenance teams

A maintenance team is a named group of people who repair or service equipment. You give each piece of equipment a team, and each request a team. This tells everyone who owns the job, and it lets you group work by team.

> **In simple words:** A team is the crew that takes care of a set of machines.

Open `Maintenance → Configurations → Teams`.

::: info Prerequisite
Team members are users. Create them first in [Manage users](../../../general-settings/users/manage-users.md). The team **Internal Maintenance** already exists, so you can start without creating one.
:::

## Overview

The page lists every team. Two tabs sit above the list.

- **All:** teams in use.
- **Archived:** teams you deleted. You can restore them from here.

Columns are **Name**, **Company** and **Team Members**. Members appear as small badges. Each row has **Edit** and **Delete** actions.

<ImagePopup src="/images1/maintenance/set_teams_list.png" alt="Maintenance Teams list with the All and Archived tabs, showing Internal Maintenance and Electrical Maintenance Team" />

## Create a team

This example makes the **Electrical Maintenance Team**, with Linda Ndlovu as the member.

1. Open `Maintenance → Configurations → Teams`.
2. Click **New Team**. A window opens.
3. Fill in the form.

- **_Name:_** Required. Use a name people recognise, such as `Electrical Maintenance Team`.
- **_Team Members:_** Pick one or more users. Choose **Linda Ndlovu**.
- **_Company:_** Fills with your company. Change it only if you run several companies.

<ImagePopup src="/images1/maintenance/set_team_form.png" alt="Create Maintenance Team window filled with Electrical Maintenance Team and member Linda Ndlovu" />

4. Click **Create**. The window closes and the team appears in the list.

::: tip
Click **Create & create another** to add several teams in a row.
:::

## Edit or delete a team

Click **Edit** on a row to change the name, members or company. Click **Delete** to archive the team. It moves to the **Archived** tab. Use **Restore selected** there to bring it back. **Force delete selected** removes it for good.

## Where teams are used

- On **Equipment**, the **Maintenance Team** field says who looks after the machine.
- On a request, **Team** is required. It fills from the equipment you pick.
- Teams and equipment share a company. If you change the company on a record, the team clears and you pick again.

## Behind the scenes

When you create a request without equipment, Aureus uses the first team of the company. For a new installation, this is **Internal Maintenance**.

## See also

- [Equipment categories](equipment-categories.md)
- [Add equipment](../equipment/add-equipment.md)
- [Create a maintenance request](../requests/create-request.md)
