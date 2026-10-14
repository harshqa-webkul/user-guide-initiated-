# Customers

Website customers are the people who use your public site. Each one is a record in the same contacts list that Contacts uses. The Website app does not keep a second list. It adds a place to see who can sign in, and a sign-in and register page for visitors.

> **In simple words:** A website customer is a contact. Website only adds the sign-in part.

Open `Website → Customers`.

## Website accounts and Contacts

| Question | Answer |
| --- | --- |
| Where is the data stored? | In the contact records, shared with Contacts, Sales, Purchase and Invoices. |
| What happens if I edit a customer here? | The change shows in Contacts and everywhere else. |
| What does Website add? | The **Portal Access** badge and filter, the **Customer Portal** section, and the public **Register** and **Login** pages. |
| Who can sign in? | Only contacts with portal access. |

::: info
Portal actions need the customer portal, which comes with the **Website** plugin. If you do not see the **Portal Access** button, check that the plugin is installed.
:::

## How a customer gets an account

```text
Visitor registers on /register  →  contact is created  →  Portal Access: Granted
Admin creates a contact         →  Portal Access: Not Granted  →  Admin grants access  →  Granted
```

- A visitor who registers on the public site becomes a contact and shows as **Granted**.
- A contact you create in the admin panel cannot sign in until you grant portal access.

## In this section

- [Website customers](./customers.md): the list, tabs, the **Portal Access** badge and filter, the form and the sub pages.
- [Portal and sign-in](./portal-and-sign-in.md): what visitors see on **Register**, **Login** and password pages, and how you manage access.

## See also

- [Contacts](../../getting-started/contacts/contacts.md)
- [Portal access](../../general-settings/users/portal-access.md)
- [Website overview](../index.md)
