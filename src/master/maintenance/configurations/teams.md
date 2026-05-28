# Maintenance Teams

A **Maintenance Team** is a group of users who are collectively responsible for taking care of a set of [Equipment](../equipments/equipments.md) and handling [Maintenance Requests](../operations/maintenance-requests.md).
Examples: *IT Support Team*, *Facility Team*, *Mechanical Team*.

**Use Case:**
Create one team per maintenance department or area of expertise. When a new request is raised, you simply pick the right team and the work lands in the right hands.

> **In simple words:** A Team is a *crew* of people who fix things together. Add the right team members and assign the team to your equipment.

## Steps to Create a New Maintenance Team

1. Navigate to **`Maintenance → Configurations → Teams`** as shown below:

   <ImagePopup src="/images1/maintenance/team_navigation.png" alt="Maintenance Teams Navigation" />

2. Click **New Team** and fill in the following details:

   - **_Name:_** The name of the team (e.g. `IT Support`, `Facility Maintenance`). Must be unique.
   - **_Team Members:_** Select one or more users who are part of this team. You can add as many people as needed.
   - **_Company:_** The company the team belongs to (useful in multi-company setups).

   <ImagePopup src="/images1/maintenance/team_general_section.png" alt="Maintenance Team General Section" />

3. **Action Buttons:**

   - **Create** – Save the new team.
   - **Create & Create Another** – Save and open a blank form for the next team.
   - **Cancel** – Discard and return to the list.

## List View — Columns & Actions

The **Teams** list view shows every maintenance team with the following columns: **Name**, **Company**, and **Team Members** (shown as badges).

You can:

- **Search by:** Name.
- **Edit:** Update the team name, members, or company.
- **Archive / Restore:** Soft-delete a team. Archived teams are hidden from selection lists but kept in the database. You can restore them later.
- **Delete (Permanent):** Force-delete a team if it is not used by any equipment or request.

<ImagePopup src="/images1/maintenance/team_list_view.png" alt="Maintenance Team List View" />

### Summary

Maintenance Teams help you:

- Route each [Maintenance Request](../operations/maintenance-requests.md) to the right group of people.
- Assign a default team to each piece of [Equipment](../equipments/equipments.md).
- Keep accountability clear — every request always has a team responsible.

> **Next step:** After creating teams, define the workflow [Stages](stages.md) used in maintenance requests.
