# Roles

A **role** is a named set of permissions. You give a role to a user, and the user gets everything the role allows. Aureus ERP groups permissions by module, so you can allow or block each screen of each module.

> **In simple words:** A role says which screens a user can open and which actions they can take.

## Overview

Open `Settings → Roles` to see the list of roles.

<ImagePopup src="/images1/general-settings/roles_list.png" alt="Role list with Name, Guard Name, Permissions and Updated At columns" />

The list has these columns:

- **_Name:_** The role name.
- **_Guard Name:_** **Web** is for people who sign in through the browser. **Sanctum** is for software connections (API). If unsure, keep **Web**.
- **_Permissions:_** A badge with the number of permissions in the role.
- **_Updated At:_** The last change date.

::: info Role or Resource Permission?
A role controls screens and actions. **Resource Permission** on the user controls whose records the user sees. See [Users](./users.md).
:::

## Create a role

1. Go to `Settings → Roles`.
2. Click **New Role** at the top right.

   <ImagePopup src="/images1/general-settings/role_create_form.png" alt="New role form with the name Regional Sales Manager, the Web guard and the permission tabs" />

3. Fill in the top of the form:

   - **_Name:_** A unique role name. Required.
   - **_Guard Name:_** Choose **Web** or **Sanctum**. Keep **Web** for people who sign in to the application.
   - **_Select All:_** A switch. It turns on every permission for this role.

4. Choose the permissions, as described in the next section.
5. Click **Create**. A **Role Created** message appears.

### Choose permissions

Permissions sit in tabs. Each tab shows a count badge.

- **Resources:** Permissions for the main screens, such as lists and forms.
- **Pages:** Permissions for single pages, such as settings pages.
- **Widgets:** Permissions for dashboard widgets.

Inside each tab, permissions are grouped by module. Each module is a collapsible section, closed at first. Click a section to open it.

<ImagePopup src="/images1/general-settings/role_permission_groups.png" alt="Sale section open with permission checkboxes, some ticked" />

Under **Resources**, each screen has its own box of checkboxes. The permission types are:

- **View:** Open one record.
- **View Any:** See the list.
- **Create:** Add a new record.
- **Update:** Edit a record.
- **Delete:** Delete one record.
- **Delete Any:** Delete several records at once.

Some screens may show other permissions. Only the ones the screen supports appear.

::: tip
Each checkbox group has a search box and a select-all control. Use them to work faster.
:::

::: warning
A user can open a screen only if the role has the matching permission. If a menu is missing, check the role first.
:::

## Assign a role to a user

1. Go to `Settings → Users`.
2. Create or edit a user.
3. In **Permissions**, choose one or more roles in **Roles**.
4. Save the user.

A user can have several roles. See [Users](./users.md).

::: info
You can also set a **Default Role** for new users. It is on `Settings → Settings → General → Manage Users`. See [Manage users](./manage-users.md).
:::

## Actions and statuses

Each row has these actions:

- **Edit:** Change the name, guard or permissions. A **Role Updated** message appears.
- **Delete:** Remove the role.

You can also tick several rows and use the bulk **Delete**.

::: warning
System roles are protected. You cannot rename them, change their guard or delete them. The system shows **System Role Cannot Be Deleted**.
:::

## See also

- [Users](./users.md)
- [Teams](./teams.md)
- [Manage users](./manage-users.md)
