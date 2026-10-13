# Teams

A **team** is a named group of users. Teams matter when a user has the **Group** resource permission, because that user can then reach the records of colleagues in the same team. You manage teams from the **Teams** tab of the Settings app.

> **In simple words:** A team is a list of colleagues who can share access to each other's records.

## Overview

Open `Settings → Teams` to see the list of teams.

<ImagePopup src="/images1/general-settings/teams_list.png" alt="Team list with Name and Created By columns and the New Team button" />

The list has these columns:

- **_Name:_** The team name.
- **_Created By:_** The user who created the team.

## Create a team

1. Go to `Settings → Teams`.
2. Click **New Team** (the plus icon button at the top right).

   <ImagePopup src="/images1/general-settings/team_create_modal.png" alt="New team modal with the Name field" />

3. Fill in the form:

   - **_Name:_** The team name. Required.

4. Click **Create**. A **Team created** message appears.

::: tip
You can also create a team from the **Teams** field on a user form. Use the plus icon next to the field.
:::

## Assign users to a team

A team has no member list of its own. You add users from the user form.

1. Open `Settings → Users`.
2. Edit the user.
3. In **Permissions**, choose the team in **Teams**.
4. Click **Save changes**.

See [Users](./users.md) for how **Resource Permission** works with teams.

## Actions and statuses

Each row has these actions:

- **View:** Shows the team details.
- **Edit:** Changes the **Name**. A **Team updated** message appears.
- **Delete:** Removes the team. A **Team deleted** message appears.

::: warning
The **Delete** button is hidden for a team that still has users. Remove the team from those users first.
:::

## See also

- [Users](./users.md)
- [Roles](./roles.md)
