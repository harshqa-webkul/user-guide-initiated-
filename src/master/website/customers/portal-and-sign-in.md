# Portal and sign-in

Visitors can create an account on your public site and sign in later. The account is a contact in your partner list. On the admin side you see who has access, and you can grant, change or remove it.

> **In simple words:** Visitors register and sign in on the site. You watch and control access from the contact.

Open `Website → Customers`.

## Settings

Portal actions need the customer portal, which comes with the **Website** plugin. The public pages are always part of the site.

## What a visitor does

All four pages are on the public site. The top bar has **Login** and **Register** links.

### Register

Address: `/register`.

1. Click **Register** in the top bar.
2. Enter **Name**, **Email address**, **Password** and **Confirm password**. All four are required.
3. Click **Create account**.

<!-- TODO-SCREENSHOT: /images1/website/portal_register.png | Public /register page filled for Nina Patel: name, email nina.patel@example.com, password dots -->

The visitor is now a contact. If a visitor already has an account, the **Log in** link opens the sign-in page.

### Login

Address: `/login`.

1. Click **Login** in the top bar.
2. Enter **Email address** and **Password**. Both are required.
3. Tick **Remember me** to stay signed in.
4. Click **Sign in**.

<!-- TODO-SCREENSHOT: /images1/website/portal_login.png | Public /login page with Email address, Password, Forgot password?, Remember me, Sign in and the Create account link -->

If the details are wrong, the page says "These credentials do not match our records." After too many attempts, it asks the visitor to wait.

### Forgot password

1. On the login page, click **Forgot password?**.
2. Enter **Email address**.
3. Click **Send reset link**.

<!-- TODO-SCREENSHOT: /images1/website/portal_forgot.png | Forgot password page with the email field filled and the Send reset link button -->

**Back to login** returns to the sign-in page.

### Reset password

The link in the reset email opens the **Reset password** page.

1. Check **Email address**.
2. Enter **New password** and **Confirm new password**.
3. Click **Reset password**.

<!-- TODO-SCREENSHOT: /images1/website/portal_reset.png | Reset password page with the new password fields filled -->

The link from **Grant Portal Access** works the same way, so a new customer uses it to choose a first password.

## What you see as admin

### Portal Access badge and filter

On `Website → Customers`, a **Portal Access** badge marks contacts that can sign in. Use the **Portal Access** filter to list only those contacts.

### Customer Portal section

Open a customer. The **Customer Portal** section shows:

- **_Portal Access:_** **Granted** or **Not Granted**.
- **_Email Verified At:_** When the contact set a password, or **Never**.
- **_Last Portal Login:_** The last sign-in, or **Never**.

<!-- TODO-SCREENSHOT: /images1/website/portal_status.png | Contact view page of Nina Patel showing the Customer Portal section with Portal Access: Granted -->

A visitor who registered on the site shows as **Granted**. A contact you created in the admin panel shows **Not Granted** until you grant access.

## Manage access

Use the **Portal Access** menu at the top of the contact view or edit page.

<!-- TODO-SCREENSHOT: /images1/website/portal_menu.png | Contact page with the Portal Access menu open showing the four actions -->

| Action | What it does |
| --- | --- |
| **Grant Portal Access** | Sends an email so the contact can set a password. |
| **Change Password** | You set a new password for the contact. |
| **Send Password Reset** | Emails a reset link to the contact. |
| **Revoke Portal Access** | Stops the contact from signing in. |

::: warning
The contact needs an email address, and each address can have portal access only once.
:::

For the steps and messages, see [Portal access](../../general-settings/users/portal-access.md). Vendors use the same portal. See [Vendor portal](../../supply-chain/purchase/orders/vendor-portal.md).

## What the visitor sees

After signing in, the visitor browses the same public site. Pages stay at `/`, `/pages/{slug}` and `/blog`.

## See also

- [Website customers](./customers.md)
- [Customers overview](./index.md)
- [Portal access](../../general-settings/users/portal-access.md)
- [Contacts](../../getting-started/contacts/contacts.md)
