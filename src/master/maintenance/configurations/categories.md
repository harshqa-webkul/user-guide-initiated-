# Equipment Categories

An **Equipment Category** is a label you use to group similar pieces of [Equipment](../equipments/equipments.md) together — for example *Computers*, *Vehicles*, *Office Furniture*, or *Heavy Machinery*.
Each category can have a **default responsible technician**, so every new equipment placed in that category automatically inherits the right person to look after it.

**Use Case:**
Create a category for every type of asset you maintain. This makes filtering, reporting, and assigning the right technician much faster.

> **In simple words:** A Category is a *folder* for similar equipment. Put all your laptops in a "Computers" category, all your trucks in a "Vehicles" category, and so on.

## Steps to Create a New Equipment Category

1. Navigate to **`Maintenance → Configurations → Categories`** as shown below:

   <ImagePopup src="/images1/maintenance/category_navigation.png" alt="Equipment Categories Navigation" />

2. Click **New Category** and fill in the following details:

   #### General Information

   - **_Name:_** The name of the category (e.g. `Computers`, `Vehicles`, `Printers`). Must be unique.
   - **_Responsible:_** The default technician who looks after every equipment placed in this category. New equipment will pick this person automatically.
   - **_Company:_** The company the category belongs to (useful in multi-company setups).
   - **_Note:_** A free-text description — anything that helps explain what kind of equipment belongs in this category.

   <ImagePopup src="/images1/maintenance/category_general_section.png" alt="Equipment Category General Section" />

3. **Action Buttons:**

   - **Create** – Save and open the category record.
   - **Create & Create Another** – Save and open a blank form for the next category.
   - **Cancel** – Discard and return to the list.

## Category View Page

After creation, you are redirected to the **Category View Page** which summarizes the general information you saved.

<ImagePopup src="/images1/maintenance/category_view_page.png" alt="Equipment Category View Page" />

You can also:

- **Edit:** Modify any saved field.
- **Delete:** Remove the category. *Note:* deleting a category does not delete the equipment inside it — those records simply lose their category.

## List View — Groups & Actions

The **Categories** list view shows every category with the following columns: **Name**, **Responsible**, **Company**, and **Created At**.

You can:

- **Group by:** Responsible.
- **Search by:** Name.
- **Bulk Actions:** Delete selected categories.

<ImagePopup src="/images1/maintenance/category_list_view.png" alt="Equipment Category List View" />

### Summary

Equipment Categories help you:

- Group similar [Equipment](../equipments/equipments.md) together for easy filtering and reporting.
- Automatically assign the right default technician to every new equipment.
- Keep your equipment list organized as it grows.

> **Next step:** After creating categories, set up your [Maintenance Teams](teams.md) and the [Stages](stages.md) used in maintenance requests.
