# Users

A **user** is a person who can sign in to Aureus ERP. Each user has a login, one or more roles, an optional set of teams and a list of companies they can work in. You manage users from the **Users** tab of the Settings app.

> **In simple words:** A user is a login account. Roles and teams decide what that person can see and do.

## Settings

Two options in `Settings → Settings → General → Manage Users` change what you see on this page.

- **Enable User Invitation:** Shows the **Invite User** button on the user list.
- **Enable Reset Password:** Shows the **Change Password** button on the edit page.

You must also set a **Default Company** on that page before you can send an invitation. See [Manage users](./manage-users.md).

## Overview

Open `Settings → Users` to see the list of users.

<ImagePopup src="/images1/general-settings/users_list.png" alt="User list with the All Users and Archived Users tabs and the New User and Invite User buttons" />

The list has two tabs:

- **All Users:** Active users, with a count badge.
- **Archived Users:** Deleted users that you can restore, with a count badge.

The list shows these columns:

- **_Avatar:_** The user's picture.
- **_Name:_** The user's full name.
- **_Email:_** The login email.
- **_Teams:_** The teams the user belongs to.
- **_Role:_** The roles assigned to the user.
- **_Resource Permission:_** The data access level of the user.
- **_Default Company:_** The company the user works in first.
- **_Allowed Company:_** All companies the user may open.
- **_Created By, Created At, Updated At:_** Hidden at first. Show them from the column menu.

Use the filters **Resource Permission**, **Teams**, **Roles**, **Default Company** and **Allowed Companies** to narrow the list. The newest users appear first.

## Create a user

1. Go to `Settings → Users`.
2. Click **New User**.

   <ImagePopup src="/images1/general-settings/user_create_form.png" alt="New User form filled with name, email, password, role, team and company" />

3. Fill in the form as described below.
4. Click **Create**. A **User created** message appears.

### General Information

- **_Name:_** The user's full name. Required.
- **_Email:_** The login email. It must be unique. Required.
- **_Password:_** At least 8 characters. Required. You can reveal the text with the eye icon.
- **_Password Confirmation:_** Type the same password again.

::: info
The password fields show only when you create a user. To change a password later, see [Change a password](#change-a-password).
:::

### Permissions

<ImagePopup src="/images1/general-settings/user_permissions_section.png" alt="Permissions section with Roles, Resource Permission and Teams" />

- **_Roles:_** Choose one or more roles. Required. See [Roles](./roles.md).
- **_Resource Permission:_** Choose how much data the user can reach. Required. The options are **Global**, **Group** and **Individual**. The default is **Global**.
- **_Teams:_** Choose one or more teams. Required only when **Resource Permission** is **Group**. See [Teams](./teams.md).

What each **Resource Permission** means:

- **Global:** The user can reach records of all users.
- **Group:** The user can reach their own records and records of users who share a team with them.
- **Individual:** The user can reach only their own records.

::: tip
You can create a new team without leaving the form. Use the plus icon next to **Teams**.
:::

### Avatar

- **_Avatar:_** Upload a picture. You can crop it with the image editor.

### Language & Status

- **_Preferred Language:_** The language of the interface for this user. It starts with the system language.
- **_Status:_** A switch that is on by default. It marks the user as active.

### Multi Company

<ImagePopup src="/images1/general-settings/user_multi_company_section.png" alt="Multi Company section with Allowed Companies and Default Company" />

- **_Allowed Companies:_** Choose every company the user may work in. See [Companies](../companies/companies.md).
- **_Default Company:_** The company that opens first. Required. It must be one of the allowed companies.

::: warning
If the default company is not in **Allowed Companies**, the form shows an error and does not save.
:::

## Invite a user

Use an invitation when you want the person to choose their own password.

1. Go to `Settings → Users`.
2. Click **Invite User**.

   <ImagePopup src="/images1/general-settings/user_invite_modal.png" alt="Invite User window with an email address typed in" />

3. Enter the **Email** of the person.
4. Click **Invite User**.

A **User invited** message appears. The person gets an email, and on the sign-up page they enter their name and password. The page title there is **Sign up**.

::: warning
If you see **Default Company Not Set**, open `Settings → Settings → General → Manage Users` and choose a **Default Company**. Then invite again.
:::

::: info
The **Invite User** button shows only when **Enable User Invitation** is on.
:::

## Edit a user

1. Go to `Settings → Users`.
2. Click the three dots on the row, then **Edit**.
3. Change the fields. The form is the same as for a new user, without the password fields.
4. Click **Save changes**. A **User updated** message appears.

::: warning
The system protects administrators. You cannot remove the admin role from the last admin. The first user must always keep an admin role.
:::

::: info
You cannot change your own **Resource Permission**. Ask another administrator to do it.
:::

### Change a password

1. Open the user in edit mode.
2. Click **Change Password** at the top.
3. Enter **New Password** and **Confirm New Password**.
4. Confirm the form.

A **Password changed** message appears. The button shows only when **Enable Reset Password** is on.

## Actions and statuses

Click the three dots on a row to open these actions:

- **View:** Opens a read-only page with the same sections as the form.
- **Edit:** Opens the edit form.
- **Delete:** Moves the user to **Archived Users**.
- **Restore:** Shown on archived users. Brings the user back.

For several users at once, tick the rows and use the bulk menu: **Delete**, **Force delete** and **Restore**. **Force delete** removes the user for good. It fails if the user is used in other records.

::: warning
You cannot delete a default user or yourself. The system shows **User Cannot Be Deleted**.
:::

The **Status** switch controls whether the user is active. A deleted user appears only under **Archived Users**.

## Your own profile

Every user can edit their own details on the **Profile** page. It has these parts:

- **_Profile Photo:_** A square picture. JPG, PNG or WEBP, up to 2 MB.
- **_Name:_** Your name.
- **_Email:_** Your login email.
- **_Preferred Language:_** The interface language. The page reloads when you change it.

Click **Save Changes** to apply them. To change your password, click **Update Password** at the top. Enter **Current Password**, **New Password** and **Confirm Password**. The new password must differ from the current one. After the change, you are signed out and must sign in again.

<ImagePopup src="/images1/general-settings/profile_page.png" alt="Profile page with photo, name, email, language and the Update Password button" />

## See also

- [Roles](./roles.md)
- [Teams](./teams.md)
- [Companies](../companies/companies.md)
- [Manage users](./manage-users.md)
