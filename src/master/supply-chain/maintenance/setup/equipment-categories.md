# Equipment categories

An equipment category groups similar equipment, for example **Packaging Machines**, **IT Equipment** or **Vehicles**. It also names one person who is responsible for that kind of equipment. This saves typing, because the person flows into new requests.

> **In simple words:** A category is a folder for similar machines, with a default person in charge.

Open `Maintenance → Configurations → Categories`.

::: info Prerequisite
The **Responsible** person is a user. Create users first in [Manage users](../../../general-settings/users/manage-users.md). Make the category before you [add equipment](../equipment/add-equipment.md), because equipment picks a category.
:::

## Overview

The list shows **Name**, **Responsible** and **Company**. Use **Group by** to group rows by **Responsible**. Use the search box to find a category by name. Each row has **View**, **Edit** and **Delete** actions.

<ImagePopup src="/images1/maintenance/set_categories_list.png" alt="Equipment Categories list showing Packaging Machines with Responsible Linda Ndlovu beside other categories" />

## Create a category

This example makes **Packaging Machines**, with Linda Ndlovu in charge.

1. Open `Maintenance → Configurations → Categories`.
2. Click **New Category**. A full page opens.
3. Fill in the **General Information** section.

- **_Name:_** Required. Type `Packaging Machines`.
- **_Responsible:_** The person in charge of this kind of equipment. It starts as you. Choose **Linda Ndlovu**.
- **_Company:_** Fills with your company.
- **_Note:_** Optional text for your team, such as where these machines are kept.

<ImagePopup src="/images1/maintenance/set_category_form.png" alt="Create Equipment Category form filled with Packaging Machines and Responsible Linda Ndlovu" />

4. Click **Create**. The notification **Category created** appears with the text "The category has been created successfully." The category opens on its view page.

You can also click **Create & create another** or **Cancel**.

## Why Responsible matters

The **Responsible** person becomes the default technician. When you pick equipment of this category on a request, Aureus fills **Responsible** with the equipment technician. On the equipment form, choosing the category fills **Technician** with this person. If the equipment has none, it uses the category's person. If that is empty too, it uses you.

::: tip
Pick the person who usually leads the repairs. You can still change the responsible person on any single request.
:::

## Edit or delete a category

Click **View** to read a category. Click **Edit** to change fields, then **Save changes**. Click **Delete** to remove it.

::: warning
A category used by equipment is hard to remove. Move the equipment to another category first.
:::

## See also

- [Maintenance teams](maintenance-teams.md)
- [Add equipment](../equipment/add-equipment.md)
- [Create a maintenance request](../requests/create-request.md)
