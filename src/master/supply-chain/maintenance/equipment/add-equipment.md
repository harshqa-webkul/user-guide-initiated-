# Add equipment

An equipment record describes one machine, tool or device that you maintain. It holds identity details such as model and serial number. It also holds who looks after it and how long you expect it to run between failures. You add equipment once, then raise requests against it whenever it needs attention.

> **In simple words:** Add each thing you maintain here once, with its category, team and technician. After that, requests fill in most details for you.

Path: `Maintenance → Equipment → New Equipment`

<ImagePopup src="/images1/maintenance/eq_menu_new_equipment.png" alt="Equipment menu in the Maintenance top bar with the New Equipment button" />

::: warning Before you start
Create an [equipment category](../setup/equipment-categories.md) and a [maintenance team](../setup/maintenance-teams.md) first. You choose both on this form. If the item comes from a supplier, add the supplier in [Contacts](../../../getting-started/contacts/contacts.md).
:::

## Add the equipment

In this example you add **Hydraulic Press 200T**.

1. Click **Equipment** in the top menu, then click **New Equipment**.

### General Information

2. Fill in the first section.

   - **_Name:_** Required. Type `Hydraulic Press 200T`. This name appears on every request.
   - **_Description:_** Optional. Add a short note about what the equipment does.

   <ImagePopup src="/images1/maintenance/eq_form_general.png" alt="General Information section with the name Hydraulic Press 200T" />

### Product Information

3. Fill in the supplier and product details. All fields are typed, except where noted.

   - **_Vendor:_** The supplier. Pick `Consolidated Components`.
   - **_Vendor Reference:_** The supplier's code for the item. Type `VR-7781`.
   - **_Model:_** Type `HP-200`.
   - **_Serial Number:_** Type `HP-200-2026-001`. Use it to search for the equipment later.
   - **_Effective Date:_** Required. The date shown is today. Hover over the tooltip icon to read: "Used as the starting point for calculating Mean Time Between Failure."

   <ImagePopup src="/images1/maintenance/eq_form_product_tooltip.png" alt="Effective Date field with its tooltip open, explaining the starting point for Mean Time Between Failure" />
   - **_Cost:_** The purchase cost. Type `18500`.
   - **_Warranty Expiration Date:_** Pick `2028-06-30`.

   <ImagePopup src="/images1/maintenance/eq_form_product.png" alt="Product Information section filled with vendor, model, serial number, cost and warranty date" />

### Settings

4. Choose who owns and looks after the equipment.

   - **_Equipment Category:_** Pick `Packaging Machines`. The list shows only categories of the selected company. **Technician** then fills with the category's **Responsible**.
   - **_Maintenance Team:_** Pick `Electrical Maintenance Team`.
   - **_Company:_** Shows your company. If you change it, the category and team are cleared. Choose them again.
   - **_Technician:_** The person who does the repairs. Pick `Linda Ndlovu`. Change it if another person repairs this machine. If you leave it empty, requests use the Responsible of the category.
   - **_Owner:_** The user who uses or is accountable for the equipment, for example `Sales Admin`.
   - **_Used in location:_** Type where it stands, for example `Workshop A`.

   <ImagePopup src="/images1/maintenance/eq_form_settings.png" alt="Settings section with category, team, technician, owner and location filled in" />

::: tip Technician or Owner?
The **Technician** repairs the equipment. The **Owner** uses it. The Owner also decides which list tab shows the item (see [Manage equipment](./manage-equipment.md)).
:::

### Maintenance

5. Fill in the last section.

   - **_Expected Mean Time Between Failure:_** The expected number of days between failures. Type `90`.

   <ImagePopup src="/images1/maintenance/eq_form_maintenance.png" alt="Maintenance section with Expected Mean Time Between Failure set to 90 days" />

6. Click **Create**. The equipment opens on its view page. To add another item straight away, click **Create & create another**. Click **Cancel** to leave without saving.

   <ImagePopup src="/images1/maintenance/eq_form_filled_full.png" alt="Completed Hydraulic Press 200T equipment form before saving" />

## Check the saved record

After you save, the **View** page opens with the same sections in read-only form. Click **Edit** in the header to change any value.

<ImagePopup src="/images1/maintenance/eq_view_page.png" alt="View page of Hydraulic Press 200T showing all sections" />

## Behind the scenes

Cost shows with two decimals on the view page, for example 18,500.00. When you raise a request for this equipment, the category, team, technician and company are copied onto the request. Change them on the equipment once and later requests follow.

## See also

- [Manage equipment](./manage-equipment.md)
- [Equipment categories](../setup/equipment-categories.md)
- [Maintenance teams](../setup/maintenance-teams.md)
- [Create a maintenance request](../requests/create-request.md)
- [Manage users](../../../general-settings/users/manage-users.md)
