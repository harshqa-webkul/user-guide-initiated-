# Portal access

**Portal access** lets a customer sign in to your customer portal. You give access to a single contact. The contact gets an email, sets a password, and can then sign in. You can change the password, send a reset link, or remove the access at any time.

> **In simple words:** Portal access is a key to the customer portal that you hand to one contact at a time.

::: info
Portal access needs the **Website** plugin. If you do not see the **Portal Access** button on a contact, check that the plugin is installed. See [Plugins](../plugins.md).
:::

## Grant portal access

1. Open the contact. See [Contacts](../../getting-started/contacts/contacts.md).
2. Make sure the contact has an email address. Portal access cannot be granted without one.
3. Click the **Portal Access** button at the top of the contact, then click **Grant Portal Access**.
4. Read the message in the window. It names the email address that will get the invitation.
5. Confirm.

The contact receives an email with a link to set a password for the customer portal.

<ImagePopup src="/images1/general-settings/portal_access_menu.png" alt="Contact page with the Portal Access button open showing Grant Portal Access" />

<ImagePopup src="/images1/general-settings/portal_grant_modal.png" alt="Grant Portal Access window with the invitation message" />

::: warning
Each email address can have portal access only once. If another contact with portal access already uses the same email address, Aureus shows **Email address already in use**.
:::

::: tip
If the invitation email cannot be sent, Aureus still grants the access and tells you the email failed. Use **Send Password Reset** to send the link again later.
:::

::: info
A vendor with portal access can sign in and answer the RFQs you send. See [Vendor portal](../../supply-chain/purchase/orders/vendor-portal.md).
:::

## See who has portal access

- In the contact list, a **Portal Access** badge shows on contacts that have access. You can also filter the list by **Portal Access**.
- On the contact page, the **Customer Portal** section shows:
  - **_Portal Access:_** **Granted** or **Not Granted**.
  - **_Email Verified At:_** When the contact set a password, or **Never**.
  - **_Last Portal Login:_** The last time the contact signed in, or **Never**.

<ImagePopup src="/images1/general-settings/portal_status_section.png" alt="Customer Portal section on a contact page" />

## Manage portal access

Open the **Portal Access** button on the contact to use these actions:

- **_Change Password:_** Set a new portal password for the contact. Enter **New Password** and **Confirm New Password**.
- **_Send Password Reset:_** Email a password reset link to the contact.
- **_Revoke Portal Access:_** Stop the contact from signing in. Any reset link that is still waiting stops working.

## See also

- [Contacts](../../getting-started/contacts/contacts.md)
- [Users](./users.md)
- [Vendor portal](../../supply-chain/purchase/orders/vendor-portal.md)
