# Contacts

A contact is a person or a company you deal with. Customers, vendors and your own company are all contacts. Aureus keeps each contact once, with its phone, email, tax number and addresses. Other modules, such as Sales and Purchase, pick people from this list.

> **In simple words:** Contacts is your address book. Add a person or a company once and use it everywhere.

Open `Contacts → Contacts`.

::: info Before you start
The Contacts plugin must be installed. See [Plugins](../../general-settings/plugins.md). Create [titles, tags and industries](configurations.md) first if you want to pick them on the form.
:::

## Overview

The page opens on the contact list. Tabs filter it: **Individuals**, **Companies**, **Employees**, **Customers**, **Vendors** and **Archived**. The list shows one card per contact. A card shows the name, the company, the job title, the email, the phone and the tags. Use the search box to find a contact. Group the cards by **Account Type**, **Company**, **Title**, **Job Title** or **Industry**. The filter panel lets you narrow the list by fields such as **Name**, **Email**, **Job Title**, **Website** and **Tax ID**.

Each card has **View**, **Edit** and **Delete**. A clock icon schedules an activity.

## Create a contact

1. Open `Contacts → Contacts` and click **Create Contact**.

<ImagePopup src="/images1/contacts/navigate_create_contact.png" alt="Contacts menu with the Contacts list and the Create Contact button" />

2. Fill in the **General** section.

- **_Individual or Company:_** Choose **Company** for a business. Choose **Individual** for a person. Only a person can belong to a company, so the **Company** field shows for **Individual**.
- **_Name:_** Required. The full name of the person or the business.
- **_Company:_** The business this person works for. Pick one, or create it from the field.
- **_Tax ID:_** The tax number of the contact, for example `29ABCDE1234F1Z5`.
- **_Job Title:_** The role of the person, for example `Purchase Manager`.
- **_Phone_ and _Mobile:_** The office number and the direct number.
- **_Email_ and _Website:_** How to reach the contact.
- **_Title:_** A prefix such as `Dr.` or `Mr.`. See [Configurations](configurations.md).
- **_Tags:_** Labels such as `VIP` or `Supplier`. You can create a tag from the field.
- **_Address:_** Street, city, zip code, state and country.

<ImagePopup src="/images1/contacts/general_contact.png" alt="General section of the contact form with name, tax ID, phone, email, title, tags and address" />

3. Open the **Sales and Purchases** tab if you need it.

- **_Responsible:_** The user who looks after this contact, for example the account manager.
- **_Company ID:_** The registration number of the company, for example `CMP-0042`.
- **_Reference:_** Your own code for the contact, for example the ID in an old system.
- **_Industry:_** The business sector of the contact. See [Configurations](configurations.md).

<ImagePopup src="/images1/contacts/others_contact.png" alt="Sales and Purchases tab with Responsible, Company ID, Reference and Industry" />

4. Click **Create**. Click **Create & create another** to save and open a blank form. Click **Cancel** to leave without saving.

Aureus opens the contact on its **View** page.

<ImagePopup src="/images1/contacts/view_contact.png" alt="View page of a contact with its details and the Contacts and Addresses tabs" />

## Add people to a company

A company often has several people you talk to. Add them to the company contact.

1. Open the company contact. Open its **Contacts** tab.
2. Click **Add Contact**. A window opens with the same fields as the main form.
3. Fill in the person, for example a billing contact, and save.

<ImagePopup src="/images1/contacts/manage_contacts.png" alt="Contacts tab of a company with the Add Contact window" />

## Add an address

A contact can have several addresses, for example one to bill and one to deliver to.

1. Open the contact. Open its **Addresses** tab.
2. Click **Add Address**. The tab is called **Addresses**.
3. Choose the **Types** value: **Permanent**, **Present**, **Invoice**, **Delivery** or **Other**.
4. Fill in the name, email, phone, mobile and the full address. Save.

<ImagePopup src="/images1/contacts/address_tab.png" alt="Addresses tab with the Add Address window and the address type list" />

## Actions and statuses

- **Edit:** opens the same form. Change values and click **Save changes**.
- **Delete:** archives the contact. It moves to the **Archived** tab.
- **Restore:** brings an archived contact back.
- **Force delete:** removes the contact for good. It fails if other records still use the contact.
- **Chatter:** the button on the **View** page. Use it for messages, notes and activities. See [Chatter](../chatter.md).

::: warning
**Force delete** cannot be undone. Use **Delete** if you may need the contact again.
:::

## See also

- [Contacts configurations](configurations.md)
- [Chatter](../chatter.md)
- [Search, filter and group](../search-filter-group.md)
- [Portal access](../../general-settings/users/portal-access.md)
